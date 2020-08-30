import React, { useState } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,
  NavLink} from 'reactstrap';
import styled from "styled-components";

const NavStyle = styled.div `
.navbar{
  background: transparent;
}
`

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavStyle>
    <div>
        <Navbar color="light" light expand="md" className="fixed-top">
          <NavbarBrand href={"/home"}>HOME</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href={"/facts"}>Facts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"/farmers-markets"}>Farmers Markets</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </NavStyle>
  );
}

export default NavBar;
