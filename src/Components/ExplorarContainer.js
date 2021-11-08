import React, { useEffect, useState } from 'react'
import api from '../Services/api'

import ExplorarCard from '../Components/ExplorarCard'

function ExplorarContainer() {
    const [allPosts, setAllPosts] = useState(null)
    const [postInteraction, setPostnteraction] = useState(false)

    function interaction() {
        setPostnteraction(!postInteraction)
        console.log(postInteraction)
    }

    useEffect(() => {
        async function getAllPosts() {
            try {
                const loadedPosts = await api.get('posts')
                const { data } = loadedPosts
                setAllPosts(data.data.reverse())
            } catch (err) {
                alert('Não foi possível carregar os posts')
            }
        }
        getAllPosts()
    }, [postInteraction])

    return (
        <>
        <div className='explorar-container'>
            {allPosts === null && <h1 className='loading-message'>Carregando...</h1>}
            {allPosts && allPosts.map(post => (
                <ExplorarCard
                    key={post._id}
                    id={post._id}
                    picture={post.picture}
                    description={post.description}
                    likes={post.likes}
                    user={post.user}
                    interaction={interaction}
                />
            ))}
        </div>
        </>
    )
}

export default ExplorarContainer
