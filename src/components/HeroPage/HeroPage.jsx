import React from 'react';
import { Link, animateScroll} from "react-scroll";
import styles from './HeroPage.module.scss';
import profile from '../../assets/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

const HeroPage = () => {
  return (
    <>
    <div className={styles.heroContainer}>
      <section className={styles.textContainer}>
        <h2 className={styles.heading}>I'm a <br/>
        <span className={styles.headingStylised}>Junior Software Developer</span>
        </h2>
        <p className={styles.intro}>Egestas dictumst enim dui ante nisl risus commodo. Pellentesque dignissim praesent purus in neque erat et. Cras donec ut orci eget neque bibendum cras. Vitae, ultricies arcu pretium duis.</p>
        <div className={styles.scrollSection}>
          <p>Scroll Down</p>
          <Link to="projects" smooth={true} duration={500}><FontAwesomeIcon icon={faAnglesDown} className={styles.scrollIcon}/></Link>
        </div>
      </section>
      <img src={profile} alt="profile" className={styles.profileImg}/>
    </div>
    
    <div className={styles.colourBox}></div>
    </>
  )
}

export default HeroPage;