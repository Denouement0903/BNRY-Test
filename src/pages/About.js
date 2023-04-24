import React from 'react'
import '../App.css'
import { Container, Col } from 'react-bootstrap'

export const About = () => {
  return (
    <div className='about' id="about">
       <br/>
        <h1 className='text-light display-1 mx-5 animate__animated animate__fadeInRight'>About us</h1>
        <hr className='animate__animated animate__fadeIn' size="4" align="center" width="100%" color="white"/>
        <Container>
        <Col md={6}>
        <h3 className='text-light my-4 animate__animated animate__fadeInLeft'>A simple mission...</h3>
        <p className='aboutUs'> We provide you with access to news articles that are 5 years old. While some might consider this old news, we believe that it's important to revisit past events and analyze how they have shaped our current world. By reading these articles, you'll gain a deeper understanding of past events and how they have influenced our present. You'll also have the opportunity to reflect on how much things have changed since these articles were published. While our articles are 5 years old, we strive to ensure that the information remains relevant and accurate. Our team carefully selects articles that we believe are still important and informative today.</p>
        </Col>

        </Container>
        <br/>
    </div>
  )
}
