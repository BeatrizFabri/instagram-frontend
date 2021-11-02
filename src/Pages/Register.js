import React from 'react'
import RegisterMainSection from '../Components/RegisterMainSection'
import BottomNavLoggedOut from '../Components/BottomNavLoggedOut'
import HeaderNavLoggedOut from '../Components/HeaderNavLoggedOut'

function Register() {
    return (
        <>
            <HeaderNavLoggedOut />
            <RegisterMainSection />
            <BottomNavLoggedOut />
        </>

    )
}

export default Register
