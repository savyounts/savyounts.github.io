import React from 'react'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import email from '../images/email.png'

export default() => (
  <div>
    <a href={'mailto:savyounts@gmail.com'}>
      <img src={email} alt='savyounts@gmail.com'/>
    </a>
    <a href={'https://github.com/savyounts'} style={{paddingLeft: '.5rem'}}>
      <img src={github} alt='github'/>
    </a>
    <a href={'https://linkedin.com/in/savyounts'} style={{paddingLeft: '.5rem'}}>
      <img src={linkedin} alt='linkedin'/>
    </a>
  </div>
)
