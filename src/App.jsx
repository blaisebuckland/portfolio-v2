import React from 'react';
import styles from './App.module.scss';
import About from './components/About';
import HeroPage from './components/HeroPage';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import SideNav from './components/SideNav';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
    <NavBar />
    <SideNav />
    <HeroPage />
    <Projects />
    <About />
    <Contact />
    </>
  )
}

export default App;