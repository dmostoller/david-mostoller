import React, {useState} from 'react'
import mediumLogo from './assets/medium-fill-svgrepo-com.svg/'
import gitLogo from './assets/github-svgrepo-com-4.svg'
import linkedInLogo from './assets/linkedin-box-fill-svgrepo-com.svg'
import marsThumb from './assets/thumb.png'
import musicThumb from './assets/thumb-1.png'
import myResume from './assets/DBM_2024_SE_Resume.pdf'
import 'semantic-ui-css/semantic.min.css'
import About from './About'
import Resume from './Resume'

import './App.css'
import Elevator from './Elevator'
import Projects from './Projects'
import Email from './Email'
import { Container, GridRow, GridColumn, Grid, Menu, MenuItem, Icon, Radio} from 'semantic-ui-react'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode)
}

  function calendly() {
    Calendly.initBadgeWidget({ url: 'https://calendly.com/dmostoller/15-minute-coffee-virtual-chat', text: 'Schedule time with me', color: 'black', textColor: '#ffffff', branding: undefined}); 
  }
  

  calendly();
  return (
    <div className='ui container' 
    style={darkMode ? {backgroundColor: "#1c1c1c", width: "100vw", height:"100vh", display:"flex", justifyContent: 'center', alignItems: 'center'} : {backgroundColor: "#ffffff", width: "100vw", height:"100vh", display:"flex", justifyContent: 'center', alignItems: 'center'}}>
        <Grid container stackable>
        <GridRow>
        <GridColumn>
        <div className='ui centered grid'>
            <a href="https://www.linkedin.com/in/david-mostoller/" target="_blank">
            <img src={linkedInLogo} className="logo" alt="LinkedIn logo" />
            </a>
            <a href="https://github.com/dmostoller" target="_blank">
            <img src={gitLogo} className="logo" alt="GitHub logo" />
            </a>
            <a href="https://medium.com/@dmostoller" target="_blank">
            <img src={mediumLogo} className="logo" alt="Medium logo" />
            </a>
        </div>
        {darkMode ?
        <h1 className='white' style={{marginBottom: "0px"}}>David Mostoller</h1>
        :
        <h1 style={{marginBottom: "0px"}}>David Mostoller</h1>
        }
        <h4 className='grey' style={{marginTop: "0px", marginBottom:"0px"}}>Full-Stack Software Engineer</h4>
        <h5 className='grey' style={{marginTop: "0px"}}>dmostoller@gmail.com</h5>
        {darkMode ?
        <Menu size='large' 
        inverted 
        borderless 
        stackable 
        compact 
        icon='labeled'>
            <About />
            <Projects />
            <Elevator />
            <Resume />
            <Email />
        </Menu>
        :
        <Menu size='large'  
        borderless 
        stackable 
        compact 
        icon='labeled'>
            <About />
            <Projects />
            <Elevator />
            <Resume />
            <Email />
        </Menu>
      }
      </GridColumn>
      </GridRow>
      </Grid>
          <div id='calendly'></div>
          <div id='dark-toggle'>
          <Radio toggle 
          label="Dark Mode"
          onChange={toggleDarkMode}
          />
          </div>
      </div>
  )
}

export default App
