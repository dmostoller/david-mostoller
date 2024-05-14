
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



export default function About () {
    const [open, setOpen] = useState(false)

    return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>About Me</Button>}
    >
      <ModalHeader>About Me</ModalHeader>
      <ModalContent image>
        <Image size='huge' src={headshot} wrapped />
        <ModalDescription>
          <Header style={{marginBottom: "0px"}}>David Mostoller - Full Stack Software Engineer</Header>
          <h5 style={{marginTop: "0px"}}>Philadelphia, PA</h5>
          <p>
          Experienced Software Engineer / Web Developer. Skilled in Python, Flask, REST APIs, React, JavaScript, CSS, SQL, SQLAlchemy and .NET. Recent graduate from Flatiron School's Software Engineering Program. Previously worked as a developer on the business/data analysis team at Zoomer, an RDS startup based in Philadelphia, and before that as a software engineer at Entourage Yearbooks, an online printing company based in Princeton, NJ.
          </p>

        </ModalDescription>
      </ModalContent>
      <ModalActions>
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