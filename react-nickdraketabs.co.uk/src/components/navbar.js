import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashLinkLink, HashLink } from 'react-router-hash-link';

import './Navbar.css';

export default class AppNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="faded" fixed="top" light expand="sm">
        <NavbarBrand tag={HashLink} to="/">Nick Drake Tabs</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={HashLink} to="/#revisions">Revisions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={HashLink} to="/#tabs">Tabs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/tunings/">Tunings</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}