import React,{useState} from 'react';

import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import {useSelector,useDispatch} from 'react-redux'
import {selectVehical,registerVehicalNo,logingarage,calenderTime} from '../../redux/action';
import {withRouter,Link} from "react-router-dom";
import avtarlogo from '../../Images/avtarlogo.png';
import XL6 from '../../Images/CarGarage/Models/1 Maruti Suzuki/WBG/XL6.png';
import Venue from '../../Images/CarBrand/Models/2 Hyundai/Venue.jpeg';
import timepass from '../../Images/Images/drawable-xxxhdpi/timepass.png';
import './Await.css'
function Bokk(){
  const[page,setPage]=useState(0);
  const formTitles=['E','Vehical','Service','Garage','Basic','F']
  let text = formTitles.join(' ');
    return <>
    <div>
    <div className='container-fluid px-5'>
        <Row>
                <Col sm={8} className='linkhead pt-4'>
                    <Link to ="/BkByAddvechile" className="bookawait"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/BkByAddvechile" className="bookawait1">Booking Confirmation</Link>
                </Col>
                <Col sm={4} className='mt-4'>
                <div className="progressbar112">
                <div className="prog11">   
                </div>
                <div className="pagesize111"><li></li><li>|</li><li>|</li><li>|</li><li>|</li><li></li></div>
                <div className="pagesize12">
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
                <Col sm={8}><SubMid></SubMid></Col>
                <Col sm={4}><SubLast></SubLast></Col>   
            </Row>
            </div>
    </div>            
    </>
}

const SubMid = () =>{
     const checkveh=useSelector((state)=>state.check.selectVehical); 
const check=useSelector((state)=>state.check.registerVehicalNo)
      const check1=useSelector((state)=>state.check.logingarage); 
  const cal_data=useSelector((state)=>state.check.calenderTime)
   return(
    <div className="await_cont">
   <Row className='m-0 AwaitConfirmbox '>
          
                    <Row className='px-5 my-2 pt-4'>
                    <Col sm={1} style={{padding:'10px'}}><svg xmlns="http://www.w3.org/2000/svg" width="50.999" height="50" viewBox="0 0 63.999 64">
                      <path id="Path_20808" data-name="Path 20808" d="M116,207a32,32,0,1,0,32,32A32.037,32.037,0,0,0,116,207Zm14.758,27.07-16.8,16.8a1,1,0,0,1-1.38,0L101.305,239.6a.984.984,0,0,1,0-1.383l1.441-1.44a.983.983,0,0,1,1.38,0l8.787,8.787a.5.5,0,0,0,.706,0l14.318-14.317a1,1,0,0,1,1.38,0l1.441,1.443a.975.975,0,0,1,0,1.38Z" transform="translate(-84 -207)" fill="#53bd8c"/>
                    </svg>
                    </Col>
                    <Col sm={9} className='px-3 py-2'><p style={{fontSize:'20px',color:'#53BD8C',marginBottom:'0px'}}>Booking Accepted</p>
                    <p style={{fontSize:'12px',color:'#2650D8'}}>Booking ID: MG123455 </p>
                    </Col>
                      <Col sm={2} className='py-2' >	<p style={{textAlign:'right',color:'#132337' ,fontSize:'20px',fontWeight:'bold',marginBottom:'0px'}}>&#8377;6459</p>
                    <p style={{paddingLeft:'30px',color:'red',fontSize:'12px',marginBottom:'0px'}} className="paylater">Pay Later</p></Col>
                </Row>
            <Row className='px-4'>
                <p style={{color:'#10055A',fontSize:'25px'}}>Appointment Details</p></Row>
              
            <Row className=' m-0'>
                {check1.map((item)=>(
                   <Col sm={6} ><p style={{fontSize:'14px',color:'#2650D8',fontWeight:'bold',marginBottom:'0px'}}>Sachin Tiwari</p>
                   <p style={{color:'#5D6186',fontSize:'14px'}}>{item.phone}</p></Col>
                  
                ))}
                     <Col sm={6}>
                       {check.map((item)=>(
                           <Row>
                           <Col sm={8}>
                           <p style={{color:'#10055A',fontSize:'14px',fontWeight:'bold',marginBottom:'0px'}}>{item.model}</p>
                       <p style={{color:'#10055A',fontSize:'14px',marginBottom:'0px'}}>{item.Registeration}</p>
                           </Col>
                           <Col sm={4}><img src={XL6} style={{width:'96px' , height:'66px'}} alt="error"/></Col>
                       </Row>
                       ))}
                  
                    
                    

                    </Col>
                </Row>
                <Row className=' m-0'>
                  {cal_data.map((item)=>(
                         <Col sm={6}><p style={{fontSize:'12px',color:'#999999',marginBottom:'0px'}}>Service Scheduled For:</p>
                         <p style={{fontSize:'14px',color:'#5D6186',marginBottom:'0px'}}>{new Date(item.date).toLocaleDateString()}</p>
                         <p style={{fontSize:'14px',color:'#5D6186',marginBottom:'0px'}}>{item.selectedTimeSlot}</p>
                         </Col>
                  ))}
                  {checkveh.map((item)=>(
                         <Col sm={6}>
                         <p style={{fontSize:'12px',color:'#999999',marginBottom:'0px'}}>Garage Details</p>
                         <p style={{fontSize:'14px',color:'#5D6186',marginBottom:'0px'}}>{item.title}</p>
                         <p style={{fontSize:'14px',color:'#5D6186',marginBottom:'0px'}}>Andheri East 400 001</p>
                         </Col>
                  ))}
                   
                </Row>
                <Row className='py-3  m-0'>
                    <Col sm={6}><p style={{fontSize:'12px',color:'#999999',marginBottom:'0px'}}>Pick Up & Drop Address</p>
                    <p style={{fontSize:'14px',color:'#5D6186',marginBottom:'0px'}}>A-1234, CGC Residency, Near Bisleri office,</p><p style={{fontSize:'14px',color:'#5D6186',marginBottom:'0px'}}>Andheri East, Mumbai - 400001 </p>
                        </Col>
                        <Col sm={6}>
                    <p style={{fontSize:'12px',color:'#999999',marginBottom:'0px'}}>Garage Address</p>
                    <p style={{fontSize:'14px',color:'#5D6186',marginBottom:'0px'}}>A-1234, CGC Residency, Near Bisleri office,</p><p style={{fontSize:'14px',color:'#5D6186',marginBottom:'0px'}}>Andheri East, Mumbai - 400001 </p>
                    </Col>
                </Row>
                
      <Row className='px-5'>
                <p  style={{textAlign:'center',width:'70%',margin:'0px 100px '}} className='px-5'><hr></hr></p></Row>
                <Row>
                    <Col sm={6}>
                    <Row>
                        <Col sm={2}><div style={{width:'50px',height:'50px',backgroundColor:'#CBE2FF',borderRadius:'50%',textAlign:'center'}}><img src={avtarlogo} style={{width:'30px',height:'30px',margin:'5px'}}></img>
                            </div></Col>
                        <Col sm={10}><Row>
                                <Col sm={9} className='px-3'><p style={{color:'#10055A',fontSize:'15px',marginBottom:'0px'}}>Need Help with your Booking?</p>
                                <p style={{color:'#5D6186',fontSize:'12px'}}>Contact our Customer Support</p></Col>
                                <Col sm={3} >
  <div><i class=" avtarvthr far fa-comment "> </i></div>
</Col>
<Row><Col sm={5} style={{fontSize:'12px',fontWeight:'bold',color:'#999999'}}>1800-000-0000</Col>
<Col sm={7} style={{fontSize:'12px',color:'#999999'}}>customercare@mastergarage.in</Col>
</Row>
                                
                            </Row></Col>
                    </Row>
                        
                            
                    
                    </Col>
           <Col sm={6}>
                    <Row>
                        <Col sm={9} className='px-3'>
                            <p style={{color:'#10055A',fontSize:'15px',marginBottom:'0px'}}>We will be happy to hear you !</p>
                            <p style={{fontSize:'10px',color:'#999999',marginBottom:'0px'}}>Do rate us on App Store and also write us a review,</p> 
                            <p style={{fontSize:'10px',color:'#999999',marginBottom:'0px'}}>If you had already rated us, you can rate us again.</p>
                            <p style={{fontSize:'10px',color:'#999999',marginBottom:'0px'}}><Link to="#">Write a feedback!</Link></p>
                        </Col>
                        <Col sm={3}><p style={{marginBottom:'0px',float:'right'}}> <svg xmlns="http://www.w3.org/2000/svg"  width="107.77" height="100.328" viewBox="0 0 107.77 121.328">
  <defs>
    <filter id="Path_12738" x="40.353" y="28.937" width="66.165" height="70.349" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_6482" x="0" y="88.249" width="45.268" height="33.08" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-2"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur-2"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_30195" data-name="Group 30195" transform="translate(-751.602 -592.826)">
    <path id="Path_12729" data-name="Path 12729" d="M2447.827,1172.672s-5.125,6.908-8.2,7.349-13.472-1.47-13.472-1.47l-1.025,3.087s12.354,6.136,19.219,3.674,8.6-7.79,8.6-7.79Z" transform="translate(-1637.661 -543.967)" fill="#ff9391"/>
    <g id="Group_16552" data-name="Group 16552" transform="translate(797.92 682.494)">
      <path id="Path_12730" data-name="Path 12730" d="M2554.949,1569.086l-1.323-8.193h6.221l.286,8.643S2556.313,1570.3,2554.949,1569.086Z" transform="translate(-2546.34 -1560.893)" fill="#f8f9fa"/>
      <path id="Path_12731" data-name="Path 12731" d="M2514.628,1616.185a9.6,9.6,0,0,1-5.173.532s-8.948,4.052-8.6,6.784c0,0-.391.824,3.753.564s10.582-.575,10.753-.675S2517.088,1622.184,2514.628,1616.185Z" transform="translate(-2500.844 -1608.524)" fill="#00155a"/>
      <path id="Path_12732" data-name="Path 12732" d="M2515.363,1657.2c-.171.1-6.611.415-10.755.675s-3.751-.564-3.751-.564a1.431,1.431,0,0,1,.049-.557l15.1-1.32C2515.978,1656.777,2515.458,1657.146,2515.363,1657.2Z" transform="translate(-2500.847 -1642.336)" fill="#fff"/>
    </g>
    <g id="Group_16553" data-name="Group 16553" transform="translate(844.166 681.391)">
      <path id="Path_12733" data-name="Path 12733" d="M2842.856,1558.144l-6.99,1.437.6-5.979,8.352-.575S2844.445,1557.248,2842.856,1558.144Z" transform="translate(-2835.866 -1553.014)" fill="#f8f9fa"/>
      <path id="Path_12734" data-name="Path 12734" d="M2887.695,1552.974a9.7,9.7,0,0,1-1.193,5.082s.886,9.812,3.572,10.377c0,0,.647.64,1.759-3.374s2.923-10.226,2.885-10.421S2894.147,1552.605,2887.695,1552.974Z" transform="translate(-2879.512 -1552.925)" fill="#00155a"/>
      <path id="Path_12735" data-name="Path 12735" d="M2913.849,1557.915c.037.195-1.774,6.406-2.885,10.421s-1.759,3.374-1.759,3.374a1.406,1.406,0,0,1-.509-.23l3.7-14.749C2913.649,1557.193,2913.827,1557.807,2913.849,1557.915Z" transform="translate(-2898.643 -1556.203)" fill="#fff"/>
    </g>
    <path id="Path_12736" data-name="Path 12736" d="M2748.282,1131.916s4.614,9.48,4.321,23.885l-7.761-9.153s-5.858-9.808-5.858-10.69-.438-7.472,0-8.219,2.2-2.8,2.2-2.8Z" transform="translate(-1908.022 -502.844)" fill="#ff7367"/>
    <path id="Path_12737" data-name="Path 12737" d="M2578.095,1062.525s-6.59,4.63-8.237,7.055-4.5,7.827-5.491,8.709l6.865,7.717,3.57-3.858,22.734-4.741,4.393,3.748s8.347-6.725,8.127-6.89-11.578-12.577-14.827-13.615C2590.4,1059.107,2578.095,1062.525,2578.095,1062.525Z" transform="translate(-1757.678 -447.121)" fill="#ff7367"/>
    <g transform="matrix(1, 0, 0, 1, 751.6, 592.83)" filter="url(#Path_12738)">
      <path id="Path_12738-2" data-name="Path 12738" d="M2538.553,1169.609l4.027,20.431s-17.572,2.058-19.33,7.349,2.489,29.4,2.489,29.4h8.933l-1.734-21.612,15.5-2.641s-6.589,21.019-4.686,24.253,27.237,0,27.237,0v-7.5l-13.179-1.029s10.25-18.226,9.519-26.751-11.044-25.635-11.044-25.635Z" transform="translate(-2473.47 -1130.94)" fill="#2650d8"/>
    </g>
    <path id="Path_12739" data-name="Path 12739" d="M2653.692,1180.151l13.931-3.924,3.078,11.006-6.061,5.2-7.87-1.274Z" transform="translate(-1834.672 -547.029)" fill="#1737e9"/>
    <path id="Path_12740" data-name="Path 12740" d="M2791.335,1173s3.6,4.444,3.6,5.877-7.907,8.342-12.3,9.224l.879,2.94s18.451-3.16,19.036-12.163c0,0,.866-3.813-5.278-10.818Z" transform="translate(-1945.817 -539.994)" fill="#ff9391"/>
    <g id="Group_16554" data-name="Group 16554" transform="translate(825.007 643.805)">
      <path id="Path_15088" data-name="Path 15088" d="M.217.041l2.169,0L2.362,12.566l-2.169,0Z" transform="matrix(-0.687, 0.727, -0.727, -0.687, 14.24, 11.858)" fill="#9cc0e9"/>
      <path id="Path_12741" data-name="Path 12741" d="M2697.357,1283.09l2.47,2.343,1.081-1.149-2.447-2.321a2.634,2.634,0,1,1-1.1,1.127Z" transform="translate(-2697.071 -1281.655)" fill="#9cc0e9"/>
      <path id="Path_12742" data-name="Path 12742" d="M2784.251,1365.219l-2.471-2.343,1.081-1.149,2.448,2.322a2.615,2.615,0,1,0-1.058,1.17Z" transform="translate(-2768.82 -1349.42)" fill="#9cc0e9"/>
    </g>
    <g id="Group_16556" data-name="Group 16556" transform="translate(808.975 592.826)">
      <g id="Group_16555" data-name="Group 16555" transform="translate(3.619 1.063)">
        <path id="Path_12743" data-name="Path 12743" d="M2608.522,1000.982s-.7-.711-1.066-.292c-.92,1.07.387,1.945,1.163,2.043Z" transform="translate(-2607.141 -989.588)" fill="#ff6868"/>
        <path id="Path_12744" data-name="Path 12744" d="M2609.874,929.8h.007c-.021-.085-.041-.171-.059-.258a6.8,6.8,0,1,1,13.291.164c-.305,1.688-.582,3.136-.935,4.364a9.776,9.776,0,0,0,.286,6.176l.591,1.553c-3.658,3.01-5.931,1.35-5.931,1.35l-.664-2.935a.755.755,0,0,0-.839-.58h-.007C2610.47,940.325,2610.332,932.1,2609.874,929.8Z" transform="translate(-2609.338 -921.386)" fill="#ff9391"/>
        <path id="Path_12745" data-name="Path 12745" d="M2665.745,992.8a.633.633,0,1,1,.744.5A.635.635,0,0,1,2665.745,992.8Z" transform="translate(-2657.645 -982.249)" fill="#01011c"/>
        <path id="Path_12746" data-name="Path 12746" d="M2624.217,992.8a.633.633,0,1,1,.744.5A.634.634,0,0,1,2624.217,992.8Z" transform="translate(-2621.849 -982.247)" fill="#01011c"/>
        <path id="Path_12747" data-name="Path 12747" d="M2663.523,979.657a.368.368,0,0,0,.176-.089.373.373,0,0,0,.024-.525,1.982,1.982,0,0,0-2.78-.092.372.372,0,0,0,.456.587,1.249,1.249,0,0,1,1.776.005A.368.368,0,0,0,2663.523,979.657Z" transform="translate(-2653.394 -970.526)" fill="#01011c"/>
        <path id="Path_12748" data-name="Path 12748" d="M2619.995,981.064a.366.366,0,0,0,.175-.089.373.373,0,0,0,.025-.526,1.981,1.981,0,0,0-2.779-.092.373.373,0,0,0-.064.522.369.369,0,0,0,.52.065,1.248,1.248,0,0,1,1.776.005A.371.371,0,0,0,2619.995,981.064Z" transform="translate(-2615.875 -971.737)" fill="#01011c"/>
        <path id="Path_12749" data-name="Path 12749" d="M2686.847,958.432l-.906,4.888h-1.26l-1.89-5.69Z" transform="translate(-2672.349 -952.607)" fill="#040156"/>
        <path id="Path_12750" data-name="Path 12750" d="M2694.222,991.82a1.013,1.013,0,0,1,.425-.576,1.7,1.7,0,0,1,1.864-.2c.982.657-.231,3.166-2.073,2.41C2694.437,993.457,2693.879,993.084,2694.222,991.82Z" transform="translate(-2682.105 -981.214)" fill="#ff9391"/>
        <path id="Path_12751" data-name="Path 12751" d="M2641.74,998.927a1.263,1.263,0,0,0,1.125-.261.11.11,0,0,0-.151-.161,1.029,1.029,0,0,1-1.241.069c-.113-.069-.177-.13-.191-.182-.018-.074.052-.187.147-.345a3.253,3.253,0,0,0,.509-2.152.11.11,0,1,0-.219.016,3.027,3.027,0,0,1-.476,2.021c-.12.2-.214.349-.174.512a.546.546,0,0,0,.291.319A1.449,1.449,0,0,0,2641.74,998.927Z" transform="translate(-2636.378 -985.484)" fill="#ff6868"/>
        <path id="Path_12752" data-name="Path 12752" d="M2639.4,1022.978a9.386,9.386,0,0,1-4.22.393s.788,1.873,2.289,1.733S2639.4,1022.978,2639.4,1022.978Z" transform="translate(-2631.313 -1008.902)" fill="#fff"/>
        <path id="Path_12753" data-name="Path 12753" d="M2609.611,959.6s-.822.868-.249,4.974c0,0-.92-4.5-.518-5.1S2609.611,959.6,2609.611,959.6Z" transform="translate(-2608.521 -953.998)" fill="#040156"/>
      </g>
      <path id="Path_12754" data-name="Path 12754" d="M2610.107,919.473s.646-5.842,7.65-5.755,6.438,6.886,6.438,6.886-4.933-.959-5.926-1.028S2610.107,919.473,2610.107,919.473Z" transform="translate(-2606.079 -913.717)" fill="#ff564f"/>
      <path id="Path_12755" data-name="Path 12755" d="M2595.617,946.739s-8.35-3.393-13.057-1.1,2.247,2.7,2.247,2.7S2585.133,946.21,2595.617,946.739Z" transform="translate(-2580.925 -940.53)" fill="#ff7367"/>
    </g>
    <path id="Path_12756" data-name="Path 12756" d="M2742.481,1306.532s-4.216.233-5.482.422-2.633-.572-2.777.159,2.237,1.364,2.237,1.364-2.119,1.519-2.841,1.887-.6.809-.077.809a12.976,12.976,0,0,0,2.029-.362s-1.5.577-1.4,1.13,2.691-.062,2.691-.062-1.631.674-1.727,1.03-.025,1.1,1.181.661,1.4-.528,1.4-.528a4.965,4.965,0,0,0-.972.778c-.171.266,0,1.009,1.713.165a14.474,14.474,0,0,0,5.314-4.528Z" transform="translate(-1903.13 -659.279)" fill="#ff9391"/>
    <path id="Path_12757" data-name="Path 12757" d="M2629.67,1107.249s-1.34-8.884-1.193-12.665l1.8-1.443s.653,9.387,2.12,13.554Z" transform="translate(-1812.929 -475.455)" fill="#2650d8"/>
    <path id="Path_12758" data-name="Path 12758" d="M2738.242,1075.15s-2.53-9.658-1.591-14.592l-2.725.261s-.18,10.129,1.852,15.971Z" transform="translate(-1903.828 -447.387)" fill="#2650d8"/>
    <g id="Group_16557" data-name="Group 16557" transform="translate(759.625 679.715)">
      <path id="Path_12759" data-name="Path 12759" d="M2274.211,1550.181a.61.61,0,0,0,.61-.612v-7.513h12.98v7.065a.61.61,0,1,0,1.221,0v-7.678a.611.611,0,0,0-.61-.612h-14.2a.612.612,0,0,0-.611.612v8.125A.611.611,0,0,0,2274.211,1550.181Z" transform="translate(-2266.672 -1540.831)" fill="#5d6186"/>
      <g transform="matrix(1, 0, 0, 1, -8.02, -86.89)" filter="url(#Rectangle_6482)">
        <path id="Rectangle_6482-2" data-name="Rectangle 6482" d="M1.714,0H25.555a1.713,1.713,0,0,1,1.713,1.713V15.08a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V1.714A1.714,1.714,0,0,1,1.714,0Z" transform="translate(36.27 109.33) rotate(180)" fill="#2650d8"/>
      </g>
      <rect id="Rectangle_6483" data-name="Rectangle 6483" width="29.223" height="3.099" transform="translate(29.223 9.839) rotate(180)" fill="#3700b3"/>
      <rect id="Rectangle_6484" data-name="Rectangle 6484" width="9.947" height="1.922" transform="translate(19.611 10.934) rotate(180)" fill="#3700b3"/>
    </g>
    <path id="Path_12760" data-name="Path 12760" d="M2367.438,1182.634a35.117,35.117,0,0,0-3.169-3.491c-1-.8-1.377-2.317-2.006-1.925s.532,2.566.532,2.566-2.547-.517-3.306-.8-2.24-.43-2.486.112,3.49,1.622,3.49,1.622-3.235-.6-3.569-.149,3.672,1.822,3.672,1.822a21.489,21.489,0,0,0-3.744-.638c-.324.172-.118.594,1.024,1.175a12.157,12.157,0,0,0,2.456.88,27.443,27.443,0,0,0-2.754-.332c-.31.057-.7.36,1.086,1.043s5.874,1.526,8.089,1.115Z" transform="translate(-1578.689 -547.828)" fill="#ff9391"/>
  </g>
</svg></p></Col>
                    </Row>

                        
                    </Col>
                </Row>

            </Row>

        
    </div>
    )
};

const SubLast = () => (
    <><div className="boxlast p-3" style={{textAlign:'center'}}>

                <Row className='m-0 p-2' >
                   <Row className='p-0'>
                       <Col sm={6} className='py-3'><svg id="Group_18600" data-name="Group 18600" xmlns="http://www.w3.org/2000/svg" width="123.38" height="49.493" viewBox="0 0 123.38 49.493">
  <rect id="Rectangle_6574" data-name="Rectangle 6574" width="42.375" height="6.515" transform="translate(0.291 40.741)" fill="#2650d8"/>
  <g id="Group_16702" data-name="Group 16702">
    <path id="Path_12966" data-name="Path 12966" d="M609.448,289.49l12.928-12.358v-9.985l-7.9-7.9v12.412l-5.213-5.213v-15.8h3.261L627.1,265.218v13.544L616.372,289.49" transform="translate(-584.139 -250.651)" fill="#2650d8"/>
    <path id="Path_12967" data-name="Path 12967" d="M596.839,289.4l-9.863-9.866V264.748l14.091-14.091h3.4v23.079l2.1,2.1h10.846l-4.929,4.929h-8.573l-4.348-4.351V259.142L591.7,267v10.257L603.842,289.4" transform="translate(-586.975 -250.65)" fill="#2650d8"/>
  </g>
  <g id="Group_16704" data-name="Group 16704" transform="translate(53.38 1.025)">
    <g id="Group_16703" data-name="Group 16703">
      <text id="Master_" data-name="Master " transform="translate(0 22)" fill="#2650d8" font-size="21" font-family="SegoeUI, Segoe UI" style={{isolation: "isolate"}}><tspan x="0" y="0">Master </tspan></text>
      <text id="Garage" transform="translate(0 43.468)" fill="#2650d8" font-size="21" font-family="SegoeUI, Segoe UI" style={{isolation: "isolate"}}><tspan x="0" y="0">Garage</tspan></text>
    </g>
  </g>
</svg>
</Col>
<Col sm={6} style={{textAlign:'right'}}><Row><p style={{marginBottom:'0px'}}><svg xmlns="http://www.w3.org/2000/svg"  width="70" height="70" viewBox="0 0 100 100">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_7755" data-name="Rectangle 7755" width="100" height="100" transform="translate(0 0)" fill="#132337"/>
    </clipPath>
  </defs>
  <g id="Group_18598" data-name="Group 18598" transform="translate(0 0)" clip-path="url(#clip-path)">
    <path id="Path_22512" data-name="Path 22512" d="M1137.817,455.815h-10v10h10Z" transform="translate(-1117.817 -445.816)" fill="#00155a"/>
    <path id="Path_22513" data-name="Path 22513" d="M1219.575,440.041v5h-5v5h5v20h5v5h-5v5h10v-10h15v5h5v-35Zm25,25h-20v-20h20Z" transform="translate(-1149.578 -440.041)" fill="#00155a"/>
    <path id="Path_22514" data-name="Path 22514" d="M1248.243,455.815h-10v10h10Z" transform="translate(-1158.24 -445.816)" fill="#00155a"/>
    <path id="Path_22515" data-name="Path 22515" d="M1137.817,566.238h-10v10h10Z" transform="translate(-1117.817 -486.239)" fill="#00155a"/>
    <path id="Path_22516" data-name="Path 22516" d="M1227.462,550.467h-5v5h5Z" transform="translate(-1152.463 -480.466)" fill="#00155a"/>
    <path id="Path_22517" data-name="Path 22517" d="M1188.025,589.9h-5v5h5Z" transform="translate(-1138.028 -494.903)" fill="#00155a"/>
    <path id="Path_22518" data-name="Path 22518" d="M1195.915,558.353h-5v5h5Z" transform="translate(-1140.917 -483.353)" fill="#00155a"/>
    <path id="Path_22519" data-name="Path 22519" d="M1195.915,574.127h-5v5h5Z" transform="translate(-1140.917 -489.127)" fill="#00155a"/>
    <path id="Path_22520" data-name="Path 22520" d="M1266.9,534.69h-5v5h5Z" transform="translate(-1166.901 -474.69)" fill="#00155a"/>
    <path id="Path_22521" data-name="Path 22521" d="M1117.042,534.69h-5v5h5Z" transform="translate(-1112.04 -474.69)" fill="#00155a"/>
    <path id="Path_22522" data-name="Path 22522" d="M1117.042,495.253h-5v5h5Z" transform="translate(-1112.04 -460.253)" fill="#00155a"/>
    <path id="Path_22523" data-name="Path 22523" d="M1193.027,447.927v5h-10v5h15v-10Z" transform="translate(-1138.028 -442.928)" fill="#00155a"/>
    <path id="Path_22524" data-name="Path 22524" d="M1227.25,503.141v5h-10v5h-15v-5h-5v5h-10v5h15v5h-15v-5h-5v5h-5v-5h-5v5h-5v5h10v5h5v-5h10v5h-5v5h5v10h5v5h5v-5h15v-10h5v-5h-5v-10h-10v-5h10v5h5v-5h5v-5h5v-10Zm-15,25v15h-15v-15Z" transform="translate(-1132.251 -463.141)" fill="#00155a"/>
    <path id="Path_22525" data-name="Path 22525" d="M1208.8,487.363h-5v5h-5v10h5v-5h5v-5h5v-5Z" transform="translate(-1143.801 -457.365)" fill="#00155a"/>
    <path id="Path_22526" data-name="Path 22526" d="M1208.8,589.9h-10v5h10Z" transform="translate(-1143.801 -494.903)" fill="#00155a"/>
    <path id="Path_22527" data-name="Path 22527" d="M1180.142,447.927h-5v5h5Z" transform="translate(-1135.14 -442.928)" fill="#00155a"/>
    <path id="Path_22528" data-name="Path 22528" d="M1243.242,503.141h-5v5h5Z" transform="translate(-1158.24 -463.141)" fill="#00155a"/>
    <path id="Path_22529" data-name="Path 22529" d="M1251.125,495.253h-5v5h5Z" transform="translate(-1161.128 -460.253)" fill="#00155a"/>
    <path id="Path_22530" data-name="Path 22530" d="M1148.592,534.69h-5v5h5Z" transform="translate(-1123.59 -474.69)" fill="#00155a"/>
    <path id="Path_22531" data-name="Path 22531" d="M1142.043,572.577v-20h5v-10h-5v5h-15v-5h-10v5h-5v30h40v-5Zm-5,0h-20v-20h20Z" transform="translate(-1112.04 -477.578)" fill="#00155a"/>
    <path id="Path_22532" data-name="Path 22532" d="M1164.365,487.363h-5v5h5Z" transform="translate(-1129.367 -457.365)" fill="#00155a"/>
    <path id="Path_22533" data-name="Path 22533" d="M1147.039,440.041h-35v30h5v5h5v-5h5v5h5v-5h10v-10h5v-5h-5v-10h10v-5Zm-10,25h-20v-20h20Z" transform="translate(-1112.04 -440.041)" fill="#00155a"/>
    <path id="Path_22534" data-name="Path 22534" d="M1211.692,463.7h-5v5h5Z" transform="translate(-1146.69 -448.703)" fill="#00155a"/>
    <path id="Path_22535" data-name="Path 22535" d="M1195.915,440.041h-5v5h5Z" transform="translate(-1140.917 -440.041)" fill="#00155a"/>
    <path id="Path_22536" data-name="Path 22536" d="M1172.04,481.592v-5h-5v-5h-5v5h-10v-5h-5v10h5v10h-15v-5h-5v5h-15v5h10v5h-15v5h15v5h5v-5h5v5h5v-5h10v-5h-5v-5h10v5h10v-5h-5v-5h-5v-10Zm-30,20h-10v-5h10Z" transform="translate(-1112.04 -451.591)" fill="#00155a"/>
    <path id="Path_22537" data-name="Path 22537" d="M1177.253,560.467v-10h-5v5h-5v5h5v5h-5v5h10v-5h5v-5Z" transform="translate(-1132.251 -480.466)" fill="#00155a"/>
    <path id="Path_22538" data-name="Path 22538" d="M1242.46,579.127v-5h-5v5h-15v5h10v5h5v-5h10v5h5v-10Z" transform="translate(-1152.463 -489.127)" fill="#00155a"/>
    <path id="Path_22539" data-name="Path 22539" d="M1259.012,550.467v5h-5v5h10v-10Z" transform="translate(-1164.013 -480.466)" fill="#00155a"/>
  </g>
</svg></p></Row>
<p  style={{textDecoration:'underline',fontSize:'10px',paddingRight:'3px'}}>Download QR</p>
</Col>
                   </Row>
                   <Row className='py-5 my-5'><svg xmlns="http://www.w3.org/2000/svg" width="180.738" height="127.319" viewBox="0 0 180.738 127.319">
  <g id="Group_30180" data-name="Group 30180" transform="translate(0)">
    <path id="Icon_ionic-ios-checkmark" data-name="Icon ionic-ios-checkmark" d="M114.712,21.6l-8.568-8.812a1.842,1.842,0,0,0-1.363-.584h0a1.768,1.768,0,0,0-1.363.584L44.025,72.621,22.41,51.006a1.882,1.882,0,0,0-2.726,0l-8.665,8.665a1.94,1.94,0,0,0,0,2.775L38.281,89.708a8.622,8.622,0,0,0,5.7,2.775c2.58,0,4.82-1.9,5.647-2.678h.049l65.088-65.429A2.081,2.081,0,0,0,114.712,21.6Z" transform="translate(27.179 34.836)" fill="#53bd8c"/>
    <path id="Path_649" data-name="Path 649" d="M295.842,48.35l3.805,1.054c-2.4,8.656-4.776,17.2-7.2,25.934l-3.818-1.073Z" transform="translate(-235.822 -48.35)" fill="#53bd8c"/>
    <path id="Path_652" data-name="Path 652" d="M253.585,184.4c1.369,1.441,2.555,2.786,3.845,4.022a13.435,13.435,0,0,0,7.023,3.7A6.036,6.036,0,0,1,267,193.3a2.644,2.644,0,0,1,.292,3.975c-.718.837-1.458,1.656-2.417,2.744-.037-2.8-1.673-3.846-3.794-4.212-4.824-.833-7.712-4.2-10.677-7.728Z" transform="translate(-223.339 -139.065)" fill="#53bd8c"/>
    <path id="Path_669" data-name="Path 669" d="M3.174,0C4.543,1.441,5.728,2.787,7.018,4.023A13.446,13.446,0,0,0,14.034,7.73a6.04,6.04,0,0,1,2.541,1.177,2.645,2.645,0,0,1,.3,3.973c-.716.836-1.453,1.654-2.41,2.74-.04-2.793-1.675-3.845-3.792-4.213C5.852,10.569,2.964,7.2,0,3.672Z" transform="matrix(0.574, -0.819, 0.819, 0.574, 127.246, 17.244)" fill="#53bd8c"/>
    <path id="Path_654" data-name="Path 654" d="M564.867,295.279a4.384,4.384,0,1,1,4.59-4.38A4.379,4.379,0,0,1,564.867,295.279Z" transform="translate(-396.693 -189.479)" fill="#53bd8c"/>
    <path id="Path_656" data-name="Path 656" d="M371.614,180.432a4.395,4.395,0,1,1-4.4-4.4A4.446,4.446,0,0,1,371.614,180.432Z" transform="translate(-279.716 -124.01)" fill="#53bd8c"/>
    <path id="Path_657" data-name="Path 657" d="M222.568,90.354a4.388,4.388,0,1,1,4.48-4.264A4.332,4.332,0,0,1,222.568,90.354Z" transform="translate(-194.183 -68.039)" fill="#53bd8c"/>
    <path id="Path_660" data-name="Path 660" d="M213.274,419.661c-2.386-.466-4.773-1.1-7.2-1.322a4.389,4.389,0,0,0-2.918,1.19c-2.133,1.924-3.432,2.117-5.736.423-.9-.66-1.785-1.333-2.474-1.848,1.313-.983,2.567-2,3.911-2.886a3.764,3.764,0,0,1,1.891-.528C203.862,414.617,210.19,416.214,213.274,419.661Z" transform="translate(-186.211 -315.311)" fill="#53bd8c"/>
    <path id="Path_661" data-name="Path 661" d="M550.288,434.5c-2.029,0-3.768.065-5.495-.05a1.53,1.53,0,0,1-1.046-1.053c-.113-1.775-.049-3.561-.049-5.423h6.59Z" transform="translate(-369.55 -363.479)" fill="#53bd8c"/>
    <path id="Path_662" data-name="Path 662" d="M234.222,337.825l-2.96,4.009-4.006-2.954,2.954-4Z" transform="translate(-198.335 -216.967)" fill="#53bd8c"/>
    <path id="Path_665" data-name="Path 665" d="M533.137,224.5l-6.227,7.07-3.022-8.889Z" transform="translate(-375.001 -151.651)" fill="#53bd8c"/>
    <path id="Path_667" data-name="Path 667" d="M346.7,123.04l-7.253-6.01,8.808-3.282C347.727,116.892,347.243,119.785,346.7,123.04Z" transform="translate(-248.483 -91.455)" fill="#53bd8c"/>
    <path id="Path_670" data-name="Path 670" d="M346.7,123.04l-7.253-6.01,8.808-3.282C347.727,116.892,347.243,119.785,346.7,123.04Z" transform="translate(-173.193 -82.186)" fill="#53bd8c"/>
    <path id="Path_668" data-name="Path 668" d="M183.677,208.96l7.015,6.283-8.936,2.92C182.426,214.955,183.023,212.1,183.677,208.96Z" transform="translate(-181.757 -137.932)" fill="#53bd8c"/>
  </g>
</svg></Row>
    <p style={{color:'#00155A',fontSize:'25px',fontWeight:'bold'}}>Congratulations!</p>
    <p style={{color:'#5D6186',fontSize:'12px'}}>Your Booking has been Accepted</p>
    <p className='px-2' ><Link to="/Confirmbook"><button style={{width:'200px', height:'40px',color:'#fff',backgroundColor:'#2650D8',borderRadius:'10px',textAlign:'center',border:'none'}}>Track Booking Status</button></Link></p>
    {/* <p className='px-2' ><Link to="/Mob_tracking"><button style={{width:'200px', height:'40px',color:'#fff',backgroundColor:'#2650D8',borderRadius:'10px',textAlign:'center',border:'none'}}>Track Booking Status</button></Link></p> */}
            
                </Row>
        </div>
        
      
    </>
);
export default withRouter(Bokk);

