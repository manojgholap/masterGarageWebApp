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


function ChaufferDeclined(){
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
export default ChaufferDeclined;
const SubMid = () =>(
    <>
            <Row className='m-0 p-4 AwaitConfirmbox '>

                    
                <Row className='px-4'>
                <Row>
                    <Col sm={1}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <path id="Path_21085" data-name="Path 21085" d="M385,353a32,32,0,1,0,32,32A32,32,0,0,0,385,353Zm-5.92,28.587a2,2,0,1,1-2.827,2.826L373,381.16l-3.253,3.253a2,2,0,1,1-2.827-2.829l3.253-3.253-3.253-3.251a2,2,0,0,1,2.829-2.829L373,375.5l3.253-3.253a2,2,0,0,1,2.829,2.829l-3.256,3.253Zm24,0a2,2,0,1,1-2.827,2.826L397,381.16l-3.253,3.253a2,2,0,1,1-2.827-2.829l3.253-3.253-3.253-3.254a2,2,0,1,1,2.829-2.829L397,375.5l3.253-3.253a2,2,0,1,1,2.829,2.829l-3.253,3.254Z" transform="translate(-353 -353)" fill="#f45c3b"/>
</svg>

                    </Col>
                    <Col sm={11} className='px-4 py-1'>
                    <Row>
                        <Col sm={8}><p className='poppins25M' style={{color:'#F45C3B'}}>Booking Declined</p></Col>
                        <Col sm={4}><p className='OpenSans25B' style={{float:'right',color:'#000'}}>&#8377;459</p></Col>
                    </Row>  
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
    <><div className="TotalPayment py-3" style={{textAlign:'center'}}>

                    <p className='poppins22B p-3'>We are feeling bad about it!</p>
                    <p className='poppins15L'>Your Booking has been Declined for some reason</p>
                    <div className='py-5'><svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150">
  <path id="Path_21085" data-name="Path 21085" d="M428,353a75,75,0,1,0,75,75A75,75,0,0,0,428,353Zm-13.873,67a4.681,4.681,0,0,1-3.314,8,4.625,4.625,0,0,1-3.308-1.38L399.875,419l-7.63,7.617a4.663,4.663,0,0,1-6.622,0,4.686,4.686,0,0,1,0-6.628l7.629-7.623-7.629-7.617a4.687,4.687,0,0,1,6.628-6.628l7.635,7.623,7.617-7.623a4.689,4.689,0,0,1,6.635,6.628l-7.635,7.623Zm56.25,0a4.681,4.681,0,0,1-3.314,8,4.625,4.625,0,0,1-3.308-1.38L456.125,419l-7.629,7.617a4.663,4.663,0,0,1-6.622,0,4.686,4.686,0,0,1,0-6.628l7.63-7.623-7.63-7.629a4.687,4.687,0,0,1,6.628-6.628l7.635,7.629,7.617-7.629a4.689,4.689,0,1,1,6.635,6.628l-7.623,7.629Z" transform="translate(-353 -353)" fill="#f45c3b"/>
</svg>

                    </div>
                    <Row className='py-2'>
                        <p className='poppins30B'>Please try other partner </p>
                    </Row>
                    
                    <Row><p className='poppins15L'>Your Booking has been Declined for some reason</p></Row>
                    <Row className='py-5'>
                  <Link to="/ChaufferDeclined" style={{textDecoration:'none'}}><button className='Bookedbtn'>View other Partners</button></Link> 


                    </Row>

                
        </div>
        

    </>
);



