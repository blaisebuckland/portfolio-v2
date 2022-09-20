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
        <button className={styles.btn}>Get in touch</button>
      </div>
    </nav>
    </>
  )
}

export default NavBar;