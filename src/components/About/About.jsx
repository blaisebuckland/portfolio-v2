import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <>
    <section className={styles.aboutContainer}>
      <h2 className={styles.aboutHeading}>My Journey/About me</h2>
      <div className={styles.textContainer}>
        <p className={styles.aboutIntro}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore aspernatur adipisci maxime necessitatibus voluptatibus? Quaerat, exercitationem aspernatur soluta praesentium ut fugit cum rerum, ducimus earum enim fuga nostrum. Delectus omnis tenetur quas, similique laudantium dolores mollitia officia repudiandae! Sunt dolore excepturi facere natus amet at fugit error rem? Eos accusantium voluptate ullam quod accusamus sunt rem voluptatum et quia culpa quibusdam itaque reiciendis aliquid nam iste atque odio nihil, hic recusandae sequi eius architecto quidem ducimus dolores. Reiciendis, possimus repellendus et cum aliquid quo nisi velit ex temporibus a, iste nesciunt, repudiandae rem autem! Exercitationem similique totam nihil aliquam doloremque!</p>
        <h3 className={styles.aboutSubheading}>Experience</h3>
        <div className={styles.experienceContainer}>
          <h4 className={styles.experienceHeading}>Trainee Software Developer, _nology</h4>
          <p className={styles.experienceSubheading}>Oct 2021 - Sept 2022</p>
          <ul className={styles.experienceList}>
            <li className={styles.experienceListItem}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, delectus.</li>
            <li className={styles.experienceListItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
        <div className={styles.experienceContainer}>
          <h4 className={styles.experienceHeading}>My Old Role, My Workplace</h4>
          <p className={styles.experienceSubheading}>Oct 2021 - Sept 2022</p>
          <ul className={styles.experienceList}>
            <li className={styles.experienceListItem}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, delectus.</li>
            <li className={styles.experienceListItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default About;