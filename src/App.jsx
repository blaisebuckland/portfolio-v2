import React from 'react';
import styles from './App.module.scss';
import About from './components/About';
import Footer from './components/Footer';
import HeroPage from './components/HeroPage/HeroPage';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  return (
    <>
    <NavBar />
    <HeroPage />
    <Projects />
    <Skills />
    <About />
    <Footer />
    </>
  )
}

export default App;