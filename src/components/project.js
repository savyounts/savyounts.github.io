import React from 'react'
import Button from './button'
import projectStyles from './project.module.css'


export default(props) => (
  <div>

    <section className={projectStyles.projectDiv}>

      <div style ={{ padding:'0 2rem'}}>
        <h1>{props.title}</h1>
        <h4>{props.type}</h4>
        <p>
          ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magn
        </p>
      </div>

      <img src={props.img} alt="project" className={projectStyles.imgStyle} />
    </section>

    <Button href={props.href} text={props.text}/>

    <div className={projectStyles.line}></div>

  </div>
)
