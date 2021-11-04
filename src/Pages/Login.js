import React from 'react'
import HeaderNavLoggedOut from '../Components/HeaderNavLoggedOut'
import BottomNavLoggedOut from '../Components/BottomNavLoggedOut'
import LoginMainSection from '../Components/LoginMainSection'

function Login({ updateUserId }) {
    return (
        <>
            <HeaderNavLoggedOut />
            <LoginMainSection updateUserId={ updateUserId }/>
            <BottomNavLoggedOut />
        </>
    )
}

export default Login
