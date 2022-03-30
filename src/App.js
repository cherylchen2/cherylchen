import './App.css';
import React, { useRef } from 'react';
import WelcomeScreen from './frontend/screens/WelcomeScreen/WelcomeScreen'
import AboutMe from './frontend/screens/AboutMeScreen/AboutMe'
import EducationPage from './frontend/screens/Education/EducationPage'
import EportPage from './frontend/screens/Coop/CoopEport'
import useScrollSnap from 'react-use-scroll-snap'
import Switch from './frontend/component/SwitchToggle'
import Projects from './frontend/screens/Projects/Projects'

function App() {


/*

      <section>
        <div className="App">
          <AboutMe/>
        </div>
      </section>
      */
  const [darkMode, setDarkMode] = React.useState(false)

  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  const handleDarkMode = () => {
    const prev = darkMode
    setDarkMode(!prev)
    console.log("darkmode = " + darkMode)
  }
    
  return (
    <section ref={scrollRef}>
      <div style={{
          position: 'fixed',
          right: 0,
          top: 0,
          zIndex: 1
      }}>
          <Switch onChange={handleDarkMode}/> 
      </div>
      <div className="App">
        <WelcomeScreen/>
      </div>
      <div className="App">
        <EportPage darkMode={darkMode}/>
      </div>
      <div className="App">
        <EducationPage darkMode={darkMode}/>
      </div>
      <div className="App">
        <Projects darkMode={darkMode}/>
      </div>
      <div className="App">
        <AboutMe/>
      </div>
    </section>

    
  );
}

export default App;
