import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TryFree.css'

const TryFree = () => {
    return (
        <div className='sub-container'>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="sub-content">
                            <h2>Join for free!</h2>
                            <p>Get limited 1 week free try our features!</p>
                        </div>

                    </Col>
                    <Col xs={12} md={6}>
                        <div className="try-button">
                        <div className="btn-styles">
                          <span>Learn more</span>
                        </div>
                           <div className="deme">
                           <div className="input">
                           <span>Request Demo <i class="fas fa-arrow-right"></i></span>
                           </div>
                           </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TryFree;