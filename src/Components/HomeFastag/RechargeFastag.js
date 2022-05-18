import React from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './HomeFasTag.css';
import Fastaglogo from '../../Images/Fastaglogo.png';

const RechargeFasTag = () => (
    <>
        <div className='conatiner-fluid px-5 py-2'>
        <Row>
        <div className='linkhead'>
                    <Link to ="/HomeFastag"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/HomeFastag">Booking Confirmation</Link>
                </div>
        </Row>

        <div>
        <Row>
                <p className='poppins20 py-4'>Recharge for new vehicle</p>
            </Row>
            <Row>
                <Col sm={10}>
                    <Row>
                        <Col sm={5}>
                            <label className='poppins18 py-2'>Vehicle number</label><br></br>
                            <input className='InputNum' type="text" placeholder='Enter your vehicle registration no.'></input>
                        </Col>
                        <Col sm={2} className='py-3'><p style={{fontSize:'34px',fontWeight:'bold',color:'#5D6186'}}>OR</p></Col>
                        <Col sm={5}>
                            <label className='poppins18 py-2'>Chassis number</label><br></br>
                            <input className='InputNum' type="text" placeholder='Enter your vehicle chassis no.'></input>
                        </Col>
                    </Row>
                </Col>
                <Col sm={2} className='py-3'>
                    <Link to="/RechargeFastag1"><button className='proceedbtn '>Proceed</button></Link>
                </Col>
            </Row>
            <Row>
                <p className='poppins20 py-3'>Your linked fastags</p>
            </Row>
        </div>
            
            <Row>
            <div className='cardsScrollBox'>
            <ul className='cards'>
            <li>
                <div className='yellowcard p-4'>
                    <Row>
                        <Col sm={6}><svg xmlns="http://www.w3.org/2000/svg" width="114.638" height="24.304" viewBox="0 0 114.638 24.304">
  <g id="Group_18163" data-name="Group 18163" transform="translate(113.931 23.597) rotate(180)" opacity="0.6">
    <path id="Path_19600" data-name="Path 19600" d="M11.445,22.89l3.2-3.2L6.4,11.445,14.647,3.2,11.445,0,0,11.445Z" transform="translate(98.577 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_19601" data-name="Path 19601" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.207-3.2Z" transform="translate(92.003 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.938"/>
    <path id="Path_19602" data-name="Path 19602" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(85.428 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.875"/>
    <path id="Path_19603" data-name="Path 19603" d="M6.409,11.445,14.658,3.2,11.445,0,0,11.445,11.445,22.89l3.213-3.2Z" transform="translate(78.854 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.813"/>
    <path id="Path_19604" data-name="Path 19604" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(72.286 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.75"/>
    <path id="Path_19605" data-name="Path 19605" d="M6.409,11.445,14.646,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(65.717 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.688"/>
    <path id="Path_19606" data-name="Path 19606" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(59.143 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.625"/>
    <path id="Path_19607" data-name="Path 19607" d="M6.4,11.445,14.648,3.2,11.446,0,0,11.445,11.446,22.89l3.2-3.2Z" transform="translate(52.573 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.563"/>
    <path id="Path_19608" data-name="Path 19608" d="M6.4,11.445,14.644,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(46.002 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.5"/>
    <path id="Path_19609" data-name="Path 19609" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.208-3.2Z" transform="translate(39.432 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.438"/>
    <path id="Path_19610" data-name="Path 19610" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(32.855 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.375"/>
    <path id="Path_19611" data-name="Path 19611" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(26.284 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.313"/>
    <path id="Path_19612" data-name="Path 19612" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(19.712 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.25"/>
    <path id="Path_19613" data-name="Path 19613" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(13.142 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.188"/>
    <path id="Path_19614" data-name="Path 19614" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(6.571 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.125"/>
    <path id="Path_19615" data-name="Path 19615" d="M6.4,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.063"/>
  </g>
</svg>
</Col>
<Col sm={6}><img src={Fastaglogo} style={{width:'100px',height:'22px',float:'right'}}></img></Col> 
</Row>
<Row className='py-4'>
    <Col sm={6}><p className='poppins22'>Alcazar</p></Col>
    <Col sm={6}><p className='poppins18' style={{float:'right'}}>MH 01 AB 3827</p></Col>
</Row>
<Row>
    <Col sm={7} className='greybg'>
        <div>
            <span className='poppins15 px-1'>Balance :</span>
            <span className='poppins15bold px-1'>&#8377;459</span>
            <span className='green12'><svg xmlns="http://www.w3.org/2000/svg" width="11.336" height="11.336" className='mx-2' viewBox="0 0 11.336 11.336">
  <path id="Path_30243" data-name="Path 30243" d="M5.668,0A5.668,5.668,0,1,1,0,5.668,5.668,5.668,0,0,1,5.668,0Z" fill="#53bd8c"/>
</svg>
ACTIVE</span>
        </div>
    </Col>
    <Col sm={5} className='py-2 text-end' >
        <button className='Rechargebtn'>Recharge</button>
    </Col>
</Row>
                </div>
            </li>
            <li>
                <div className='greycard p-4'>
                    <Row>
                        <Col sm={6}><svg xmlns="http://www.w3.org/2000/svg" width="114.638" height="24.304" viewBox="0 0 114.638 24.304">
  <g id="Group_18163" data-name="Group 18163" transform="translate(113.931 23.597) rotate(180)" opacity="0.6">
    <path id="Path_19600" data-name="Path 19600" d="M11.445,22.89l3.2-3.2L6.4,11.445,14.647,3.2,11.445,0,0,11.445Z" transform="translate(98.577 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_19601" data-name="Path 19601" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.207-3.2Z" transform="translate(92.003 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.938"/>
    <path id="Path_19602" data-name="Path 19602" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(85.428 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.875"/>
    <path id="Path_19603" data-name="Path 19603" d="M6.409,11.445,14.658,3.2,11.445,0,0,11.445,11.445,22.89l3.213-3.2Z" transform="translate(78.854 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.813"/>
    <path id="Path_19604" data-name="Path 19604" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(72.286 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.75"/>
    <path id="Path_19605" data-name="Path 19605" d="M6.409,11.445,14.646,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(65.717 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.688"/>
    <path id="Path_19606" data-name="Path 19606" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(59.143 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.625"/>
    <path id="Path_19607" data-name="Path 19607" d="M6.4,11.445,14.648,3.2,11.446,0,0,11.445,11.446,22.89l3.2-3.2Z" transform="translate(52.573 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.563"/>
    <path id="Path_19608" data-name="Path 19608" d="M6.4,11.445,14.644,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(46.002 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.5"/>
    <path id="Path_19609" data-name="Path 19609" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.208-3.2Z" transform="translate(39.432 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.438"/>
    <path id="Path_19610" data-name="Path 19610" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(32.855 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.375"/>
    <path id="Path_19611" data-name="Path 19611" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(26.284 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.313"/>
    <path id="Path_19612" data-name="Path 19612" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(19.712 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.25"/>
    <path id="Path_19613" data-name="Path 19613" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(13.142 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.188"/>
    <path id="Path_19614" data-name="Path 19614" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(6.571 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.125"/>
    <path id="Path_19615" data-name="Path 19615" d="M6.4,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.063"/>
  </g>
</svg>
</Col>
<Col sm={6}><img src={Fastaglogo} style={{width:'100px',height:'22px',float:'right'}}></img></Col> 
</Row>
<Row className='py-4'>
    <Col sm={6}><p className='poppins22'>Alcazar</p></Col>
    <Col sm={6}><p className='poppins18' style={{float:'right'}}>MH 01 AB 3827</p></Col>
</Row>
<Row>
    <Col sm={7} className='greybg'>
        <div>
            <span className='poppins15 px-1'>Balance :</span>
            <span className='poppins15bold px-1'>&#8377;459</span>
            <span className='green12'><svg xmlns="http://www.w3.org/2000/svg" width="11.336" height="11.336" className='mx-2' viewBox="0 0 11.336 11.336">
  <path id="Path_30243" data-name="Path 30243" d="M5.668,0A5.668,5.668,0,1,1,0,5.668,5.668,5.668,0,0,1,5.668,0Z" fill="#53bd8c"/>
</svg>
ACTIVE</span>
        </div>
    </Col>
    <Col sm={5} className='py-2 text-end' >
        <button className='Rechargebtn'>Recharge</button>
    </Col>
</Row>
                </div>
            </li>
            <li>
                <div className='bluecard p-4'>
                    <Row>
                        <Col sm={6}><svg xmlns="http://www.w3.org/2000/svg" width="114.638" height="24.304" viewBox="0 0 114.638 24.304">
  <g id="Group_18163" data-name="Group 18163" transform="translate(113.931 23.597) rotate(180)" opacity="0.6">
    <path id="Path_19600" data-name="Path 19600" d="M11.445,22.89l3.2-3.2L6.4,11.445,14.647,3.2,11.445,0,0,11.445Z" transform="translate(98.577 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_19601" data-name="Path 19601" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.207-3.2Z" transform="translate(92.003 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.938"/>
    <path id="Path_19602" data-name="Path 19602" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(85.428 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.875"/>
    <path id="Path_19603" data-name="Path 19603" d="M6.409,11.445,14.658,3.2,11.445,0,0,11.445,11.445,22.89l3.213-3.2Z" transform="translate(78.854 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.813"/>
    <path id="Path_19604" data-name="Path 19604" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(72.286 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.75"/>
    <path id="Path_19605" data-name="Path 19605" d="M6.409,11.445,14.646,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(65.717 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.688"/>
    <path id="Path_19606" data-name="Path 19606" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(59.143 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.625"/>
    <path id="Path_19607" data-name="Path 19607" d="M6.4,11.445,14.648,3.2,11.446,0,0,11.445,11.446,22.89l3.2-3.2Z" transform="translate(52.573 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.563"/>
    <path id="Path_19608" data-name="Path 19608" d="M6.4,11.445,14.644,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(46.002 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.5"/>
    <path id="Path_19609" data-name="Path 19609" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.208-3.2Z" transform="translate(39.432 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.438"/>
    <path id="Path_19610" data-name="Path 19610" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(32.855 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.375"/>
    <path id="Path_19611" data-name="Path 19611" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(26.284 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.313"/>
    <path id="Path_19612" data-name="Path 19612" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(19.712 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.25"/>
    <path id="Path_19613" data-name="Path 19613" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(13.142 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.188"/>
    <path id="Path_19614" data-name="Path 19614" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(6.571 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.125"/>
    <path id="Path_19615" data-name="Path 19615" d="M6.4,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.063"/>
  </g>
</svg>
</Col>
<Col sm={6}><img src={Fastaglogo} style={{width:'100px',height:'22px',float:'right'}}></img></Col> 
</Row>
<Row className='py-4'>
    <Col sm={6}><p className='poppins22'>Alcazar</p></Col>
    <Col sm={6}><p className='poppins18' style={{float:'right'}}>MH 01 AB 3827</p></Col>
</Row>
<Row>
    <Col sm={7} className='greybg'>
        <div>
            <span className='poppins15 px-1'>Balance :</span>
            <span className='poppins15bold px-1'>&#8377;459</span>
            <span className='green12'><svg xmlns="http://www.w3.org/2000/svg" width="11.336" height="11.336" className='mx-2' viewBox="0 0 11.336 11.336">
  <path id="Path_30243" data-name="Path 30243" d="M5.668,0A5.668,5.668,0,1,1,0,5.668,5.668,5.668,0,0,1,5.668,0Z" fill="#53bd8c"/>
</svg>
ACTIVE</span>
        </div>
    </Col>
    <Col sm={5} className='py-2 text-end' >
        <button className='Rechargebtn'>Recharge</button>
    </Col>
</Row>
                </div>
            </li>
            <li>
                <div className='yellowcard p-4'>
                    <Row>
                        <Col sm={6}><svg xmlns="http://www.w3.org/2000/svg" width="114.638" height="24.304" viewBox="0 0 114.638 24.304">
  <g id="Group_18163" data-name="Group 18163" transform="translate(113.931 23.597) rotate(180)" opacity="0.6">
    <path id="Path_19600" data-name="Path 19600" d="M11.445,22.89l3.2-3.2L6.4,11.445,14.647,3.2,11.445,0,0,11.445Z" transform="translate(98.577 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_19601" data-name="Path 19601" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.207-3.2Z" transform="translate(92.003 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.938"/>
    <path id="Path_19602" data-name="Path 19602" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(85.428 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.875"/>
    <path id="Path_19603" data-name="Path 19603" d="M6.409,11.445,14.658,3.2,11.445,0,0,11.445,11.445,22.89l3.213-3.2Z" transform="translate(78.854 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.813"/>
    <path id="Path_19604" data-name="Path 19604" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(72.286 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.75"/>
    <path id="Path_19605" data-name="Path 19605" d="M6.409,11.445,14.646,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(65.717 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.688"/>
    <path id="Path_19606" data-name="Path 19606" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(59.143 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.625"/>
    <path id="Path_19607" data-name="Path 19607" d="M6.4,11.445,14.648,3.2,11.446,0,0,11.445,11.446,22.89l3.2-3.2Z" transform="translate(52.573 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.563"/>
    <path id="Path_19608" data-name="Path 19608" d="M6.4,11.445,14.644,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(46.002 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.5"/>
    <path id="Path_19609" data-name="Path 19609" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.208-3.2Z" transform="translate(39.432 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.438"/>
    <path id="Path_19610" data-name="Path 19610" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(32.855 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.375"/>
    <path id="Path_19611" data-name="Path 19611" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(26.284 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.313"/>
    <path id="Path_19612" data-name="Path 19612" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(19.712 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.25"/>
    <path id="Path_19613" data-name="Path 19613" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(13.142 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.188"/>
    <path id="Path_19614" data-name="Path 19614" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(6.571 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.125"/>
    <path id="Path_19615" data-name="Path 19615" d="M6.4,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.063"/>
  </g>
</svg>
</Col>
<Col sm={6}><img src={Fastaglogo} style={{width:'100px',height:'22px',float:'right'}}></img></Col> 
</Row>
<Row className='py-4'>
    <Col sm={6}><p className='poppins22'>Alcazar</p></Col>
    <Col sm={6}><p className='poppins18' style={{float:'right'}}>MH 01 AB 3827</p></Col>
</Row>
<Row>
    <Col sm={7} className='greybg'>
        <div>
            <span className='poppins15 px-1'>Balance :</span>
            <span className='poppins15bold px-1'>&#8377;459</span>
            <span className='green12'><svg xmlns="http://www.w3.org/2000/svg" width="11.336" height="11.336" className='mx-2' viewBox="0 0 11.336 11.336">
  <path id="Path_30243" data-name="Path 30243" d="M5.668,0A5.668,5.668,0,1,1,0,5.668,5.668,5.668,0,0,1,5.668,0Z" fill="#53bd8c"/>
</svg>
ACTIVE</span>
        </div>
    </Col>
    <Col sm={5} className='py-2 text-end' >
        <button className='Rechargebtn'>Recharge</button>
    </Col>
</Row>
                </div>
            </li>
            <li>
                <div className='greycard p-4'>
                    <Row>
                        <Col sm={6}><svg xmlns="http://www.w3.org/2000/svg" width="114.638" height="24.304" viewBox="0 0 114.638 24.304">
  <g id="Group_18163" data-name="Group 18163" transform="translate(113.931 23.597) rotate(180)" opacity="0.6">
    <path id="Path_19600" data-name="Path 19600" d="M11.445,22.89l3.2-3.2L6.4,11.445,14.647,3.2,11.445,0,0,11.445Z" transform="translate(98.577 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_19601" data-name="Path 19601" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.207-3.2Z" transform="translate(92.003 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.938"/>
    <path id="Path_19602" data-name="Path 19602" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(85.428 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.875"/>
    <path id="Path_19603" data-name="Path 19603" d="M6.409,11.445,14.658,3.2,11.445,0,0,11.445,11.445,22.89l3.213-3.2Z" transform="translate(78.854 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.813"/>
    <path id="Path_19604" data-name="Path 19604" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(72.286 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.75"/>
    <path id="Path_19605" data-name="Path 19605" d="M6.409,11.445,14.646,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(65.717 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.688"/>
    <path id="Path_19606" data-name="Path 19606" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(59.143 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.625"/>
    <path id="Path_19607" data-name="Path 19607" d="M6.4,11.445,14.648,3.2,11.446,0,0,11.445,11.446,22.89l3.2-3.2Z" transform="translate(52.573 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.563"/>
    <path id="Path_19608" data-name="Path 19608" d="M6.4,11.445,14.644,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(46.002 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.5"/>
    <path id="Path_19609" data-name="Path 19609" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.208-3.2Z" transform="translate(39.432 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.438"/>
    <path id="Path_19610" data-name="Path 19610" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(32.855 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.375"/>
    <path id="Path_19611" data-name="Path 19611" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(26.284 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.313"/>
    <path id="Path_19612" data-name="Path 19612" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(19.712 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.25"/>
    <path id="Path_19613" data-name="Path 19613" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(13.142 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.188"/>
    <path id="Path_19614" data-name="Path 19614" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(6.571 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.125"/>
    <path id="Path_19615" data-name="Path 19615" d="M6.4,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.063"/>
  </g>
</svg>
</Col>
<Col sm={6}><img src={Fastaglogo} style={{width:'100px',height:'22px',float:'right'}}></img></Col> 
</Row>
<Row className='py-4'>
    <Col sm={6}><p className='poppins22'>Alcazar</p></Col>
    <Col sm={6}><p className='poppins18' style={{float:'right'}}>MH 01 AB 3827</p></Col>
</Row>
<Row>
    <Col sm={7} className='greybg'>
        <div>
            <span className='poppins15 px-1'>Balance :</span>
            <span className='poppins15bold px-1'>&#8377;459</span>
            <span className='green12'><svg xmlns="http://www.w3.org/2000/svg" width="11.336" height="11.336" className='mx-2' viewBox="0 0 11.336 11.336">
  <path id="Path_30243" data-name="Path 30243" d="M5.668,0A5.668,5.668,0,1,1,0,5.668,5.668,5.668,0,0,1,5.668,0Z" fill="#53bd8c"/>
</svg>
ACTIVE</span>
        </div>
    </Col>
    <Col sm={5} className='py-2 text-end' >
        <button className='Rechargebtn'>Recharge</button>
    </Col>
</Row>
                </div>
            </li>
             <li>
                <div className='bluecard p-4'>
                    <Row>
                        <Col sm={6}><svg xmlns="http://www.w3.org/2000/svg" width="114.638" height="24.304" viewBox="0 0 114.638 24.304">
  <g id="Group_18163" data-name="Group 18163" transform="translate(113.931 23.597) rotate(180)" opacity="0.6">
    <path id="Path_19600" data-name="Path 19600" d="M11.445,22.89l3.2-3.2L6.4,11.445,14.647,3.2,11.445,0,0,11.445Z" transform="translate(98.577 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_19601" data-name="Path 19601" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.207-3.2Z" transform="translate(92.003 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.938"/>
    <path id="Path_19602" data-name="Path 19602" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(85.428 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.875"/>
    <path id="Path_19603" data-name="Path 19603" d="M6.409,11.445,14.658,3.2,11.445,0,0,11.445,11.445,22.89l3.213-3.2Z" transform="translate(78.854 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.813"/>
    <path id="Path_19604" data-name="Path 19604" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(72.286 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.75"/>
    <path id="Path_19605" data-name="Path 19605" d="M6.409,11.445,14.646,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(65.717 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.688"/>
    <path id="Path_19606" data-name="Path 19606" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(59.143 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.625"/>
    <path id="Path_19607" data-name="Path 19607" d="M6.4,11.445,14.648,3.2,11.446,0,0,11.445,11.446,22.89l3.2-3.2Z" transform="translate(52.573 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.563"/>
    <path id="Path_19608" data-name="Path 19608" d="M6.4,11.445,14.644,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(46.002 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.5"/>
    <path id="Path_19609" data-name="Path 19609" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.208-3.2Z" transform="translate(39.432 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.438"/>
    <path id="Path_19610" data-name="Path 19610" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(32.855 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.375"/>
    <path id="Path_19611" data-name="Path 19611" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(26.284 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.313"/>
    <path id="Path_19612" data-name="Path 19612" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(19.712 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.25"/>
    <path id="Path_19613" data-name="Path 19613" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(13.142 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.188"/>
    <path id="Path_19614" data-name="Path 19614" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(6.571 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.125"/>
    <path id="Path_19615" data-name="Path 19615" d="M6.4,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.063"/>
  </g>
</svg>
</Col>
<Col sm={6}><img src={Fastaglogo} style={{width:'100px',height:'22px',float:'right'}}></img></Col> 
</Row>
<Row className='py-4'>
    <Col sm={6}><p className='poppins22'>Alcazar</p></Col>
    <Col sm={6}><p className='poppins18' style={{float:'right'}}>MH 01 AB 3827</p></Col>
</Row>
<Row>
    <Col sm={7} className='greybg'>
        <div>
            <span className='poppins15 px-1'>Balance :</span>
            <span className='poppins15bold px-1'>&#8377;459</span>
            <span className='green12'><svg xmlns="http://www.w3.org/2000/svg" width="11.336" height="11.336" className='mx-2' viewBox="0 0 11.336 11.336">
  <path id="Path_30243" data-name="Path 30243" d="M5.668,0A5.668,5.668,0,1,1,0,5.668,5.668,5.668,0,0,1,5.668,0Z" fill="#53bd8c"/>
</svg>
ACTIVE</span>
        </div>
    </Col>
    <Col sm={5} className='py-2 text-end' >
        <button className='Rechargebtn'>Recharge</button>
    </Col>
</Row>
                </div>
            </li>
            
        
    </ul>
            </div>
   
            

            </Row>
        </div>
    </>
);

export default RechargeFasTag;