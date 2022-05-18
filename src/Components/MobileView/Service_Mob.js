import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Track from '../Trackingstatus/TrackingComp'
import { Container,Row,Col,Card,Button,ButtonGroup, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import { Link,withRouter } from 'react-router-dom';
import './vehical.css'
import BasicService from '../../Images/BasicService.png';
import recomend from '../../Images/drawable-xxxhdpi/recomend.png';
import rightcheck from '../../Images/drawable-xxxhdpi/Path 22613.png';
import loc from '../../Images/drawable-xxxhdpi/Path 31705.png';
import save from '../../Images/drawable-xxxhdpi/Path 31710.png';
import coupan from '../../Images/drawable-xxxhdpi/coupan.png';

import setloc from '../../Images/drawable-xxxhdpi/Group 31590.png';
import notsure from '../../Images/drawable-xxxhdpi/Group 29661.png';
import next from '../../Images/drawable-xxxhdpi/Group 31585.png';
import car from '../../Images/drawable-xxxhdpi/Path 31698.png';


import vehical from '../../Images/balano.jpg';
import StandardService from '../../Images/StandardService.png';
import ComprehensiveService from '../../Images/ComprehensiveService.png';
import EngineScanning from '../../Images/EngineScanning.png';
import suspension from '../../Images/CompleteService.png';
import carFuil from '../../Images/CarFluid.png';
import CarInspection from '../../Images/CarInspection.png';
import StarterMotor from '../../Images/StarterMotor.png';
import man from '../../Images/drawable-xxxhdpi/Group 32085.png';

const Service_Mob = () => {
    const[services,setServices]=useState([])

    const url="http://65.2.127.249/garage/getoutletAll.php"

    useEffect(()=>{
    axios.get(url)
    .then(res=>{
      console.log(res.data)
      setServices(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
    },[])

  return (
    <div className="add_Top">
    <div className="nav_mob"> 
    <div className="arrow_marge"><i class="fa-solid fa-arrow-left"></i> <h6 className="arrow_non"> Periodic Service<i class="fa-solid fa-angles-down"></i></h6></div>
          <div className="px-3">
              <i class="fa-solid fa-magnifying-glass"></i>
              <i class="fa-solid fa-bell"></i>
          </div>
    </div>

      <div className="progressbar">
            <div className="prog">   
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
        <div>
        <div className="vehical_card1">
                <div className="detail_veh1">
                    <img src={vehical} alt="error"/>
                    <div className="sub_connt">
                    <p>Alcazar</p>
                    <small>MH 01 AB 3827</small>
                    </div>
                </div>
                <div className="sub_details">
                   <button>Change</button>
                </div>

            </div>
            
            <div className="sub_details1">
                   <button>Service Packages</button>
                   <button>Other Packages</button>
                </div>
        </div>

        <div>
            <h6 className="basic">Service Packages</h6>

            <div className="service_card">
                <h6>Basic Service</h6>
                <div className="service_sub_Card">
                <div>
                    <div className='define_ser'><i class="fa-solid fa-gear"></i> <h6>On Suspension Noise</h6></div>
                    <div className='define_ser'><i class="fa-solid fa-clipboard-list"></i><h6>5 Points Checklist</h6></div>
              </div>
              <div className="cont_add">
              <img src={BasicService} alt="error"/>
              <Link to="/Service_Add"><button>Add</button></Link>
            </div>
            </div>
            </div>
            <div className="service_card">
            <p className='reconded'>Recommended</p>
                <h6>Standard Service</h6>
                <div className="service_sub_Card">
                <div>
                    <div className='define_ser'><i class="fa-solid fa-gear"></i> <h6>Every 10000 Kms or 6 months</h6></div>
                    <div className='define_ser'><i class="fa-solid fa-clipboard-list"></i><h6>15 Points Checklist</h6></div>
              </div>
              <div className="cont_add">
                
              <img src={BasicService} alt="error"/>
              <button>Add</button>
            </div>
            </div>
            </div>
            <div className="service_card">
                <h6>Comprehensive Service</h6>
                <div className="service_sub_Card">
                <div>
                    <div className='define_ser'><i class="fa-solid fa-gear"></i> <h6>Every 10000 Kms or 6 months</h6></div>
                    <div className='define_ser'><i class="fa-solid fa-clipboard-list"></i><h6>20 Points Checklist</h6></div>
              </div>
              <div className="cont_add">
              <img src={BasicService} alt="error"/>
              <button>Add</button>
            </div>
            </div>
            </div>
            <div className="other_pac">
                <h6 className="basic">Other Packages</h6>
           
            <div className="service_card">
                <h6>Engine Scanning</h6>
                <div className="service_sub_Card">
                <div>
                    <div className='define_ser'><i class="fa-solid fa-gear"></i> <h6>Every 10000 Kms or 6 months</h6></div>
                    <div className='define_ser'><i class="fa-solid fa-clipboard-list"></i><h6>Scanner Report Provided</h6></div>
              </div>
              <div className="cont_add">
              <img src={BasicService} alt="error"/>
              <button>Add</button>
            </div>
            </div>
            </div>
            <div className="service_card">
                <h6>Car Fluid Check</h6>
                <div className="service_sub_Card">
                <div>
                    <div className='define_ser'><i class="fa-solid fa-gear"></i> <h6>On Leakage or Check Lights</h6></div>
                    <div className='define_ser'><i class="fa-solid fa-clipboard-list"></i><h6>5 Points Checklist</h6></div>
              </div>
              <div className="cont_add">
              <img src={BasicService} alt="error"/>
              <button>Add</button>
            </div>
            </div>
            </div>
            <div className="service_card">
            <p className='reconded'>Recommended</p>
                <h6>Car Inspection & Diagnostics</h6>
                <div className="service_sub_Card">
                <div>
                    <div className='define_ser'><i class="fa-solid fa-gear"></i> <h6>In Case of Unknown Problems</h6></div>
                    <div className='define_ser'><i class="fa-solid fa-clipboard-list"></i><h6>25 Points Checklist</h6></div>
              </div>
              <div className="cont_add">
              <img src={BasicService} alt="error"/>
              <button>Add</button>
            </div>
            </div>
            </div>
            <div className="service_card">
                <h6>Starter Motor Repair</h6>
                <div className="service_sub_Card">
                <div>
                    <div className='define_ser'><i class="fa-solid fa-gear"></i> <h6>In case of car not starting</h6></div>
                    <div className='define_ser'><i class="fa-solid fa-clipboard-list"></i><h6>5 Points Checklist</h6></div>
              </div>
              <div className="cont_add">
              <img src={BasicService} alt="error"/>
              <button>Add</button>
            </div>
            </div>
            </div>
        </div>
    </div>
    <div className='addVehical_foot'>
         <div>
             <img src={man} alt="error"/>
         </div>
         <div className="sub_details">
             <h6>Trouble with Booking, Reach us!</h6>
             <p>we will help you complete the booking</p>
             <button>Speak Now</button>
         </div>
    </div>
  
    </div>
  )
}

export default Service_Mob