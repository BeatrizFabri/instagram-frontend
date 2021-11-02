import React from 'react'
import { Link } from 'react-router-dom'
import { MdExitToApp} from 'react-icons/md'

import LogoInstagram from '../Assets/instagram-logo.png'


function HeaderNav() {
    return (
        <header>
            <nav>
                <img src={LogoInstagram} alt='Logo do Instagram' />
                <Link to='/'>
                    <MdExitToApp size={25} />
                </Link>
            </nav>
        </header>
    )
}

export default HeaderNav
