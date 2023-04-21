import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Form, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'


function App() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(`http://localhost:4000`);
        // const response = await axios.get(`http://localhost:4000/search?search=${search}`);
        const response = await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2023-04-20&to=2023-04-20&sortBy=popularity&apiKey=9bd2f1c3020c48ff8cc54997bbcafb52`)
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

      {/* Navbar */}
      <Navbar bg="light" expand="lg" sticky="top" scrolling>
        <Container fluid>
          <Navbar.Brand href="#"><img src="" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="./pages/Articles.jsx">Articles</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" onChange={(event) => setSearch(event.target.value)} placeholder="Search" className="me-2" aria-label="Search" />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    {/* using ternary operator to check if data is loaded and if not to display loader */}
      {isLoaded ? (
        // empty tag is a fragment to display content in browser
        <>
          <h3>Data successfully loaded</h3>
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


          <ul>
          </ul>
        </>
      ) : (

        <h5>Loading data...</h5>

      )}
    </div>
  );
}

export default App;
