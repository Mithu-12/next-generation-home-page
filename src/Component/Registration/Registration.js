import React from 'react';
import { Row } from 'react-bootstrap';
import Offer from '../Offer/Offer';
import './Registration.css'





const Registration = () => {
  return (
    <div className='timeBanner'>
            <Row xs={1} md={2} className="g-4 my-5">
                <div className="join-section my-4 justify-between">
                <div className=" d-flex flex-column justify-content-center align-items-center ms-2 container">
                    <h1 className="text-center ">Join us for FREE to get instant <span className="text-danger">email updates!</span></h1>
                    <p className="">Subscribe and get notified at first on the latest update and offers!</p>
                    <div className="join-area">
                        <input className="input-email" type="email" name="email"/>
                    <button className="button btn-warning">JOIN
                    </button>
                    </div>
                    </div>
                </div>
                <div className=" text-center">
                    {/* <img src={img} className="card-img-top join" alt="..."/> */}
                    <Offer></Offer>
                        
                </div>
            </Row>
    </div>
    );
};

export default Registration;