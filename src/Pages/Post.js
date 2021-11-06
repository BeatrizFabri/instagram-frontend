import React from 'react'
import HeaderNav from '../Components/HeaderNav'
import PostContainer from '../Components/PostContainer'
import BottomNav from '../Components/BottomNav'

function Post({ cleanUserId }) {
    return (
        <>
            <HeaderNav cleanUserId={cleanUserId}/>
            <PostContainer />
            <BottomNav />
        </>
    )
}

export default Post
