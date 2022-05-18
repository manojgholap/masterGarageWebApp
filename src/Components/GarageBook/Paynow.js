import React,{useState} from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container,Card} from 'reactstrap';
import { Link,withRouter } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import '../Booking/Payment.css';
import googlePay from '../../Images/googlepay.png'
import visa from '../../Images/visa.png';
import mastercard from '../../Images/mastercard.png';
import Rupay from '../../Images/rupay.png';
import bhim from '../../Images/bhim.png'
import phonepay from '../../Images/phonepay.png'
import pocket from '../../Images/pocket.png'
import paytm from '../../Images/paytm.png'
import mobikwik from '../../Images/mobikwik.png'
import freecharge from '../../Images/freechagre.png';
import americalexpress from '../../Images/american-express.png'
import {selectVehical} from '../../redux/action';
import Cartbox from './CartBox'
function PayNow(){
    return <>
    <div className='container-fluid'>
        <Row>
                <Col className='linkhead pt-4'>
                    <Link to ="/Await" className="pay_now"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/Await" className="pay_now1">Confirm Booking</Link>
                </Col>
                  <Col sm={4} className='mt-3'>
                <div className="progressbar">
                <div className="prog14">   
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
            <Row className='px-5'> 
                <Col sm={8} ><SubMid></SubMid></Col>
                <Col sm={4}  ><Cartbox></Cartbox></Col>   
            </Row>
    </div>            
    </>
}

const SubMid = () =>{
  
   return(
        <>
            <div className='paynow_cont'>
               <div className="d-flex rounded">
                 <div className="cardback">
                  <div className="preferpayment">
                 <div>
                   <h5>Preferred Payments</h5>
                   <Card>
                   <CardBody>
                   <div className="radio">
                    <label className="card11">
                    <div className="paycard">
                     <p><img src={googlePay}/></p>
                     <p className="cardText">Google Pay</p>
                     </div>
                     <div className="radiosize">
                        <input type="radio" value="option2" />
                        </div>
                     </label>

                     <label className="card11">
                     <div className="paycard">
                       <p><img src={visa}/></p>
                        <p className="cardText">1234-XXXXXXXX-7890</p>
                     </div>
                     <div className="radiosize">
                        <input type="radio" value="option2" />
                        </div>
                     </label>
                    </div>
                     </CardBody>
                   </Card>
                </div>

                    <div className="">
                    <h5>Credit/Debit Cards</h5>
                   <Card>
                   <CardBody>
                        <div>
                         <label className="card13">
                            <div className="visadisplay">
                            <p><img src={visa}/></p>
                            <p className="cardText">1234-XXXXXXXX-7890</p>
                            </div>
                            <input type="radio" value="option2" />
                         </label>
                        </div>
                         <div className="addcardalign">
                           <div className="addcard">
                                <p className="addmorecard"><i class="fas fa-plus-circle"></i></p>
                                <div>
                                <h5>Add New Card</h5>
                                <p>Save & Pay via Cards</p>
                                </div>
                            </div>
                            <div className="cardspay">
                            <ul>
                            <li><img src={americalexpress}/></li>
                            <li><img src={mastercard}/></li>
                              <li><img src={visa}/></li>
                                <li><img src={Rupay}/></li>
                            </ul>
                            </div>
                         </div>
                         </CardBody>
                   </Card>
                   </div>
                   <div>
                   <h5>UPI</h5>
                   <Card>
                      <CardBody className="secondcard">
                      <div className="addcardalign">
                         <div>
                         <p className="addmorecard"><i class="fas fa-plus-circle"></i></p>
                         </div>
                         <div>
                            <h5>ADD A NEW UPI</h5>
                            <p>You need to have a registered UOI ID</p>
                         </div>
                         </div>
                         <div className="cardspay">
                            <ul className="aligncard">
                            <li><img src={googlePay}/></li>
                              <li><img src={bhim}/></li>
                                <li><img src={phonepay}/></li>
                                  <li><img src={pocket}/></li>
                            </ul>
                         </div>
                      </CardBody>
                   </Card>
                   </div>
                        <div>
                        <h5>Wallets</h5>
                          <Card>
                             <CardBody>
                             <div className="card13">
                                  <div className="paycard">
                                     <p><img src={paytm}/></p>
                                     <div>
                                     <h5>Paytm</h5>
                                     <p>Link your Paytm wallet to use this payment method</p>
                                     </div>
                                  </div>
                                  <div>
                                     <input type="radio" value="option2" />
                                  </div>
                            </div>
                              
                                <div className="card13">
                                  <div className="paycard">
                                     <p><img src={mobikwik}/></p>
                                     <div>
                                     <h5>Mobikwik</h5>
                                     <p>Link your Mobikwik wallet to use this payment method</p>
                                     </div>
                                  </div>
                                  <div>
                                     <input type="radio" value="option2" />
                                  </div>
                            </div>
                              
                                <div className="card13">
                                  <div className="paycard">
                                     <p><img src={freecharge}/></p>
                                     <div>
                                     <h5>Freecharge</h5>
                                     <p>Link your Freecharge wallet to use this payment method</p>
                                    </div>
                                  </div>
                                  <div>
                                     <input type="radio" value="option2" />
                                  </div>
                            </div>
                             </CardBody>
                          </Card>
                          </div>
                          <div>
                          <h5>Netbanking</h5>
                          <Card>
                              <CardBody>
                                 <div className="paycard">
                                    <p className="addmorecard"><i class="fas fa-plus-circle"></i></p>
                                      <p className="selectcard">Select from a list of banks</p>
                                 </div>
                              </CardBody>
                          </Card>
                          </div>
                          </div>
                 </div>
               
               </div>
            </div>
    </>
);
}


export default withRouter(PayNow);