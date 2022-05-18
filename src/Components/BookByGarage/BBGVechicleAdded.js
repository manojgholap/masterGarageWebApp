import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import FirstChoiceGarage from '../src/Images/FirstChoiceGarage.png';
import CarOnStand from '../src/Images/CarOnStand.png';
import OilFilling from '../src/Images/OilFilling.png';
import systemUpdate from '../src/Images/systemUpdate.png';
import check from '../src/Images/check.png';
import BasicService from '../src/Images/BasicService.png';
import StandardService from '../src/Images/StandardService.png';
import EngineScanning from '../src/Images/EngineScanning.png';
import ComprehensiveService from '../src/Images/ComprehensiveService.png';
import CompleteService from '../src/Images/CompleteService.png';
import CarInspection from '../src/Images/CarInspection.png';
import StarterMotor from '../src/Images/StarterMotor.png';
import CarFluid from '../src/Images/CarFluid.png';
import Fastaglogo from '../src/Images/Fastaglogo.png';
import XL6 from './Images/CarGarage/Models/1 Maruti Suzuki/WBG/XL6.png';

import './BkByAdd.css';

const BBGVechicle = () => (
    <>
        <div>
            <div className='container-fluid p-0'>
                <BookADDFirst></BookADDFirst>
                <BookADDSecond></BookADDSecond>
            </div>
        </div>
    </>
);

const BookADDFirst = () =>(
    <>
        <div className='Re_FirstBox px-5 py-2'>
        
<Row>
    <Col sm={1} style={{width:'3%'}}><Link to="/BBGBasicService"><svg xmlns="http://www.w3.org/2000/svg" width="20.667" height="20.143" viewBox="0 0 20.667 20.143">
  <g id="Rounded_Button" data-name="Rounded Button" transform="translate(20.667 20.143) rotate(180)">
    <path id="icon-arrow-left" d="M8.783,21.441l1.024,1.024a1.1,1.1,0,0,0,1.564,0L20.338,13.5a1.1,1.1,0,0,0,0-1.564L11.371,2.972a1.1,1.1,0,0,0-1.564,0L8.783,4A1.108,1.108,0,0,0,8.8,5.579l5.558,5.3H1.1A1.1,1.1,0,0,0,0,11.981v1.476A1.1,1.1,0,0,0,1.1,14.564H14.36L8.8,19.859A1.1,1.1,0,0,0,8.783,21.441Z" transform="translate(0.004 -2.647)" fill="#2650d8"/>
  </g>
</svg></Link></Col>
    <Col sm={11} style={{width:'97%'}}> 
                <Row>
                    <Col sm={1}><img src={FirstChoiceGarage} alt="First choice garage" style={{width:'77px',height:'77px'}}></img></Col>
                    <Col sm={11}>
                    <Row>
            <Col sm={9}><p className="poppins25">Mahindra First Choice <svg xmlns="http://www.w3.org/2000/svg" width="20.268" height="18.566" viewBox="0 0 20.268 18.566">
  <g id="Group_26192" data-name="Group 26192" transform="translate(-6.025 -7.213)">
    <path id="Icon_feather-heart" data-name="Icon feather-heart" d="M19.182,5.962a4.678,4.678,0,0,0-6.8,0l-.926.963-.926-.963a4.679,4.679,0,0,0-6.8,0,5.14,5.14,0,0,0,0,7.069l.926.963,6.8,7.069,6.8-7.069.926-.963a5.139,5.139,0,0,0,0-7.069Z" transform="translate(4.702 3.716)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg></p> 

                        <Row>
                            <Col sm={6}>
                            <p className='poppins15light'><svg xmlns="http://www.w3.org/2000/svg" width="8.279" height="12.766" viewBox="0 0 8.279 12.766">
  <path id="Icon_metro-location" data-name="Icon metro-location" d="M12.494,1.928a4.067,4.067,0,0,0-4.14,3.989c0,3.989,4.14,8.777,4.14,8.777s4.14-4.787,4.14-8.777a4.067,4.067,0,0,0-4.14-3.989Zm0,6.433A2.491,2.491,0,0,1,9.959,5.918a2.537,2.537,0,0,1,5.071,0A2.491,2.491,0,0,1,12.494,8.361Zm-1.6-2.444a1.605,1.605,0,0,1,3.208,0,1.605,1.605,0,0,1-3.208,0Z" transform="translate(-8.355 -1.928)" fill="#999"/>
</svg>
Kandivali East  400 101
</p>
<svg id="Group_17900" data-name="Group 17900" xmlns="http://www.w3.org/2000/svg" width="120.086" height="20" viewBox="0 0 120.086 20">
  <text id="_4.5_" data-name="4.5 " transform="translate(0 16)" fill="#999" font-size="15" font-family="SegoeUI-Light, Segoe UI" font-weight="300"><tspan x="0" y="0">4.5 </tspan></text>
  <g id="Group_17899" data-name="Group 17899" transform="translate(25.087 1.004)">
    <path id="Icon_ionic-md-star" data-name="Icon ionic-md-star" d="M11.3,16.608l4.635,2.954L14.706,13.99,18.8,10.243,13.4,9.753,11.3,4.5,9.19,9.753,3.8,10.243,7.888,13.99,6.662,19.562Z" transform="translate(16.203 -4.5)" fill="#999"/>
    <path id="Icon_ionic-md-star-2" data-name="Icon ionic-md-star" d="M11.3,16.608l4.635,2.954L14.706,13.99,18.8,10.243,13.4,9.753,11.3,4.5,9.19,9.753,3.8,10.243,7.888,13.99,6.662,19.562Z" transform="translate(36.203 -4.5)" fill="#999"/>
    <path id="Icon_ionic-md-star-3" data-name="Icon ionic-md-star" d="M11.3,16.608l4.635,2.954L14.706,13.99,18.8,10.243,13.4,9.753,11.3,4.5,9.19,9.753,3.8,10.243,7.888,13.99,6.662,19.562Z" transform="translate(56.203 -4.5)" fill="#999"/>
    <path id="Icon_ionic-md-star-half" data-name="Icon ionic-md-star-half" d="M18.8,10.243,13.4,9.753,11.3,4.5,9.19,9.753,3.8,10.243,7.888,13.99,6.662,19.562,11.3,16.608l4.635,2.954L14.706,13.99Zm-6.886,5.29-.614-.391V7.718l1.012,2.525.279.7L13.3,11l2.593.235-1.968,1.8-.541.5.162.737.589,2.679Z" transform="translate(76.203 -4.5)" fill="#999"/>
    <path id="Icon_ionic-md-star-4" data-name="Icon ionic-md-star" d="M11.3,16.608l4.635,2.954L14.706,13.99,18.8,10.243,13.4,9.753,11.3,4.5,9.19,9.753,3.8,10.243,7.888,13.99,6.662,19.562Z" transform="translate(-3.797 -4.5)" fill="#999"/>
  </g>
</svg>

                            </Col>
                            <Col sm={6}><svg xmlns="http://www.w3.org/2000/svg"  width="224" height="25" viewBox="0 0 224 25">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_7307" data-name="Rectangle 7307" width="25" height="25" fill="#ed7d2b"/>
    </clipPath>
  </defs>
  <g id="Group_26053" data-name="Group 26053" transform="translate(-97 -979)">
    <text id="_50_Off_I_Use_Code:_TRYNEW" data-name="50% Off I Use Code: TRYNEW" transform="translate(127 997)" fill="#ed7d2b" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">50% Off I Use Code: TRYNEW</tspan></text>
    <g id="Group_18144" data-name="Group 18144" transform="translate(97 979)" clip-path="url(#clip-path)">
      <path id="Path_19133" data-name="Path 19133" d="M451.241,646.826a.736.736,0,0,1,0-.647l.933-1.908a2.171,2.171,0,0,0-.936-2.883l-1.875-1a.731.731,0,0,1-.381-.524l-.366-2.092A2.172,2.172,0,0,0,446.161,636l-2.1.3a.729.729,0,0,1-.616-.2l-1.527-1.477a2.171,2.171,0,0,0-3.031,0l-1.527,1.477a.727.727,0,0,1-.615.2l-2.1-.3a2.17,2.17,0,0,0-2.452,1.781l-.368,2.092a.729.729,0,0,1-.38.524l-1.877,1a2.171,2.171,0,0,0-.936,2.882l.933,1.908a.728.728,0,0,1,0,.647l-.933,1.908a2.172,2.172,0,0,0,.936,2.883l1.877,1a.731.731,0,0,1,.38.524l.368,2.092a2.166,2.166,0,0,0,2.139,1.8,2.21,2.21,0,0,0,.313-.021l2.1-.3a.731.731,0,0,1,.615.2l1.527,1.477a2.171,2.171,0,0,0,3.031,0l1.527-1.477a.733.733,0,0,1,.616-.2l2.1.3a2.172,2.172,0,0,0,2.453-1.782l.366-2.092a.733.733,0,0,1,.381-.524l1.875-1a2.171,2.171,0,0,0,.936-2.883Zm-13.724-6.814a2.644,2.644,0,1,1-2.644,2.644A2.648,2.648,0,0,1,437.517,640.012Zm-1.364,11.758a.721.721,0,0,1-1.02-1.019l9.518-9.518a.72.72,0,0,1,1.019,1.019Zm7.133,1.221a2.644,2.644,0,1,1,2.644-2.644A2.648,2.648,0,0,1,443.285,652.992Z" transform="translate(-427.899 -634)" fill="#ed7d2b"/>
      <path id="Path_19134" data-name="Path 19134" d="M440.547,646.115a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,440.547,646.115Z" transform="translate(-425.161 -630.968)" fill="#ed7d2b"/>
      <path id="Path_19135" data-name="Path 19135" d="M435.934,639.962a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,435.934,639.962Z" transform="translate(-426.315 -632.508)" fill="#ed7d2b"/>
    </g>
  </g>
</svg></Col>
                            
                            
                        </Row></Col>
            <Col sm={3} className='py-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68">
  <defs>
    <filter id="Ellipse_1542" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_26144" data-name="Group 26144" transform="translate(-1314 -503)">
    <g transform="matrix(1, 0, 0, 1, 1314, 503)" filter="url(#Ellipse_1542)">
      <circle id="Ellipse_1542-2" data-name="Ellipse 1542" cx="25" cy="25" r="25" transform="translate(9 6)" fill="#53bd8c"/>
    </g>
    <g id="telephone-2" transform="translate(1336.96 522.919)">
      <path id="Path_1428" data-name="Path 1428" d="M5.386,14.733a23.514,23.514,0,0,0,7.821,6.127,12.173,12.173,0,0,0,4.377,1.3c.106,0,.207.009.312.009a3.624,3.624,0,0,0,2.811-1.208.1.1,0,0,0,.018-.023,11.832,11.832,0,0,1,.886-.919c.216-.207.436-.423.648-.643a2.218,2.218,0,0,0-.009-3.3l-2.76-2.76a2.234,2.234,0,0,0-1.617-.744,2.309,2.309,0,0,0-1.635.739l-1.644,1.644c-.152-.087-.308-.165-.455-.239a5.679,5.679,0,0,1-.505-.276A17.4,17.4,0,0,1,9.478,10.65,10.02,10.02,0,0,1,8.073,8.409c.432-.39.836-.8,1.226-1.2.138-.142.28-.285.423-.427a2.354,2.354,0,0,0,.762-1.653,2.336,2.336,0,0,0-.762-1.653L8.353,2.108c-.161-.161-.312-.317-.468-.478-.3-.312-.62-.634-.932-.923A2.29,2.29,0,0,0,5.336,0,2.357,2.357,0,0,0,3.7.712L1.983,2.429A3.529,3.529,0,0,0,.931,4.689,8.5,8.5,0,0,0,1.57,8.363,21.375,21.375,0,0,0,5.386,14.733ZM2.052,4.786a2.429,2.429,0,0,1,.73-1.561L4.49,1.516a1.237,1.237,0,0,1,.845-.39,1.173,1.173,0,0,1,.827.4c.308.285.6.583.909.9.156.161.317.321.478.487L8.918,4.28a1.247,1.247,0,0,1,.432.859A1.247,1.247,0,0,1,8.918,6c-.142.142-.285.289-.427.432-.427.432-.827.84-1.268,1.231L7.2,7.683A.9.9,0,0,0,6.97,8.7c0,.014.009.023.014.037A10.809,10.809,0,0,0,8.6,11.362a18.365,18.365,0,0,0,4.427,4.032,6.574,6.574,0,0,0,.606.331,5.681,5.681,0,0,1,.505.276l.051.028a.96.96,0,0,0,.445.115.974.974,0,0,0,.684-.312l1.718-1.718a1.215,1.215,0,0,1,.84-.409,1.153,1.153,0,0,1,.813.409l2.769,2.765a1.108,1.108,0,0,1-.014,1.731c-.193.207-.395.4-.611.611a13.226,13.226,0,0,0-.96,1,2.521,2.521,0,0,1-1.97.836c-.078,0-.161,0-.239-.009A11.059,11.059,0,0,1,13.7,19.859a22.338,22.338,0,0,1-7.445-5.833A20.459,20.459,0,0,1,2.63,7.987,7.407,7.407,0,0,1,2.052,4.786Z" transform="translate(-0.912 0)" fill="#fff" stroke="#fff" stroke-width="1"/>
    </g>
  </g>
</svg>
<svg xmlns="http://www.w3.org/2000/svg"  width="68" height="68" viewBox="0 0 68 68">
  <defs>
    <filter id="Ellipse_1931" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_26145" data-name="Group 26145" transform="translate(-728.973 -111)">
    <g transform="matrix(1, 0, 0, 1, 728.97, 111)" filter="url(#Ellipse_1931)">
      <circle id="Ellipse_1931-2" data-name="Ellipse 1931" cx="25" cy="25" r="25" transform="translate(9 6)" fill="#53bd8c"/>
    </g>
    <path id="Path_22984" data-name="Path 22984" d="M56.129,36.978a9.837,9.837,0,0,1-1.056,4.461,9.978,9.978,0,0,1-8.921,5.517A9.835,9.835,0,0,1,41.691,45.9L35,48.129l2.23-6.691a9.837,9.837,0,0,1-1.056-4.461,9.978,9.978,0,0,1,5.517-8.921A9.838,9.838,0,0,1,46.151,27h.587a9.954,9.954,0,0,1,9.391,9.391Z" transform="translate(717.408 104.436)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>
            </Col>
        </Row>
                    
                        
                    </Col>
                </Row>
                </Col>
</Row>

               
        </div>
    </>
);

const BookADDSecond = () =>(
    <>
        <div className='container-fluid'>
            <Row className='px-5 py-3'>
                <Col sm={3} ><BookADDPartOne></BookADDPartOne></Col>
                <Col sm={5}><BookADDPartTwo></BookADDPartTwo></Col>
                <Col sm={4}><BookADDPartThree></BookADDPartThree></Col>
            </Row>
        </div>
    </>
);
const SearchBar = () => (
    <form action="/" method="get">
    <div className='Searchbox'>
    <i class='fas fa-search'></i>
        <input
        className='SearchGarage'
            type="text"
            placeholder="Search for Garages"
            name="Search" 
        />
    </div>
        
    </form>
);

const BookADDPartOne = () =>(
    <>
        <div>
            <Row>
                <SearchBar></SearchBar>         
            </Row>
            <Row className='px-4'>
                <ul className='ServiceOptions my-4 p-0'>
                    <li ><span className='PeriodicService'>Periodic Service</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="20" style={{float:'right'}} viewBox="0 0 4 20">
  <path id="Rectangle_8325" data-name="Rectangle 8325" d="M2,0H4A0,0,0,0,1,4,0V20a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z" fill="#2650d8"/>
</svg>

                        <ul>
                            <li>Scheduled Service Packages</li>
                            <li style={{color:'#999999',fontFamily:'300'}}>Other Service Packages</li>
                        </ul>
                    </li>
                    <li>Running Repairs</li>
                    <li>Denting & Painting</li>
                    <li>Body Fittings</li>
                    <li>AC Service & Repairs</li>
                    <li>Battery Care</li>
                    <li>Wheel Care</li>
                    <li>Auto Detailing</li>
                    <li>Insurance Repairs</li>
                </ul>
            </Row>
        </div>
    </>
);

const BookADDPartTwo = () =>(
    <>
       <Row>
           <p className='poppins22'>PERIODIC SERVICE</p>
       </Row>
       <Row>
           <p className='.poppins15 py-3 '><svg xmlns="http://www.w3.org/2000/svg" width="4" height="20" viewBox="0 0 4 20">
  <path id="Rectangle_8695" data-name="Rectangle 8695" d="M0,0H2A2,2,0,0,1,4,2V18a2,2,0,0,1-2,2H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" fill="#4ee59d"/>
</svg>
 Scheduled Service Packages</p>
       </Row>
        <Row className='PartTwoBgBox p-2 my-2'>
            <Col sm={9}>
                <p className='poppins18'>Basic Service</p>
                <p className='poppins15light'><img src={systemUpdate} style={{width:'12px'}}></img> Every 5000 Kms or 3 months</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img> 9 Points Service</p>
                <div style={{paddingTop:'25px'}}>
                <Link to ="" style={{marginTop:'40px' ,fontSize:'12px'}}>Show more</Link>
                <p className='OpenSans22' style={{float:'right'}}>&#8377;1459</p>
                </div>
               

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={BasicService} style={{width:'127px',height:'120px'}}></img>
                <button className='Partaddservice'>Add service</button>
                </div>
                
            </Col>
        </Row> 
        <Row className='PartTwoBgBox px-2'>
        <Row className='p-0'><svg id="Group_26850" style={{width:'25%'}} data-name="Group 26850" xmlns="http://www.w3.org/2000/svg" width="113" height="15" viewBox="0 0 113 15">
  <rect id="Rectangle_6338" data-name="Rectangle 6338" width="113" height="15" rx="2" fill="#2650d8"/>
  <text id="Recommended" transform="translate(56 12)" fill="#fff" font-size="11" font-family="SegoeUI, Segoe UI" letter-spacing="0.003em"><tspan x="-36.75" y="0">Recommended</tspan></text>
</svg></Row>
    
            <Col sm={9}>
                <p className='poppins18'>Standard Service</p>
                <p className='poppins15light'><img src={systemUpdate} style={{width:'12px'}}></img> Every 10000 Kms or 6 months</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img> 15 Points Service</p>
                <div style={{paddingTop:'25px'}}>
                <Link to ="" style={{marginTop:'40px' ,fontSize:'12px'}}>Show more</Link>
                <p className='OpenSans22' style={{float:'right'}}>&#8377;1459</p>
                </div>

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={StandardService} style={{width:'127px',height:'120px'}}></img>
                <button className='Partaddservice'>Add service</button>
                </div>
                
            </Col>
        </Row> 
        <Row className='PartTwoBgBox p-2 my-2'>
            <Col sm={9}>
                <p className='poppins18'>Comprehensive Service</p>
                <p className='poppins15light'><img src={systemUpdate} style={{width:'12px'}}></img> Every 10000 Kms or 6 months</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img> 20 Points Service</p>
                <div style={{paddingTop:'25px'}}>
                <Link to ="" style={{marginTop:'40px' ,fontSize:'12px'}}>Show more</Link>
                <p className='OpenSans22' style={{float:'right'}}>&#8377;1459</p>
                </div>

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={ComprehensiveService} style={{width:'127px',height:'120px'}}></img>
                <button className='Partaddservice'>Add service</button>
                </div>
                
            </Col>
        </Row>
        <Row>
           <p className='.poppins18 py-3 '>Other Service Packages</p>
       </Row> 
       <Row className='PartTwoBgBox p-2 my-2'>
            <Col sm={9}>
                <p className='poppins18'>Engine Scanning</p>
                <p className='poppins15light'><img src={systemUpdate} style={{width:'12px'}}></img> Every 10000 Kms or 6 months</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img>Scanner Report Provided</p>
                <div style={{paddingTop:'25px'}}>
                <Link to ="" style={{marginTop:'40px' ,fontSize:'12px'}}>Show more</Link>
                <p className='OpenSans22' style={{float:'right'}}>&#8377;1459</p>
                </div>

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={EngineScanning} style={{width:'127px',height:'120px'}}></img>
                <button className='Partaddservice'>Add service</button>
                </div>
                
            </Col>
        </Row> 
        <Row className='PartTwoBgBox p-2 my-2'>
            <Col sm={9}>
                <p className='poppins18'>Complete Suspension Inspection</p>
                <p className='poppins15light'><img src={systemUpdate} style={{width:'12px'}}></img> Every 10000 Kms or 6 months</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img>Scanner Report Provided</p>
                <div style={{paddingTop:'25px'}}>
                <Link to ="" style={{marginTop:'40px' ,fontSize:'12px'}}>Show more</Link>
                <p className='OpenSans22' style={{float:'right'}}>&#8377;1459</p>
                </div>

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={CompleteService} style={{width:'127px',height:'120px'}}></img>
                <button className='Partaddservice'>Add service</button>
                </div>
                
            </Col>
        </Row>
        <Row className='PartTwoBgBox px-2'>
        <Row className='p-0'><svg id="Group_26850" style={{width:'25%'}} data-name="Group 26850" xmlns="http://www.w3.org/2000/svg" width="113" height="15" viewBox="0 0 113 15">
  <rect id="Rectangle_6338" data-name="Rectangle 6338" width="113" height="15" rx="2" fill="#2650d8"/>
  <text id="Recommended" transform="translate(56 12)" fill="#fff" font-size="11" font-family="SegoeUI, Segoe UI" letter-spacing="0.003em"><tspan x="-36.75" y="0">Recommended</tspan></text>
</svg></Row>
    
            <Col sm={9}>
                <p className='poppins18'>Car Inspection & Diagnostics</p>
                <p className='poppins15light'><img src={systemUpdate} style={{width:'12px'}}></img> Every 10000 Kms or 6 months</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img> Scanner Report Provided</p>
                <div style={{paddingTop:'25px'}}>
                <Link to ="" style={{marginTop:'40px' ,fontSize:'12px'}}>Show more</Link>
                <p className='OpenSans22' style={{float:'right'}}>&#8377;1459</p>
                </div>

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={CarInspection} style={{width:'127px',height:'120px'}}></img>
                <button className='Partaddservice'>Add service</button>
                </div>
                
            </Col>
        </Row>
        <Row className='PartTwoBgBox p-2 my-2'>
            <Col sm={9}>
                <p className='poppins18'>Car Fluid Check</p>
                <p className='poppins15light'><img src={systemUpdate} style={{width:'12px'}}></img> On Leakage or Check Lights</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img>5 Points Checklist</p>
                <div style={{paddingTop:'25px'}}>
                <Link to ="" style={{marginTop:'40px' ,fontSize:'12px'}}>Show more</Link>
                <p className='OpenSans22' style={{float:'right'}}>&#8377;1459</p>
                </div>

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={CarFluid} style={{width:'127px',height:'120px'}}></img>
                <button className='Partaddservice'>Add service</button>
                </div>
                
            </Col>
        </Row> 
        <Row className='PartTwoBgBox p-2 my-2'>
            <Col sm={9}>
                <p className='poppins18'>Starter Motor Repair</p>
                <p className='poppins15light'><img src={systemUpdate} style={{width:'12px'}}></img> In Case of Car not Starting
</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img>5 Points Service</p>
                <div style={{paddingTop:'25px'}}>
                <Link to ="" style={{marginTop:'40px' ,fontSize:'12px'}}>Show more</Link>
                <p className='OpenSans22' style={{float:'right'}}>&#8377;1459</p>
                </div>

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={StarterMotor} style={{width:'127px',height:'120px'}}></img>
                <button className='Partaddservice'>Add service</button>
                </div>
                
            </Col>
        </Row> 
    </>
);

const BookADDPartThree = () => (
    <>
        <div className='Re_PartThreeBgBox py-5 px-4'>
            <p className='poppins18bold'>Prathamesh Tiwari</p>
            <Row>
                <Col sm={6}>
                    <p className='poppins15'>Maruti Suzuki XL6</p>
                    <p className='poppins12'>Petrol, VDI, 1299cc </p><br></br>
                    <p className='poppins12bold'>Insurance valid till Feb 2018</p>
                </Col>
                <Col sm={6}><img src={XL6} style={{width:'145px',height:'99px'}}></img></Col>
            </Row>
            
                <form className='py-4'>
                    <input className='Re_PartThreeSearch mx-1'  type="text" name="Search" placeholder='MH 01 AB 1234' value="MH 01 AB 1234 "></input>
                    <button className='PartThreebtn mx-1'>Change</button>
                </form>

                <Row>
                    <Col sm={4}><img src={Fastaglogo} style={{width:'100px',height:'24px'}}></img></Col>
                    <Col sm={8}><span className='poppins15'>Your Fastag balance is </span><span className='OpenSans18'>&#8377;459</span></Col>
                </Row>
        </div>
        <div className='PartThreeBgBoxTwo my-3 px-4 py-3'>
        <svg xmlns="http://www.w3.org/2000/svg" width="309.354" height="94.716" viewBox="0 0 309.354 94.716">
  <g id="Group_17727" data-name="Group 17727" transform="translate(1.293 88.749)">
    <text id="Go_ahead_and_start_adding_service_to_your_cart_" data-name="Go ahead and start adding service to your cart
" transform="translate(-1.293 -18.033)" fill="#5d6186" font-size="15" font-family="SegoeUI-Light, Segoe UI" font-weight="300"><tspan x="0" y="0">Go ahead and start adding service to your cart</tspan><tspan font-family="Poppins-Light, Poppins"><tspan x="0" y="20"></tspan></tspan></text>
    <g id="Group_17726" data-name="Group 17726" transform="translate(39.354 -70.999)">
      <path id="Path_15012" data-name="Path 15012" d="M3289.356-369.886a2.093,2.093,0,0,1,1.169,1.114.538.538,0,0,0,.416.214,2.5,2.5,0,0,1,2.586,2.138c.533,2.177,1.1,4.344,1.67,6.551h36.757a2.109,2.109,0,0,1,2.067,1,5.311,5.311,0,0,1,.292.781v.445c-.029.019-.077.034-.083.059q-.784,3.107-1.561,6.215-1.365,5.424-2.737,10.847a1.835,1.835,0,0,1-2.132,1.683c-8.864,0-17.728.012-26.591-.017a2.21,2.21,0,0,0-2.222.955,18.667,18.667,0,0,1-1.5,1.85h33.6c.146,0,.293-.008.439,0a.68.68,0,0,1,.7.682c.064.68-.307,1.082-1.035,1.089-.96.01-1.92,0-2.935,0,.077.191.121.306.168.419a3.71,3.71,0,0,1-.842,4.215,13.254,13.254,0,0,1-1.714,1.044h-1.645c-.007-.017-.011-.047-.021-.049a3.682,3.682,0,0,1-2.821-4.333,12.227,12.227,0,0,1,.329-1.266h-16.25c.061.155.1.27.151.383a3.771,3.771,0,0,1-.839,4.215,11.181,11.181,0,0,1-1.822,1.05h-1.536a13.345,13.345,0,0,1-1.36-.674,3.807,3.807,0,0,1-1.12-4.948c-.585-.056-1.167-.094-1.744-.171a1.491,1.491,0,0,1-1.312-1.149,1.99,1.99,0,0,1,.414-1.953c.684-.726,1.307-1.512,1.929-2.3a.733.733,0,0,0,.039-.542q-1.374-5.586-2.771-11.167-1.846-7.312-3.721-14.617c-.123-.48-.495-.679-1.154-.622a1.927,1.927,0,0,1-1.828,1.322c-2.9-.051-5.807-.046-8.71-.005a2.006,2.006,0,0,1-2.017-1.014v-2.448a2.429,2.429,0,0,1,1.316-1Zm43.14,11.935h-36.758a.749.749,0,0,0-.013.195q1.039,4.133,2.082,8.265c.7,2.773,1.385,5.548,2.084,8.32.082.321.173.57.636.569q13.562-.029,27.125-.005a.556.556,0,0,0,.625-.46c.154-.577.3-1.155.444-1.735q1.56-6.241,3.115-12.483C3332.056-356.161,3332.27-357.036,3332.5-357.951Zm-30.316,23.672a1.96,1.96,0,0,0-1.96,1.963,2.013,2.013,0,0,0,1.948,1.934,1.963,1.963,0,0,0,1.979-2.006A1.92,1.92,0,0,0,3302.18-334.279Zm22.8,0a1.862,1.862,0,0,0-1.908,1.943,2.008,2.008,0,0,0,1.98,1.966,2.023,2.023,0,0,0,1.915-2.031A1.966,1.966,0,0,0,3324.981-334.279Zm-36.195-33.79h-8.949v.827h8.949Z" transform="translate(-3286.063 352.886)" fill="#00155a" stroke="#00155a" stroke-width="1.5"/>
    </g>
    <text id="No_Bookings_Yet_" data-name="No Bookings Yet!" transform="translate(206.061 -48.033)" fill="#00155a" font-size="25" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="-101.233" y="0">No Bookings Yet!</tspan></text>
  </g>
</svg>

        </div>
    </>
);
export default BBGVechicle;