import React,{useState} from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
import Audi17 from '../../Images/CarGarage/Manufacturer 200 X 200/Audi17.jpeg';
import Venue from '../../Images/CarBrand/Models/2 Hyundai/Venue.jpeg';
import Car from '../../Images/ImagesAll/drawable-xhdpi/Car.png';
import Elitei20 from '../../Images/CarGarage/Models/2 Hyundai/Elitei20.jpeg';
import qr from '../../Images/drawable-xxxhdpi/qr.png';
import Fastaglogo from '../../Images/drawable-xxxhdpi/Fastaglogo.png';
import Baleno from '../../Images/CarBrand/Models/1 Maruti Suzuki/WBG/Baleno.png';
import BasicService from '../../Images/BasicService.png';
import StandardService from '../../Images/StandardService.png';
import EngineScanning from '../../Images/EngineScanning.png';
import ComprehensiveService from '../../Images/ComprehensiveService.png';
import CompleteService from '../../Images/CompleteService.png';
import CarInspection from '../../Images/CarInspection.png';
import StarterMotor from '../../Images/StarterMotor.png';
import CarFluid from '../../Images/CarFluid.png';
import systemUpdate from '../../Images/systemUpdate.png';
import check from '../../Images/check.png';
import PS1 from '../../Images/ImagesAll/drawable-xxxhdpi/PS1.png';

function BasicShowmore(){
    return <>
    <div className=''>
                   <Row>
                <Col sm={6}><p className='poppins15blue px-3'>What's Included</p></Col>
            </Row>
            
                <ul className='Showmore'>
                    <li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Engine Oil Replacement</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Oil Filter Replacement</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Air Filter Cleaning</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Coolant Top up </p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Wiper Fluid Replacement</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Battery Water Top up</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Heater/Spark plugs checking</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Car Wash</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Interior Vacuuming  (Carpets & Seats)</p>
</li>
                </ul>

    </div>
            
    </>
}
export default BasicShowmore;


