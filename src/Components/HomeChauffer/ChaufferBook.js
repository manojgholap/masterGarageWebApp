import React from 'react';
import {Row,Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../PeriodicServices/periodic.css';
import '../GarageBook/Schedule.css';
import '../GarageBook/address.css';
import '../GarageBook/paynow.css';
import '../GarageVerification/Await.css';
import XL6 from '../../Images/CarGarage/Models/1 Maruti Suzuki/WBG/XL6.png';
import ReviewBeen from '../../Images/drawable-xxxhdpi/ReviewBeen.png';
import Reviewavtar from '../../Images/drawable-xxxhdpi/Reviewavtar.png';
import CardPay from '../../Images/drawable-xxxhdpi/CardPay.png';
import DriveBook from '../../Images/ImagesAll/drawable-xxxhdpi/DriveBook.png';


function ChaufferBook(){
    return <>
    <div>
    <div className='container-fluid px-5'>
        <Row>
                <div className='linkhead'>
                    <Link to ="/ChaufferHome"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/ChaufferHome">Confirm</Link>
                </div>
            </Row>
            <Row className='py-3'> 
                <Col sm={8}><SubMid></SubMid></Col>
                <Col sm={4}><SubLast></SubLast></Col>   
            </Row>
            </div>
    </div>            
    </>
}
export default ChaufferBook;
const SubMid = () =>(
    <>
            <Row className='m-0 p-4 AwaitConfirmbox '>

                    
                <Row className='px-4'>
                <Row>
                    <Col sm={1}>
                        <img src={DriveBook} style={{width:'68px',height:'68px'}}></img>
                    </Col>
                    <Col sm={11} className='px-4 py-1'>
                        <p className='poppins18B'> Drive U</p>
                        <p className='OpenSans25B'>&#8377;459</p>
                    </Col>
                </Row>
                <p className='poppins18M'>Appointment Details</p></Row>
                <Row className=' m-0'>
                    <Col sm={6} ><p style={{fontSize:'14px',color:'#2650D8',fontWeight:'bold',marginBottom:'0px'}}>Sachin Tiwari</p>
                    <p style={{color:'#5D6186',fontSize:'14px'}}>+91 8853299293</p></Col>
                    <Col sm={6}>
                    <Row>
                        <Col sm={8}>
                        <p style={{color:'#10055A',fontSize:'14px',fontWeight:'bold',marginBottom:'0px'}}>Maruti Suzuki  XL6 Petrol</p>
                    <p style={{color:'#10055A',fontSize:'14px',marginBottom:'0px'}}>MH 04 AB 3827</p>
                        </Col>
                        <Col sm={4}><img src={XL6} style={{width:'96px' , height:'66px'}}></img></Col>
                    </Row>
                    
                    

                    </Col>
                </Row>
                <Row className=' m-0'>
                    <Col sm={6}><p style={{fontSize:'12px',color:'#999999',marginBottom:'0px'}}>Service Scheduled For:</p>
                    <p style={{fontSize:'14px',color:'#5D6186',marginBottom:'0px'}}>21/01/2021</p>
                    <p style={{fontSize:'14px',color:'#5D6186',marginBottom:'0px'}}>4:00 pm</p></Col>
                    <Col sm={6}>
                    <p style={{fontSize:'12px',color:'#999999',marginBottom:'0px'}}>Driver Details</p>
                    <p style={{fontSize:'14px',color:'#5D6186',marginBottom:'0px'}}>Drive U</p>
                    </Col>
                </Row>
                <Row className='py-3  m-0'>
                    <Col sm={6}><p style={{fontSize:'12px',color:'#999999',marginBottom:'0px'}}>Pick Up Location</p>
                    <p style={{fontSize:'14px',color:'#5D6186',marginBottom:'0px'}}>A-1234, CGC Residency, Near Bisleri office,</p><p style={{fontSize:'14px',color:'#5D6186',marginBottom:'0px'}}>Andheri East, Mumbai - 400001 <Link to ="" style={{textDecoration:'none'}}><span className='poppins15R' style={{color:'#B92100'}}>[ Edit ]</span> </Link></p>
                        </Col> 
                        <Col sm={6}>
                    <p style={{fontSize:'12px',color:'#999999',marginBottom:'0px'}}>Drop Location</p>
                    <p style={{fontSize:'14px',color:'#5D6186',marginBottom:'0px'}}>A-1234, CGC Residency, Near Bisleri office,</p><p style={{fontSize:'14px',color:'#5D6186',marginBottom:'0px'}}>Andheri East, Mumbai - 400001  <Link to ="" style={{textDecoration:'none'}}><span className='poppins15R' style={{color:'#B92100'}}>[ Edit ]</span> </Link> </p>
                    </Col>
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
                        <Col sm={9}>
                            <p className='poppins15R'>Need help with your booking?</p>
                            <p className='poppins12R'>Contact our Customer Support</p>
                        </Col>
                        <Col sm={1}><svg xmlns="http://www.w3.org/2000/svg"  width="60" height="60" viewBox="0 0 60 60">
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

            </Row>

        
    </>
);

const SubLast = () => (
    <><div className="TotalPayment">

                    <p className='poppins18B p-3'>Payment Summary</p>
                    <div className='px-4'>
                <Row className='py-2'>
                    <Col sm={6}><p className='poppins15R' style={{color:'#5D6186'}}>Driver Charges </p></Col>
                    <Col sm={6} className='poppins16Open' style={{textAlign:'right',paddingRight:'20px'}}>&#8377;200</Col>
                </Row>
                <Row className='py-2'>
                    <Col sm={6}><p className='poppins15R' style={{color:'#4250F0'}}>PROMO - (HAPPY100) </p></Col>
                    <Col sm={6} className='poppins16Open' style={{textAlign:'right' ,color:'#4250F0',paddingRight:'20px'}}> you saved  &#8377;500</Col>
                </Row>
                <Row className='py-2'>
                    <Col sm={6}><p className='poppins15R' style={{color:'#FF9100'}}>MG Coins Redeemed </p></Col>
                    <Col sm={6} className='poppins16Open' style={{textAlign:'right', color:'#FF9100',paddingRight:'20px'}}> you saved &#8377;500</Col>
                </Row>
                <hr></hr>
                <Row className='py-3'>
                    <Col sm={6}><p className='poppins18B' >Sub Total </p></Col>
                    <Col sm={6} className='poppins18Open' style={{textAlign:'right' ,color:'#00155A',paddingRight:'20px'}}>&#8377; 459</Col>
                </Row>
                <Row className='py-2'>
                <Col sm={6}><p className='poppins15R' style={{color:'#5D6186'}}>Driver Charges </p></Col>
                    <Col sm={6} className='poppins16Open' style={{textAlign:'right',paddingRight:'20px'}}>&#8377; 0</Col>
                </Row>
                <Row className='py-2'>
                <Col sm={6}><p className='poppins15R' style={{color:'#5D6186'}}>Taxes @18% GST  </p></Col>
                    <Col sm={6} className='poppins16Open' style={{textAlign:'right',paddingRight:'20px'}}>&#8377; 99</Col>
                </Row>
                <hr></hr>
                <Row className='my-4'>
                    <Col sm={6}><p className='poppins20B' style={{color:'#5D6186'}}>Grand Total</p></Col>
                    <Col sm={6} className='poppins20Open' style={{textAlign:'right',paddingRight:'20px'}}>&#8377;459</Col>
                </Row>
                
                <Row className=' my-4 py-2  Re_CouponsBG' >
                <Col sm={8} className='p-0'><p className='poppins18R ' style={{color:'#53bd8c'}}><svg xmlns="http://www.w3.org/2000/svg" width="24.771"  className='mx-2'  height="25.703" viewBox="0 0 24.771 25.703">
  <path id="Path_27147" data-name="Path 27147" d="M787.836,646.6a.724.724,0,0,1,0-.636l.916-1.874a2.133,2.133,0,0,0-.92-2.832l-1.842-.978a.717.717,0,0,1-.375-.515l-.36-2.055a2.134,2.134,0,0,0-2.409-1.75l-2.064.292a.716.716,0,0,1-.605-.2l-1.5-1.45a2.133,2.133,0,0,0-2.977,0l-1.5,1.45a.714.714,0,0,1-.6.2l-2.066-.292a2.132,2.132,0,0,0-2.408,1.75l-.361,2.055a.715.715,0,0,1-.373.515l-1.843.979a2.132,2.132,0,0,0-.92,2.831l.916,1.874a.716.716,0,0,1,0,.636l-.916,1.874a2.134,2.134,0,0,0,.92,2.832l1.843.977a.718.718,0,0,1,.373.515l.361,2.055a2.128,2.128,0,0,0,2.1,1.771,2.17,2.17,0,0,0,.307-.021l2.066-.292a.718.718,0,0,1,.6.2l1.5,1.45a2.132,2.132,0,0,0,2.977,0l1.5-1.45a.721.721,0,0,1,.605-.2l2.064.292a2.134,2.134,0,0,0,2.409-1.75l.36-2.055a.72.72,0,0,1,.375-.515l1.842-.977a2.133,2.133,0,0,0,.92-2.832Zm-14.74-7.953a2.6,2.6,0,1,1-2.6,2.6A2.6,2.6,0,0,1,773.1,638.646Zm.7,13.649a.708.708,0,0,1-1,0c-.276-.276-1.536-1.4-1.26-1.672l9.963-9.886c.276-.276,1.371.932,1.647,1.208a.706.706,0,0,1,0,1Zm7.539,1.608a2.718,2.718,0,0,1-1.7-.636,2.494,2.494,0,0,1-.9-1.961,2.6,2.6,0,1,1,2.6,2.6Z" transform="translate(-764.803 -633.358)" fill="#53bd8c" stroke="#53bd8c" stroke-width="1"/>
</svg>

CASHBACK100 Applied</p></Col>
                    <Col sm={4} className='poppins15M'><Link to ="" style={{textDecoration:'none'}}>view offers</Link></Col>
                </Row>
                </div>
                
                <div className='BottomBG my-4 px-2 py-3'>
                        <Row>
                        <Col sm={1} className='py-2 px-2'><img src={CardPay} style={{width:'30px',height:'30px'}}></img></Col>
                        <Col sm={4} ><p style={{fontSize:'12px',fontWeight:'200',marginBottom:'0px',color:'#fff'}}>Total Payment</p><p style={{fontSize:'20px',fontWeight:'bold',marginBottom:'0px',fontFamily:'Open Sans',color:'#fff'}}> ₹ 459</p></Col>
                        <Col sm={7}>
                           <Link to="/ChaufferAwait" style={{textDecoration:'none'}}><button className='SelectPayment'>Select payment method</button></Link> 
                        </Col>
                        </Row>
                </div>
                
        </div>
        

    </>
);


