import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import {Link} from 'react-router-dom'

class NavComponent extends Component {
  render() {
    return (
      <>
        <Navbar className="top-navbar"  expand="md" style={{background:'#232F3E'}}> 
          <NavbarBrand href="/">
            <h>Amazon</h>
          </NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}
export default NavComponent;