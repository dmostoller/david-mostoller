
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
            <p>Thank you for visiting my website!</p>
            <p>I am a software engineer with a rich background in music, combining technical skills with creative flair to drive innovative projects. I excel at crafting user-centric applications that harmonize form and function. My mission is simple: to build meaningful software applications that make a positive impact.</p>
            <p>Proficient in JavaScript, React, Python, SQL, Flask, .NET, HTML, CSS and more. </p>
            <p>I have experience developing robust web applications and effectively collaborating with senior leadership and leading teams to design, test, and deploy software. </p>
            <p>Additionally, I oversaw the development of a customer-facing website and integrated web-based layout tools. I also contributed to data analysis and strategy, utilizing MapBox and other tools to create interactive maps and charts that supported executive decision-making and attracted investors.</p>
            <p>My adaptability to new technologies and meticulous attention to detail drive my success in creating impactful software solutions. I thrive in fast-paced environments and have extensive experience working with teams of diverse skill sets, nationalities, and communication styles.</p>
            <p>My career as a professional musician, which took me to over 40 countries, parallels programming in its blend of creativity and teamwork. Both fields require transforming abstract ideas into tangible results and working closely with others to create something exceptional. This background gives me a unique perspective on user experience and problem-solving.</p>
            <p>I am eager to leverage my diverse experiences to build meaningful software applications that make a positive difference. Let’s connect and explore how we can collaborate to create something extraordinary!</p>
            <p>David Mostoller<br></br>609-356-2011<br></br>dmostoller@gmail.com</p>
            <a href="https://calendly.com/dmostoller/15-minute-coffee-virtual-chat" target="_blank">Schedule a call on Calendly</a>   
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
            <p>Thank you for visiting my website!</p>
            <p>I am a software engineer with a rich background in music, combining technical skills with creative flair to drive innovative projects. I excel at crafting user-centric applications that harmonize form and function. My mission is simple: to build meaningful software applications that make a positive impact.</p>
            <p>Proficient in JavaScript, React, Python, SQL, Flask, .NET, HTML, CSS and more. </p>
            <p>I have experience developing robust web applications and effectively collaborating with senior leadership and leading teams to design, test, and deploy software. </p>
            <p>Additionally, I oversaw the development of a customer-facing website and integrated web-based layout tools. I also contributed to data analysis and strategy, utilizing MapBox and other tools to create interactive maps and charts that supported executive decision-making and attracted investors.</p>
            <p>My adaptability to new technologies and meticulous attention to detail drive my success in creating impactful software solutions. I thrive in fast-paced environments and have extensive experience working with teams of diverse skill sets, nationalities, and communication styles.</p>
            <p>My career as a professional musician, which took me to over 40 countries, parallels programming in its blend of creativity and teamwork. Both fields require transforming abstract ideas into tangible results and working closely with others to create something exceptional. This background gives me a unique perspective on user experience and problem-solving.</p>
            <p>I am eager to leverage my diverse experiences to build meaningful software applications that make a positive difference. Let’s connect and explore how we can collaborate to create something extraordinary!</p>
            <p>David Mostoller<br></br>609-356-2011<br></br>dmostoller@gmail.com</p>
            <a href="https://calendly.com/dmostoller/15-minute-coffee-virtual-chat" target="_blank">Schedule a call on Calendly</a>   
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