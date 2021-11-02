import React, { useState } from 'react'

import InputStandard from '../Components/InputStandard'

import HeroImg from '../Assets/hero-img.png'

function LoginMainSection() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <main>
            <div className='form-login-register'>
                <img src={HeroImg} alt='Logo do Instagram' />
                <form>
                    <h1>Log In</h1>
                    <fieldset>
                        <InputStandard
                            title='Usuário'
                            type='text'
                            state={username}
                            setState={e => setUsername(e.target.value)}
                        />
                        <InputStandard
                            title='Senha'
                            type='password'
                            state={password}
                            setState={e => setPassword(e.target.value)}
                        />
                    </fieldset>
                    <button>Entrar</button>
                </form>
            </div>
        </main>
    )
}


export default LoginMainSection
