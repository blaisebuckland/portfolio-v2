import React from 'react'
import styles from './CardBack.module.scss'

const CardBack = (props) => {

  const { name, description, image, github, url, technologies } = props.project;

  return (
    <div className={styles.cardBack}>
      <div className={styles.textContainer}>
      <p>{description}</p>
          <ul>
              {
                  technologies.map((technology) => <li className={styles.technologies} key={technology}>{technology}</li>)
              }
          </ul>  
      </div>
      <h3 className={styles.projectHeading}>{name}</h3>
    </div>
  )
}

export default CardBack