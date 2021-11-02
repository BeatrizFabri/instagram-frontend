import React from 'react'
import { Link } from 'react-router-dom'

function BottomNavLoggedOut() {
    return (
        <footer>
            <nav>
                <div>
                    <p>Não tem uma conta?</p>
                    <Link to='/register'>Cadastre-se</Link>
                </div>
            </nav>
        </footer>
    )
}

export default BottomNavLoggedOut
