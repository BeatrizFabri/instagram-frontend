import React from 'react'

function InputStandard({ title, type }) {
    return (
        <div className='input-field'>
            <label for={title}>{title}</label>
            <input id={title} type={type} placeholder={ `Preencha o campo ${title.toLowerCase()}`} />
        </div>
    )
}

export default InputStandard
