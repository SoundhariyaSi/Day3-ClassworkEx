import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import coffeee from './coffeee.png'
import Navbar from 'react-bootstrap/Navbar';

function Naving() {

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img src={coffeee} width={35} height={35} alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.bluehillfarm.com/">Home</Nav.Link>
            <Nav.Link href="https://www.starbucks.in/ordering">Coffees</Nav.Link>
            <Nav.Link href="https://organicindia.com/collections/teas-infusions">Teas</Nav.Link>
            <Nav.Link href="https://www.delish.com/cooking/g1504/milkshake-recipes/">Milkshakes</Nav.Link>
            <Nav.Link href="https://www.starbucks.com/about-us/">AboutUs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Naving