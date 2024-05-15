
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
    Embed
  } from 'semantic-ui-react'
  import thumb from './assets/elevator-thumb.png'



export default function Elevator () {
    const [open, setOpen] = useState(false)

    return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Elevator Pitch</Button>}
    >
      <ModalContent embed>
      <Embed
            icon='right circle arrow'
            placeholder={thumb}
            url='https://www.loom.com/embed/f658be9f027a44d684df1073a47c132a?sid=4faa09fd-8dde-497d-8413-1600b0d599f9'
        />
        {/* <div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/f658be9f027a44d684df1073a47c132a?sid=4faa09fd-8dde-497d-8413-1600b0d599f9" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div> */}
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