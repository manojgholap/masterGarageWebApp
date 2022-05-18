import React from 'react'
import './Payment.css'
import { Container,Row,Col,Card,Button,ButtonGroup, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import { Link } from 'react-router-dom';
import logo from '../../Images/garagelogo.PNG'
import thank from '../../Images/Images/drawable-hdpi/thank.png'
const Payment = () => {
    return (
        <Container fluid>
        <Row className="mt-3 "> 
        <div>
             <Link to ="/payment" className="bookawait"><i className='fa fa-arrow-left'></i></Link>
             <Link to="/payment" className="bookawait1">Tracking Status</Link>
             </div> 
                <Col lg={8} sm={12}>
                  <Card className="d-flex rounded mt-3 shadow">
                       <div className="masterlog">
                         <p><img src={logo} alt="error"/></p>
                         <h5>Master Garage </h5>
                       </div>
                       <div >
                       <div>
                           <h4 className="thankcontain">Rate your Experience</h4>
                           <p className="rating1"><svg id="Group_19003" data-name="Group 19003" xmlns="http://www.w3.org/2000/svg" width="358.372" height="43.925" viewBox="0 0 358.372 43.925">
                                <path id="Path_18641" data-name="Path 18641" d="M800.929,495.051a2.295,2.295,0,0,0-1.975-1.539l-13.069-1.906-5.857-11.875a2.3,2.3,0,0,0-4.134,0l-5.857,11.852-13.069,1.929a2.269,2.269,0,0,0-1.286,3.859l9.486,9.188-2.3,13.046a2.3,2.3,0,0,0,3.331,2.458l11.76-6.132,11.714,6.156a2.152,2.152,0,0,0,1.057.276,2.314,2.314,0,0,0,2.15-1.452,2.286,2.286,0,0,0,.124-1.282l-2.3-13.046,9.486-9.187a2.3,2.3,0,0,0,.735-2.343ZM786.8,504.239a2.289,2.289,0,0,0-.666,2.044l1.654,9.624-8.636-4.594a2.285,2.285,0,0,0-2.159,0l-8.636,4.594,1.654-9.624a2.289,2.289,0,0,0-.666-2.044l-6.891-6.891,9.67-1.4a2.311,2.311,0,0,0,1.745-1.263l4.089-8.751,4.318,8.774a2.3,2.3,0,0,0,1.746,1.263l9.67,1.4Z" transform="translate(-755.006 -478.436)" fill="#ed7d2b"/>
                                <path id="Path_18642" data-name="Path 18642" d="M834.929,495.051a2.294,2.294,0,0,0-1.975-1.539l-13.069-1.906-5.857-11.875a2.3,2.3,0,0,0-4.134,0l-5.857,11.852-13.069,1.929a2.269,2.269,0,0,0-1.286,3.859l9.486,9.188-2.3,13.046a2.3,2.3,0,0,0,3.33,2.458l11.76-6.132,11.714,6.156a2.152,2.152,0,0,0,1.057.276,2.313,2.313,0,0,0,2.15-1.452,2.285,2.285,0,0,0,.124-1.282l-2.3-13.046,9.486-9.187a2.3,2.3,0,0,0,.735-2.343ZM820.8,504.239a2.289,2.289,0,0,0-.666,2.044l1.654,9.624-8.636-4.594a2.285,2.285,0,0,0-2.159,0l-8.636,4.594,1.654-9.624a2.29,2.29,0,0,0-.666-2.044l-6.891-6.891,9.67-1.4a2.311,2.311,0,0,0,1.745-1.263l4.088-8.751,4.318,8.774a2.3,2.3,0,0,0,1.746,1.263l9.67,1.4Z" transform="translate(-710.913 -478.436)" fill="#ed7d2b"/>
                                <path id="Path_18643" data-name="Path 18643" d="M868.929,495.051a2.295,2.295,0,0,0-1.975-1.539l-13.069-1.906-5.857-11.875a2.3,2.3,0,0,0-4.135,0l-5.857,11.852-13.069,1.929a2.269,2.269,0,0,0-1.286,3.859l9.486,9.188-2.3,13.046a2.3,2.3,0,0,0,3.33,2.458l11.76-6.132,11.714,6.156a2.153,2.153,0,0,0,1.057.276,2.313,2.313,0,0,0,2.15-1.452,2.283,2.283,0,0,0,.124-1.282l-2.3-13.046,9.486-9.187a2.3,2.3,0,0,0,.735-2.343ZM854.8,504.239a2.29,2.29,0,0,0-.666,2.044l1.654,9.624-8.636-4.594a2.285,2.285,0,0,0-2.159,0l-8.636,4.594,1.654-9.624a2.29,2.29,0,0,0-.666-2.044l-6.891-6.891,9.67-1.4a2.311,2.311,0,0,0,1.745-1.263l4.089-8.751,4.318,8.774a2.3,2.3,0,0,0,1.746,1.263l9.67,1.4Z" transform="translate(-666.82 -478.436)" fill="#ed7d2b"/>
                                <path id="Path_18644" data-name="Path 18644" d="M902.929,495.051a2.295,2.295,0,0,0-1.975-1.539l-13.069-1.906-5.857-11.875a2.3,2.3,0,0,0-4.135,0l-5.857,11.852-13.069,1.929a2.269,2.269,0,0,0-1.286,3.859l9.486,9.188-2.3,13.046a2.3,2.3,0,0,0,3.33,2.458l11.76-6.132,11.714,6.156a2.153,2.153,0,0,0,1.057.276,2.313,2.313,0,0,0,2.15-1.452,2.283,2.283,0,0,0,.124-1.282l-2.3-13.046,9.486-9.187a2.3,2.3,0,0,0,.735-2.343ZM888.8,504.239a2.29,2.29,0,0,0-.666,2.044l1.654,9.624-8.636-4.594a2.285,2.285,0,0,0-2.159,0l-8.636,4.594,1.654-9.624a2.29,2.29,0,0,0-.666-2.044l-6.891-6.891,9.67-1.4a2.311,2.311,0,0,0,1.745-1.263l4.089-8.751,4.318,8.774a2.3,2.3,0,0,0,1.746,1.263l9.67,1.4Z" transform="translate(-622.727 -478.436)" fill="#ed7d2b"/>
                                <path id="Path_18645" data-name="Path 18645" d="M936.929,495.051a2.295,2.295,0,0,0-1.975-1.539l-13.069-1.906-5.857-11.875a2.291,2.291,0,0,0-2.067-1.3,2.287,2.287,0,0,0-1.219.349,2.31,2.31,0,0,0-.848.946l-5.857,11.852-13.069,1.929a2.269,2.269,0,0,0-1.286,3.859l9.486,9.188-2.3,13.046a2.3,2.3,0,0,0,3.331,2.458l11.76-6.132,11.714,6.156a2.153,2.153,0,0,0,1.057.276,2.314,2.314,0,0,0,2.15-1.452,2.284,2.284,0,0,0,.124-1.282l-2.3-13.046,9.486-9.187a2.3,2.3,0,0,0,.735-2.343ZM922.8,504.239a2.29,2.29,0,0,0-.666,2.044l1.654,9.624-8.636-4.594a2.285,2.285,0,0,0-2.159,0l-8.636,4.594,1.654-9.624a2.29,2.29,0,0,0-.666-2.044l-6.891-6.891,9.67-1.4a2.311,2.311,0,0,0,1.746-1.263l4.088-8.751,4.318,8.774a2.3,2.3,0,0,0,1.746,1.263l9.67,1.4Z" transform="translate(-578.634 -478.436)" fill="#ed7d2b"/>
                                </svg>
                           </p>
                           <p className="feeling">Are you feeling good about Master Garage? Tell us</p>
                           <textarea className="review12">Write a review? Type here.</textarea>
                         </div>
                       </div>
                       <ButtonGroup className="btngroup1">
                         <button className="btnthank">Not Now</button>
                         <button className="btnthank">Submit</button>
                       </ButtonGroup>
                  </Card>
            </Col>
            <Col lg={4} className="mt-3" >
               <>
                  <div className="leftbooksummery">
                      <div className="thankingreward">
                          <div className="congo">
                        <p>Congratulations! You earned</p>
                        </div>
                        <div className="coin">
                        <h5>5000 MG Coins</h5>
                        </div>
                      </div>
                         <div className="coninimg">
                           <img src={thank} alt="error"/>
                         </div>
                          <div className="thanktrans">
                          <div className="morethank">
                            <h3>THANK YOU</h3>
                     <p>Transaction Successful</p>
                         </div>
                         </div>
                      <div className="thankfooter1">
                         <div className="totalsummer8">
                           <Link to="/jobprogress" className="nextpage1"><i class="fas fa-check-circle"></i><h4>Transaction Successful</h4></Link>
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
