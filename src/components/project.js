import React from 'react'
import Button from './button'
import projectStyles from './project.module.css'
import project from '../images/Tempus.png'


export default(props) => (
  <div>

    <section className={projectStyles.projectDiv}>

      <div style ={{ padding:'0 2rem'}}>
        <h1>{props.title}</h1>
        <h4>{props.type}</h4>
        <p>
          {props.excerpt}
        </p>
      </div>

      <img src={props.img} alt="project" className={projectStyles.imgStyle} />
    </section>

    <Button href={props.href} text={props.buttonText}/>

    <div className={projectStyles.line}></div>

  </div>
)
