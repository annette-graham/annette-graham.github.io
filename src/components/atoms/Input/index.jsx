import React from 'react'

const Input = ({
    label, 
    name,
    tag,
    placeholder
}) => {

    const Tag = tag

    return (
        <div className='field'>
            <label classname='form-label'>{label}</label>
            <Tag 
                className='form-input'
                type="text"
                name={name} 
                placeholder={placeholder}
            />
        </div>

    )
}

export default Input