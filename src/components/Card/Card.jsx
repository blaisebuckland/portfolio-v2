import React, { useState } from 'react';
import CardBack from '../CardBack/CardBack';
import CardFront from '../CardFront/CardFront';
import styles from './Card.module.scss';

const Card = (props) => {

  const { project } = props;

  const [isFaceDown, setIsFaceDown] = useState(false)

  const flipStyles = isFaceDown ? styles.faceDown : "";
  return (
    <section className={`${styles.card} ${flipStyles}`} onClick={() => setIsFaceDown(!isFaceDown)}>
      <div className={styles.front}>
        <CardFront project={project} />
      </div>
      <div className={styles.back}>
        <CardBack project={project} />
      </div>
    </section>
  )
}

export default Card