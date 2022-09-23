import React from 'react';
import styles from './Contact.module.scss';

const Contact= () => {
  return (
    <>
    <section className={styles.footerContainer} id="contact">
      <h2>Let's <span className={styles.headingStylised}>work together</span></h2>
      <a href="mailto:bucklandblaise@gmail.com">Email</a>
      <a href="https://resume.io/r/qC1uFVV0u">CV</a>
      <a href="https://github.com/blaisebuckland">GitHub</a>
      <a href="https://www.linkedin.com/in/blaise-buckland-578595131/">LinkedIn</a>
      <button>Back to top</button>
    </section>
    <section className={styles.footerBar}>
      <h2 className={styles.logo}>BB</h2>
    </section>
    </>
  )
}

export default Contact;