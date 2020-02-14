import React from 'react'

import Input from '../../atoms/Input'

const Form = () => {

    return (
        <div className='contact-form'>
          <Input
            tag="input"
            label="Name"
            name="Name"
            placeholder="Your name"
          />
          <Input
            tag="input"
            label="Email"
            name="Email"
            placeholder="example@email.com"
          />
          <Input
            tag="textarea"
            label="Message"
            name="Message"
            placeholder="Hey Annette, let's work together!"
          />
        </div>
    )
}

export default Form