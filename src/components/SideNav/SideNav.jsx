import React from 'react';
import styles from './SideNav.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const SideNav = () => {
  return (
    <section className={styles.sideNavContainer}>
        <FontAwesomeIcon icon={faGithubSquare} className={styles.icon}/>
        <a href="https://resume.io/r/qC1uFVV0u" className={styles.cv}>CV</a>
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon}/>
    </section>
  )
}

export default SideNav