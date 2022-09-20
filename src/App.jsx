import React from 'react';
import styles from './App.module.scss';
import About from './components/About';
import Footer from './components/Footer';
import HeroPage from './components/HeroPage';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import SideNav from './components/SideNav';
import Skills from './components/Skills';

const App = () => {
  return (
    <>
    <NavBar />
    <SideNav />
    <HeroPage />
    <Projects />
    <Skills />
    <About />
    <Footer />
    </>
  )
}

export default App;