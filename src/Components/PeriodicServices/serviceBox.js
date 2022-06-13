import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../PeriodicServices/periodic.css';
//import './LoginBook.css';
import FirstChoice from '../../Images/ImagesAll/drawable-xxxhdpi/FirstChoice.png';
import { useSelector, useDispatch } from 'react-redux';
import { selectVehical, getCartTotal, addItem, bannerClose, isInCart } from '../../redux/action';
import { withRouter } from "react-router-dom";


const ServiceBox = (props) => {
    console.log(props);
    return (
        <div class="boxlast">
            <Row className=' m-0 p-1' style={{ backgroundColor: '#F8F9FA', borderRadius: '10px 10px 0px 0px ' }}>
                <Col sm={8}>
                    <p className='poppins18B'>{props.car.car}</p>
                    <p className='poppins12light'>{props.car.fueltype.toUpperCase()}</p>
                    <h6 style={{ color: 'red', cursor: "pointer" }} onClick={() => { props.setChangeCar(true); props.setCarSelect(false) }} ><i class="far fa-edit" ></i>change</h6>
                </Col>
                <Col sm={4}><img src={`${process.env.REACT_APP_Api_Url}models/${props.car.make}/${props.car.car}.jpeg`} style={{ height: '90px', float: 'right', width: '140px' }} alt="error"></img></Col>
            </Row>

            <div className='p-0 m-0 cart_top' style={{ backgroundColor: '#4EE59D' }}>
                <h6>Cart</h6>
                <p>({props.isServiceSelect.length || 0}) Items</p>
            </div>
            <div className='scrollboxservices'>
            {props.isServiceSelect && props.isServiceSelect.map((service) => {
                return (
                        <div className='px-3 mt-3  cartcol'>
                            <div className='titlemnt'>
                                <h6 className=''>{service.package_name}</h6>
                                <p className=''>{service.months_or_kms}</p>
                            </div>
                            <div>
                                <div className="btnquntity">
                                    <button>-</button>
                                    <span>10</span>
                                    <button>+</button>
                                </div>
                            </div>
                            <div>
                                <div className="amountcart">
                                    <div className=''>
                                        <small>₹999</small>
                                        <p>&#8377;{service.costs}</p>
                                    </div>
                                    <div className='cross'><i class="far fa-times-circle"></i></div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                )
            })

            }
                    </div>

            <Row className='py-2 m-0 cartfoot'>
                
                <Col sm={6} className='OpenSans22W'><Link onClick={()=>props.setCheckout(true)} className='submitpayment'>Checkout</Link></Col>
            </Row>
        </div>
    );
};


export default ServiceBox;   