import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
// import CustomNavbar from './components/Navbar'
import { Navbar, Nav, Form, Container } from 'react-bootstrap';
import CustomFooter from './components/Footer'
import Loader from './components/Loader'



function App() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2023-03-21&sortBy=publishedAt&apiKey=f17fef0a90de4501b5dc92f582865a4e`)
  //       setIsLoaded(true);
  //       setItems(response.data.articles);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // },);


  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (!search) {
          response = await axios.get(
            `https://newsapi.org/v2/everything?q=tesla&from=2023-03-21&sortBy=publishedAt&apiKey=83f798474f6b46edbe0f82c0f4557d81`
          );
        } else {
          response = await axios.get(
            `https://newsapi.org/v2/everything?q=${search}&from=2023-03-21&sortBy=publishedAt&apiKey=83f798474f6b46edbe0f82c0f4557d81`
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
      <Navbar bg="light" expand="lg" sticky="top" scrolling>
        <Container fluid>
          <Navbar.Brand href="#">
          <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/null/external-news-seo-and-media-flatart-icons-flat-flatarticons.png" alt='logo'/>          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="./pages/Articles.jsx">Articles</Nav.Link>
            </Nav>
            <Form className="d-flex">
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
