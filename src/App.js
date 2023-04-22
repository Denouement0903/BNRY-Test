import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
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
 <Container fluid>
  <Row>
    {items.map(item => (
      <>
        <h4 key={item.title}>
        {item.title}
        </h4>
        <Col  xs={4}key={item.description}>
          {item.description}

          
        </Col>
        <Col  xs={6} key={item.urlToImage}>
          <Image src={item.urlToImage} alt='{item.urlToImage}' fluid className="min-vh-75 rounded my-auto d-block"/>
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
