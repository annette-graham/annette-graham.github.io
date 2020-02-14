import React from 'react'

const Input = ({
    label, 
    name,
    tag,
    placeholder
}) => {

    const Tag = tag

    return (
        <div>
            <label>{label}</label>
            <Tag 
                type="text"
                name={name} 
                placeholder={placeholder}
            />
        </div>

    )
}

export default Input