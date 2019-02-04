import React from 'react'
import {Link} from 'gatsby'
import logo from '../images/logo-white.png'
import Social from './social'
import Nav from './nav'


export default() => (
  <header style={headerStyles}>

    <Link to='/' style={{textDecoration:'none'}}>
      <img src={logo} alt="Sav Younts Logo" style={{width: '3rem'}}/>
    </Link>

    <Nav/>
    <Social />
  </header>

)


const headerStyles ={
  backgroundColor:'black',
  marginBottom: '2rem',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}
