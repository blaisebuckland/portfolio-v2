import React from 'react';
import styles from './Projects.module.scss';
import Card from '../Card';

import { projectData } from '../../data/projectData';

const Projects = () => {

  const renderCard = (project) => {
    return <Card project={project} key={project.name}/>
  }

  return (
    <>
    <section className={styles.projectsContainer} id="projects">
      <h2 className={styles.heading}>Check out my recent projects</h2>
      <div className={styles.cardsContainer}>
      {projectData.map((project) => {
        return renderCard(project)
      })}
      </div>
    </section>
    </>
  )
}

export default Projects;