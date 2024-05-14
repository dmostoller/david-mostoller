import mediumLogo from './assets/medium-svgrepo-com.svg/'
import gitLogo from './assets/github-142-svgrepo-com.svg'
import linkedInLogo from './assets/linkedin-svgrepo-com.svg'
import marsThumb from './assets/thumb.png'
import musicThumb from './assets/thumb-1.png'
import myResume from './assets/DBM_2024_SE_Resume.pdf'
import 'semantic-ui-css/semantic.min.css'
import About from './About'

import './App.css'
import Elevator from './Elevator'

function App() {
  function calendly() {
    Calendly.initBadgeWidget({ url: 'https://calendly.com/dmostoller/15-minute-coffee-virtual-chat', text: 'Schedule time with me', color: 'green', textColor: '#ffffff', branding: undefined }); 
  }

  calendly();
  return (
    <>
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

      {/* <a href="https://www.loom.com/share/f658be9f027a44d684df1073a47c132a?sid=9615b220-c5ab-4332-a822-9ad6c2d9e2ca" target='_blank'>
        <button className='ui button'>Elevator Pitch</button>
      </a> */}
      <Elevator />
      <a href={myResume} download="David_Mostoller_Resume" target='_blank'>
        <button className='ui button'>Resume</button>
      </a>
      <About />
      <div id='calendly'></div>
      <div className='container'>
        <div className="card">
            <h3 style={{marginBottom:"0px"}}>Musician's Base</h3>
            <h5 className='grey' style={{marginTop: "0px"}}>A Social Fanpage for Independent Musicians</h5>
                <a href="https://vimeo.com/944678547?share=copy" target='_blank'>
                    <img style={{maxWidth: "300px"}} src={musicThumb}></img>
                </a>
                <div>
                    <a href="https://github.com/dmostoller/musicians-base" target='_blank'>
                    <button className='ui button'>GitHub Repo</button>
                    </a>
                    <a href="https://superluminal.onrender.com/" target='_blank'>
                    <button className='ui button'>Deployed Site</button>
                </a>
                </div>
        </div>
        <div className="card">
            <h3 style={{marginBottom:"0px"}}>Social Art Portfolio</h3>
            <h5 className='grey' style={{marginTop: "0px"}}>A Fresh Take on an Artist Portfolio</h5>
                <a href="https://www.loom.com/share/6963e453b24648c7863de7ad8d490ec4" target='_blank'>
                    <img style={{maxWidth: "300px"}} src="https://cdn.loom.com/sessions/thumbnails/6963e453b24648c7863de7ad8d490ec4-with-play.gif"></img>
                </a>
                <div>
                <a href="https://github.com/dmostoller/social-artist-portfolio" target='_blank'>
                    <button className='ui button'>GitHub Repo</button>
                </a>
                <a href="https://yasmin-mostoller.onrender.com/" target='_blank'>
                    <button className='ui button'>Deployed Site</button>
                </a>
                </div>
        </div>
        <div className="card">
            <h3 style={{marginBottom:"0px"}}>Mars Base</h3>
            <h5 className='grey' style={{marginTop: "0px"}}>A Python CLI Game in the style of Oregon Trail</h5>
                <a href="https://vimeo.com/930451133?share=copy" target='_blank'>
                    <img style={{maxWidth: "300px"}} src={marsThumb}></img>
                </a>
                <div>
                <a href="https://github.com/dmostoller/mars-base" target='_blank'>
                    <button className='ui button'>GitHub Repo</button>
                </a>
                </div>
        </div>
      </div>
    </>
  )
}

export default App
