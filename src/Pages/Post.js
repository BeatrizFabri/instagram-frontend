import React from 'react'
import HeaderNav from '../Components/HeaderNav'
import BottomNav from '../Components/BottomNav'

function Post({ cleanUserId }) {
    return (
        <>
            <HeaderNav cleanUserId={cleanUserId}/>
            <BottomNav />
        </>
    )
}

export default Post
