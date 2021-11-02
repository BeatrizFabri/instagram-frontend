import React from 'react'
import RegisterMainSection from '../Components/RegisterMainSection'
import HeaderNavLoggedOut from '../Components/HeaderNavLoggedOut'
import BottomNavLoggedOutLogin from '../Components/BottomNavLoggedOutLogin'

function Register() {
    return (
        <>
            <HeaderNavLoggedOut />
            <RegisterMainSection />
            <BottomNavLoggedOutLogin />
        </>

    )
}

export default Register

