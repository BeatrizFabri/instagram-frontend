import React from 'react'
import HeroImg from '../Assets/hero-img.png'

function LoginMainSection() {
    return (
        <main>
            <div className='form-login-register'>
                <img src={HeroImg} alt='Logo do Instagram' />
                <form>
                    <h1>Log In</h1>
                    <fieldset>
                        <div className='input-field'>
                            <label for='user'>Usuário</label>
                            <input id='user' type='text' placeholder='Digite seu email' />
                        </div>
                        <div className='input-field'>
                            <label for='password'>Senha</label>
                            <input id='password' type='password' placeholder='Senha' />
                        </div>
                    </fieldset>
                    <button>Entrar</button>
                </form>
            </div>
        </main>
    )
}


export default LoginMainSection
