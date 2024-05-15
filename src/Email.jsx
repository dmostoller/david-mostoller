
import React, {useState, useRef} from "react"
import {
    ModalHeader,
    ModalDescription,
    ModalContent,
    ModalActions,
    Button,
    Modal,
    MenuItem,
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
      trigger={<MenuItem>Contact</MenuItem>}
    > 
      <ModalHeader>Get In Touch</ModalHeader>
      <ModalContent>
        <ModalDescription>
        <Form ref={form} onSubmit={sendEmail}>
            <FormField name="from_name">
            <label>Name</label>
            <input placeholder='Your Name...' />
            </FormField>
            <FormField name="reply_to">
            <label>Email Address</label>
            <input placeholder='Your Email...' />
            </FormField>
            <FormTextArea name="message" label='Message' placeholder='Your Message...' />
            <FormField name="submit">
            <Button
                positive
                content="Submit"
                type="submit"
                fluid
            />  
            </FormField>
        </Form>
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
    )    
}