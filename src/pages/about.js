import React from 'react'
import Layout from '../components/layout'
import me from '../images/me.jpg'
import Container from '../components/container'

export default() => (
    <Layout>
        <h1 style={{marginLeft: '21%'}}>They call me Sav... </h1>
          <Container>
              <p style={{paddingRight:'1rem'}}>
                My name is Savannah Younts, I am a Full Stack Web Developer based in Denver, CO. I graduated from Clemson University in 2015 with a bachelor's degree in Graphic Communications and graduated from Flatiron School's Full Stack Web Developer program in 2018.
                <br></br><br></br>
                Creating is what I was made to do, it's what brings me the most joy. After spending the first several years of my career in the design field and seeing the overlap it has with development, I decided that was the path I wanted focus my career. Currently, am a Web Developer at Digital Bureau where I specialize in React Native and WordPress development.
                <br></br><br></br>
                When not online, you'll find me at a park, in the mountains, pretending to be good at woodworking, or possibly on a plane to some new destination waiting to be explored. 
              </p>
            <img src={me} alt='Savannah' style={{width:'50% !important', marginTop:'0', padding:'0 1rem'}}/>
          </Container>
    </Layout>
)
