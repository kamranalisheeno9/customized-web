import './footer.css';
import React, { useState } from 'react';
import Logo from "../assets/images/logo.png"
import { Container, Row, Col } from 'react-bootstrap';
import { BsWifi,BsTwitter,BsYoutube } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import { FaFacebookF } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Footer=()=> {
  return (
    <Container fluid className="footer-container">
        <Container className="mb-4">

    <img  src={Logo} width="200px" alt="" />
        </Container>
        <Container>
            <Row className="justify-content-between">
                <Col sm={5} md={5} lg={3}>
                    <h4 className="mt-1 mb-4 search-text">Search</h4>
                    <input className="footer-search-input" type="text" placeholder="Search Site" />
                </Col>
                <Col md={6}>
                    <Row className="justify-content-end">
                        <Col className="link-footer" xs={6} md={3}>
                            <Link to="/">
                            Alumni

                            </Link>
                        </Col>
                        <Col className="link-footer" xs={6} md={3}>
                            <Link to="/">
                            Canal Denúncia

                            </Link>
                        </Col>
                        <Col className="link-footer" xs={6} md={3}>
                            <Link to="/">
                            Carreiras

                            </Link>
                        </Col>
                        <Col className="link-footer" xs={6} md={3}>
                            <Link to="/">
                            Newsroom
                            </Link>
                        </Col>
                        <Col className="link-footer" xs={6} md={3}>
                            <Link to="/">
                            Privacy Policy

                            </Link>
                        </Col>
                        <Col className="link-footer" xs={6} md={3}>
                            <Link to="/">
                            Pitmen Intranet

                            </Link>
                        </Col>

                    </Row>
                    <ul className="footer-icon-list mt-4">
                        <li>
                            <Link to="/">

                                <ImLinkedin2 />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <BsTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <FaFacebookF />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <BsYoutube />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <BsWifi />
                            </Link>
                        </li>
                        
                    </ul>
                </Col>
            </Row>
        </Container>
       </Container>
  );
}

export default Footer;
