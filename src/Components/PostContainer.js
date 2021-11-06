import React from 'react'

import InputStandard from '../Components/InputStandard'

function PostContainer() {
    return (
        <main className='post-container'>
            <img src='https://images.unsplash.com/photo-1595901688281-9cef114adb0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGltZXMlMjBzcXVhcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' alt='' />
            <form>
                <h1>Postar nova foto</h1>
                <fieldset>
                    <InputStandard
                        title='Usuário'
                        type='text'
                        state=''
                        setState={() => { }}
                    />
                </fieldset>
                <button>Postar foto</button>
            </form>
        </main>
    )
}

export default PostContainer
