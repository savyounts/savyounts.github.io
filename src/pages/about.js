import React from 'react'
import Layout from '../components/layout'
import me from '../images/me.jpg'
import Container from '../components/container'

export default() => (
    <Layout>
        <h1 style={{marginLeft: '11%'}}>They call me Sav... </h1>
          <Container>
            <div style={{paddingRight:'1rem'}}>
              <p>
                My name is Savannah Younts, I am a Full Stack Web Developer based in Denver, CO. I graduated from Clemson University in 2015 with a bachelor's degree in Graphic Communications and graduated from Flatiron School's Full Stack Web Developer program in 2018.
              </p>
              <p>
                I have a dream of traveling the world and make a point to do it as much as I can. That being said, I am not afraid to move to new places and meet new people. I have many different hobbies, such as dancing, painting, and athletics and I love to try new things. I believe that trying and learning new things has helped make me a versatile worker and quick learner. Every day is an opportunity to be better than I was yesterday.
              </p>
              <p>
                Living a healthy lifestyle is very important to me, so I stay active by playing several sports at varying levels as well as incorporate other workouts during the off seasons. My love for being active and love of the outdoors that has fueled my passion to design within the sports/outdoors industry. I do my best to stand out and be a little different from everyone around me; to me, normal is boring, so we should each embrace who we really are. With that, I plan to keep doing what I'm doing; learning new skills, exploring new places and always looking for something new to make me better and keep life interesting.
              </p>
            </div>
            <img src={me} atl='Savannah' style={{width:'50%', padding:'0 1rem'}}/>
          </Container>
    </Layout>
)
