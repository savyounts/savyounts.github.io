import React from 'react'
import Button from './button'
import BlogStyles from '../components/project.module.css'

export default(props) => (
  <section>
  <p>{props.date}</p>
  <h2>{props.title}</h2>
  <p>{props.excerpt}</p>
  <Button href={props.href} text={props.text}/>
  <div className={BlogStyles.line}></div>

  </section>
)
