import React from 'react'
import sloth from '../../../images/reading-sloth2.png'

import Input from '../../atoms/Input'

const Form = () => {

    return (
        <div className='contact-form'>
          <div className='input-group'>
            <Input
              tag="input"
              label="Name"
              name="Name"
              placeholder="What's yo name fool?"
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
              placeholder="Omg Annette U da sh!t. We must hire you. I'll pay you £100k"
            />
          </div>
          <img alt="Sloth reading a piece of paper" src={sloth} className='form-image' />
        </div>
    )
}

export default Form