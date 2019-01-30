import React from 'react'

export default(props) => (
  <a style={buttonStyles} href={props.href}>{props.text}</a>
)

const buttonStyles = {
  margin: 'auto',
  backgroundColor: 'black',
  color: 'white',
  borderRadius: '25px',
  display: 'block',
  width: '20%',
  padding: '.5em',
  textAlign: 'center',
  textDecoration: 'none'
}
