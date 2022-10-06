import React, { useState} from 'react';
import styles from './NavBar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleMenuOpen = () => setIsNavOpen(!isNavOpen);

  const menuStyle = isNavOpen ? styles.menuOpen : styles.menuClosed;

  return (
    <>
    <nav className={styles.navContainer} id="navBar">
      <h2 className={styles.logo}>BB</h2>
      <section className={styles.navLinksContainer}>
        <a href="#projects" className={styles.navLinks}>Portfolio</a>
        <a href="#about" className={styles.navLinks}>About</a>
        <a href="#contact" className={`${styles.navLinks} ${styles.contactLink}`}>Contact me</a>
      </section>

      <section className={styles.menuContainer}>
          <FontAwesomeIcon icon={faBars} className={styles.menuIcon} onClick={toggleMenuOpen} />
            <div className={menuStyle}>
              <a href="#projects" className={styles.navLinks}>Portfolio</a>
              <a href="#about" className={styles.navLinks}>About</a>
              <a href="#contact" className={`${styles.navLinks}`}>Contact me</a>
            </div> 
      </section>
    </nav>

    </>
  )
}

export default NavBar;