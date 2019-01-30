import React from 'react'
import {Link} from 'gatsby'
import logo from '../images/logo-white.png'



export default() => (
    <div>
      <ListLink to='/about'>about</ListLink>
      <ListLink to='/projects'>projects</ListLink>
      <ListLink to='/blog'>blog</ListLink>
    </div>

)


const ListLink = (props) => (
  <Link to={props.to} style={{textDecoration:'none', color:'white', padding: '0 2em'}}>{props.children} </Link>
)
