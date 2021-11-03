import React, { useEffect, useState } from 'react'
import api from '../Services/api'

import FeedCard from '../Components/FeedCard'

function FeedContainer() {
    const [allPosts, setAllPosts] = useState([])

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
            {allPosts.map(post => (
                <FeedCard key={post._id}/>
            ))}
        </>
    )
}

export default FeedContainer
