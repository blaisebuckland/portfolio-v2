import React from 'react';
import styles from './About.module.scss';

import nology from '../../assets/nology.svg'
import jac from '../../assets/JAC.webp'

const About = () => {
  return (
    <>
    <section className={styles.aboutContainer} id="about">
      <h2 className={styles.aboutHeading}>My Journey</h2>
        <section className={styles.experienceContainer}>
          <div className={styles.jobContainer}>
          <img src={nology} alt="nology logo" className={styles.companyLogo} />
            <h4 className={styles.jobHeading}>Trainee Software Developer, _nology</h4>
            <p className={styles.jobSubheading}>Oct 2021 - Sept 2022</p>
            <ul className={styles.jobList}>
              <li className={styles.jobListItem}>Completed a self-paced bootcamp course in software development alongside full-time employment. Learning leading technologies in modern software development, with a particular focus on front-end languages. </li> 
              <li className={styles.jobListItem}>Experience in using the frameworks and tools widely used in the industry. Learning how to fix bugs myself, find answers online and when to ask a coach for advice.</li>
            </ul>
          </div>

          <div className={styles.jobContainer}>
          <img src={jac} alt="JAC logo" className={styles.companyLogo} />
            <h4 className={styles.jobHeading}>Business Analyst, Judicial Appointment Commission</h4>
            <p className={styles.jobSubheading}>Oct 2021 - Sept 2022</p>
            <ul className={styles.jobList}>
              <li className={styles.jobListItem}>I was the business analyst in a small digital team in a government department. Researching requirements for the newly implemented digital platform, engaging with stakeholders from across the organisation.</li>
              <li className={styles.jobListItem}>Producing detailed specifications and explaining these to the developers and product owner.</li>
              <li className={styles.jobListItem}>Acting as the link between the digital team and the wider organisation to enable seamless collaboration and fast feedback for the developers.</li>
            </ul>
          </div>

          <div className={styles.jobContainer}>
          <img src={jac} alt="JAC logo" className={styles.companyLogo} />

            <h4 className={styles.jobHeading}>Programme Manager, Judicial Appointment Commission</h4>
            <p className={styles.jobSubheading}>Oct 2021 - Sept 2022</p>
            <ul className={styles.jobList}>
              <li className={styles.jobListItem}>I was responsible for the delivery of a programme of 35 recruitment campaigns per year. </li>
              <li className={styles.jobListItem}>Allocating work to the operational teams, setting timelines for each to ensure smooth delivery and keeping the senior leadership team informed of the progress of all teams' work.</li>
              <li className={styles.jobListItem}>Working with officials from other government departments as well as senior judges and tribunal members to plan the recruitment processes.</li>
            </ul>
          </div>
        </section>
    </section>
    
    </>
  )
}

export default About;