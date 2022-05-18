import React from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './RechargeFastag1.css';
import Fastaglogo from '../../Images/drawable-xxxhdpi/Fastaglogo.png';
import CarFastag from '../../Images/drawable-xxxhdpi/CarFastag.png';
import CardPay from '../../Images/drawable-xxxhdpi/CardPay.png';
import ReviewBeen from '../../Images/drawable-xxxhdpi/ReviewBeen.png';
import Reviewavtar from '../../Images/drawable-xxxhdpi/Reviewavtar.png';

const RechargeFastag1 = () => (
    <>
        <div className='container-fluid px-5 py-2'>
                <Row>
                <Link to="/HomeFastag" style={{textDecoration:'none'}}><p className='poppins18R' ><svg xmlns="http://www.w3.org/2000/svg" width="20.667" height="20.143"  style={{marginRight:'10px'}} viewBox="0 0 20.667 20.143">
  <g id="Rounded_Button" data-name="Rounded Button" transform="translate(20.667 20.143) rotate(180)">
    <path id="icon-arrow-left" d="M8.783,21.441l1.024,1.024a1.1,1.1,0,0,0,1.564,0L20.338,13.5a1.1,1.1,0,0,0,0-1.564L11.371,2.972a1.1,1.1,0,0,0-1.564,0L8.783,4A1.108,1.108,0,0,0,8.8,5.579l5.558,5.3H1.1A1.1,1.1,0,0,0,0,11.981v1.476A1.1,1.1,0,0,0,1.1,14.564H14.36L8.8,19.859A1.1,1.1,0,0,0,8.783,21.441Z" transform="translate(0.004 -2.647)" fill="#2650d8"/>
  </g>
</svg>Buy new fastag</p></Link>
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
        <div className='FirstBoxFastag my-3 px-4'>
            <Row className='py-4'>
                <Col sm={6}>
                    <p className='poppins18SB'><svg xmlns="http://www.w3.org/2000/svg" width="32.162" height="38.129" viewBox="0 0 32.162 38.129">
  <g id="Group_27209" data-name="Group 27209" transform="translate(-1231.306 -517.385)">
    <path id="Path_12817" data-name="Path 12817" d="M194.9,70l-.009-2.216-.83-.378a39.6,39.6,0,0,0-15.237-3.479,39.623,39.623,0,0,0-15.237,3.479l-.832.377-.011,4.259c0,6.929.3,14.128,3.863,19.347a35.025,35.025,0,0,0,11.532,10.287l.685.38.686-.38a35.032,35.032,0,0,0,11.529-10.287c3.567-5.22,3.867-12.417,3.867-19.345Z" transform="translate(1068.565 453.455)" fill="#53bd8c"/>
    <path id="Path_12818" data-name="Path 12818" d="M164.248,68.662c0,.473-.011,3.228-.011,3.228,0,6.47.268,13.182,3.491,17.893A32.681,32.681,0,0,0,178.39,99.29a32.664,32.664,0,0,0,10.663-9.506c3.22-4.712,3.489-11.424,3.489-17.9l0-1.971s0-.757,0-1.254a36.972,36.972,0,0,0-14.145-3.235A36.944,36.944,0,0,0,164.248,68.662Z" transform="translate(1068.998 454.09)" fill="#53bd8c"/>
    <g id="Group_16589" data-name="Group 16589" transform="translate(1239.729 527.478)">
      <g id="Group_16588" data-name="Group 16588">
        <path id="Path_12819" data-name="Path 12819" d="M183.557,75.294l-6.081,7.733c-1.155-1.21-2.413-2.523-2.413-2.523a2,2,0,0,0-2.888,2.777l4,4.185a1.995,1.995,0,0,0,3.014-.144l7.5-9.537a2,2,0,0,0-3.139-2.492Z" transform="translate(-171.62 -74.534)" fill="#fff"/>
      </g>
    </g>
  </g>
</svg>Paytm Payments Bank</p>
                </Col>
                <Col sm={6}>
                    <p style={{color:'#2650D8',textAlign:'center'}}><Link to="">Not your Fastag bank?</Link></p>
                </Col>
            </Row>
            <Row className='py-4'>
                <Col sm={6} className='py-3'>
                    <Row className='py-2'>
                        <Col sm={4}>
                            <img src={CarFastag} style={{width:'105px',height:'41px'}}></img>
                        </Col>
                        <Col sm={8}>
                            <p className='poppins18SemiBlue'>Aditya Mishra</p>
                            <p className='poppins18SemiBlue'>MH 04 DP 0099</p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={6} style={{textAlign:'center'}}>
                    <p className='poppins18R'>Fastag Balance</p>
                    <p className='poppins22Open'> 	&#8377;459</p>
                    <p className='poppins15M'>Update Balance</p>
                </Col>
            </Row>
            <Row className='py-3'>
                <p className='poppins18B'>Recharge</p>
                <ul className='RechargeList'>
                    <li className='poppins22Open'><Link to=""><button className='rechargerupee'>	&#8377;1000</button></Link></li>
                    <li className='poppins22Open'><Link to=""><button className='rechargerupeegrey'>	&#8377;500</button></Link></li>
                    <li className='poppins22Open'><Link to=""><button className='rechargerupeegrey'>	&#8377;1000</button></Link>
                    <p className='poppins18SemiBlue'>POPULAR</p></li>
                    <li className='poppins22Open'><Link to=""><button className='rechargerupeegrey'>	&#8377;1500</button></Link></li>
                    <li className='poppins22Open'><Link to=""><button className='rechargerupeegrey'>	&#8377;2000</button></Link></li>
                </ul>
            </Row>
            <Row className='py-4'>
                <Col sm={6}>
                    <Row >
                        <Col sm={3}><img src={ReviewBeen} style={{width:'76px' , height:'54px'}}></img></Col>
                        <Col sm={9}>
                            <p className='poppins15R'>How has your experience been?</p>
                            <p className='poppins12Open'><svg id="Group_19003" data-name="Group 19003" xmlns="http://www.w3.org/2000/svg" width="156.027" height="19.124" viewBox="0 0 156.027 19.124">
  <path id="Path_18641" data-name="Path 18641" d="M775,485.67a1,1,0,0,0-.86-.67l-5.69-.83L765.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L765,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#ed7d2b"/>
  <path id="Path_18642" data-name="Path 18642" d="M809,485.67a1,1,0,0,0-.86-.67l-5.69-.83L799.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L799,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#ed7d2b"/>
  <path id="Path_18643" data-name="Path 18643" d="M843,485.67a1,1,0,0,0-.86-.67l-5.69-.83L833.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L833,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#ed7d2b"/>
  <path id="Path_18644" data-name="Path 18644" d="M877,485.67a1,1,0,0,0-.86-.67l-5.69-.83L867.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L867,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#ed7d2b"/>
  <path id="Path_18645" data-name="Path 18645" d="M911,485.67a1,1,0,0,0-.86-.67l-5.69-.83L901.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L901,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#ed7d2b"/>
</svg>
<Link to="" style={{textDecoration:'none'}}>Write a review</Link></p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row>
                        <Col sm={2}><img src={Reviewavtar} style={{width:'50px' , height:'50px'}}></img></Col>
                        <Col sm={8}>
                            <p className='poppins15R'>Need help with your booking?</p>
                            <p className='poppins12R'>Contact our Customer Support</p>
                        </Col>
                        <Col sm={2}><svg xmlns="http://www.w3.org/2000/svg"  width="60" height="60" viewBox="0 0 60 60">
  <defs>
    <filter id="Ellipse_1805" x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_19270" data-name="Group 19270" transform="translate(9 6)">
    <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Ellipse_1805)">
      <circle id="Ellipse_1805-2" data-name="Ellipse 1805" cx="21" cy="21" r="21" transform="translate(9 6)" fill="#53bd8c"/>
    </g>
    <g id="Icons_Contact_ic-contact-chat" data-name="Icons / Contact / ic-contact-chat" transform="translate(8.904 8.905)">
      <rect id="Rectangle_184" data-name="Rectangle 184" width="24.28" height="24.281" fill="none"/>
      <g id="ic-contact-chat" transform="translate(2.003 3.004)">
        <path id="Path_76" data-name="Path 76" d="M4,3H14.017a2,2,0,0,1,2,2v6.009a2,2,0,0,1-2,2h-3l-3,3-3-3H4a2,2,0,0,1-2-2V5A2,2,0,0,1,4,3Z" transform="translate(-2 -3)" fill="rgba(0,0,0,0)" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Path_77" data-name="Path 77" d="M16.011,8h4.006a2,2,0,0,1,2,2v6.009a2,2,0,0,1-2,2h-2l-2,3-3-3H10a2,2,0,0,1-2-2H8" transform="translate(-1.991 -2.993)" fill="rgba(0,0,0,0)" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      </g>
    </g>
  </g>
</svg>
</Col>
                    </Row>
                </Col>
            </Row>
        </div>
    </>
);
const SecondBoxFastag = () => (
    <>
            <div className='SecondBoxFastag my-3'>
                <div className='px-3 pt-5'>
                <Row>
                    <p style={{textAlign:'center'}}><img src={Fastaglogo} style={{width:'206px',height:'45px'}}></img></p>
                </Row>
                <Row className='py-4'>
                    <p className='poppins18B'>Payment Summary</p>
                </Row>
                <Row className='py-1'>
                    <Col sm={6}><p className='poppins15R' style={{color:'#5D6186'}}>Recharge Amount</p></Col>
                    <Col sm={6} className='poppins16Open' style={{textAlign:'right',paddingRight:'20px'}}>&#8377;1000</Col>
                </Row>
                <hr></hr>
                <Row className='my-3'>
                    <Col sm={6}><p className='poppins20B' style={{color:'#5D6186'}}>Grand Total</p></Col>
                    <Col sm={6} className='poppins20Open' style={{textAlign:'right',paddingRight:'20px'}}>&#8377;6459</Col>
                </Row>
                <p className='poppin18R my-3' style={{color:'#5D6186'}}>Discount</p>
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
                
                <div className='BottomBG mt-5 '>
                <Row className='px-2 py-3'>
                        <Col sm={1} className='py-2 px-2'><img src={CardPay} style={{width:'30px',height:'30px'}}></img></Col>
                        <Col sm={4} className='px-3' ><p style={{fontSize:'12px',fontWeight:'200',marginBottom:'0px',color:'#fff'}}>Total Payment</p><p style={{fontSize:'20px',fontWeight:'bold',marginBottom:'0px',color:'#fff'}}> ₹1000</p></Col>
                        <Col sm={7}>
                           <Link to="/RechargeSucessful" style={{textDecoration:'none'}}><button className='SelectPayment'>Select payment method</button></Link> 
                        </Col>
                        </Row>
                </div>
                
            </div>
            
    </>
);
export default RechargeFastag1;