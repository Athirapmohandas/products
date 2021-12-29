import React from 'react'
import {Nav,Navbar,Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Home() {
    return (
        <div>
          <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
    <Link className="btn btn-outline-dark my-3 rounded btn" to="/addproduct">Add Product</Link>
    {/* <Link className="btn btn-outline-dark my-3 rounded btn" to="/removeproduct">Remove products</Link> */}
    <Link className="btn btn-outline-dark my-3 rounded btn" to="/viewproduct">List products</Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Home
