import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <Container className="">
                <Row className='footer-container'>
                    <Col xs={12} md={4}>
                        <div className="footer-items">
                        <div className="footer-item">
                           <img src='https://mycoauthor.in/assets/imgs/theme/logo-new.svg' alt="" /> 
                           <span></span>
                           <p className='mt-3'>MY Coauthor Society, 11215 NewYork  
                            419 E 72ndSt
                            </p>
                            <p>info@mycoauthor.com
                                1-232-3434 (Main)</p>
                        </div>
                        
                        </div>
                        
                    
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="footer-items1">
                        <div className="footer-item1">
                                <p>About</p>
                                <p>Protfolio</p>
                                <p>Features</p>
                                <p>Carier</p>
                                <p>DW News</p>
                        </div>
                        <div className="footer-item1">
                                <p>Help</p>
                                <p>Support</p>
                                <p>SignUp</p>
                                <p>Guide</p>
                                <p>Reports</p>
                                <p>QBA</p>
                        </div>
                        </div>
                        </Col>
                        <Col xs={12} md={4}>
                        <div className="footer-logo">
                           <p>Social Media</p>
                           <span><i class="fab fa-facebook"></i></span>
                           <span><i class="fab fa-instagram"></i></span>
                           <span><i class="fab fa-twitter"></i></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;