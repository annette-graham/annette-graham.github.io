import React from 'react'
import sloth from '../../../images/reading-sloth2.png'

import Input from '../../atoms/Input'

class Form extends React.Component {
  state = {
    name: '',
    email: '',
    message: ''
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault()
    alert(`Submitted: ${this.state}`)
    // mailTo()
  }

  render() {

    return (
        <div className='contact-form'>
          <form name="contact" method="POST" data-netlify="true" onSubmit={e => this.handleSubmit(e)}>
            <div className='input-group'> 
               <Input
                tag="input"
                label="Name"
                name="Name"
                placeholder="What's yo name fool?"
                onChange={e => this.handleChange(e)}
              />
              <Input
                label="Email"
                name="Email"
                placeholder="example@email.com"
                tag="input"
                type='email'
                onChange={e => this.handleChange(e)}
              />
              <Input
                label="Message"
                name="Message"
                placeholder="Omg Annette U da sh!t. We must hire you. I'll pay you £100k"
                tag="textarea"
                type='textarea'
                onChange={e => this.handleChange(e)}
              />
              <Input
                name="Submit"
                tag="input"
                type='submit'
              />
            </div>
          </form>
          <img alt="Sloth reading a piece of paper" src={sloth} className='form-image' />
        </div>
    )
  }
}

export default Form