import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Navbar, Form, Container } from 'react-bootstrap';
// Local
import CustomFooter from './components/Footer'
import Loader from './components/Loader'
import { Home } from './pages/Home';

function App() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  //denorauten@gmail.com latest for api, too many requests

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
            `/search?q=${search}`
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
  console.log(items);

  return (
    <div className="App">
    {/* ========= Navbar start ========= */}
    <div className="Navbar">
      <Navbar expand="lg" sticky="top" scrolling>
        <Container fluid className='w-100'>
          <Navbar.Brand href="#">
          <img src="https://img.icons8.com/fluency/48/null/news.png" alt='logo'/>          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"  className='bg-light opacity-20'/>
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
    {/* ========= Navbar end ========= */}

    <div className="min-vh-100">
        <Home/>
      {isLoaded ? (
        <>
        <Container fluid id="articles" className="my-5 p-5 w-100">
          <Row>
            <h2 className="text-decoration-underline my-2 p-3 display-3">What's happening in the world?</h2>
            {/* Mapping through array of API links from hosted Server side */}
            {items
  .filter(item => item.title.includes(search))
  .map(item => (
    <Col xs={12} md={6}>
      <Card id='card' className='w-100 my-3 border border-3 border-dark bg-dark' key={item.urlToImage}>
        <Card.Img variant="top" className='w-100' id='cardImg' src={item.urlToImage} alt='{item.urlToImage}' fluid/>
          <h6 className="text-light mx-3 my-2
          " key={item.author}><b>Author: {item.author}</b></h6>
        <Card.Body className='text-light opacity-75'>
          <h3 key={item.title}>{item.title}</h3>
          <h6 key={item.description}>
            {item.description}
          </h6>
          <br/>
        </Card.Body>
          <Button className='w-50 mx-auto my-5' variant="primary" key={item.url}><a target='_blank' rel='noopener noreferrer' className='text-decoration-none' href={item.url}>Go to Article</a></Button>
      </Card>
    </Col>
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
