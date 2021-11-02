import React from 'react'
import HeaderNavLoggedOut from '../Components/HeaderNavLoggedOut'
import BottomNavLoggedOut from '../Components/BottomNavLoggedOut'
import LoginMainSection from '../Components/LoginMainSection'

function Login() {
    return (
        <>
            <HeaderNavLoggedOut />
            <LoginMainSection />
            <BottomNavLoggedOut />
        </>
    )
}

export default Login
