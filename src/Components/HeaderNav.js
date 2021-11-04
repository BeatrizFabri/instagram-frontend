import React from 'react'
import { useHistory } from 'react-router-dom'
import { MdExitToApp } from 'react-icons/md'

import LogoInstagram from '../Assets/instagram-logo.png'

function HeaderNav({ cleanUserId }) {

    function logoutHandler() {
        cleanUserId()
        localStorage.clear()
    }

    return (
        <header>
            <nav>
                <img src={LogoInstagram} alt='Logo do Instagram' />
                <MdExitToApp size={25} onClick={logoutHandler} />
            </nav>
        </header>
    )
}

export default HeaderNav
