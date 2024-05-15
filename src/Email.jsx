
import React, {useState, useRef} from "react"
import emailjs from '@emailjs/browser';
import {
    ModalHeader,
    ModalDescription,
    ModalContent,
    ModalActions,
    Button,
    Modal,
    MenuItem,
    Form,
    Icon,
    FormField,
    FormTextArea,
    
  } from 'semantic-ui-react'
import { useDarkMode } from "./context/darkMode"



const Email = () => {
    const {darkMode} = useDarkMode();
    const [open, setOpen] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_jz3d31c', 'template_sau8r19', form.current, {
        publicKey: '2CBV5usGCJRMr4WbB',
    })
        .then(() => {
            alert("Your Message Has Been Sent")
            setOpen(false)
        }, (error) => {
            alert("Your Message Cannot Be Sent", error.text)
        });
      };
 
   
    return (
      <>
      {(darkMode === true) ?
      <Modal
      basic
      closeIcon
      size={"small"}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<MenuItem><Icon name='mail' />Contact</MenuItem>}
    > 
      <ModalHeader>Get In Touch</ModalHeader>
      <ModalContent>
        <ModalDescription>
            <form class="ui form" ref={form} onSubmit={sendEmail}>
                <div class="field">
                    <label>Name</label>
                    <input type='text' name="from_name" placeholder="Your Name..."/>
                </div>
                <div class="field">
                    <label>Email</label>
                    <input type='email' name="reply_to" placeholder="Your Email..."/>
                </div>
                <div class="field">
                <label>Message</label>
                    <textarea name="message" placeholder="Your Message..."/>
                </div>
                <button class="ui positive fluid button" type="submit">Submit</button>
            </form>
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
    size={"small"}
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<MenuItem><Icon name='mail' />Contact</MenuItem>}
  > 
    <ModalHeader>Get In Touch</ModalHeader>
    <ModalContent>
      <ModalDescription>
          <form class="ui form" ref={form} onSubmit={sendEmail}>
              <div class="field">
                  <label>Name</label>
                  <input type='text' name="from_name" placeholder="Your Name..."/>
              </div>
              <div class="field">
                  <label>Email</label>
                  <input type='email' name="reply_to" placeholder="Your Email..."/>
              </div>
              <div class="field">
              <label>Message</label>
                  <textarea name="message" placeholder="Your Message..."/>
              </div>
              <button class="ui positive fluid button" type="submit">Submit</button>
          </form>
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
export default Email