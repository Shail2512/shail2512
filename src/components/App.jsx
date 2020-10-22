import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Internship from './Internship/Internship'
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Publication from './Publication/Publication';
import { PortfolioProvider } from '../context/context';

import { heroData, aboutData,internshipData, projectsData, publicationsData, contactData, footerData } from '../mock/data';
// import Publication from './Publication/Publication';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [internship, setInternship] = useState([]);
  const [projects, setProjects] = useState([]);
  const [publications, setPublications] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setInternship([...internshipData]);
    setProjects([...projectsData]);
    setPublications([...publicationsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about,internship,projects,publications, contact, footer }}>
      <Hero />
      <About />
      <Internship />
      <Projects />
      <Publication/>
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
