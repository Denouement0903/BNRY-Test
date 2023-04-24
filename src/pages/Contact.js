import React from 'react'
import '../App.css'
import { MDBInput, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';


export const Contact = () => {
  return (
    <div className='contact my-5 p-5 mx-auto' id="contact" style={{ width: '100%', maxWidth: '1000px' }}>
    <form   action="https://formspree.io/f/myyalbgl"
  method="POST" id='form' className='text-center mx-auto' style={{ width: '100%', maxWidth: '1000px', height: '100%' }}>
        <h1 className='text-dark display-1 mx-5 animate__animated animate__fadeInLeft'>Contact</h1>
        <hr className='animate__animated animate__fadeIn' size="4" align="center" width="100%" color="black"/>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' name='name'/>

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' name='email' />

      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' name='subject'/>

      <MDBTextArea wrapperClass='mb-4' label='Message' name='message'/>

      <MDBBtn color='primary' type='submit' className='my-4'>
        Send
      </MDBBtn>
    </form>
    </div>
  )
}
