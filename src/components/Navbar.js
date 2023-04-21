// import React, { useEffect, useState } from 'react';
// import { Navbar, Nav, Form, Container } from 'react-bootstrap';

// export default function CustomNavbar() {
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     // Code to run on search state change
//   }, [search]);

//   return (
//     <div className="Navbar">
//       <Navbar bg="light" expand="lg" sticky="top" scrolling>
//         <Container fluid>
//           <Navbar.Brand href="#">
//           <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/null/external-news-seo-and-media-flatart-icons-flat-flatarticons.png" alt='logo'/>          </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
//               <Nav.Link href="/">Home</Nav.Link>
//               <Nav.Link href="./pages/Articles.jsx">Articles</Nav.Link>
//             </Nav>
//             <Form className="d-flex">
//               <Form.Control
//                 type="search"
//                 onChange={(event) => setSearch(event.target.value)}
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//               />
//             </Form>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }
