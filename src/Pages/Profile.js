import React from 'react'
import BottomNav from '../Components/BottomNav'
import ProfileContainer from '../Components/ProfileContainer'
import HeaderNav from '../Components/HeaderNav'

function Profile({ cleanUserId }) {
    return (
        <>
            <HeaderNav cleanUserId={cleanUserId} />
            <ProfileContainer />
            <BottomNav />
        </>
    )
}

export default Profile
