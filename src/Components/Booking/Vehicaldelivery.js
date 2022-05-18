import React,{useState} from 'react'
import Track from '../Trackingstatus/TrackingComp'
import { Container,Row,Col,Card,Button,ButtonGroup, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import { Link } from 'react-router-dom';
import './Booking.css';
const Vehicaldelivery = () => {
    const[review,setReview]=useState("")

    const handlsubmit=()=>{
        
    }
    return (
        <Container fluid>
            <Row className='p-5'>
             <div>
             <Link to ="/Carttrack5" className="bookawait"><i className='fa fa-arrow-left'></i></Link>
             <Link to="/Carttrack5" className="bookawait1">Tracking Status</Link>
             </div>
            <Col lg={8}>
            <Track/>
            </Col>
            <Col lg={4}>
            <div className='d-flex'>
             <div className="cardtkk1">
                 <CardBody>
                      <CardText className='innercard1'>
                      <div className="pickup">
                               <h5>Vehicle Delivered</h5>
                               <p>Garage will soon diagnose your 
                                   vehicle and start the service</p>
                               <button className="btnjobcard1">JOB CARD</button>
                           </div>
                           <div className="qrcode1">
                           <i class="fas fa-qrcode"></i>
                          <Link><small className="downloadqr1">Download QR</small></Link>
                           </div>
                      </CardText>
                      <CardSubtitle>
                          <div className="thanking">
                              
                          <h4 className="mahindrachoice">Mahindra First Choice</h4>
                                    <svg id="Group_27093" data-name="Group 27093" xmlns="http://www.w3.org/2000/svg" width="242.097" height="29.673" viewBox="0 0 242.097 29.673">
                            <path id="Path_18641" data-name="Path 18641" d="M786.029,489.661a1.55,1.55,0,0,0-1.334-1.04l-8.829-1.288-3.957-8.022a1.551,1.551,0,0,0-2.793,0l-3.957,8.006-8.829,1.3a1.533,1.533,0,0,0-.869,2.607l6.408,6.207-1.552,8.813a1.551,1.551,0,0,0,2.25,1.66l7.944-4.143,7.913,4.158a1.454,1.454,0,0,0,.714.186,1.563,1.563,0,0,0,1.452-.981,1.543,1.543,0,0,0,.084-.866l-1.552-8.813,6.408-6.206a1.551,1.551,0,0,0,.5-1.583Zm-9.543,6.206a1.547,1.547,0,0,0-.45,1.381l1.117,6.5-5.834-3.1a1.544,1.544,0,0,0-1.459,0l-5.834,3.1,1.117-6.5a1.547,1.547,0,0,0-.45-1.381l-4.655-4.655,6.532-.947a1.561,1.561,0,0,0,1.179-.853l2.762-5.912,2.917,5.927a1.554,1.554,0,0,0,1.179.853l6.532.946Z" transform="translate(-755.006 -478.436)" fill="#ed7d2b"/>
                            <path id="Path_18642" data-name="Path 18642" d="M820.029,489.661a1.55,1.55,0,0,0-1.334-1.04l-8.829-1.288-3.957-8.022a1.551,1.551,0,0,0-2.793,0l-3.957,8.006-8.829,1.3a1.532,1.532,0,0,0-.869,2.607l6.408,6.207-1.552,8.813a1.549,1.549,0,0,0,1.42,1.837,1.559,1.559,0,0,0,.83-.177l7.944-4.143,7.913,4.158a1.453,1.453,0,0,0,.714.186,1.563,1.563,0,0,0,1.452-.981,1.544,1.544,0,0,0,.084-.866l-1.552-8.813,6.408-6.206a1.55,1.55,0,0,0,.5-1.583Zm-9.542,6.206a1.547,1.547,0,0,0-.45,1.381l1.117,6.5-5.834-3.1a1.544,1.544,0,0,0-1.458,0l-5.834,3.1,1.117-6.5a1.547,1.547,0,0,0-.45-1.381l-4.655-4.655,6.532-.947a1.561,1.561,0,0,0,1.179-.853l2.762-5.912,2.917,5.927a1.554,1.554,0,0,0,1.179.853l6.532.946Z" transform="translate(-736.251 -478.436)" fill="#ed7d2b"/>
                            <path id="Path_18643" data-name="Path 18643" d="M854.029,489.661a1.55,1.55,0,0,0-1.334-1.04l-8.829-1.288-3.957-8.022a1.551,1.551,0,0,0-2.793,0l-3.957,8.006-8.829,1.3a1.533,1.533,0,0,0-.869,2.607l6.408,6.207-1.552,8.813a1.551,1.551,0,0,0,2.25,1.66l7.944-4.143,7.913,4.158a1.454,1.454,0,0,0,.714.186,1.563,1.563,0,0,0,1.452-.981,1.543,1.543,0,0,0,.084-.866l-1.552-8.813,6.408-6.206a1.551,1.551,0,0,0,.5-1.583Zm-9.543,6.206a1.547,1.547,0,0,0-.45,1.381l1.117,6.5-5.834-3.1a1.544,1.544,0,0,0-1.458,0l-5.834,3.1,1.117-6.5a1.547,1.547,0,0,0-.45-1.381l-4.655-4.655,6.532-.947a1.561,1.561,0,0,0,1.179-.853l2.762-5.912,2.917,5.927a1.554,1.554,0,0,0,1.179.853l6.532.946Z" transform="translate(-717.495 -478.436)" fill="#ed7d2b"/>
                            <path id="Path_18644" data-name="Path 18644" d="M888.029,489.661a1.55,1.55,0,0,0-1.334-1.04l-8.829-1.288-3.957-8.022a1.551,1.551,0,0,0-2.793,0l-3.957,8.006-8.829,1.3a1.533,1.533,0,0,0-.869,2.607l6.408,6.207-1.552,8.813a1.551,1.551,0,0,0,2.25,1.66l7.944-4.143,7.913,4.158a1.454,1.454,0,0,0,.714.186,1.563,1.563,0,0,0,1.452-.981,1.543,1.543,0,0,0,.084-.866l-1.552-8.813,6.408-6.206a1.551,1.551,0,0,0,.5-1.583Zm-9.542,6.206a1.547,1.547,0,0,0-.45,1.381l1.117,6.5-5.834-3.1a1.544,1.544,0,0,0-1.459,0l-5.834,3.1,1.117-6.5a1.547,1.547,0,0,0-.45-1.381l-4.655-4.655,6.532-.947a1.561,1.561,0,0,0,1.179-.853l2.762-5.912,2.917,5.927a1.554,1.554,0,0,0,1.179.853l6.532.946Z" transform="translate(-698.74 -478.436)" fill="#ed7d2b"/>
                            <path id="Path_18645" data-name="Path 18645" d="M922.029,489.661a1.55,1.55,0,0,0-1.334-1.04l-8.829-1.288-3.957-8.022a1.551,1.551,0,0,0-2.793,0l-3.957,8.006-8.829,1.3a1.532,1.532,0,0,0-.869,2.607l6.408,6.207-1.552,8.813a1.549,1.549,0,0,0,1.42,1.837,1.559,1.559,0,0,0,.83-.177l7.944-4.143,7.913,4.158a1.453,1.453,0,0,0,.714.186,1.563,1.563,0,0,0,1.452-.981,1.544,1.544,0,0,0,.084-.866l-1.552-8.813,6.408-6.206a1.551,1.551,0,0,0,.5-1.583Zm-9.543,6.206a1.547,1.547,0,0,0-.45,1.381l1.117,6.5-5.834-3.1a1.544,1.544,0,0,0-1.458,0l-5.834,3.1,1.117-6.5a1.547,1.547,0,0,0-.45-1.381l-4.655-4.655,6.532-.947a1.561,1.561,0,0,0,1.179-.853l2.762-5.912,2.917,5.927a1.554,1.554,0,0,0,1.179.853l6.532.946Z" transform="translate(-679.985 -478.436)" fill="#ed7d2b"/>
                            </svg>
                    </div>
                          <div>
                          <textarea onChange="">Write a review? Type here.</textarea>
                          </div>
                      </CardSubtitle>
                      <ButtonGroup className='submitfeed'>
                          <button className="notNowbtn">Not Now</button>
                          <Link to="/modifyreview"><button className="Submitbtn" onClick={handlsubmit()}>Submit</button></Link>
                      </ButtonGroup>
                      </CardBody>
                              <div className="payfooter13">
                                  <div className="payAmount1">
                                   <div className="total1">
                                            <p>Paid</p>
                                            <h5>1673</h5>
                                   </div>
                                  </div>
                                  <div className="endthank">
                                      <h4>THANK YOU</h4>
                                  </div>
                              </div>
                              </div>
                      
             </div>
            </Col>
            </Row>
            
        </Container>
    )
}

export default Vehicaldelivery
