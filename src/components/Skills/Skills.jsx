import React from 'react';
import styles from './Skills.module.scss';

import { skillsArr } from '../../data/skillsData';

const Skills = () => {
  return (
    <>
    <section className={styles.skillsContainer}>
      <h2>Skills</h2>
      <p>Below are some of the technologies I have worked with so far.</p>
      <ul className={styles.list}>
        {skillsArr.map((skill) => <li key={skill.name} className={styles.listItem}> <span className={styles.skillsIcon}>{skill.icon}</span> {skill.name}</li> )}
      </ul>
    </section>

    </>
  )
}

export default Skills;