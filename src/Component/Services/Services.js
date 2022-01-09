import React, { useState, useEffect } from 'react';
import {  Container, Row } from 'react-bootstrap';
import './Services.css';

import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
      fetch('./product.json')
      .then(res => res.json())
      .then(data => setServices(data))
        
    }, [])
    return (
        <div>
            <div className="service-items">
                <Container>
                    <Row xs={1} md={3} className='items my-5'>
                        {
                            services.map(service => <ServiceDetails
                                service = {service}
                                key = {service.id}
                            >
                             </ServiceDetails>)
                        }
                        
                       
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Services;