import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <>
    <nav className={styles.navContainer}>
      <h2 className={styles.logo}>BB</h2>
      <div className={styles.navLinksContainer}>
        <a href="" className={styles.navLinks}>Home</a>
        <a href="" className={styles.navLinks}>About</a>
        <a href="" className={styles.navLinks}>Portfolio</a>
        <button className={styles.btn}>Get in touch</button>
      </div>
    </nav>
    </>
  )
}

export default NavBar;