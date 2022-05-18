import React from 'react';
import {CardBody,Input,Label, ButtonGroup,Card, Button,Row,Col, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import './location.css';
import clickme from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/clickme.png';
const Notification = () => {
  return ( 
         <Container className="mt-4">
             <Card className="w-50 card_notification p-4">
                 <div className="notificationbell mb-4">
                   <Link to="/search"> <i class="fas fa-bell">Notification</i></Link>
                    <i className="fas fa-times"></i>
                </div>
                <div className="date_color mb-2">
                   <p>23/02/2021 0.00 PM</p>
                   <div className="notifihead p-3">
                       <div className="section__notification">
                       <i class="fab fa-hotjar"></i>
                       <div>
                           <h6>Hot deals just for you</h6>
                           <small>Get your tires changed at nearest partner garage and save up to
                             2000 and also get wheel alignments done for free</small>
                       </div>
                       </div>
                       <i className="fas fa-times"></i>
                   </div>
                </div>
                <div className="date_color mb-2">
                   <p>23/02/2021 0.00 PM</p>
                   <div className="notifihead p-3">
                       <div className="section__notification">
                       <img src={clickme} alt="error" width="20px" height="20px"/>
                       <div>
                           <h6>Status Update on XL6 MH04AB1234</h6>
                           <small>Garage has completed its Inspection on your vehicle and recommended 
                               few additional services for your vehicle</small>
                             <p><Link>View Job Card</Link></p>
                       </div>
                      
                       </div>
                       <i className="fas fa-times"></i>
                   </div>
                </div>
                <div className="date_color mb-2">
                   <p>23/02/2021 0.00 PM</p>
                   <div className="notifihead p-3">
                       <div className="section__notification">
                       <i class="far fa-check-circle"></i>
                       <div>
                           <h6>Booking Confirmed for XL6 MH04AB1234</h6>
                           <small>Your Booking has been confirmed with ID MG012345 and the vehicle 
                               will soon be scheduled for pick up by garage.</small>
                             <p><Link>View Status</Link></p>
                       </div>
                       </div>
                       <i className="fas fa-times"></i>
                   </div>
                </div>
                <div className="date_color mb-2">
                   <p>23/02/2021 0.00 PM</p>
                   <div className="notifihead p-3">
                       <div className="section__notification">
                       <i class="far fa-times-circle"></i>
                       <div>
                           <h6>Payment Unsuccessful</h6>
                           <small>Uh Oh! The transaction was unsuccessful. If the amount was debited from 
                               your bank account, it will be reiterated within 48 hours</small>
                             <p><Link>Ask For Help</Link></p>
                       </div>
                       </div>
                       <i className="fas fa-times"></i>
                   </div>
                </div>
             </Card>
         </Container>
  )
};

export default Notification;
