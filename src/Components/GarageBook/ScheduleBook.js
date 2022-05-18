import React,{useState} from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link,withRouter } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import '../PeriodicServices/periodic.css';
import './Schedule.css';
import FirstChoice from '../../Images/ImagesAll/drawable-xxxhdpi/FirstChoice.png';
import CartBox from './CartBox';
import DateTimePicker from 'react-datetime-picker';
import Calendar from 'react-calendar';
import {logingarage,calenderTime} from '../../redux/action';
import checkright from '../../Images/drawable-xxxhdpi/Path 22613.png';
import account from '../../Images/drawable-xxxhdpi/Group 26337.png';
import timer from '../../Images/drawable-xxxhdpi/Group 26338.png';
import locat from '../../Images/drawable-xxxhdpi/Group 26339.png';
import payment from '../../Images/drawable-xxxhdpi/Group 26340.png';
const times = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "16:00",
  "15:00",
  "17:00",
  "18:00",
];
function ScheduleBook(){
  
    return <>
    <div className='container-fluid'>
        <Row>
                <Col sm={8} className='linkhead pt-4'>
                    <Link to ="/LoginGarage" className="bookgarage"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/LoginGarage" className="bookgarage1">Confirm Booking</Link>
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
            <Row className="py-2"> 
                <Col sm={8} ><SubMid></SubMid></Col>
                <Col sm={4}  ><CartBox></CartBox></Col>
                
            </Row>

    </div>
            
    </>
}



const SubMid = () =>{
  const [date, setDate] = useState(new Date());
  const [value, onChange] = useState(new Date());
    const [bookingDate, setBookingDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
   const [bookingTimes, setBookingTimes] = useState([]);

    const check1=useSelector((state)=>state.check.logingarage);
   
   const cal_data=useSelector((state)=>state.check?.calenderTime)
   const dispatch=useDispatch()

   const handleCalTime=()=>{
     var caldata;
     if(cal_data.length){
       caldata=[...cal_data]
     }else{
       caldata=[];
     }
     const body=[
       ...caldata,
       {date,selectedTimeSlot}
     ];
     console.log(body)
     dispatch(calenderTime(body))
   }
  return(
    
    <>
           <Row className='allpageac'>
           <div style={{display:'flex'}} className='mb-2 aligmrnt'>
             <img src={account} alt="error"/>
                        <Row className='px-5 py-4 accountbg'>
                        <Row>
                            <Col sm={10}>
                            <p className='bookinghead1'>Logged in</p>
                            {check1?.map((val,index)=>(
                                 <p className='poppins22M'>{val.phone}</p>
                            ))}
                          
                          </Col>
                          <Col sm={2} className="tickcorrect">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35.001" viewBox="0 0 35 35.001">
                          <path id="Path_20808" data-name="Path 20808" d="M101.5,207A17.5,17.5,0,1,0,119,224.5,17.52,17.52,0,0,0,101.5,207Zm8.071,14.8-9.188,9.189a.549.549,0,0,1-.755,0l-6.164-6.164a.538.538,0,0,1,0-.756l.788-.788a.537.537,0,0,1,.755,0l4.805,4.805a.271.271,0,0,0,.386,0l7.83-7.83a.549.549,0,0,1,.755,0l.788.789a.533.533,0,0,1,0,.755Z" transform="translate(-84 -207)" fill="#53bd8c"/>
                        </svg>
                      </Col>
                    </Row>
                   </Row>  
              </div>
           <div style={{display:'flex'}} className='my-2'>
           <img src={timer} alt="error"/>

                        <Row className='px-5 py-3 accountbg'>
                        <Col sm={8}>
                        <p className='bookinghead1'>Service Schedule</p>
                <p className='bookingpara'>Select your preferred Date & Time for the service</p>
                        </Col>
                        <Col sm={4} style={{textAlign:'right'}}>
                        <form action="/" method="get">
        <Link style={{textDecoration:'none'}} to="/Adaddress"><button className='submitphone' onClick={()=>handleCalTime()}>Submit</button></Link>
    </form>
                        </Col>
                        <Row className='m-3 schedulebox'>
                        <Col sm={6}>
                        <div className='app'>
  
      <div className='calendar-container'>
        <Calendar 
        onChange={setDate} 
        value={date}
        />
      </div>
   
    </div>
{/* <div>
<DateTimePicker onChange={onChange} value={value} />

</div> */}

  </Col>
       <Col lg={6}><p className='bookingpara' style={{fontSize:'14px'}}>Click on any of the slots from below available windows</p> 
             <div class="row gx-2">
                <div className="flex2 d-flex mb-3">
                 {times.map(time => {
               return (
                      <div className="flex1">
                      <button
                        key={time}
                        className="btn22"
                        onClick={e => setSelectedTimeSlot(time)}
                      >
                        {time}
                      </button>
                      </div>
                    );
                  })}
                </div>
             </div>
          </Col>
      </Row>
     <span className='bookingpara'>Note: Post placing the order, we will connect you with the garage to take care of your car problems & services</span>  
                        </Row>  
 </div>
    <div style={{display:'flex'}} className='my-2'>
<img src={locat} alt="error"/>

                        <Row className='px-5 py-3 accountbg'>
                <p className='bookinghead1'>Pick up & Drop Address</p>
                <p className='bookingpara'>Add or choose your preferred address for pick up & drop</p>
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
    </>)
};

export default withRouter(ScheduleBook);

