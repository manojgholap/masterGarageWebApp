import React,{useState} from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link,withRouter } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {logingarage,calenderTime,addressSelect} from '../../redux/action'
import './address.css';
import account from '../../Images/drawable-xxxhdpi/Group 26337.png';
import timer from '../../Images/drawable-xxxhdpi/Group 26338.png';
import locat from '../../Images/drawable-xxxhdpi/Group 26339.png';
import payment from '../../Images/drawable-xxxhdpi/Group 26340.png';
import CartBox from './CartBox';
import FirstChoice from '../../Images/ImagesAll/drawable-xxxhdpi/FirstChoice.png';


function Address(){
    return <>
    <div className='container-fluid'>
        <Row>
                <Col sm={8} className='linkhead pt-4'>
                    <Link to ="/LoginBookGarage" className="bookgarage"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/LoginBookGarage" className="bookgarage1">Confirm Booking</Link>
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
                </div> 
            </div>
                </Col>
            </Row>
            <Row className="py-3"> 
                <Col sm={8} ><SubMid></SubMid></Col>
                <Col sm={4}  ><CartBox></CartBox></Col>   
            </Row>
    </div>            
    </>
}


const SubMid = () =>{
  const[val,setval]=useState()
  const check1=useSelector((state)=>state.check.logingarage); 
  const cal_data=useSelector((state)=>state.check.calenderTime)
  const add_data=useSelector((state)=>state.check?.addressSelect)
  const dispatch=useDispatch();


   const onClickhand=()=>{
    var prev;
    if(add_data.length){
      prev=[...add_data]
    }else{
      prev=[]
    }
    const body=[
      ...prev,
      {val}
    ]
    console.log(body)
    dispatch(addressSelect(body))
   }
    return (
      <div className=''>
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
                  <Col sm={2} style={{textAlign:'right'}} className="pt-3"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35.001" viewBox="0 0 35 35.001">
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
                <p className='bookinghead1'>Pick up & Drop Address</p>
                <Link to="#" style={{textDecoration:'none'}}><p className='poppins22M'>Multiple addresses in this location</p></Link>
                <Row className='py-3'>
              <Row>
               <div class="row gx-2">
                   <div class="col">
                       <div class="p-2 schedulebox">
                       <Row>
                       <Col sm={1}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="16.687" viewBox="0 0 15 16.687">
                        <path id="Path_22575" data-name="Path 22575" d="M96.667,353.666l-5-4.383a2.5,2.5,0,0,0-3.333,0l-5,4.383a2.5,2.5,0,0,0-.833,1.884v7.283a2.5,2.5,0,0,0,2.5,2.5H95a2.5,2.5,0,0,0,2.5-2.5v-7.292a2.5,2.5,0,0,0-.833-1.875Zm-5,10H88.333V359.5a.835.835,0,0,1,.833-.834h1.667a.835.835,0,0,1,.833.834Zm4.167-.833a.833.833,0,0,1-.833.833H93.333V359.5a2.5,2.5,0,0,0-2.5-2.5H89.167a2.5,2.5,0,0,0-2.5,2.5v4.166H85a.833.833,0,0,1-.833-.833v-7.292a.835.835,0,0,1,.074-.343.849.849,0,0,1,.209-.282l5-4.375a.834.834,0,0,1,1.1,0l5,4.375a.851.851,0,0,1,.209.282.835.835,0,0,1,.074.343Z" transform="translate(-82.5 -348.646)"/>
                      </svg>
                    </Col>
                       <Col sm={11}><p className='poppins18RBlack'>Home</p>
                               <p className='poppins15r'>5, Vasant Kunj, Shanti Nagar, Near 
                                       Andheri Metro Station,Andheri East, 
                                       Mumbai- 123 456, Maharashtra, India</p>
                                      <Link to="/PaymentGarage"> <button className='selectbtn'>Select</button></Link>
                       </Col>
                       </Row>    
                       </div>
                   </div>
                   <div class="col">
                       <div class="p-2 schedulebox">
                       <Row>
                       <Col sm={1}><svg xmlns="http://www.w3.org/2000/svg" width="16.664" height="15" viewBox="0 0 16.664 15">
                      <path id="Path_22576" data-name="Path 22576" d="M267.833,744h-2.5v-.833a1.666,1.666,0,0,0-1.666-1.667h-3.334a1.666,1.666,0,0,0-1.666,1.667V744h-2.5a2.5,2.5,0,0,0-2.5,2.5V754a2.5,2.5,0,0,0,2.5,2.5h11.666a2.5,2.5,0,0,0,2.5-2.5v-7.5a2.5,2.5,0,0,0-2.5-2.5Zm-7.5-.833h3.334V744h-3.334ZM268.667,754a.835.835,0,0,1-.834.833H256.167a.833.833,0,0,1-.834-.833v-4.675l3.9,1.342a.993.993,0,0,0,.267,0h5a1.012,1.012,0,0,0,.267-.042l3.9-1.3Zm0-6.433-4.3,1.433h-4.734l-4.3-1.433V746.5a.833.833,0,0,1,.834-.833h11.666a.835.835,0,0,1,.834.833Z" transform="translate(-253.668 -741.5)"/>
                    </svg>
</Col>
                       <Col sm={11}><p className='poppins18RBlack'>Office</p>
                               <p className='poppins15r'
                                >5, Vasant Kunj, Shanti Nagar, Near 
                                       Andheri Metro Station,Andheri East, 
                                       Mumbai- 123 456, Maharashtra, India</p>
                               <button className='select' onClick={()=>onClickhand()}>Selected</button>
                       </Col>
                       </Row>    
                       </div>
                   </div>
               </div>
                   </Row>
                   <Row className='py-2'>
               <div class="row gx-2">
                   <div class="col">
                       <div class="p-2 schedulebox">
                       <Row>
                       <Col sm={1}><svg xmlns="http://www.w3.org/2000/svg" width="13.333" height="16.652" viewBox="0 0 13.333 16.652">
  <path id="Path_22577" data-name="Path 22577" d="M90,495a1.666,1.666,0,1,0-1.178-.488A1.667,1.667,0,0,0,90,495Zm-.592,5.759a.829.829,0,0,0,.271.182.834.834,0,0,0,.641,0,.828.828,0,0,0,.271-.182L94,497.342a5.658,5.658,0,1,0-8,0Zm-3.383-7.809a3.992,3.992,0,1,1,6.8,3.217L90,498.992l-2.825-2.825a3.973,3.973,0,0,1-1.15-3.217Zm9.808,9.717H84.167a.834.834,0,0,0,0,1.667H95.834a.834.834,0,1,0,0-1.667Z" transform="translate(-83.333 -487.682)"/>
</svg>
</Col>
                       <Col sm={11}><p className='poppins18RBlack'>Others</p>
                               <p className='poppins15r'>5, Vasant Kunj, Shanti Nagar, Near 
                                       Andheri Metro Station,Andheri East, 
                                       Mumbai- 123 456, Maharashtra, India</p>
                                       <button className='selectbtn'>Select</button>
                       </Col>
                       </Row>    
                       </div>
                   </div>
                   <div class="col">
                       <div class="p-2 schedulebox">
                       <Row>
                       <Col sm={1} ><p  style={{color:'#2650D8'}} > <svg xmlns="http://www.w3.org/2000/svg" width="13.333" height="16.652" viewBox="0 0 13.333 16.652">
  <path id="Path_22577" data-name="Path 22577" d="M90,495a1.666,1.666,0,1,0-1.178-.488A1.667,1.667,0,0,0,90,495Zm-.592,5.759a.829.829,0,0,0,.271.182.834.834,0,0,0,.641,0,.828.828,0,0,0,.271-.182L94,497.342a5.658,5.658,0,1,0-8,0Zm-3.383-7.809a3.992,3.992,0,1,1,6.8,3.217L90,498.992l-2.825-2.825a3.973,3.973,0,0,1-1.15-3.217Zm9.808,9.717H84.167a.834.834,0,0,0,0,1.667H95.834a.834.834,0,1,0,0-1.667Z" transform="translate(-83.333 -487.682)"/>
</svg></p>
</Col>
                       <Col sm={11}><p className='poppins18RBlack' style={{color:' #2650D8'}}>Add new address</p>
                               <p className='poppins15r'>Mira Road, mira bhayander, 401 105</p>
                                 <Link to="/PaymentGarage" style={{textDecoration:'none'}}><button className='selectadd'>ADD</button></Link>      
                       </Col>
                       </Row>    
                       </div>
                   </div>
               </div>
                   </Row>
               </Row>  
                    </Row>  
           </div>
                
           <div style={{display:'flex'}} className='my-2'>
       <img src={payment} alt="error"/>


                        <Row className='px-5 py-3 accountbg'>
                <p className='bookinghead1'>Payments</p>
                <p className='bookingpara'>Select your preferred payment method</p>
                    </Row>  
           </div>    
            </Row>
    </div>
    )
};


export default withRouter(Address);
