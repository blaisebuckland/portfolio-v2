import React from 'react';
import { Link} from "react-scroll";
import styles from './Contact.module.scss';

import profile from '../../assets/profile.jpg'
import cv from '../../assets/Blaise-Buckland-CV.pdf'

const Contact= () => {
  return (
    <>
    <section className={styles.footerContainer} id="contact">
      <h2 className={styles.heading}>Let's <span className={styles.headingStylised}>work together</span></h2>
      <img src={profile} alt="profile" className={styles.contactProfileImg}/>
      <a className={styles.contactLink} href="mailto:bucklandblaise@gmail.com">Email</a>
      <a className={styles.contactLink}  href={cv} target="_blank" rel="noreferrer">CV</a>
      <a className={styles.contactLink}  href="https://github.com/blaisebuckland" target="_blank" rel="noreferrer">GitHub</a>
      <a className={styles.contactLink}  href="https://www.linkedin.com/in/blaise-buckland-578595131/" target="_blank" rel="noreferrer">LinkedIn</a>
      <Link className={styles.btn} to="navBar" smooth={true} duration={500}>Back to top</Link>
    </section>
    <section className={styles.footerBar}>
      <h2 className={styles.logo}>BB</h2>
    </section>
    </>
  )
}

export default Contact;