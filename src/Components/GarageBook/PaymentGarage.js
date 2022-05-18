import React from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link,withRouter } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {logingarage,calenderTime,addressSelect} from '../../redux/action'
import '../PeriodicServices/periodic.css';
import './Schedule.css';
import './address.css';
import account from '../../Images/drawable-xxxhdpi/Group 26337.png';
import timer from '../../Images/drawable-xxxhdpi/Group 26338.png';
import locat from '../../Images/drawable-xxxhdpi/Group 26339.png';
import payment from '../../Images/drawable-xxxhdpi/Group 26340.png';
import FirstChoice from '../../Images/ImagesAll/drawable-xxxhdpi/FirstChoice.png';
import CartBox from './CartBox';


function PayBook(){

    return <>
    <div className='container-fluid'>
        <Row>
                <Col sm={8} className='linkhead pt-4'>
                    <Link to ="/LoginBookGarage"  className="bookgarage"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/LoginBookGarage"  className="bookgarage1">Confirm Booking</Link>
                </Col>
                 <Col sm={4} className='mt-3'>
                <div className="progressbar">
                <div className="prog14">   
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
                </Col>
            </Row>
            <Row> 
                <Col sm={8} ><SubMid></SubMid></Col>
                <Col sm={4}  ><CartBox></CartBox></Col>   
            </Row>
    </div>            
    </>
}
export default PayBook;
const SubMid = () =>
{
  const check1=useSelector((state)=>state.check.logingarage); 
  const cal_data=useSelector((state)=>state.check.calenderTime)
  const add_data=useSelector((state)=>state.check?.addressSelect)

return(
    <div className="">

           <Row className="allpageac">
           <div style={{display:'flex'}} className='mb-2'>
                       <img src={account} alt="error"/>
                 <Row className='px-5 py-4 accountbg'>
                   <Row>
                     <Col sm={10}>
                        <p className='bookinghead1'>Logged in</p>
                        {check1?.map((val,index)=>(
                            <Link to="#" style={{textDecoration:'none'}}><p className='poppins22M'>{val.phone}</p></Link>
                        ))}
                          
                    </Col>
                        <Col sm={2} style={{textAlign:'right'}} className="pt-2"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35.001" viewBox="0 0 35 35.001">
                          <path id="Path_20808" data-name="Path 20808" d="M101.5,207A17.5,17.5,0,1,0,119,224.5,17.52,17.52,0,0,0,101.5,207Zm8.071,14.8-9.188,9.189a.549.549,0,0,1-.755,0l-6.164-6.164a.538.538,0,0,1,0-.756l.788-.788a.537.537,0,0,1,.755,0l4.805,4.805a.271.271,0,0,0,.386,0l7.83-7.83a.549.549,0,0,1,.755,0l.788.789a.533.533,0,0,1,0,.755Z" transform="translate(-84 -207)" fill="#53bd8c"/>
                            </svg>
                        </Col>            
                  </Row>
                </Row>  
           </div>
           <div style={{display:'flex'}} className='my-2'>
           <img src={timer} alt="error"/>

                 <Row className='px-5 py-3 accountbg'>
                       {cal_data?.map((item,index)=>(
                         <div className="accountbg1">
                             <Col sm={10}>
                        <p className='bookinghead1'>Service Schedule</p>
                        <div className='poppins22TM'>
                          <h5>Date:{new Date(item.date).toDateString()}</h5>
                          <h5>Time :{item.selectedTimeSlot}</h5>
                          </div>
                        </Col>
                        <Col sm={2} style={{textAlign:'right'}}>
                        <p style={{color:'red'}}>CHANGE</p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35.001" viewBox="0 0 35 35.001">
                            <path id="Path_20808" data-name="Path 20808" d="M101.5,207A17.5,17.5,0,1,0,119,224.5,17.52,17.52,0,0,0,101.5,207Zm8.071,14.8-9.188,9.189a.549.549,0,0,1-.755,0l-6.164-6.164a.538.538,0,0,1,0-.756l.788-.788a.537.537,0,0,1,.755,0l4.805,4.805a.271.271,0,0,0,.386,0l7.83-7.83a.549.549,0,0,1,.755,0l.788.789a.533.533,0,0,1,0,.755Z" transform="translate(-84 -207)" fill="#53bd8c"/>
                          </svg>
                        </Col>
                         </div>
                       ))}
                      
                     </Row>  
           </div>
           <div style={{display:'flex'}} className='my-2'>
           <img src={locat} alt="error"/>

                        <Row className='px-5 py-3 accountbg'>
                        <Col sm={10}>
                        <p className='bookinghead1'>Pick up & Drop Address</p>
                        <Link to="#" style={{textDecoration:'none'}}><p className='poppins22AD'>5, Vasant Kunj, Shanti Nagar, Near Andheri Metro Station,Andheri East, 
                           Mumbai- 123 456, Maharashtra, India</p></Link>
                        </Col>
                        <Col sm={2} style={{textAlign:'right'}}>
                        <p style={{color:'red'}}>CHANGE</p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35.001" viewBox="0 0 35 35.001">
                            <path id="Path_20808" data-name="Path 20808" d="M101.5,207A17.5,17.5,0,1,0,119,224.5,17.52,17.52,0,0,0,101.5,207Zm8.071,14.8-9.188,9.189a.549.549,0,0,1-.755,0l-6.164-6.164a.538.538,0,0,1,0-.756l.788-.788a.537.537,0,0,1,.755,0l4.805,4.805a.271.271,0,0,0,.386,0l7.83-7.83a.549.549,0,0,1,.755,0l.788.789a.533.533,0,0,1,0,.755Z" transform="translate(-84 -207)" fill="#53bd8c"/>
                          </svg>
                        </Col>
                        
                
                    </Row>  
           </div>
           
           <div style={{display:'flex'}} className='my-2'>
           <img src={payment} alt="error"/>


                        <Row className='px-5 py-3 accountbg'>
                        <p className='bookinghead1'>Choose Payment Option</p>
                        <Row >
                <div class="row gx-3">
                    <div class="col">
                        <div class="p-2 schedulebox">
                        <Row>
                        <Col sm={1}></Col>
                        <Col sm={11}><p className='poppins18RBlack'>Pay Now</p>
                                <p className='poppins15r'>Pay now and earn exciting rewards &
                           earn more MG coins on this pay booking.</p>
                                        <button className='selectbtn'>Select</button>
                        </Col>
                        </Row>    
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-2 schedulebox">
                        <Row>
                        <Col sm={1}></Col>
                        <Col sm={11}><p className='poppins18RBlack'>Pay after Service Completion</p>
                                <p className='poppins15r'>By opting this method you agree to 
                                pay after service completion and 
                                before vehicle delivery</p>
                                <button className='select'>Selected</button>   
                        </Col>
                        </Row> 
                                        
                        </div>
                    </div>
                </div>
                
                    
                    </Row>
                    <Row className='m-5'><Link to="/Paynow"><button className='submitpayment'>PROCEED</button></Link></Row>
                
                    </Row>  
           </div>  
                    
            </Row>
    </div>
);
}



