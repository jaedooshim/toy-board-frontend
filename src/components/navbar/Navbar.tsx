import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function CustomNavbar({ darkMode, toggleDarkMode } : any) {
    const navbarStyle = {
        height : '24px',
        width : '1px',
        backgroundColor : darkMode ? 'lightgray' : 'gray',
        margin : '0 10px'
    }
    return (
        <Navbar bg={darkMode ? "dark" : "light"} expand="lg" className={`shadow-md ${darkMode ? "navbar-dark" : "navbar-light"}`}>
            <Container>
                <Navbar.Brand href="/">게시판</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto d-flex align-items-center">
                        <Nav.Link href="/signup" className={`${darkMode ? "text-light" : "text-dark"} hover:text-gray-900`}>회원가입</Nav.Link>
                        <span style={navbarStyle}></span>
                        <Nav.Link href="/login" className={`${darkMode ? "text-light" : "text-dark"} hover:text-gray-900`}>로그인</Nav.Link>
                        <span style={navbarStyle}></span>
                        <Nav.Link href="/my" className={`${darkMode ? "text-light" : "text-dark"} hover:text-gray-900`}>내 정보</Nav.Link>
                        <span style={navbarStyle}></span>
                    </Nav>
                    <Button variant={darkMode ? "light" : "dark"} onClick={toggleDarkMode} className='ml-2'>
                        {darkMode ? "☀️" : "🌙"}
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
