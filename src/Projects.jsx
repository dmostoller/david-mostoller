
import React, {useState} from "react"
import {

    ModalContent,
    ModalActions,
    Button,
    Icon,
    MenuItem,
    Modal,
  } from 'semantic-ui-react'
import marsThumb from './assets/thumb.png'
import musicThumb from './assets/thumb-1.png'


export default function Projects () {
    const [open, setOpen] = useState(false)

    return (
    <Modal
      basic
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<MenuItem><Icon name='cogs' />Projects</MenuItem>}
    >
      <ModalContent>
        <div className="ui centered grid">
        <div className="card">
            <h3 style={{marginBottom:"0px"}}>Musician's Base</h3>
            <h5 className='grey' style={{marginTop: "0px"}}>A Social Fanpage for Independent Musicians</h5>
                <a href="https://vimeo.com/944678547?share=copy" target='_blank'>
                    <img style={{maxWidth: "300px"}} src={musicThumb}></img>
                </a>
                <div>
                    <a href="https://github.com/dmostoller/musicians-base" target='_blank'>
                    <button className='ui teal button'>GitHub Repo</button>
                    </a>
                    <a href="https://superluminal.onrender.com/" target='_blank'>
                    <button className='ui violet button'>Deployed Site</button>
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
                    <button className='ui teal button'>GitHub Repo</button>
                </a>
                <a href="https://yasmin-mostoller.onrender.com/" target='_blank'>
                    <button className='ui violet button'>Deployed Site</button>
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
                    <button className='ui teal button'>GitHub Repo</button>
                </a>
                </div>
        </div>
      </div>
      </ModalContent>
      <ModalActions>
        <Button
          primary
          content="Close"
          labelPosition='right'
          icon='remove'
          onClick={() => setOpen(false)}
        />
      </ModalActions>
    </Modal>
    )    
}