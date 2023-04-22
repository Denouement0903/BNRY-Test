import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
// import CustomNavbar from './components/Navbar'
import { Navbar, Form, Container } from 'react-bootstrap';
import CustomFooter from './components/Footer'
import Loader from './components/Loader'
import { Home } from './pages/Home';
// import Carousel from './components/Carousel';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Articles from './pages/Articles';



function App() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // simp4hitagi@gmail.com latest for api, too many requests
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (!search) {
          response = await axios.get(
            `/articles`
          );
          console.log(response);
        } else {
          response = await axios.get(
            `/search`
          );
        }
        setIsLoaded(true);
        setItems(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search]);

  

  return (
    <div className="App">
    {/* search doesn't unless nav and data are on same page */}
          {/* Navbar */}
    {/* <CustomNavbar/> */}
    <div className="Navbar">
      <Navbar expand="lg" sticky="top" scrolling>
        <Container fluid className='w-100'>
          <Navbar.Brand href="#">
          <img src="https://img.icons8.com/fluency/48/null/news.png" alt='logo'/>          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <a className="m-3 text-decoration-none" href="#home">Home</a>
          <a className="m-3 text-decoration-none" href="#articles">Articles</a>
            <Form className="d-flex justify-content-end align-content-end">
              <Form.Control
                type="search"
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>


    <div className="min-vh-100">
    {/* using ternary operator to check if data is loaded and if not to display loader */}
      {isLoaded ? (
        // empty tag is like a div, but called fragment to display content in browser
        <>
        <Home/>
 <Container fluid id="articles" className="my-5 p-5 w-100">
  <Row>
 <h2 className="text-decoration-underline my-2 p-3 display-3">What's happening in the world?</h2>
        <h2 className='display-5'><b>Apple</b></h2>
        <Col >
            {/* =======Carousel======= */}
            <Carousel fade>`
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/vBpkfzLD/4d-ultra-hd-binary-robot-f7nfr3b9hfyp4j54.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/mgbqYhM3/gUhC7b.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/YSPsB3P8/e29a9049d142efa67c363057a8a05d05.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
{/* =======Carousel======= */}

        </Col>
        <h2 className='display-5'><b>Tesla</b></h2>
    {items.map(item => (
      <>
        <Col xs={6}>
        {/* ========Card======== */}
        <Card className='w-75 my-3 border border-3 border-dark' key={item.urlToImage}>
      <Card.Img variant="top" src={item.urlToImage} alt='{item.urlToImage}' fluid/>
      <Card.Body className='bg-dark text-light opacity-75'>
        <h3 key={item.title}>{item.title}</h3>
        <h6 key={item.description}>
        {item.description}
        </h6>
           <h6 className="text-dark" key={item.author}><b>Author: {item.author}</b></h6>
        <Button variant="primary" key={item.url}><a target='_blank' rel='noopener noreferrer' class='text-decoration-none' href={item.url}>Go to Article</a></Button>
      </Card.Body>
    </Card>


        {/* ========Card======== */}
          
        </Col>

      </>
    ))}
      </Row>
 </Container>
        </>
      ) : (
        //Loader
        <Loader/>

      )}

    </div>
      <CustomFooter/>
    </div>
  );
}

export default App;
