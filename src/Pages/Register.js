import React from 'react'
import RegisterMainSection from '../Components/RegisterMainSection'
import HeaderNavLoggedOut from '../Components/HeaderNavLoggedOut'
import BottomNavLoggedOutLogin from '../Components/BottomNavLoggedOutLogin'

function Register({ updateUserId }) {
    return (
        <>
            <HeaderNavLoggedOut />
            <RegisterMainSection updateUserId={updateUserId}/>
            <BottomNavLoggedOutLogin />
        </>

    )
}

export default Register

