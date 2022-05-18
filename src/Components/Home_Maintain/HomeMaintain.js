import React from 'react';
import './homemaintain.css';
import { Link } from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
//import homeimg1 from '../../Images/ImagesAll/drawable-xxxhdpi/homeimg1.png';
import homeimg1 from '../../Images/ImagesAll/drawable-xxxhdpi/homeimg1.png';
import SettingSeaGreen from '../../Images/ImagesAll/drawable-xxxhdpi/SettingSeaGreen.png';
import SmilePurpule from '../../Images/ImagesAll/drawable-xxxhdpi/SmilePurpule.png';
import PeoplesRed from '../../Images/ImagesAll/drawable-xxxhdpi/PeoplesRed.png';
import HeartBlue from '../../Images/ImagesAll/drawable-xxxhdpi/HeartBlue.png';
import direct from '../../Images/drawable-xxxhdpi/Path 22574.png';
import loc from '../../Images/drawable-xxxhdpi/Path 26941.png';

function HomeMaintain(){
    return <>
        <div className='container-fluid px-5'>
            <Row className="row1">
                <Col sm={6} className='row1bg'>
                    <Row className="second_home">
                        <p className="text1">Compare & Choose Schedule an appoitment Pay securely online</p>
                        <div className="" style={{marginBottom:"250px"}}>
                        <p className="text-3">Please enter your location to get information on garages near by</p>
                        
                            <div className="serach-cont">
                          <input
                            className='PinCodeInput'
                            type="number"
                            placeholder="Enter Pin Code"
                            name="Location" 
                        />
                        <i className='location1'><img src={loc} alt="error"/>
                        </i>
                        <Link className="hyperlink12"><img src={direct} alt="error"/>Locate me</Link>
                                <button className='FindGarage' type="submit">Find Garages</button>

                                </div>
                        </div>
                    </Row>
                </Col>
                <Col sm={6}><img src={homeimg1} style={{height:"385px",width:"623px",paddingLeft:'10px'}}></img></Col>
            </Row>
        </div>
        <Row className='' >
                <div className='mt-5'  style={{backgroundColor: "#f4f8ff"}}>
                <div >
            <Row className='iconrow'>
                <Col sm={3}>
                    <div className='rowbox py-5'>
                      <Link to="/HomeMain1" style={{textDecoration:'none'}}>
                        <div className='firsth1'>
                        <img src={SettingSeaGreen} style={{width:'100px',height:'100px'}}></img><br></br>
                        <span className='head1'>One Stop Solution</span>
                        <p className='shortpara'>Compare, Choose & Book what fits your needs</p>
                    
                        </div>   
                      </Link>  
                    </div>
                </Col>
                <Col sm={3}> 
                        <div className='rowbox py-5'>
                        <div className='firsth1'>
                        <img src={SmilePurpule} style={{width:'100px',height:'100px'}}></img><br></br>
                        <span  className='head1'>Peace of Mind</span>
                        <p className='shortpara' >Quality Service, Secure Payment and rooust customer support</p>
                        </div> 
                    </div></Col>
                <Col sm={3}>
                        <div className='rowbox py-5'>
                        <div className='firsth1'>
                        <img src={HeartBlue} style={{width:'100px',height:'100px'}}></img><br></br>
                        <span  className='head1'>Freedom of Choice</span>
                        <p className='shortpara'>Compare, Choose & Book what fits your needs</p>
                        </div> 
                    </div>
                </Col>
                    <Col sm={3}>
                        <div className='rowbox py-5'>
                        <div className='firsth1'>
                        <img src={PeoplesRed} style={{width:'100px',height:'100px'}}></img><br></br>
                        <span  className='head1'>Trusted Partners</span>
                        <p className='shortpara'>100% genuine and trusted service providers nearby</p>
                        </div> 
                    </div>
                </Col>
            </Row>
        </div>
    </div>
 </Row>
</>

}
export default HomeMaintain;

