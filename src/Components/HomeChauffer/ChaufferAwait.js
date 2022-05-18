import React from 'react';
import {Row,Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../PeriodicServices/periodic.css';
import '../GarageBook/Schedule.css';
import '../GarageBook/address.css';
import '../GarageBook/paynow.css';
import '../GarageVerification/Await.css';
import './ChaufferAwait.css';
import XL6 from '../../Images/CarGarage/Models/1 Maruti Suzuki/WBG/XL6.png';
import ReviewBeen from '../../Images/drawable-xxxhdpi/ReviewBeen.png';
import Reviewavtar from '../../Images/drawable-xxxhdpi/Reviewavtar.png';
import Await from '../../Images/ImagesAll/drawable-xxxhdpi/Await.png';


function ChaufferAwait(){
    return <>
    <div>
    <div className='container-fluid px-5'>
        <Row>
                <div className='linkhead'>
                    <Link to ="/ChaufferBooked"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/ChaufferBooked">Confirm</Link>
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
export default ChaufferAwait;
const SubMid = () =>(
    <>
            <Row className='m-0 p-4 AwaitConfirmbox '>

                    
                <Row className='px-2 p-0 m-0'>
                <Row>
                    <Col sm={1}>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g id="Group_29425" data-name="Group 29425" transform="translate(-70 -160)">
    <circle id="Ellipse_1797" data-name="Ellipse 1797" cx="32" cy="32" r="32" transform="translate(70 160)" fill="#ed7d2b"/>
    <g id="Group_29424" data-name="Group 29424">
      <path id="Path_20957" data-name="Path 20957" d="M128.875,249.75A10.125,10.125,0,1,0,139,259.875,10.138,10.138,0,0,0,128.875,249.75Zm4.172,14.3a1.132,1.132,0,0,1-1.594,0l-3.375-3.375a1.136,1.136,0,0,1-.328-.8v-4.5a1.125,1.125,0,0,1,2.25,0v4.034l3.047,3.047A1.127,1.127,0,0,1,133.047,264.047Z" transform="translate(-14 -58)" fill="#fff"/>
      <path id="Path_20958" data-name="Path 20958" d="M117.344,255.418c-.084-.1-.151-.2-.241-.293l-2.853-2.851-2.853,2.853a5.578,5.578,0,0,0-1.647,3.976V261h6.806c-.033-.371-.056-.747-.056-1.127A12.278,12.278,0,0,1,117.344,255.418Z" transform="translate(-14 -58)" fill="#fff"/>
      <path id="Path_20959" data-name="Path 20959" d="M109.75,238.5v1.9a5.6,5.6,0,0,0,1.647,3.978l2.853,2.853,2.853-2.853a5.589,5.589,0,0,0,1.647-3.978v-1.9Z" transform="translate(-14 -58)" fill="#fff"/>
      <path id="Path_20960" data-name="Path 20960" d="M124.375,234h-20.25a1.125,1.125,0,0,0,0,2.25h1.125V240.4a10.056,10.056,0,0,0,2.966,7.159l2.193,2.194-2.193,2.194a10.059,10.059,0,0,0-2.966,7.159v4.147h-1.125a1.125,1.125,0,0,0,0,2.25l13.741,0a12.216,12.216,0,0,1-.887-2.25l-9.479,0V259.1a7.825,7.825,0,0,1,2.306-5.568l2.991-2.988a1.132,1.132,0,0,0,0-1.594l-2.991-2.988A7.824,7.824,0,0,1,107.5,240.4V236.25H121V240.4a7.827,7.827,0,0,1-2.306,5.568l-2.991,2.991a1.129,1.129,0,0,0,0,1.591l2.725,2.722a12.509,12.509,0,0,1,1.386-1.8l-1.723-1.723,2.194-2.2a10.051,10.051,0,0,0,2.965-7.157V236.25h1.125a1.125,1.125,0,0,0,0-2.25Z" transform="translate(-14 -58)" fill="#fff"/>
    </g>
  </g>
</svg>
</p>
                    </Col>
                    <Col sm={11} className='px-4 '>
                    <Row>
                        <Col sm={8}><p className='poppins25M'> Awaiting Confirmation</p>
                        <p className='poppins15R' style={{color:'#2650D8'}}>Booking ID: XXXXXXXXXXX </p></Col>
                        <Col sm={4}><p className='OpenSans25B' style={{float:'right',color:'#000'}}>&#8377;459</p></Col>
                    </Row>        
                    </Col>
                </Row>
                </Row>
                <Row className='overlaybox px-2 '>
                <p className='poppins20M'>Appointment Details</p>
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
                        <Col sm={9} className='p-0'>
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
                

            </Row>

        
    </>
);

const SubLast = () => (
    <><div className="TotalPayment" style={{textAlign:'center'}}>

                    <p className='poppins18B p-3' style={{textAlign:'center'}}>Don't worry you are doing good</p>
                    <div className='py-5'>
                        <img src={Await} style={{width:'383px',height:'224px'}}></img>
                    </div>
                    <Row className='py-3'>
                        <p className='poppins22M'>Driver Partner will soon </p>
                        <p className='poppins22M'>accept your booking</p>
                    </Row>
                    <Row className='py-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="168" height="23" viewBox="0 0 168 23">
  <defs>
    <filter id="Path_17030" x="0" y="0" width="168" height="23" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_17030)">
    <path id="Path_17030-2" data-name="Path 17030" d="M2.5,0h145a2.5,2.5,0,0,1,0,5H2.5a2.5,2.5,0,0,1,0-5Z" transform="translate(9 6)" fill="#2650d8"/>
  </g>
</svg>


                    </Row>
                    <Row><p className='poppins15L'>Awaiting Driver Confirmation</p></Row>

                
        </div>
        

    </>
);


