import React from "react"
import Background from '../images/dark-bkg.jpg'
import Header from '../components/header'


export default () => (
  <div>
    <Header />
    
    <div style={divStyles}>
        <h1 style={h1Styles}>Sav Younts</h1>
        <p style={pStyles}>
          DESIGNER/DEVELOPER
        </p>
    </div>


  </div>
)

const divStyles = {
  position:'fixed',
  top: '35%',
  width: '100%',
  textAlign: 'center'
}

const h1Styles ={
  fontSize: '4rem',
  color: 'white',
  marginTop: '2%',
  marginLeft: '3%',
  textShadow: '-4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 4px 4px 0 #000'
}

const pStyles= {
  color: 'white',
  marginLeft: '3%',
  textShadow: '-4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 4px 4px 0 #000'
}
