import React from 'react';
import styles from './Card.module.scss'

const Card = (props) => {

    const { name, description, image, github, url, technologies } = props.project;
console.log(image)

  return (
    <div className={styles.card}>
        <img src={image} alt={name} className={styles.projectImg}/>
        <h3 className={styles.projectHeading}>{name}</h3>
        <ul>
            {
                technologies.map((technology) => <li className={styles.technologies} key={technology}>{technology}</li>)
            }
        </ul>
    </div>
  )
}

export default Card;