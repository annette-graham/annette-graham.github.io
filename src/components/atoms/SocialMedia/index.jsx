import React from 'react'
import codepen from '../../../images/codepen.svg'
import email from '../../../images/email.svg'
import instagram from '../../../images/instagram.svg'
import github from '../../../images/github.svg'
import linkedin from '../../../images/linkedin.svg'


const SocialMedia = () => {
    return (
        <div>
            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/annette-graham-b449a115b/' className='anchorLink'>
                <img alt="linkedin icon" src={linkedin} className='image media-image' />
            </a>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/annette-graham' className='anchorLink'>
              <img alt="github icon" src={github} className='image media-image' />
            </a>
            <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/netts_spaghetts/?hl=en' className='anchorLink'>
               <img alt="instagram icon" src={instagram} className='image media-image' />        
            </a>
            <a target='_blank' rel="noopener noreferrer" href='mailto:annettegraham56@gmail.com?subject=Hi%20from%20your%20portfolio!' className='anchorLink'>
              <img alt="email icon" src={email} className='image media-image' />       
            </a>
            <a target='_blank' rel="noopener noreferrer" href='https://codepen.io/annette-graham' className='anchorLink'>
               <img alt="codepen icon" src={codepen} className='image media-image' />
            </a>            
        </div>
    )
}


export default SocialMedia