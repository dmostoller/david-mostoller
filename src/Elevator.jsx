
import React, {useState} from "react"
import {
    ModalContent,
    ModalActions,
    Button,
    Icon,
    Modal,
    MenuItem,
    Embed
  } from 'semantic-ui-react'
  import thumb from './assets/elevator-thumb.png'



export default function Elevator () {
    const [open, setOpen] = useState(false)

    return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<MenuItem><Icon name='video' />Elevator Pitch</MenuItem>}
    >
      <ModalContent embed>
      <Embed
            icon='right circle arrow'
            placeholder={thumb}
            url='https://www.loom.com/embed/f658be9f027a44d684df1073a47c132a?sid=57a53fd8-5afc-4e03-bdeb-2371261bed7a'
        />
      </ModalContent>
      <ModalActions>
        <Button
          content="Close"
          primary
          labelPosition='right'
          icon='remove'
          onClick={() => setOpen(false)}
        />
      </ModalActions>
    </Modal>
    )    
}