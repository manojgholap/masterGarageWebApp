import React from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../HomeChallan/HomeChallan.css';
import './ChaufferHome.css';
import CityTravel from '../../Images/drawable-xxxhdpi/CityTravel.png';
import OutTravel from '../../Images/drawable-xxxhdpi/OutTravel.png';
import PermanentRole from '../../Images/drawable-xxxhdpi/PermanentRole.png';
import ChaufferHomeImage from '../../Images/ImagesAll/drawable-xxxhdpi/ChaufferHomeImage.png';

const ChaufferHome = () => (
    <>
        <div className='conatiner-fluid px-5 py-3'>
        <Row>
                <Col sm={6} className='py-4'>
                    <p className='poppins46' style={{lineHeight:'85px'}}>Chauffers Simplified</p>
                    <p className='poppins15light' style={{lineHeight:'50px'}}>Fill your requirements and get the drivers nearby as easy as cutting cake</p>
                    <ul className='ChaufferList'>
                    <li><p className='poppins20M'> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" style={{marginRight:'10px'}} viewBox="0 0 28 28">
  <g id="Group_30020" data-name="Group 30020" transform="translate(0 0.363)">
    <g id="Group_16589" data-name="Group 16589" transform="translate(6.773 8.223)">
      <g id="Group_16588" data-name="Group 16588">
        <path id="Path_12819" data-name="Path 12819" d="M182.639,75.235l-5.613,7.138c-1.066-1.117-2.228-2.329-2.228-2.329a1.849,1.849,0,0,0-2.665,2.564l3.694,3.863a1.841,1.841,0,0,0,2.782-.133l6.927-8.8a1.85,1.85,0,0,0-2.9-2.3Z" transform="translate(-171.62 -74.534)" fill="#2650d8"/>
      </g>
    </g>
    <g id="Ellipse_2145" data-name="Ellipse 2145" transform="translate(0 -0.363)" fill="none" stroke="#00155a" stroke-width="2">
      <circle cx="14" cy="14" r="14" stroke="none"/>
      <circle cx="14" cy="14" r="13" fill="none"/>
    </g>
  </g>
</svg>
Multiple Platform Pricing</p></li>
                        <li><p className='poppins20M'> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" style={{marginRight:'10px'}} viewBox="0 0 28 28">
  <g id="Group_30020" data-name="Group 30020" transform="translate(0 0.363)">
    <g id="Group_16589" data-name="Group 16589" transform="translate(6.773 8.223)">
      <g id="Group_16588" data-name="Group 16588">
        <path id="Path_12819" data-name="Path 12819" d="M182.639,75.235l-5.613,7.138c-1.066-1.117-2.228-2.329-2.228-2.329a1.849,1.849,0,0,0-2.665,2.564l3.694,3.863a1.841,1.841,0,0,0,2.782-.133l6.927-8.8a1.85,1.85,0,0,0-2.9-2.3Z" transform="translate(-171.62 -74.534)" fill="#2650d8"/>
      </g>
    </g>
    <g id="Ellipse_2145" data-name="Ellipse 2145" transform="translate(0 -0.363)" fill="none" stroke="#00155a" stroke-width="2">
      <circle cx="14" cy="14" r="14" stroke="none"/>
      <circle cx="14" cy="14" r="13" fill="none"/>
    </g>
  </g>
</svg>
Background Verified</p></li>
                        <li><p className='poppins20M'> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" style={{marginRight:'10px'}} viewBox="0 0 28 28">
  <g id="Group_30020" data-name="Group 30020" transform="translate(0 0.363)">
    <g id="Group_16589" data-name="Group 16589" transform="translate(6.773 8.223)">
      <g id="Group_16588" data-name="Group 16588">
        <path id="Path_12819" data-name="Path 12819" d="M182.639,75.235l-5.613,7.138c-1.066-1.117-2.228-2.329-2.228-2.329a1.849,1.849,0,0,0-2.665,2.564l3.694,3.863a1.841,1.841,0,0,0,2.782-.133l6.927-8.8a1.85,1.85,0,0,0-2.9-2.3Z" transform="translate(-171.62 -74.534)" fill="#2650d8"/>
      </g>
    </g>
    <g id="Ellipse_2145" data-name="Ellipse 2145" transform="translate(0 -0.363)" fill="none" stroke="#00155a" stroke-width="2">
      <circle cx="14" cy="14" r="14" stroke="none"/>
      <circle cx="14" cy="14" r="13" fill="none"/>
    </g>
  </g>
</svg>
Trained Chauffers</p></li>

                        <li><p className='poppins20M'> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" style={{marginRight:'10px'}} viewBox="0 0 28 28">
  <g id="Group_30020" data-name="Group 30020" transform="translate(0 0.363)">
    <g id="Group_16589" data-name="Group 16589" transform="translate(6.773 8.223)">
      <g id="Group_16588" data-name="Group 16588">
        <path id="Path_12819" data-name="Path 12819" d="M182.639,75.235l-5.613,7.138c-1.066-1.117-2.228-2.329-2.228-2.329a1.849,1.849,0,0,0-2.665,2.564l3.694,3.863a1.841,1.841,0,0,0,2.782-.133l6.927-8.8a1.85,1.85,0,0,0-2.9-2.3Z" transform="translate(-171.62 -74.534)" fill="#2650d8"/>
      </g>
    </g>
    <g id="Ellipse_2145" data-name="Ellipse 2145" transform="translate(0 -0.363)" fill="none" stroke="#00155a" stroke-width="2">
      <circle cx="14" cy="14" r="14" stroke="none"/>
      <circle cx="14" cy="14" r="13" fill="none"/>
    </g>
  </g>
</svg>
24*7 Available</p></li>

                    </ul>
                    </Col>
                <Col sm={6}>
                    <img src={ChaufferHomeImage}  className="img-fluid" style={{width:'630px',height:'360px'}}></img>
                </Col>
            </Row>
            <Row>
                <p className='poppins30B'>Select a Category</p>
                <ul className='CategoryList '>
                    <Link to="/ChaufferBook" style={{textDecoration:'none'}}><li className='CategoryItems py-3' style={{marginRight:'20px'}}><img src={CityTravel} style={{width:'78px',height:'105px'}}></img>
                    <p className='poppins22B py-2'>In-City Travel</p></li></Link>
                    <li className='CategoryItems py-3 mx-3'><img src={OutTravel} style={{width:'107px',height:'105px'}}></img>
                    <p className='poppins22B py-2'>Outstation Travel</p></li>
                    <li className='CategoryItems py-3 mx-3'><img src={PermanentRole} style={{width:'117px',height:'105px'}}></img>
                    <p className='poppins22B py-2'>Permanent Role</p></li>
                </ul>
                
            </Row>
        </div>
    </>
);
export default ChaufferHome;