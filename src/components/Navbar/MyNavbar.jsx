import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../../assets/icons/jp-logo-no-back.png'
import './MyNavbar.style.css'

export const MyNavbar = () => {
  return (
    <>
      <Navbar
        // fixed='top'
        collapseOnSelect
        expand='md'
        // bg='dark'
        variant='dark'
        className='animate-navbar nav-theme justify-content-between'
      >
        <Navbar.Brand href='#home'>
          <img className='logo' src={Logo} alt='My Portfolio Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            {/* -------------------------------------------------------- */}
            {/* Links for navigation to different parts of the portfolio */}
            {/* -------------------------------------------------------- */}
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#skills'>Skills</Nav.Link>
            <Nav.Link href='#experience'>Experience</Nav.Link>
            <Nav.Link href='#Projects'>Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
