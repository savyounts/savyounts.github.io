import React from 'react'
import Button from './button'
import BlogStyles from '../components/project.module.css'

export default(props) => (
  <section>
  <p>{props.date}</p>
  <h2>{props.title}</h2>
  <p> I was recently working on a project where something pretty big was pointed out to me, querying straight from your database is MUCH faster than using Ruby to make the same calculations. Before, when I was grabbing or manipulating information from my database, I was using methods like</p>
  <Button href={props.href} text={props.text}/>
  <div className={BlogStyles.line}></div>

  </section>
)
