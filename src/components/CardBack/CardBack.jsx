import React from 'react'
import styles from './CardBack.module.scss'

const CardBack = (props) => {

  const { name, description, image, github, url, technologies } = props.project;

  return (
    <div className={styles.cardBack}>
      <p>{description}</p>
      <div className={styles.projectLinkContainer}>
        <a href={url} target="_blank" rel="noreferrer" className={styles.projectLink}>Preview</a>
        <a href={github} target="_blank" rel="noreferrer" className={styles.projectLink}>GitHub</a>
      </div>
    </div>
  )
}

export default CardBack