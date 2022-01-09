import React, { useState, useEffect } from 'react';
import {  Container, Row } from 'react-bootstrap';
import { CgMathEqual } from 'react-icons/cg';
import { BsSearch } from 'react-icons/bs';
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
                    <div className="services-content">
                    <h2>WE AIM TO ENCOURAGE TO CREATION AND DISSEMINATION OF KNOWLEDGE THAT BENEFITS INDUSTRY, GOVERNMENT, AND SOCIETY.</h2>
                    <h2 className="serviceEquall"><CgMathEqual className='equall'></CgMathEqual><span>M</span><CgMathEqual className='equall'></CgMathEqual></h2>
                    <h2>Our Latest Issue</h2>
                    <form action="">
                           <input type="text" placeholder=" - select category - "></input>
                           <input type="text" placeholder="select by name"></input>
                           <span className='search'><BsSearch ></BsSearch></span>
                           </form>
                    </div>
                    <Row xs={1} md={3} className='services-items my-5'>
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