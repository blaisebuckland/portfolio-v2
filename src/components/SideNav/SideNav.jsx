import React from 'react';
import styles from './SideNav.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import cv from '../../assets/Blaise-Buckland-CV.pdf'

const SideNav = () => {
  return (
    <section className={styles.sideNavContainer}>
      <a href="https://github.com/blaisebuckland" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithubSquare} className={styles.icon}/></a>
      <a href={cv} className={styles.cv} target="_blank" rel="noreferrer">CV</a>
      <a href="https://www.linkedin.com/in/blaise-buckland-578595131/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className={styles.icon}/></a>
    </section>
  )
}

export default SideNav