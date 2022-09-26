import React from 'react';
import { Link} from "react-scroll";
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
        <p className={styles.intro}>This year, alongside my job at the Ministry of Justice, I have retrained as a software developer. Now I'm excited to apply the technical skills I've developed, as well as my existing experience, to progress and excel in my career as a software developer.</p>
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