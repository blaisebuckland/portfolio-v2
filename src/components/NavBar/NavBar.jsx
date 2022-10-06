import React, { useState} from 'react';
import { Link} from "react-scroll";
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
      <Link to="projects" smooth={true} duration={500} className={styles.navLinks}>Portfolio</Link>
      <Link to="about" smooth={true} duration={500} className={styles.navLinks}>About</Link>
      <Link to="contact" smooth={true} duration={500} className={styles.navLinks}>Contact me</Link>
      </section>

      <section className={styles.menuContainer}>
          <FontAwesomeIcon icon={faBars} className={styles.menuIcon} onClick={toggleMenuOpen} />
            <div className={menuStyle}>
              <Link to="projects" smooth={true} duration={500} className={styles.navLinks}>Portfolio</Link>
              <Link to="about" smooth={true} duration={500} className={styles.navLinks}>About</Link>
              <Link to="contact" smooth={true} duration={500} className={styles.navLinks}>Contact me</Link>
            </div> 
      </section>
    </nav>

    </>
  )
}

export default NavBar;