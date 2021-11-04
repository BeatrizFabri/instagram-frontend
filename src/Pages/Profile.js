import React from 'react'
import BottomNav from '../Components/BottomNav'
import HeaderNav from '../Components/HeaderNav'

function Profile({ cleanUserId }) {
    return (
        <>
            <HeaderNav cleanUserId={cleanUserId} />
            <BottomNav />
        </>
    )
}

export default Profile
