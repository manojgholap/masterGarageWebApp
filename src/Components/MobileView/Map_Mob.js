import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container,CardHeader,UncontrolledCollapse ,Card} from 'reactstrap';
import { Link,withRouter,useHistory } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import range from '../../Images/drawable-xxxhdpi/Group 29754.png';
import './style.css'
import man from '../../Images/drawable-xxxhdpi/Group 32085.png';
import loc from '../../Images/drawable-xxxhdpi/Path 31705.png';
import save from '../../Images/drawable-xxxhdpi/Path 31710.png';
import coupan from '../../Images/drawable-xxxhdpi/coupan.png';

import notsure from '../../Images/drawable-xxxhdpi/Group 29661.png';
import next from '../../Images/drawable-xxxhdpi/Group 31585.png';
import car from '../../Images/drawable-xxxhdpi/Path 31698.png';
import line from '../../Images/drawable-xxxhdpi/Line 1036.png';
import map from '../../Images/drawable-xxxhdpi/Group 31860.png';

const Map_Mob = () => {
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
    <div className="arrow_marge"><i class="fa-solid fa-arrow-left"></i> <h6 className="arrow_non"> Estimates</h6></div>
          <div>
              <i class="fa-solid fa-magnifying-glass"></i>
              <i class="fa-solid fa-bell"></i>
          </div>
    </div>

      <div className="progressbar">
            <div className="prog">   
            </div>
            <div className="pagesize1"><li>|</li><li>|</li><li>|</li><li>|</li><li>|</li><li>|</li></div>
            <div className="pagesize">
                 <li>E</li>
                 <li>Vehical</li>
                 <li>Service</li>
                 <li>Garage</li>
                 <li>Basic</li>
                 <li>F</li>
            </div> 
        </div>
        <div className="esti_top px-3 mb-3">
            <h5>All Estimates (4)</h5>
            <img src={range} alt="error"/>
        </div>
        <div className='btn_view'>
          <Link to="/Map_Mob"> <button>List View</button></Link>
        </div>
        <div className='map_view p-3'>
            <img src={map} alt="error"/>
        </div>
        <div className='scrollbox21 px-2'>
    <Link to="/Estimate_Mob"><img src={line} alt="error" className='linealltestimoney'/></Link>
           {services.map((ser=>(
            <div className='addbg132'>
              
                <div className="widhtprop">
                   
            <div className="car_des">
                <div className="sizecar">
               <img src={ser.imageUri} alt="error"></img>
                </div>
           
            <div className='px-3'>
              <div>
                    <Link to="/Garage_Mob" style={{textDecoration:'none'}}>
                      <h5 className='poppi'>{ser.name}</h5>
                    </Link>
                    <div className="intstuction">
                      <div>
                            <small className=''> <img src={loc} alt="error"/> Kandivali East  400 101 | 900 mtrs</small>
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
                    <div className='saveinfo'>
                      <img src={save} alt="error"/>
                  </div>
               </div> 
             </div>  
            </div>
       </div>
       <div className="intstuct px-3">
         <div className="small_sub">
           <small><img src={car} alt="error"/> <img src={next} alt="error"/>  Free Pick-up & Drop </small>
           </div>
         <div className="instruct_price py-0">
           <p>₹ 6459 <img src={notsure} alt="error"/></p>
          <small>for 3 Service</small>
         </div>
       </div> 
       <div className="sub_coupan">
         <img src={coupan} alt="error"/>
        <small> 50% Off I Use Code: TRYNEW</small>
       </div>
            </div>
            </div>
            )))}
        </div>
    </div>
  )
}

export default Map_Mob