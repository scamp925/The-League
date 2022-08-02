/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button, NavDropdown,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className="navbar-container">
        <Link passHref href="/">
          <Navbar.Brand>HOME</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <NavDropdown title="TEAMS" id="basic-nav-dropdown">
              <NavDropdown.Item href="/teams/teams">PUBLIC TEAMS</NavDropdown.Item>
              <NavDropdown.Item href="/teams/teams">MY TEAMS</NavDropdown.Item>
              <NavDropdown.Item href="/teams/new">ADD A TEAM</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="PLAYERS" id="basic-nav-dropdown">
              <NavDropdown.Item href="/players/teamRoster">VIEW PLAYERS</NavDropdown.Item>
              <NavDropdown.Item href="/players/new">ADD A PLAYER</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Button variant="danger" className="sign-out-btn" onClick={signOut}>
        Sign Out
      </Button>
    </Navbar>
  );
}
