
import React, {useState} from "react"
import {
    ModalHeader,
    ModalDescription,
    ModalContent,
    ModalActions,
    Button,
    Header,
    Image,
    Modal,
  } from 'semantic-ui-react'
  import headshot from './assets/david-headshot-amtrak.jpg'
  import resume from './assets/DBM_2024_SE_Resume.pdf'


export default function Resume () {
    const [open, setOpen] = useState(false)

    return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      height={"100vh"}
      trigger={<Button>Resume</Button>}
    >
      <ModalContent>
        <ModalDescription>
        <object data={resume} type="application/pdf" width="100%" height="600px">
            <p>David Mostoller Resume</p>
        </object>
        </ModalDescription>
      </ModalContent>
      <ModalActions>
        <a href={resume} download="David_Mostoller_Resume" target='_blank'>
            <button className='ui button'>Download Resume</button>
        </a>
        <Button
          content="Close"
          labelPosition='right'
          icon='remove'
          onClick={() => setOpen(false)}
        />
      </ModalActions>
    </Modal>
    )    
}