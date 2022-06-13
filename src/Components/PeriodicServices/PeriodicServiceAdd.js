import React, { useState, useEffect } from 'react';
import { CardBody, Input, Label, ButtonGroup, Button, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
import SideBar from './SideBar';
import MidBar from './MidBar';
import Audi17 from '../../Images/CarGarage/Manufacturer 200 X 200/Audi17.jpeg';
import Venue from '../../Images/CarBrand/Models/2 Hyundai/Venue.jpeg';
import Car from '../../Images/ImagesAll/drawable-xhdpi/Car.png';
import Elitei20 from '../../Images/CarGarage/Models/2 Hyundai/Elitei20.jpeg';
import qr from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/qr.png';
import Fastaglogo from '../../Images/Fastaglogo.png';
import Baleno from '../../Images/CarBrand/Models/1 Maruti Suzuki/WBG/Baleno.png';
import BasicService from '../../Images/BasicService.png';
import StandardService from '../../Images/StandardService.png';
import EngineScanning from '../../Images/EngineScanning.png';
import ComprehensiveService from '../../Images/ComprehensiveService.png';
import CompleteService from '../../Images/CompleteService.png';
import CarInspection from '../../Images/CarInspection.png';
import StarterMotor from '../../Images/StarterMotor.png';
import CarFluid from '../../Images/CarFluid.png';
import systemUpdate from '../../Images/systemUpdate.png';
import check from '../../Images/check.png';
import PS1 from '../../Images/ImagesAll/drawable-xxxhdpi/PS1.png';
import Estimate from './../../Images/drawable-xxhdpi/estimate.png'
import ServiceBox from './serviceBox';

function PeriodicServiceAdd(props) {

    return <>
        {
            props.isServiceSelect ?
                <ServiceBox isServiceSelect={props.isServiceSelect}
                    car={props.car}
                    setChangeCar={props.setChangeCar}
                    setCheckout={props.setCheckout}
                    isGarageSelected={props.isGarageSelected}
                    setCarSelect={props.setCarSelect}
                    setGarageSelected={props.setGarageSelected}>
                </ServiceBox>
                : <><div className="progressbar">
                    <div className="prog12">
                    </div>
                    <div className="pagesize1"><li></li><li>|</li><li>|</li><li>|</li><li>|</li><li></li></div>
                    <div className="pagesize">
                        <li>E</li>
                        <li>Vehical</li>
                        <li>Service</li>
                        <li>Garage</li>
                        <li>Basic</li>
                        <li>F</li>
                    </div>
                </div>
                    <div className='container-fluid px-5'>

                        <Row>
                            <Col sm={4} >
                                <div class="boxlast py-3 px-3" style={{ textAlign: 'Left' }}>
                                    <Row className='m-3'>
                                        <Col sm={8}>
                                            <p className='poppins18B'>{props.car.car}</p>
                                            <p className='poppins12light'>{props.car.fueltype.toUpperCase()}</p>
                                            <h6 style={{ color: 'red', cursor: "pointer" }} onClick={() => { props.setChangeCar(true); props.setCarSelect(false) }} ><i class="far fa-edit" ></i>change</h6>
                                        </Col>
                                        <Col sm={4}><img src={`${process.env.REACT_APP_Api_Url}models/${props.car.make}/${props.car.car}.jpeg`} style={{ height: '90px', float: 'right', width: '140px' }} alt="error"></img></Col>
                                    </Row>
                                    <hr size="3" color="black" />
                                    <><Row>
                                        <div style={{ textAlign: 'center' }}>
                                            <img src={Estimate} alt="error"></img>
                                        </div>
                                    </Row>

                                        <Row style={{ textAlign: 'center', marginTop: "50px" }}>
                                            <div style={{ textAlign: 'center', marginBottom: "50px" }}>
                                                <p style={{ fontSize: '20px', color: 'blue' }}>No Estimates yet!</p>
                                                <i class="fas fa-shopping-cart"></i> Start adding service to your cart to see prices</div>
                                        </Row></>
                                </div>
                            </Col>
                        </Row>
                    </div></>}
    </>
}
export default PeriodicServiceAdd;



