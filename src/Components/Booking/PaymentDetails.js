import React from 'react'
import './Payment.css'
import { Container,Row,Col,Card,Button,ButtonGroup, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import { Link } from 'react-router-dom';
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
const Payment = () => {
    return (
        <Container fluid>
        <Row className="mt-3">  
            <div>
             <Link to ="/modifyreview" className="bookawait"><i className='fa fa-arrow-left'></i></Link>
             <Link to="/modifyreview" className="bookawait1">Choose your payment Method</Link>
             </div> 
    
        
            <Col lg={8} sm={12} className="pay_det">
               <div className="d-flex rounded mt-3">
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
            </Col>
            <Col lg={4} className="mt-3" >
               <>
                  <div className="leftbooksummery">
                      <div className="bookingsummery1">   
                      <div className="header1 p-3">
                          <h5>Booking Summary : 019001829801122</h5>
                      </div>
                      <div className="borderbottom p-3">
                      <div className="totalsummer1">
                         <p>Sub Total</p>
                         <p>₹ 4,999</p>
                      </div>
                      <div className="totalsummer2">
                         <p>PROMO - (HAPPY100)</p>
                         <div className="yoursaving">
                         <p className="pr2">you saved</p>
                         <p>₹ 5,000</p>
                         </div>
                      </div>
                      <div className="totalsummer3">
                         <p>MG Coins Redeemed</p>
                          <div className="yoursaving">
                         <p className="pr2">you saved</p>
                         <p>₹ 5,000</p>
                         </div>
                      </div>
                      </div>
   
                      <div className="borderbottom">
                      <div className="totalsummer4">
                        <p>Other Charges</p>
                        <p>₹ 0</p>
                      </div>
                      <div className="totalsummer5">
                        <p>Taxes @18% GST </p>
                        <p>₹ 99</p>
                      </div>
                      </div>
                      <div className="totalsummer6">
                         <h5>Grand Total</h5>
                         <h5>₹ 9867</h5>
                      </div>
                      <div className="totalsummer7">
                       <div className="">
                        <h6>Discount</h6>
                        <p className="pr2">PROMO - (HAPPY100)</p>
                        </div>
                        <p className="checkcolor"><i class="fas fa-check-circle">Applied</i></p>
                        
                      </div>
                      </div>
                  
                      <div className="footer1">
                         <div className="totalsummer8">
                           <div>
                             <h5>To Pay</h5>
                             <p>Inclusive of all charges</p>
                           </div>
                           <Link to="/thanking" className="nextpage"><p>₹6,459</p></Link>
                         </div>
                      </div>
                      
                  </div>
               </>
            </Col>
        </Row>

        </Container>
    )
}

export default Payment
