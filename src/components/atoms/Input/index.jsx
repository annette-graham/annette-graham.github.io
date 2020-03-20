import React from 'react'

const Input = ({
    label, 
    name,
    onChange,
    placeholder,
    tag,
    type,
    value
}) => {

    const Tag = tag

    return (
        <div className='field'>
            <label classname='form-label'>{label}</label>
            <Tag 
                className='form-input'
                type={type}
                name={name} 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div> 

    )
}

export default Input