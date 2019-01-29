import React from 'react'
import Header from './header'
import Container from './container'


export default({children}) => (
  <div style={{ backgroundColor: 'white', height: '100%' }}>
      <Header />
      {children}
  </div>
)
