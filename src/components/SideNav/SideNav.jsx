import React from 'react';
import styles from './SideNav.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const SideNav = () => {
  return (
    <section className={styles.sideNavContainer}>
      <a href="https://github.com/blaisebuckland"><FontAwesomeIcon icon={faGithubSquare} className={styles.icon}/></a>
      <a href="https://resume.io/r/qC1uFVV0u" className={styles.cv}>CV</a>
      <a href="https://www.linkedin.com/in/blaise-buckland-578595131/"><FontAwesomeIcon icon={faLinkedin} className={styles.icon}/></a>
    </section>
  )
}

export default SideNav