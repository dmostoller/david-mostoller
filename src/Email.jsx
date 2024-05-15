
import React, {useState, useRef} from "react"
import {
    ModalHeader,
    ModalDescription,
    ModalContent,
    ModalActions,
    Button,
    Modal,
    Form,
    FormField,
    FormTextArea,
  } from 'semantic-ui-react'
  import emailjs from '@emailjs/browser';


export default function Email () {
    const [open, setOpen] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_jz3d31c', 'template_sau8r19', form.current, '2CBV5usGCJRMr4WbB')
        .then((result) => {
            alert("Your Message Has Been Sent")
            setOpen(false)
        }, (error) => {
            alert("Your Message Cannot Be Sent")
        });
      };
 
   
    return (
    <Modal
      closeIcon
      size={"small"}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Contact</Button>}
    > 
      <ModalHeader>Get In Touch</ModalHeader>
      <ModalContent>
        <ModalDescription>
        <Form ref={form} onSubmit={sendEmail}>
            <FormField>
            <label>Name</label>
            <input name="from_name" placeholder='Your Name...' />
            </FormField>
            <FormField>
            <label>Email Address</label>
            <input name="reply_to" placeholder='Your Email...' />
            </FormField>
            <FormTextArea name="message" label='Message' placeholder='Your Message...' />
        </Form>
        </ModalDescription>
      </ModalContent>
      <ModalActions>
        <Button
          positive
          content="Submit"
          type="sumbmit"
          icon='send'
          labelPosition="right"
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
    )    
}