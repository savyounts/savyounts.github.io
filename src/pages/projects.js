import React from 'react'
import Layout from '../components/layout'
import computer from '../images/computer.png'
import Project from '../components/project'

export default()=> (
  <Layout>
    <div style={masterDiv}>

      <Project title="Tempus Forge Website" type="Design | Development" img={computer} href="#" text="Launch"/>
      <Project title="Tempus Forge Website" type="Design | Development" img={computer} href="#" text="Demo"/>
      <Project title="Tempus Forge Website" type="Design | Development" img={computer} href="#" text="More"/>

    </div>

  </Layout>
)

const masterDiv ={
  display: 'flex',
  flexDirection: 'column',
  width: '70%',
  margin: '2rem auto'
}
