import React, { useEffect, useState } from 'react'
import api from '../Services/api'

import FeedCard from '../Components/FeedCard'

function FeedContainer() {
    const [allPosts, setAllPosts] = useState(null)
    console.log(allPosts)

    useEffect(() => {
        async function getAllPosts() {
            try {
                const loadedPosts = await api.get('posts')
                const { data } = loadedPosts
                setAllPosts(data.data)
            } catch (err) {
                alert('Não foi possível carregar os posts')
            }
        }
        getAllPosts()
    }, [])

    return (
        <>
            {allPosts === null && <h1 className='loading-message'>Carregando...</h1>}
            {allPosts && allPosts.map(post => (
                <FeedCard
                    key={post._id}
                    picture={post.picture}
                    description={post.description}
                    likes={post.likes}
                    user={post.user}
                />
            ))}
        </>
    )
}

export default FeedContainer
