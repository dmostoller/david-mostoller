
import React, {useState} from "react"
import {
    ModalDescription,
    ModalContent,
    ModalActions,
    MenuItem,
    Button,
    Icon,
    Modal,
  } from 'semantic-ui-react'
import resume from './assets/DBM_2024_SE_Resume_June_2024.pdf'
import { useDarkMode } from "./context/darkMode"

export default function Resume () {
    const [open, setOpen] = useState(false)
    const {darkMode} = useDarkMode();


    return (
      <>
      { (darkMode === true) ?
    <Modal
      basic
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      height={"100vh"}
      trigger={<MenuItem><Icon name='book' />Resume</MenuItem>}
    >
      <ModalContent>
        <ModalDescription>
        <object data={resume} type="application/pdf" width="100%" height="600px">
            <p>David Mostoller Resume</p>
        </object>
        </ModalDescription>
      </ModalContent>
      <ModalActions>
        {/* <a href={resume} download="David_Mostoller_Resume" target='_blank'>
            <button className='ui green button'>Download Resume</button>
        </a> */}
        <Button
        href={resume}
        download="David_Mostoller_Resume"
        target='_blank'
        positive
        icon='download'
        labelPosition='right'
        content="Download Resume"
        />
        <Button
          primary
          content="Close"
          labelPosition='right'
          icon='remove'
          onClick={() => setOpen(false)}
        />
      </ModalActions>
    </Modal>
    :
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      height={"100vh"}
      trigger={<MenuItem><Icon name='book' />Resume</MenuItem>}
    >
      <ModalContent>
        <ModalDescription>
        <object data={resume} type="application/pdf" width="100%" height="600px">
            <p>David Mostoller Resume</p>
        </object>
        </ModalDescription>
      </ModalContent>
      <ModalActions>
        {/* <a href={resume} download="David_Mostoller_Resume" target='_blank'>
            <button className='ui green button'>Download Resume</button>
        </a> */}
        <Button
        href={resume}
        download="David_Mostoller_Resume"
        target='_blank'
        positive
        icon='download'
        labelPosition='right'
        content="Download Resume"
        />
        <Button
          primary
          content="Close"
          labelPosition='right'
          icon='remove'
          onClick={() => setOpen(false)}
        />
      </ModalActions>
    </Modal>
      }
      </>
    )    
}