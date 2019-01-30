import React from 'react'
import Layout from '../components/layout'
import me from '../images/me.jpg'
import Container from '../components/container'
import ContactForm from '../components/contact-form'

export default() => (
    <Layout>
      <div style={divStyles}>
        <h1>Contact.</h1>
        <h3 style={{fontStyle:'italic', color:'teal'}}>Tell me about your project or just say hello</h3>
        <ContactForm />
      </div>
    </Layout>
)

const divStyles = {
  width: '80%',
  margin: 'auto'
}
