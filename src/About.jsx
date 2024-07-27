
import React, {useState} from "react"
import {
    ModalDescription,
    ModalContent,
    ModalActions,
    Button,
    Icon,
    Header,
    Image,
    MenuItem,
    Modal,
  } from 'semantic-ui-react'
import headshot from './assets/david-headshot-amtrak.jpg'
import { useDarkMode } from "./context/darkMode"

export default function About () {
    const [open, setOpen] = useState(false);
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
        trigger={<MenuItem><Icon name='user' />About Me</MenuItem>}
      >
        <ModalContent image>
          <Image size='huge' src={headshot} wrapped />
          <ModalDescription>
            <Header style={{marginBottom: "0px"}}>David Mostoller - Full Stack Software Engineer</Header>
            <h5 style={{marginTop: "0px"}}>Philadelphia, PA</h5>
            <p>I am a software engineer with a rich background in music, combining technical skills with creative flair to drive innovative projects. Proficient in JavaScript, React, Python, SQL, Flask, .NET, HTML, and CSS, I excel at crafting user-centric applications that harmonize form and function.</p>
            <p>In my roles at Entourage Yearbooks and Zoomer, I developed robust web applications and collaborated effectively within teams to design, test, and deploy software. At Entourage, I led a team and reported directly to the CEO, overseeing the development of a customer-facing website and integrating web-based layout tools. At Zoomer, I contributed to data analysis and strategy, utilizing MapBox and other tools to create interactive maps and charts, which supported executive decision-making and attracted investors.</p>
            <p>These experiences sharpened my communication and collaboration skills, allowing me to articulate technical concepts clearly and work seamlessly with diverse teams. My adaptability to new technologies and my meticulous attention to detail drive my success in creating impactful software solutions.</p>
            <p>Additionally, my career as a professional musician, which took me to over 40 countries, parallels programming in its blend of creativity and teamwork. Both fields require transforming abstract ideas into tangible results and working closely with others to create something exceptional. This background gives me a unique perspective on user experience and problem-solving.</p>
            <p>I am eager to leverage my diverse experiences to build meaningful software applications that make a positive difference. Let’s connect and explore how we can collaborate to create something extraordinary! </p>    
          </ModalDescription>
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
    :
        <Modal
        closeIcon
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<MenuItem><Icon name='user' />About Me</MenuItem>}
        >
        <ModalContent image>
          <Image size='huge' src={headshot} wrapped />
          <ModalDescription>
            <Header style={{marginBottom: "0px"}}>David Mostoller - Full Stack Software Engineer</Header>
            <h5 style={{marginTop: "0px"}}>Philadelphia, PA</h5>
            <p>I am a software engineer with a rich background in music, combining technical skills with creative flair to drive innovative projects. Proficient in JavaScript, React, Python, SQL, Flask, .NET, HTML, and CSS, I excel at crafting user-centric applications that harmonize form and function.</p>
            <p>In my roles at Entourage Yearbooks and Zoomer, I developed robust web applications and collaborated effectively within teams to design, test, and deploy software. At Entourage, I led a team and reported directly to the CEO, overseeing the development of a customer-facing website and integrating web-based layout tools. At Zoomer, I contributed to data analysis and strategy, utilizing MapBox and other tools to create interactive maps and charts, which supported executive decision-making and attracted investors.</p>
            <p>These experiences sharpened my communication and collaboration skills, allowing me to articulate technical concepts clearly and work seamlessly with diverse teams. My adaptability to new technologies and my meticulous attention to detail drive my success in creating impactful software solutions.</p>
            <p>Additionally, my career as a professional musician, which took me to over 40 countries, parallels programming in its blend of creativity and teamwork. Both fields require transforming abstract ideas into tangible results and working closely with others to create something exceptional. This background gives me a unique perspective on user experience and problem-solving.</p>
            <p>I am eager to leverage my diverse experiences to build meaningful software applications that make a positive difference. Let’s connect and explore how we can collaborate to create something extraordinary! </p>         
          </ModalDescription>
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
}
      </>
    )    
}