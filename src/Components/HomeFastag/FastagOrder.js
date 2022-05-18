import React from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './RechargeFastag1.css';
import Sucessful from '../../Images/ImagesAll/drawable-xxxhdpi/Sucessful.png';
import Fastaglogo from '../../Images/drawable-xxxhdpi/Fastaglogo.png';

const FastagSucessful = () => (
    <>
        <div className='container-fluid px-5 py-2'>
                <Row>
                <Link to="/BuyFastag" style={{textDecoration:'none'}}><p className='poppins18R' ><svg xmlns="http://www.w3.org/2000/svg" width="20.667" height="20.143"  style={{marginRight:'10px'}} viewBox="0 0 20.667 20.143">
  <g id="Rounded_Button" data-name="Rounded Button" transform="translate(20.667 20.143) rotate(180)">
    <path id="icon-arrow-left" d="M8.783,21.441l1.024,1.024a1.1,1.1,0,0,0,1.564,0L20.338,13.5a1.1,1.1,0,0,0,0-1.564L11.371,2.972a1.1,1.1,0,0,0-1.564,0L8.783,4A1.108,1.108,0,0,0,8.8,5.579l5.558,5.3H1.1A1.1,1.1,0,0,0,0,11.981v1.476A1.1,1.1,0,0,0,1.1,14.564H14.36L8.8,19.859A1.1,1.1,0,0,0,8.783,21.441Z" transform="translate(0.004 -2.647)" fill="#2650d8"/>
  </g>
</svg>Buy a new Fastag</p></Link>
                </Row>
                <Row>
                    <Col sm={8}><FirstBoxFastag></FirstBoxFastag></Col>
                    <Col sm={4}><SecondBoxFastag></SecondBoxFastag></Col>
                </Row>
        </div>
    </>
);

const FirstBoxFastag = ()=>(
    <>
        <div className='ExperienceBox my-3 py-5'>
                <p className='poppins30B py-2'>Master Garage Experience</p>
                <svg id="Group_27252" data-name="Group 27252" xmlns="http://www.w3.org/2000/svg" width="358.372" height="43.925" viewBox="0 0 358.372 43.925">
  <path id="Path_18641" data-name="Path 18641" d="M800.929,495.051a2.295,2.295,0,0,0-1.975-1.539l-13.069-1.906-5.857-11.875a2.3,2.3,0,0,0-4.134,0l-5.857,11.852-13.069,1.929a2.269,2.269,0,0,0-1.286,3.859l9.486,9.188-2.3,13.046a2.3,2.3,0,0,0,3.331,2.458l11.76-6.132,11.714,6.156a2.152,2.152,0,0,0,1.057.276,2.314,2.314,0,0,0,2.15-1.452,2.286,2.286,0,0,0,.124-1.282l-2.3-13.046,9.486-9.187a2.3,2.3,0,0,0,.735-2.343ZM786.8,504.239a2.289,2.289,0,0,0-.666,2.044l1.654,9.624-8.636-4.594a2.285,2.285,0,0,0-2.159,0l-8.636,4.594,1.654-9.624a2.289,2.289,0,0,0-.666-2.044l-6.891-6.891,9.67-1.4a2.311,2.311,0,0,0,1.745-1.263l4.089-8.751,4.318,8.774a2.3,2.3,0,0,0,1.746,1.263l9.67,1.4Z" transform="translate(-755.006 -478.436)" fill="#ed7d2b"/>
  <path id="Path_18642" data-name="Path 18642" d="M834.929,495.051a2.294,2.294,0,0,0-1.975-1.539l-13.069-1.906-5.857-11.875a2.3,2.3,0,0,0-4.134,0l-5.857,11.852-13.069,1.929a2.269,2.269,0,0,0-1.286,3.859l9.486,9.188-2.3,13.046a2.3,2.3,0,0,0,3.33,2.458l11.76-6.132,11.714,6.156a2.152,2.152,0,0,0,1.057.276,2.313,2.313,0,0,0,2.15-1.452,2.285,2.285,0,0,0,.124-1.282l-2.3-13.046,9.486-9.187a2.3,2.3,0,0,0,.735-2.343ZM820.8,504.239a2.289,2.289,0,0,0-.666,2.044l1.654,9.624-8.636-4.594a2.285,2.285,0,0,0-2.159,0l-8.636,4.594,1.654-9.624a2.29,2.29,0,0,0-.666-2.044l-6.891-6.891,9.67-1.4a2.311,2.311,0,0,0,1.745-1.263l4.088-8.751,4.318,8.774a2.3,2.3,0,0,0,1.746,1.263l9.67,1.4Z" transform="translate(-710.913 -478.436)" fill="#ed7d2b"/>
  <path id="Path_18643" data-name="Path 18643" d="M868.929,495.051a2.295,2.295,0,0,0-1.975-1.539l-13.069-1.906-5.857-11.875a2.3,2.3,0,0,0-4.135,0l-5.857,11.852-13.069,1.929a2.269,2.269,0,0,0-1.286,3.859l9.486,9.188-2.3,13.046a2.3,2.3,0,0,0,3.33,2.458l11.76-6.132,11.714,6.156a2.153,2.153,0,0,0,1.057.276,2.313,2.313,0,0,0,2.15-1.452,2.283,2.283,0,0,0,.124-1.282l-2.3-13.046,9.486-9.187a2.3,2.3,0,0,0,.735-2.343ZM854.8,504.239a2.29,2.29,0,0,0-.666,2.044l1.654,9.624-8.636-4.594a2.285,2.285,0,0,0-2.159,0l-8.636,4.594,1.654-9.624a2.29,2.29,0,0,0-.666-2.044l-6.891-6.891,9.67-1.4a2.311,2.311,0,0,0,1.745-1.263l4.089-8.751,4.318,8.774a2.3,2.3,0,0,0,1.746,1.263l9.67,1.4Z" transform="translate(-666.82 -478.436)" fill="#ed7d2b"/>
  <path id="Path_18644" data-name="Path 18644" d="M902.929,495.051a2.295,2.295,0,0,0-1.975-1.539l-13.069-1.906-5.857-11.875a2.3,2.3,0,0,0-4.135,0l-5.857,11.852-13.069,1.929a2.269,2.269,0,0,0-1.286,3.859l9.486,9.188-2.3,13.046a2.3,2.3,0,0,0,3.33,2.458l11.76-6.132,11.714,6.156a2.153,2.153,0,0,0,1.057.276,2.313,2.313,0,0,0,2.15-1.452,2.283,2.283,0,0,0,.124-1.282l-2.3-13.046,9.486-9.187a2.3,2.3,0,0,0,.735-2.343ZM888.8,504.239a2.29,2.29,0,0,0-.666,2.044l1.654,9.624-8.636-4.594a2.285,2.285,0,0,0-2.159,0l-8.636,4.594,1.654-9.624a2.29,2.29,0,0,0-.666-2.044l-6.891-6.891,9.67-1.4a2.311,2.311,0,0,0,1.745-1.263l4.089-8.751,4.318,8.774a2.3,2.3,0,0,0,1.746,1.263l9.67,1.4Z" transform="translate(-622.727 -478.436)" fill="#ed7d2b"/>
  <path id="Path_18645" data-name="Path 18645" d="M936.929,495.051a2.295,2.295,0,0,0-1.975-1.539l-13.069-1.906-5.857-11.875a2.291,2.291,0,0,0-2.067-1.3,2.287,2.287,0,0,0-1.219.349,2.31,2.31,0,0,0-.848.946l-5.857,11.852-13.069,1.929a2.269,2.269,0,0,0-1.286,3.859l9.486,9.188-2.3,13.046a2.3,2.3,0,0,0,3.331,2.458l11.76-6.132,11.714,6.156a2.153,2.153,0,0,0,1.057.276,2.314,2.314,0,0,0,2.15-1.452,2.284,2.284,0,0,0,.124-1.282l-2.3-13.046,9.486-9.187a2.3,2.3,0,0,0,.735-2.343ZM922.8,504.239a2.29,2.29,0,0,0-.666,2.044l1.654,9.624-8.636-4.594a2.285,2.285,0,0,0-2.159,0l-8.636,4.594,1.654-9.624a2.29,2.29,0,0,0-.666-2.044l-6.891-6.891,9.67-1.4a2.311,2.311,0,0,0,1.746-1.263l4.088-8.751,4.318,8.774a2.3,2.3,0,0,0,1.746,1.263l9.67,1.4Z" transform="translate(-578.634 -478.436)" fill="#ed7d2b"/>
</svg>

                <p className='poppins20R py-4'>How has your experience been? <Link to="" style={{textDecoration:'none'}}>Tell us</Link></p>

        </div>

        <div className='Re_FirstBoxFastag my-5 px-4'>
            <Row className='py-4'>
                <Col sm={6}>
                    <Row>
                        <Col sm={1}><svg xmlns="http://www.w3.org/2000/svg" width="32.162" height="38.129" viewBox="0 0 32.162 38.129">
  <g id="Group_27209" data-name="Group 27209" transform="translate(-1231.306 -517.385)">
    <path id="Path_12817" data-name="Path 12817" d="M194.9,70l-.009-2.216-.83-.378a39.6,39.6,0,0,0-15.237-3.479,39.623,39.623,0,0,0-15.237,3.479l-.832.377-.011,4.259c0,6.929.3,14.128,3.863,19.347a35.025,35.025,0,0,0,11.532,10.287l.685.38.686-.38a35.032,35.032,0,0,0,11.529-10.287c3.567-5.22,3.867-12.417,3.867-19.345Z" transform="translate(1068.565 453.455)" fill="#53bd8c"/>
    <path id="Path_12818" data-name="Path 12818" d="M164.248,68.662c0,.473-.011,3.228-.011,3.228,0,6.47.268,13.182,3.491,17.893A32.681,32.681,0,0,0,178.39,99.29a32.664,32.664,0,0,0,10.663-9.506c3.22-4.712,3.489-11.424,3.489-17.9l0-1.971s0-.757,0-1.254a36.972,36.972,0,0,0-14.145-3.235A36.944,36.944,0,0,0,164.248,68.662Z" transform="translate(1068.998 454.09)" fill="#53bd8c"/>
    <g id="Group_16589" data-name="Group 16589" transform="translate(1239.729 527.478)">
      <g id="Group_16588" data-name="Group 16588">
        <path id="Path_12819" data-name="Path 12819" d="M183.557,75.294l-6.081,7.733c-1.155-1.21-2.413-2.523-2.413-2.523a2,2,0,0,0-2.888,2.777l4,4.185a1.995,1.995,0,0,0,3.014-.144l7.5-9.537a2,2,0,0,0-3.139-2.492Z" transform="translate(-171.62 -74.534)" fill="#fff"/>
      </g>
    </g>
  </g>
</svg></Col>
                        <Col sm={11}>
                        <p className='poppins18SB'>Order Successful</p>
                        <span className=''><Link to="">Booking ID: MG1234567890 </Link></span>
                        </Col>
                    </Row>
                    
                </Col>
                <Col sm={6} style={{textAlign:'right'}}>
                    <p className='poppins18R'>Order Amount <span className='poppins22Open'> 	&#8377;459</span></p>
                </Col>
            </Row>
            <Row className='py-4'>
                <Col sm={6}>
                    <p className='poppins15SB'>Delivery Details</p>
                    <p className='poppins18M'> Sachin Tiwari</p>
                    <p className='poppins15R' style={{color:'#5D6186'}}>A-1234, CGC Residency, Near Bisleri office,
Andheri East, Mumbai - 400001   [Edit] </p>
                </Col>
                <Col sm={6} style={{textAlign:'right '}} >
                    <Row>
                        <p className='poppins18R py-2'> No. of Fastags <span className='poppins22Open px-2'>2</span> </p>
                    </Row>
                    <img src={Fastaglogo} style={{width:'134px',height:'29px'}}></img>
                </Col>
            </Row>
            
        </div>
    </>
);


const SecondBoxFastag = () => (
    <>
            <div className='SecondBoxFastag my-3' style={{textAlign:'center'}}>
                <div className='py-5'>
                <Row className='py-3'>
                    <p className='poppins15Open'>Congratulations! You earned</p>
                    <p className='poppins20B'>5000 MG Coins</p>
                </Row>

                <Row>
                    <img src={Sucessful} className='mx-3' style={{width:'350px',height:'220px'}}></img>
                    <p className='poppins30B'>THANK YOU</p>
                    <p  className='poppins15Open'>Transaction Successful</p>
                </Row>

               </div>
                
               <div className='BottomGreenBG py-3 '>
                <div className='px-3 py-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
  <path id="Path_22613" data-name="Path 22613" d="M99,207a15,15,0,1,0,0,30c3.664,0,9.857-3.7,9.857-3.7S114,226.607,114,222A15.017,15.017,0,0,0,99,207Zm6.918,12.689-7.876,7.876a.471.471,0,0,1-.647,0l-5.284-5.284a.461.461,0,0,1,0-.648l.675-.675a.461.461,0,0,1,.647,0l4.119,4.119a.232.232,0,0,0,.331,0l6.712-6.711a.471.471,0,0,1,.647,0l.675.676a.457.457,0,0,1,0,.647Z" transform="translate(-84 -207)" fill="#fff"/>
</svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="302" height="27" viewBox="0 0 302 27">
  <text id="Transaction_Successful" data-name="Transaction Successful" fill="#fff" font-size="20" font-family="Open Sans" font-weight="bold" letter-spacing="0.003em"><tspan x="5.571" y="22">Transaction Successful</tspan></text>
</svg>
                </div>
                

                </div>  
                
            </div>
            
    </>
);

export default FastagSucessful;