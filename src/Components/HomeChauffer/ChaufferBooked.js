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
import Sucessful from '../../Images/ImagesAll/drawable-xxxhdpi/Sucessful.png';
import CardPay from '../../Images/drawable-xxxhdpi/CardPay.png';
import DriveBook from '../../Images/ImagesAll/drawable-xxxhdpi/DriveBook.png';


function ChaufferBooked(){
    return <>
    <div>
    <div className='container-fluid px-5'>
        <Row>
                <div className='linkhead'>
                    <Link to ="/ChaufferDeclined"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/ChaufferDeclined">Confirm</Link>
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
export default ChaufferBooked;
const SubMid = () =>(
    <>
            <Row className='m-0 p-4 AwaitConfirmbox '>

                    
                <Row className='px-4'>
                <Row>
                    <Col sm={1}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="63.999" height="64" viewBox="0 0 63.999 64">
  <path id="Path_30950" data-name="Path 30950" d="M116,207a32,32,0,1,0,32,32A32.037,32.037,0,0,0,116,207Zm14.758,27.07-16.8,16.8a1,1,0,0,1-1.38,0L101.305,239.6a.984.984,0,0,1,0-1.383l1.441-1.44a.983.983,0,0,1,1.38,0l8.787,8.787a.5.5,0,0,0,.706,0l14.318-14.317a1,1,0,0,1,1.38,0l1.441,1.443a.975.975,0,0,1,0,1.38Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>

                    </Col>
                    <Col sm={11} className='px-4 py-1'>
                    <Row>
                        <Col sm={8}><p className='poppins25M' style={{color:'#53BD8C'}}> Booking Accepted</p>
                        <p className='poppins15R' style={{color:'#2650D8'}}>Booking ID: MG1234567890  </p></Col>
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
    <><div className="TotalPayment p-4" style={{textAlign:'center'}}>

                    <Row>
                        <Col sm={6}>
                            <img src={Sucessful} style={{width:'177px',height:'115px'}}></img>
                        </Col>
                        <Col sm={6} className='py-4'>
                            <p className='poppins15R' style={{marginLeft:'-20px'}}>Congratulations! You earned</p>
                            <p className='OpenSans20B'>5000 MG Coins</p>
                        </Col>
                    </Row>
                    <div className='py-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="236.484" height="166.589" viewBox="0 0 236.484 166.589">
  <g id="Group_29423" data-name="Group 29423" transform="translate(-1075.718 -360.916)">
    <path id="Icon_ionic-ios-checkmark" data-name="Icon ionic-ios-checkmark" d="M146.875,24.5,135.664,12.971a2.41,2.41,0,0,0-1.784-.764h0a2.313,2.313,0,0,0-1.784.764L54.386,91.255,26.1,62.973a2.463,2.463,0,0,0-3.567,0L11.2,74.312a2.538,2.538,0,0,0,0,3.631l35.671,35.671c2.293,2.293,5.1,3.631,7.453,3.631,3.376,0,6.306-2.484,7.389-3.5h.064l85.164-85.61A2.723,2.723,0,0,0,146.875,24.5Z" transform="translate(1114.498 410.261)" fill="#53bd8c"/>
    <path id="Path_649" data-name="Path 649" d="M298.067,48.35l4.979,1.379C299.9,61.055,296.8,72.24,293.627,83.662l-5-1.4Z" transform="translate(856.184 312.566)" fill="#53bd8c"/>
    <path id="Path_652" data-name="Path 652" d="M254.567,184.4c1.792,1.885,3.342,3.646,5.031,5.262a17.579,17.579,0,0,0,9.189,4.844,7.9,7.9,0,0,1,3.328,1.537,3.46,3.46,0,0,1,.382,5.2c-.94,1.1-1.907,2.167-3.163,3.591-.049-3.657-2.189-5.032-4.964-5.511-6.311-1.09-10.09-5.492-13.97-10.112Z" transform="translate(860.726 235.834)" fill="#53bd8c"/>
    <path id="Path_669" data-name="Path 669" d="M4.153,0C5.944,1.886,7.495,3.647,9.182,5.264a17.593,17.593,0,0,0,9.18,4.851,7.9,7.9,0,0,1,3.325,1.54,3.46,3.46,0,0,1,.387,5.2c-.937,1.094-1.9,2.164-3.154,3.585-.053-3.654-2.191-5.031-4.962-5.513C7.656,13.829,3.878,9.426,0,4.805Z" transform="matrix(0.574, -0.819, 0.819, 0.574, 1242.212, 383.48)" fill="#53bd8c"/>
    <path id="Path_654" data-name="Path 654" d="M566.2,297.982a5.736,5.736,0,1,1,6.005-5.73A5.73,5.73,0,0,1,566.2,297.982Z" transform="translate(729.565 201.367)" fill="#53bd8c"/>
    <path id="Path_656" data-name="Path 656" d="M374.325,181.788a5.75,5.75,0,1,1-5.764-5.754A5.817,5.817,0,0,1,374.325,181.788Z" transform="translate(821.636 252.952)" fill="#53bd8c"/>
    <path id="Path_657" data-name="Path 657" d="M223.9,93.06a5.741,5.741,0,1,1,5.862-5.579A5.668,5.668,0,0,1,223.9,93.06Z" transform="translate(888.958 297.053)" fill="#53bd8c"/>
    <path id="Path_660" data-name="Path 660" d="M218.926,421.195c-3.122-.609-6.246-1.434-9.418-1.73a5.742,5.742,0,0,0-3.817,1.558c-2.79,2.518-4.491,2.77-7.505.554-1.174-.863-2.336-1.744-3.237-2.417,1.718-1.286,3.358-2.622,5.117-3.776a4.925,4.925,0,0,1,2.475-.691C206.611,414.595,214.89,416.684,218.926,421.195Z" transform="translate(892.202 76.257)" fill="#53bd8c"/>
    <path id="Path_661" data-name="Path 661" d="M552.326,436.517c-2.655,0-4.93.085-7.189-.066a2,2,0,0,1-1.368-1.378c-.148-2.322-.065-4.66-.065-7.1h8.622Z" transform="translate(759.876 17.331)" fill="#53bd8c"/>
    <path id="Path_662" data-name="Path 662" d="M236.371,338.733l-3.874,5.245-5.242-3.866,3.865-5.23Z" transform="translate(886.303 180.318)" fill="#53bd8c"/>
    <path id="Path_665" data-name="Path 665" d="M535.989,225.058l-8.147,9.25-3.954-11.63Z" transform="translate(746.639 231.173)" fill="#53bd8c"/>
    <path id="Path_667" data-name="Path 667" d="M348.935,125.906l-9.49-7.863,11.525-4.294C350.282,117.861,349.648,121.647,348.935,125.906Z" transform="translate(855.291 276.337)" fill="#53bd8c"/>
    <path id="Path_670" data-name="Path 670" d="M348.935,125.906l-9.49-7.863,11.525-4.294C350.282,117.861,349.648,121.647,348.935,125.906Z" transform="translate(953.804 288.466)" fill="#53bd8c"/>
    <path id="Path_668" data-name="Path 668" d="M184.27,208.96l9.179,8.221L181.757,221C182.633,216.8,183.413,213.063,184.27,208.96Z" transform="translate(893.961 244.892)" fill="#53bd8c"/>
  </g>
</svg>

                    </div>
                    <Row className='py-3'>
                        <p className='poppins30B'>Congratulations! </p>
                    </Row>
                    
                    <Row><p className='poppins15L'>Your Booking has been Accepted</p></Row>
                    <Row className='py-2'>
                  <Link to="/Confirmbook" style={{textDecoration:'none'}}><button className='Bookedbtn'>Track Booking Status</button></Link> 


                    </Row>

                
                
        </div>
        

    </>
);


