import mediumLogo from './assets/medium-svgrepo-com.svg/'
import gitLogo from './assets/github-142-svgrepo-com.svg'
import linkedInLogo from './assets/linkedin-svgrepo-com.svg'
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
import { Container, GridRow, GridColumn, Grid, Menu, MenuItem, Icon} from 'semantic-ui-react'

function App() {
  function calendly() {
    Calendly.initBadgeWidget({ url: 'https://calendly.com/dmostoller/15-minute-coffee-virtual-chat', text: 'Schedule time with me', color: 'black', textColor: '#ffffff', branding: undefined}); 
  }

  calendly();
  return (
    <>
    <Container>
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
        <h1 style={{marginBottom: "0px"}}>David Mostoller</h1>
        <h4 className='grey' style={{marginTop: "0px", marginBottom:"0px"}}>Full-Stack Software Engineer</h4>
        <h5 className='grey' style={{marginTop: "0px"}}>dmostoller@gmail.com</h5>
        
        <Menu size='large' stackable compact icon='labeled'>
            <About />
            <Projects />
            <Elevator />
            <Resume />
            <Email />
        </Menu>
      </GridColumn>
      </GridRow>
      </Grid>
      </Container>
      <div id='calendly'></div>
    </>
  )
}

export default App
