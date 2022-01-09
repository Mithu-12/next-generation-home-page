import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import phone from '../bannerImage/Phone.png'
import './MobileApps.css'
const MobileApps = () => {
    return (
        <div className='app-container'>
            <Container >
            <Row className="app">
                <Col xs={12} md={6}>
                    <div className="app-items">
                      <div className="app-content">
                          <div className="app-font">
                         <h2>Download Our App</h2>
                      </div>
                      <div className="banner-summary">
                      <p>The place to store various data that you can access at any    time through the internet  and where you can carry it. <br/>
                        This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse. </p>
                      </div>
                      <div className="btn-styles">
                          <span>Download</span>
                      </div>
                      </div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="app-image">
                    <img  className="app-img" src={phone} alt="" />
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default MobileApps;