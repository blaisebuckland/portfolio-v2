import React from 'react';
import styles from './Skills.module.scss';

import { skillsArr } from '../../data/skillsData';

const Skills = () => {
  return (
    <>
    <section className={styles.skillsContainer}>
      <h2>Skills</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident facilis possimus mollitia officia? Animi veritatis quaerat repellat voluptates debitis!</p>
      <ul className={styles.list}>
        {skillsArr.map((skill) => <li key={skill.name} className={styles.listItem}> <span className={styles.skillsIcon}>{skill.icon}</span> {skill.name}</li> )}
      </ul>
    </section>

    </>
  )
}

export default Skills;