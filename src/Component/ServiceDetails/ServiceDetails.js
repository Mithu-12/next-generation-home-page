import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ServiceDetails.css'

const ServiceDetails = ({service}) => {
    const {date, img, discription} = service;
    return (
        <div>
            <Col  className="items-col">
                            <Card className='card service-col'>
                                <div className="imgStyle">
                                    <img
                                        className="d-block w-100 imgStyle"
                                        src={img}
                                        alt="Third slide"
                                    />
                                </div>
                                <Card.Body>
                                    <div className="date">
                                        <h5>{date}</h5>
                                    </div>
                                        <p>{discription}</p>
                                    
                                        
                                         </Card.Body>
                                         <div className="learnBtn">
                                         <div className="btn-styles">
                                             <span>Learn more</span>
                                        </div>
                                         </div>
                                </Card>
                        </Col>
        </div>
    );
};

export default ServiceDetails;