import React from 'react';
import styles from './Projects.module.scss';
import Card from '../Card';

import { projectData } from '../../projectData';

const Projects = () => {

  const renderCard = (project) => {
    return <Card project={project} key={project.name}/>
  }

  return (
    <>
    <h2>Check out my recent projects</h2>
    <section className={styles.projectsContainer}>
    {projectData.map((project) => {
      return renderCard(project)
    })}
    </section>
    </>
  )
}

export default Projects;