import React from 'react';
import styles from './CardFront.module.scss'

const CardFront = (props) => {

  const { name, description, image, github, url, technologies } = props.project;

  return (
    <div className={styles.cardFront}>
        <img src={image} alt={name} className={styles.projectImg}/>
    </div>
  )
}

export default CardFront;