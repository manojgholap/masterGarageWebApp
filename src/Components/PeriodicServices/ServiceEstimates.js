import React,{useState} from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
import SideBar from './SideBar';
import MidBar from './MidBar';
import ServiceMid from './ServiceMid'
import {useSelector,useDispatch} from 'react-redux';
import {selectVehical} from '../../redux/action';
import {withRouter } from "react-router-dom";
import SubLast from './SubLast'
import Venue from '../../Images/CarBrand/Models/2 Hyundai/Venue.jpeg';
import FirstChoice from '../../Images/ImagesAll/drawable-xxxhdpi/FirstChoice.png';
import Cartisan from '../../Images/ImagesAll/drawable-xxxhdpi/Cartisan.png';
import Castrol from '../../Images/ImagesAll/drawable-xxxhdpi/Castrol.png';
import BKakaako from '../../Images/ImagesAll/drawable-xxxhdpi/BKakaako.png';
import Garage from '../../Images/ImagesAll/drawable-xxxhdpi/CKakaako.png';
import CKakaako from '../../Images/ImagesAll/drawable-xxxhdpi/CKakaako.png';
import loc from '../../Images/drawable-xxxhdpi/Path 31705.png';

function ServiceEstimates(){
    const[page,setPage]=useState(0);
    const formTitles=['E','Vehical','Service','Garage','Basic','F']
    return <>
    <div className='container-fluid service_estimate px-5'>
        <Row>
                <Col sm={8} className='py-3'>
                    <Link to ="/PeriodicADDvechicle" className="periodicadd"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/PeriodicADDvechicle" className="periodicadd1">Add services & Choose a garage</Link>
                </Col>
                <Col sm={4} className='py-3'>
                <div className="progressbar">
                <div className="prog12">   
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
                <Col sm={2} ><SideBar></SideBar></Col>
                <Col sm={6} ><ServiceMid/></Col>
                <Col sm={4} ><SubLast></SubLast></Col>
                
            </Row>

    </div>
            
    </>
}
export default withRouter(ServiceEstimates);





