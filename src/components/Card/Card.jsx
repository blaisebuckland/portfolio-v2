import React, { useState } from 'react';
import CardBack from '../CardBack/CardBack';
import CardFront from '../CardFront/CardFront';
import styles from './Card.module.scss';

const Card = (props) => {

  const { project } = props;

  const [isFaceDown, setIsFaceDown] = useState(false)

  const flipStyles = isFaceDown ? styles.faceDown : "";
  return (
    <section className={styles.cardAndInfoContainer}>
      <div className={`${styles.card} ${flipStyles}`} onClick={() => setIsFaceDown(!isFaceDown)}>
        <div className={styles.front}>
          <CardFront project={project} />
        </div>
        <div className={styles.back}>
          <CardBack project={project} />
        </div>
      </div>
      <div>
        <h3 className={styles.projectHeading}>{project.name}</h3>
        <ul className={styles.technologyList}>
                {
                    project.technologies.map((technology) => <li className={styles.technologies} key={technology}>{technology}</li>)
                }
            </ul>  
      </div>
    </section>
  )
}

export default Card