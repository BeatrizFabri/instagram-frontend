import React, { useState } from 'react'

import InputStandard from '../Components/InputStandard'

import HeroImg from '../Assets/hero-img.png'

function RegisterMainSection() {
    const [show, setShow] = useState(1)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [site, setSite] = useState('')
    const [avatar, setAvatar] = useState('')

    function loadFirstPage(e) {
        e.preventDefault()
        setShow(1)
    }

    function loadSecondPage(e) {
        e.preventDefault()
        setShow(2)
    }

    return (
        <main>
            <div className='form-login-register'>
                <img src={HeroImg} alt='Logo do Instagram' />
                <form>
                    <h1>Cadastrar-se</h1>
                    {show === 1 ?
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
                            <InputStandard
                                title='Nome'
                                type='textarea'
                                state={name}
                                setState={e => setName(e.target.value)}
                            />
                        </fieldset> :
                        <fieldset>
                            <InputStandard
                                title='Descrição'
                                type='text'
                                state={description}
                                setState={e => setDescription(e.target.value)}
                            />
                            <InputStandard
                                title='Site'
                                type='text'
                                state={site}
                                setState={e => setSite(e.target.value)}
                            />
                            <InputStandard
                                title='Foto de Perfil'
                                type='textarea'
                                state={avatar}
                                setState={e => setAvatar(e.target.value)}
                            />
                        </fieldset>}
                    <div className='form-navigation'>
                        {show === 1 ?
                            <>
                                <button
                                    style={{ background: '#87CEFA' }}
                                    onClick={loadFirstPage}
                                >1</button>
                                <button
                                    onClick={loadSecondPage}
                                >2</button>
                            </> :
                            <>
                                <button
                                    onClick={loadFirstPage}
                                >1</button>
                                <button
                                    style={{ background: '#87CEFA' }}
                                    onClick={loadSecondPage}
                                >2</button>
                            </>
                        }
                        {avatar && site && description && username && name && password && <button  style={{ background: '#0095f6' }}>Finalizar</button>}
                    </div>
                </form>
            </div>
        </main>
    )
}

export default RegisterMainSection


