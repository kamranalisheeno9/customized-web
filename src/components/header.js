import React, { useState } from 'react';
import { Container, Row, Col, Offcanvas, Dropdown } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import './header.css'
import Logo from "../assets/images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Header = (props) => {
    const [show, setShow] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseSmallNav = () => setShowNav(false);
    const handleOpenSmallNav = () => setShowNav(true);

    return (
        <>
            <Offcanvas show={showNav} onHide={handleCloseSmallNav} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <div>
                        </div>
                    </Offcanvas.Title>

                </Offcanvas.Header>

                <Offcanvas.Body>
                    <ul className="small-nav-items">
                        <li className="nav-item" >

                            <Dropdown className="small-nav-dropdown">
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    Início
                                </Dropdown.Toggle>


                                <Dropdown.Menu>
                                    <Dropdown.Item >
                                        <Link onClick={handleCloseSmallNav} to="/">
                                            The Pitman Way
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item >
                                        <Link onClick={handleCloseSmallNav} to="/">
                                            Challenge 2025
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item >
                                        <Link onClick={handleCloseSmallNav} to="/">
                                            Carrieras
                                        </Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </li>
                        <li className="nav-item" >
                            
                            <Dropdown className="small-nav-dropdown">
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                Quem Somos
                                </Dropdown.Toggle>


                                <Dropdown.Menu>
                                    <Dropdown.Item >
                                        <Link onClick={handleCloseSmallNav} to="/">
                                        Nossos Sócios
                                        </Link>
                                    </Dropdown.Item>
                                    
                                </Dropdown.Menu>
                            </Dropdown>

                        </li>
                        <li className="nav-item" >
                            <Link to="">
                                Pitmen Trends
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link to="">
                                Insights
                            </Link>
                        </li>
                        <li className="nav-item" >
                           <Dropdown className="small-nav-dropdown">
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                Áreas de Negócios
                                      </Dropdown.Toggle>


                                <Dropdown.Menu>
                                    <Dropdown.Item >
                                        <Link onClick={handleCloseSmallNav} to="/assurance">
                                        Assurance
                                        </Link>
                                    </Dropdown.Item>
                                    
                                    <Dropdown.Item >
                                        <Link onClick={handleCloseSmallNav} to="/tax">
                                        Tax
                                        </Link>
                                    </Dropdown.Item>
                                    
                                    <Dropdown.Item >
                                        <Link onClick={handleCloseSmallNav} to="/">
                                        Risk Management
                                        </Link>
                                    </Dropdown.Item>
                                    
                                    <Dropdown.Item >
                                        <Link onClick={handleCloseSmallNav} to="/">
                                        Advisory
                                        </Link>
                                    </Dropdown.Item>
                                    
                                    <Dropdown.Item >
                                        <Link onClick={handleCloseSmallNav} to="/">
                                        BPO
                                        </Link>
                                    </Dropdown.Item>
                                    
                                    <Dropdown.Item >
                                        <Link onClick={handleCloseSmallNav} to="/">
                                       Setories
                                        </Link>
                                    </Dropdown.Item>
                                    
                                </Dropdown.Menu>
                            </Dropdown>

                        </li>

                    </ul>
                </Offcanvas.Body>

            </Offcanvas>
            <Offcanvas className="search-bar" show={show} onHide={handleClose} placement="top">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <div>
                            <input className="search-input" type="text" placeholder="Type to search..." />
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>

            </Offcanvas>
            <Container fluid className="header-container" >
                <Row className="justify-content-around header-row">
                    <Col xs={2}>
                    <Link to="/">
                        <img src={Logo} width="200px" alt="logo" />
                    </Link>
                    </Col>
                    <Col xs={6}>
                        <ul className="navbar-list">
                            <li>
                                <Link className="main-li-a" to="">

                                    Início
                                </Link>
                                <ul className="inner-nav">
                                    <li>
                                        <Link to="/">
                                            The Pitmen Way
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Challenge 2025
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/">
                                            Carreiras
                                        </Link>
                                    </li>

                                </ul>
                            </li>
                            <li>
                                <Link className="main-li-a" to="">

                                    Quem Somos
                                </Link>
                                <ul className="inner-nav">
                                    <li>
                                        <Link to="/">
                                            Nossos Sócios
                                        </Link>
                                    </li>

                                </ul>
                            </li>
                            <li>
                                <Link className="main-li-a" to="">

                                    Pitmen Trends
                                </Link>
                            </li>
                            <li>
                                <Link className="main-li-a" to="">

                                    Insights
                                </Link>
                            </li>
                            <li>
                                <Link className="main-li-a" to="">

                                    Áreas de Negócios
                                </Link>

                                <ul className="inner-nav">
                                    <li>
                                        <Link to="/assurance">
                                            Assurance
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/tax">
                                            Tax
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Risk Management
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Advisory
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/">
                                            BPO
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/">
                                            Setores
                                        </Link>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={1}>
                        <FiSearch onClick={handleShow} className="search-icon" />
                        <GiHamburgerMenu onClick={handleOpenSmallNav} className="menu-icon" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Header;