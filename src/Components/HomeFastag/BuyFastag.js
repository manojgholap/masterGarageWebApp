import React from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './RechargeFastag1.css';
import Fastaglogo from '../../Images/drawable-xxxhdpi/Fastaglogo.png';
import CardPay from '../../Images/drawable-xxxhdpi/CardPay.png';

const BuyFastag = () => (
    <>
        <div className='container-fluid px-5 py-2'>
                <Row>
                <Link to="/HomeFastag" style={{textDecoration:'none'}}><p className='poppins18R' ><svg xmlns="http://www.w3.org/2000/svg" width="20.667" height="20.143"  style={{marginRight:'10px'}} viewBox="0 0 20.667 20.143">
  <g id="Rounded_Button" data-name="Rounded Button" transform="translate(20.667 20.143) rotate(180)">
    <path id="icon-arrow-left" d="M8.783,21.441l1.024,1.024a1.1,1.1,0,0,0,1.564,0L20.338,13.5a1.1,1.1,0,0,0,0-1.564L11.371,2.972a1.1,1.1,0,0,0-1.564,0L8.783,4A1.108,1.108,0,0,0,8.8,5.579l5.558,5.3H1.1A1.1,1.1,0,0,0,0,11.981v1.476A1.1,1.1,0,0,0,1.1,14.564H14.36L8.8,19.859A1.1,1.1,0,0,0,8.783,21.441Z" transform="translate(0.004 -2.647)" fill="#2650d8"/>
  </g>
</svg>Buy new fastag</p></Link>
                </Row>
                <Row className='my-2'>
                    <Col sm={8}><FirstBoxFastag></FirstBoxFastag></Col>
                    <Col sm={4}><SecondBoxFastag></SecondBoxFastag></Col>
                </Row>
        </div>
    </>
);
const FirstBoxFastag = ()=>(
    <>
        <div className='FirstBoxFastag  px-4'>
            <Row className='py-4'>
                <Col sm={6}>
                    <p className='poppins18SB'>Please enter your delivery address</p>
                </Col>
                <Col sm={6}>
                    <p style={{color:'#2650D8',textAlign:'center'}}><Link to="">View saved addresses</Link></p>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                <label className='poppins18 py-2'>First name</label><br></br>
                <input className='InputNum' type="text" placeholder='Alex'></input>
                </Col>
                <Col sm={6}>
                <label className='poppins18 py-2'>Last name</label><br></br>
                <input className='InputNum' type="text" placeholder='Morgan'></input>
                </Col>
            </Row>
            <Row className='py-2'>
                <Row>
                <label className='poppins18 py-2'>Address Line 1 </label><br></br>
                <input className='Re_InputNum'  type="text" placeholder='Flat, House No., Building, Company, Apartment'></input>
               
                <label className='poppins18 py-2'>Address Line 2 </label><br></br>
                <input className='Re_InputNum' type="text" placeholder='Area, Colony, Street, Sector, Village'></input>
                </Row>
            
            </Row>
            <Row>
                <Col sm={4}>
                        <label className='poppins18 py-2'>Pin code</label><br></br>
                        <input className='InputNum' style={{width:'167px'}} type="text" placeholder='i.e.400 0001.'></input>
                </Col>
                <Col sm={4}>
                <label className='poppins18 py-2'>State</label><br></br>
                        <input className='InputNum' style={{width:'167px'}} type="text" placeholder='i.e.400 0001.'></input>
                </Col>
                <Col sm={4}>
                <label className='poppins18 py-2'>City</label><br></br>
                        <input className='InputNum' style={{width:'167px'}} type="text" placeholder='i.e.400 0001.'></input>
                </Col>

            </Row>
            <Row className='py-5'>
                <Col sm={6}><p>No. of Fastag @ ₹ 199 each</p></Col>
                <Col sm={6}>
                    <button>-</button>2<button>+</button>
                </Col>
            </Row>
            <Row className='py-2'>
                <p>* Your Vehicle number and RC will be needed at the time of activation post delivery </p>
            </Row>

        </div>
    </>
);
const SecondBoxFastag = () => (
    <>
            <div className='SecondBoxFastag '>
                <div className='px-2  pt-5'>
                <Row>
                    <p style={{textAlign:'center'}}><img src={Fastaglogo} style={{width:'206px',height:'45px'}}></img></p>
                </Row>
                <Row className='py-4'>
                    <p className='poppins18B'>Payment Summary</p>
                </Row>
                <Row className='py-1'>
                    <Col sm={6}><p className='poppins15R' style={{color:'#5D6186'}}>Fastag Price</p></Col>
                    <Col sm={6} className='poppins16Open' style={{textAlign:'right',paddingRight:'20px'}}>&#8377;398</Col>
                </Row>
                <Row className='py-1'>
                    <Col sm={6}><p className='poppins15R' style={{color:'#5D6186'}}>Delivery Charges</p></Col>
                    <Col sm={6} className='poppins16Open' style={{textAlign:'right',paddingRight:'20px'}}>&#8377;40</Col>
                </Row>
                <hr></hr>
                <Row className='my-2'>
                    <Col sm={6}><p className='poppins20B' style={{color:'#5D6186'}}>Grand Total</p></Col>
                    <Col sm={6} className='poppins20Open' style={{textAlign:'right',paddingRight:'20px'}}>&#8377;6459</Col>
                </Row>
                <p className='poppin18R' style={{color:'#5D6186'}}>Discount</p>
                <Row className='my-3'>
                    <Col sm={6}><p className='poppins15R' style={{color:'#53BD8C'}}>PROMO - (HAPPY100)</p></Col>
                    <Col sm={6} className='poppins15' style={{textAlign:'right',paddingRight:'20px',color:'#53BD8C'}}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"   className=" mx-2" viewBox="0 0 25 25">
  <path id="Path_22941" data-name="Path 22941" d="M96.5,207A12.5,12.5,0,1,0,109,219.5,12.514,12.514,0,0,0,96.5,207Zm5.765,10.574L95.7,224.138a.392.392,0,0,1-.539,0l-4.4-4.4a.384.384,0,0,1,0-.54l.563-.562a.384.384,0,0,1,.539,0l3.432,3.432a.194.194,0,0,0,.276,0l5.593-5.593a.392.392,0,0,1,.539,0l.563.564a.381.381,0,0,1,0,.539Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>

                    Applied
                    </Col>
                </Row>
                <Row className='my-2 mx-2 py-4  CouponsBG' >
                <Col sm={8}><p className='poppins18R' style={{color:'#ED7D2B'}}><svg xmlns="http://www.w3.org/2000/svg" width="24.771" height="25.703" className=" mx-2" viewBox="0 0 24.771 25.703">
  <path id="Path_27147" data-name="Path 27147" d="M787.836,646.6a.724.724,0,0,1,0-.636l.916-1.874a2.133,2.133,0,0,0-.92-2.832l-1.842-.978a.717.717,0,0,1-.375-.515l-.36-2.055a2.134,2.134,0,0,0-2.409-1.75l-2.064.292a.716.716,0,0,1-.605-.2l-1.5-1.45a2.133,2.133,0,0,0-2.977,0l-1.5,1.45a.714.714,0,0,1-.6.2l-2.066-.292a2.132,2.132,0,0,0-2.408,1.75l-.361,2.055a.715.715,0,0,1-.373.515l-1.843.979a2.132,2.132,0,0,0-.92,2.831l.916,1.874a.716.716,0,0,1,0,.636l-.916,1.874a2.134,2.134,0,0,0,.92,2.832l1.843.977a.718.718,0,0,1,.373.515l.361,2.055a2.128,2.128,0,0,0,2.1,1.771,2.17,2.17,0,0,0,.307-.021l2.066-.292a.718.718,0,0,1,.6.2l1.5,1.45a2.132,2.132,0,0,0,2.977,0l1.5-1.45a.721.721,0,0,1,.605-.2l2.064.292a2.134,2.134,0,0,0,2.409-1.75l.36-2.055a.72.72,0,0,1,.375-.515l1.842-.977a2.133,2.133,0,0,0,.92-2.832Zm-14.74-7.953a2.6,2.6,0,1,1-2.6,2.6A2.6,2.6,0,0,1,773.1,638.646Zm.7,13.649a.708.708,0,0,1-1,0c-.276-.276-1.536-1.4-1.26-1.672l9.963-9.886c.276-.276,1.371.932,1.647,1.208a.706.706,0,0,1,0,1Zm7.539,1.608a2.718,2.718,0,0,1-1.7-.636,2.494,2.494,0,0,1-.9-1.961,2.6,2.6,0,1,1,2.6,2.6Z" transform="translate(-764.803 -633.358)" fill="#ed7d2b" stroke="#ed7d2b" stroke-width="1"/>
</svg>
Apply Coupons</p></Col>
                    <Col sm={4} className='poppins15M' style={{paddingRight:'20px'}}><Link to ="" style={{textDecoration:'none'}}>view offers</Link></Col>
                </Row>
                
                
                </div>
                <div className='BottomBG  mt-4'>
                        <Row className='px-2 py-3'>
                        <Col sm={1} className='py-2 px-2'><img src={CardPay} style={{width:'30px',height:'30px'}}></img></Col>
                        <Col sm={4} ><p className='poppins12light' style={{color:'#fff'}}>Total Payment</p>
                        <p style={{fontSize:'20px',fontWeight:'bold',marginBottom:'0px',color:'#fff'}}> ₹438</p></Col>
                        <Col sm={7}>
                           <Link to="/FastagOrder" style={{textDecoration:'none'}}><button className='SelectPayment'>Select payment method</button></Link> 
                        </Col>
                        </Row>
                </div>
                
                
            </div>
            
    </>
);
export default BuyFastag;