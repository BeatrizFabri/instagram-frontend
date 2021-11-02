import React from 'react'
import { Link } from 'react-router-dom'

function BottomNavLoggedOutLogin() {
    return (
        <footer>
        <nav>
            <div>
                <p>Tem uma conta?</p>
                <Link to='/'>Conecte-se</Link>
            </div>
        </nav>
    </footer>
    )
}

export default BottomNavLoggedOutLogin
