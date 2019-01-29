import React from 'react'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

export default() => (
  <div>
    <a href={'https://github.com/savyounts'}>
      <img src={github} alt='github'/>
    </a>
    <a href='https://linkedin.com/in/savyounts' style={{paddingLeft: '.5rem'}}>
      <img src={linkedin} alt='linkedin'/>
    </a>
  </div>
)
