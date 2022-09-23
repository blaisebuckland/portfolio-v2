import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <>
    <nav className={styles.navContainer}>
      <h2 className={styles.logo}>BB</h2>
      <div className={styles.navLinksContainer}>
        <a href="#projects" className={styles.navLinks}>Portfolio</a>
        <a href="#about" className={styles.navLinks}>About</a>
        <a href="#contact" className={`${styles.navLinks} ${styles.contactLink}`}>Contact me</a>
      </div>
    </nav>
    </>
  )
}

export default NavBar;