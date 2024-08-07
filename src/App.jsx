import React from 'react'
import mediumLogo from './assets/medium-fill-svgrepo-com.svg/'
import gitLogo from './assets/github-svgrepo-com-4.svg'
import linkedInLogo from './assets/linkedin-box-fill-svgrepo-com.svg'
import 'semantic-ui-css/semantic.min.css'
import About from './About'
import Resume from './Resume'
import { useDarkMode } from './context/darkMode'

import './App.css'
import Elevator from './Elevator'
import Projects from './Projects'
import Email from './Email'
import {GridRow, GridColumn, Grid, Menu, Radio} from 'semantic-ui-react'

function App() {
  const {darkMode, setDarkMode} = useDarkMode();

  function toggleDarkMode() {
    setDarkMode(!darkMode)
}

  function calendly() {
    Calendly.initBadgeWidget({ url: 'https://calendly.com/dmostoller/15-minute-coffee-virtual-chat', text: 'Schedule time with me', color: 'black', textColor: '#ffffff', branding: undefined}); 
  }
  
//   console.log(darkMode)
  calendly();
  return (
    <div 
    style={darkMode ? {backgroundColor: "#1c1c1c", width: "100vw", padding:"0px", height:"100vh", display:"flex", justifyContent: 'center', alignItems: 'center'} : {backgroundColor: "#ffffff", width: "100vw", height:"100vh", display:"flex", justifyContent: 'center', alignItems: 'center'}}>
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
        text 
        // stackable 
        compact 
        icon='labeled'>
            <About />
            <Projects />
            {/* <Elevator /> */}
            <Resume />
            <Email />
        </Menu>
        :
        <Menu size='large'  
        borderless 
        // stackable 
        text
        compact 
        icon='labeled'>
            <About />
            <Projects />
            {/* <Elevator /> */}
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
          {/* <div 
          id='link-buttons'>
          <ButtonGroup vertical>
            <Button color='black' icon='medium'/>
            <Button color='black' icon='linkedin'/>
            <Button color='black' icon='github'/>
          </ButtonGroup>
          </div> */}
      </div>
  )
}

export default App
