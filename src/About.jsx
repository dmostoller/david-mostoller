
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
            <p>As a software engineer with a background in music, I bring a unique blend of technical proficiency and creativity to every project. With expertise in JavaScript, React, Python, SQL, Flask, .NET, HTML and CSS, I specialize in creating intuitive, user-focused applications that put the user experience front-and-center and strike a cohesive balance between form and function.</p>
            <p>I have previously worked as a software engineer for Entourage Yearbooks, a publishing company based in Princeton, NJ, and Zoomer, an RDS startup based in Philadelphia.  These roles gave me hands-on experience creating web applications and working collaboratively as a member of a team to design, test, and deploy software applications.</p>
            <p>At Entourage, I  became a team lead, reporting directly to the CEO, and was responsible for building the customer-facing website including an online store, tools for our internal production team, as well assisting with the integration of web-based layout software by Chili-Publish. At Zoomer, I was part of a team focused on data and strategy, and reported directly to the VP of Business Strategy. My job was to utilize web-based tools such as MapBox to create interactive maps and charts to help visualize and parse consumer data, to inform the executive decision making processes and attract investors during funding rounds.</p>
            <p>Drawing from these experiences, I have honed my communication and collaboration skills, enabling me to work effectively as a member of a team, and to communicate technical concepts in a clear and concise manner. I am adept at integrating and adapting to new technologies, and pride myself on my dependability and detail-oriented nature.</p>
            <p>I have also had a successful career as a professional musician, which enabled me to travel to over 40 countries to perform. Creating music is in many ways similar to programming, whether it’s taking abstract ideas and bringing them into the real world, or functioning seamlessly with your teammates to create something new. I believe that I can contribute a distinct perspective to a development team, one with a keen understanding of user experience. </p>
            <p>I’m passionate about leveraging my unique experience to create user-friendly solutions that leave a positive impact on the world, and look forward to the opportunity to develop meaningful software applications with a forward-thinking company. </p>
            <p>Let’s connect and explore how we can create something special together!</p>        
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
            <p>As a software engineer with a background in music, I bring a unique blend of technical proficiency and creativity to every project. With expertise in JavaScript, React, Python, SQL, Flask, .NET, HTML and CSS, I specialize in creating intuitive, user-focused applications that put the user experience front-and-center and strike a cohesive balance between form and function.</p>
            <p>I have previously worked as a software engineer for Entourage Yearbooks, a publishing company based in Princeton, NJ, and Zoomer, an RDS startup based in Philadelphia.  These roles gave me hands-on experience creating web applications and working collaboratively as a member of a team to design, test, and deploy software applications.</p>
            <p>At Entourage, I  became a team lead, reporting directly to the CEO, and was responsible for building the customer-facing website including an online store, tools for our internal production team, as well assisting with the integration of web-based layout software by Chili-Publish. At Zoomer, I was part of a team focused on data and strategy, and reported directly to the VP of Business Strategy. My job was to utilize web-based tools such as MapBox to create interactive maps and charts to help visualize and parse consumer data, to inform the executive decision making processes and attract investors during funding rounds.</p>
            <p>Drawing from these experiences, I have honed my communication and collaboration skills, enabling me to work effectively as a member of a team, and to communicate technical concepts in a clear and concise manner. I am adept at integrating and adapting to new technologies, and pride myself on my dependability and detail-oriented nature.</p>
            <p>I have also had a successful career as a professional musician, which enabled me to travel to over 40 countries to perform. Creating music is in many ways similar to programming, whether it’s taking abstract ideas and bringing them into the real world, or functioning seamlessly with your teammates to create something new. I believe that I can contribute a distinct perspective to a development team, one with a keen understanding of user experience. </p>
            <p>I’m passionate about leveraging my unique experience to create user-friendly solutions that leave a positive impact on the world, and look forward to the opportunity to develop meaningful software applications with a forward-thinking company. </p>
            <p>Let’s connect and explore how we can create something special together!</p>        
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