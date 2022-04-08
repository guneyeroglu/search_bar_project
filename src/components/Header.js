import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://fintechyazilim.com/assets/img/business-2/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Fintech React Project
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
