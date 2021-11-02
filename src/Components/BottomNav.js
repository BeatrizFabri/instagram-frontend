import React from 'react'

import { MdOutlineExplore, MdOutlineAddAPhoto } from 'react-icons/md'
import { FiUser } from 'react-icons/fi'
import { GrHomeRounded } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function BottomNav() {
    return (
        <footer>
            <nav>
                <Link to='/feed'>
                    <GrHomeRounded size={20} />
                </Link>
                <Link to='/explorar'>
                    <MdOutlineExplore size={23}/>
                </Link>
                <Link to='/post'>
                    <MdOutlineAddAPhoto size={20}/>
                </Link>
                <Link to='/profile'>
                    <FiUser size={20}/>
                </Link>
            </nav>
        </footer>
    )
}

export default BottomNav
