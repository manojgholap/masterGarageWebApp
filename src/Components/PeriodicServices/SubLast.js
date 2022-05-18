import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
import SideBar from './SideBar';
import MidBar from './MidBar';
import {useSelector,useDispatch} from 'react-redux';
import {registerVehicalNo} from '../../redux/action';
import {withRouter } from "react-router-dom";
import ServiceEstimates from './ServiceEstimates';
import BookGarage from '../GarageBook/BookGarage';
import LoginGarage from '../GarageBook/LoginGarage';
import ScheduleBook from '../GarageBook/ScheduleBook';
import PaymentGarage from '../GarageBook/PaymentGarage';
import Venue from '../../Images/CarBrand/Models/2 Hyundai/Venue.jpeg';
import FirstChoice from '../../Images/ImagesAll/drawable-xxxhdpi/FirstChoice.png';
import loc from '../../Images/drawable-xxxhdpi/Path 31705.png';
import save from '../../Images/drawable-xxxhdpi/Path 31710.png';
import coupan from '../../Images/drawable-xxxhdpi/coupan.png';

import setloc from '../../Images/drawable-xxxhdpi/Group 31590.png';
import notsure from '../../Images/drawable-xxxhdpi/Group 29661.png';
import next from '../../Images/drawable-xxxhdpi/Group 31585.png';
import car from '../../Images/drawable-xxxhdpi/Path 31698.png';


import Cartisan from '../../Images/ImagesAll/drawable-xxxhdpi/Cartisan.png';
import Castrol from '../../Images/ImagesAll/drawable-xxxhdpi/Castrol.png';
import BKakaako from '../../Images/ImagesAll/drawable-xxxhdpi/BKakaako.png';
import Garage from '../../Images/ImagesAll/drawable-xxxhdpi/CKakaako.png';
import CKakaako from '../../Images/ImagesAll/drawable-xxxhdpi/CKakaako.png';

const SubLast = () => {
const[vehicalreg,setVehicalreg]=useState("")
const[services,setServices]=useState([])
const[loading,setLoading]=useState(true)
const check=useSelector((state)=>state.check.registerVehicalNo);



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
    <>
    <div class="boxlast">
        <div className='py-2 class_expand'>
       <div lg={10} className="infocar">
    
     <img src={Venue} className="regCarval" alt="error"></img>
     {check?.map((val,index)=>(
           <div className="reg_car">
                    <p style={{marginBottom:'0px'}} className='poppins20B'>{val.Registeration} <span className='poppins18' style={{fontSize:'13px'}}>
                    <Link to ="/PeriodicServiceAdded">Change</Link>
                    </span></p><p className='poppins15light'>{val.model}</p>
            </div>
         ))}
       </div>
      
            <div lg={2} className="expand">
            <svg id="Group_29761" data-name="Group 29761" xmlns="http://www.w3.org/2000/svg" width="50" height="53" viewBox="0 0 50 53">
  <g id="Group_29761-2" data-name="Group 29761">
    <path id="Rectangle_9500" data-name="Rectangle 9500" d="M10,0H50a0,0,0,0,1,0,0V53a0,0,0,0,1,0,0H10A10,10,0,0,1,0,43V10A10,10,0,0,1,10,0Z" fill="#f4f8ff"/>
  </g>
  <g id="Group_31651" data-name="Group 31651" transform="translate(17.01 18.51)">
    <path id="Path_27456" data-name="Path 27456" d="M371.5,28.5h5.327v5.327" transform="translate(-360.846 -28.5)" fill="none" stroke="#00155a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    <path id="Path_27457" data-name="Path 27457" d="M370.827,39.827H365.5V34.5" transform="translate(-365.5 -23.846)" fill="none" stroke="#00155a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    <path id="Path_27458" data-name="Path 27458" d="M377.215,28.5,371,34.715" transform="translate(-361.234 -28.5)" fill="none" stroke="#00155a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    <path id="Path_27459" data-name="Path 27459" d="M365.5,40.215,371.715,34" transform="translate(-365.5 -24.234)" fill="none" stroke="#00155a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  </g>
</svg>


            </div>
        </div>
       
           <div className='scrollbox px-2'>
           {services.map((ser=>(
            <div className='addbg1 mb-3'>
            <Row >
               <Col sm={3}>
                <div>
               <img src={ser.imageUri} style={{width:'100px',height:'100px'}} alt="error"></img>
                </div>
                   
            </Col>
           
            <Col sm={9} className='px-3'>
              <div>
                    <Link to="/BookGarage" style={{textDecoration:'none'}}>
                      <p className='poppins18B'>{ser.name}</p>
                    </Link>
                    <div className="intstuction">
                      <div>
                            <small className=''> <img src={loc} alt="error"/>Kandivali East  400 101 | 900 mtrs</small>
                            <svg xmlns="http://www.w3.org/2000/svg" width="103" height="15" viewBox="0 0 103 15">
  <g id="Group_29651" data-name="Group 29651" transform="translate(0.005)">
    <path id="Polygon_64" data-name="Polygon 64" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(-0.005)" fill="#f90"/>
    <path id="Polygon_65" data-name="Polygon 65" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(21.995)" fill="#f90"/>
    <path id="Polygon_66" data-name="Polygon 66" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(65.995)" fill="#f90"/>
    <path id="Polygon_67" data-name="Polygon 67" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(87.995)" fill="#f90"/>
    <path id="Polygon_68" data-name="Polygon 68" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(43.995)" fill="#f90"/>
  </g>
</svg>

                    </div>
                    <div className='py-2 px-2 saveinfo'>
                      <img src={save} alt="error"/>

          </div>
       </div> 
    </div>  
        
            </Col>
       </Row>
       <div className="intstuction1">
         <div className="small_sub">
           <small><img src={car} alt="error"/> <img src={next} alt="error"/>  Free Pick-up & Drop </small>
           </div>
         <div className="instruct_price">
           <p>₹ 6459 <img src={notsure} alt="error"/></p>
          <small>for 3 Service</small>
         </div>
       </div> 
       <div className="sub_coupan">
         <img src={coupan} alt="error"/>
        <small> 50% Off I Use Code: TRYNEW</small>
       </div>
            </div>
            )))}
        </div>
        </div>
        </>
  )
}

export default withRouter(SubLast)