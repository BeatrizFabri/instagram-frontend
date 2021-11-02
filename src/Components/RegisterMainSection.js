import React from 'react'

import InputStandard from '../Components/InputStandard'

import HeroImg from '../Assets/hero-img.png'

function RegisterMainSection() {
    let show = 1;
    console.log(show)

    function loadSecondPage(e) {
        e.preventDefault()
        show = 2
    }

    return (
        <main>
            <div className='form-login-register'>
                <img src={HeroImg} alt='Logo do Instagram' />
                <form>
                    <h1>Cadastrar-se</h1>
                    {show === 1?
                        <fieldset>
                            <InputStandard title='Usuário' type='text' />
                            <InputStandard title='Senha' type='password' />
                            <InputStandard title='Nome' type='textarea' />
                        </fieldset> :
                        <fieldset>
                            <InputStandard title='Descrição' type='text' />
                            <InputStandard title='Site' type='password' />
                            <InputStandard title='Foto de Perfil' type='textarea' />
                        </fieldset>}
                    <div className='form-navigation'>
                        <button>1</button>
                        <button onClick={loadSecondPage}>2</button>
                        <button>Finalizar</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default RegisterMainSection


