import mediumLogo from './assets/medium-svgrepo-com.svg/'
import gitLogo from './assets/github-142-svgrepo-com.svg'
import linkedInLogo from './assets/linkedin-svgrepo-com.svg'
import marsThumb from './assets/thumb.png'
import musicThumb from './assets/thumb-1.png'

import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://www.linkedin.com/in/david-mostoller/" target="_blank">
          <img src={linkedInLogo} className="logo" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/dmostoller" target="_blank">
          <img src={gitLogo} className="logo" alt="GitHub logo" />
        </a>
        <a href="https://medium.com/@dmostoller" target="_blank">
          <img src={mediumLogo} className="logo medium" alt="Medium logo" />
        </a>
      </div>
      <h1>David Mostoller</h1>
      <div className='container'>
        <div className="card">
            <h3>Musician's Base</h3>
            <h5 className='grey'>The Social Fanpage for Independent Musicians</h5>
                <a href="https://vimeo.com/929736905?share=copy" target='_blank'>
                    <img style={{maxWidth: "300px"}} src={musicThumb}></img>
                </a>
                <div>
                    <a href="https://github.com/dmostoller/musicians-base" target='_blank'>
                    <button>GitHub Repo</button>
                    </a>
                </div>
        </div>
        <div className="card">
            <h3>Social Art Portfolio</h3>
            <h5 className='grey'>A Fresh Take on an Artist Portfolio</h5>
                <a href="https://www.loom.com/share/6963e453b24648c7863de7ad8d490ec4" target='_blank'>
                    <img style={{maxWidth: "300px"}} src="https://cdn.loom.com/sessions/thumbnails/6963e453b24648c7863de7ad8d490ec4-with-play.gif"></img>
                </a>
                <div>
                <a href="https://github.com/dmostoller/social-artist-portfolio" target='_blank'>
                    <button>GitHub Repo</button>
                </a>
                </div>
        </div>
        <div className="card">
            <h3>Mars Base</h3>
            <h5 className='grey'>A Python CLI Game in the style of Oregon Trail</h5>
                <a href="https://vimeo.com/930451133?share=copy" target='_blank'>
                    <img style={{maxWidth: "300px"}} src={marsThumb}></img>
                </a>
                <div>
                <a href="https://github.com/dmostoller/mars-base" target='_blank'>
                    <button>GitHub Repo</button>
                </a>
                </div>
        </div>
      </div>
    </>
  )
}

export default App
