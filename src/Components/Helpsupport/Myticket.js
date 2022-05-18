import React from 'react';
import {Link} from "react-router-dom";
import { Container,Row,Col,Card,Button,ButtonGroup,CardHeader, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import './helpsupport.css'
const Myticket = () => {
  return (
      <Container className="mt-4">
           <Card className="mb-3">
               <div className="ticekcont">
                   <div className="garageserviec p-3">
                    <p>Garage is taking too much time to complete the service</p>
                   </div>
                   <div className='p-3'>
                       <div className='helpcard12'>
                       <div>
                               <small>Ticket No.</small>
                               <p>MG123456789</p>
                            </div>
                            <div>
                               <small>Booking Date</small>
                               <p>Feb 20,2021</p>
                            </div>
                            <div>
                               <small>Booking Time</small>
                               <p>11 am</p>
                            </div>
                            <div className="btnhelpsupport"><i class="far fa-comments"></i></div>
                       </div>
                       <div className='helpcard122'>
                       <div>
                               <small>Booking ID</small>
                               <p>MG123456789</p>
                            </div>
                            <div className="helpcar_sub">
                               <small>Vehical Details</small>
                               <p>Scorpio-0099</p>
                            </div>
                            <div className="helpcar_sub1">
                               <small>Booking  Details</small>
                               <p>Mahindra First Choice</p>
                            </div>
                            <div className="closehelpbtn">
                                <small>status</small>
                                <p>Open</p>
                            </div>
                       </div>
                   </div>
               </div>
           </Card>
           <Card className="mb-3">
               <div className="ticekcont">
                   <div className="garageserviec p-3">
                    <p>I want to cancel my booking</p>
                   </div>
                   <div className='p-3'>
                       <div className='helpcard12'>
                           <div>
                               <small>Ticket No.</small>
                               <p>MG123456789</p>
                            </div>
                            <div>
                               <small>Booking Date</small>
                               <p>Feb 20,2021</p>
                            </div>
                            <div>
                               <small>Booking Time</small>
                               <p>11 am</p>
                            </div>
                            <div className="experienchelp">
                                <div>
                              <small>Rate Experience</small>
                              <p>Review<svg xmlns="http://www.w3.org/2000/svg" width="150" height="21.429" viewBox="0 0 150 21.429">
                        <g id="Group_27174" data-name="Group 27174" transform="translate(-1033 -375)">
                            <path id="star" d="M10.714,1.318l3.311,7.054,7.4,1.131-5.357,5.49,1.265,7.753-6.621-3.66-6.622,3.66,1.265-7.753L0,9.5,7.4,8.372Z" transform="translate(1033 373.682)" fill="#ed7d2b"/>
                            <path id="star-2" data-name="star" d="M10.714,1.318l3.311,7.054,7.4,1.131-5.357,5.49,1.265,7.753-6.621-3.66-6.622,3.66,1.265-7.753L0,9.5,7.4,8.372Z" transform="translate(1065.143 373.682)" fill="#ed7d2b"/>
                            <path id="star-3" data-name="star" d="M10.714,1.318l3.311,7.054,7.4,1.131-5.357,5.49,1.265,7.753-6.621-3.66-6.622,3.66,1.265-7.753L0,9.5,7.4,8.372Z" transform="translate(1097.286 373.682)" fill="#ed7d2b"/>
                            <path id="star-4" data-name="star" d="M10.714,1.318l3.311,7.054,7.4,1.131-5.357,5.49,1.265,7.753-6.621-3.66-6.622,3.66,1.265-7.753L0,9.5,7.4,8.372Z" transform="translate(1129.429 373.682)" fill="#ed7d2b"/>
                            <path id="star-5" data-name="star" d="M10.714,1.318l3.311,7.054,7.4,1.131-5.357,5.49,1.265,7.753-6.621-3.66-6.622,3.66,1.265-7.753L0,9.5,7.4,8.372Z" transform="translate(1161.571 373.682)" fill="#eceff5"/>
                        </g>
                        </svg>

                     </p>
                     </div>
                            </div>
                       </div>
                       <div className='helpcard121'>
                       <div>
                               <small>Booking ID</small>
                               <p>MG123456789</p>
                            </div>
                            <div>
                               <small>Vehical Details</small>
                               <p>Scorpio-0099</p>
                            </div>
                            <div>
                               <small>Booking  Details</small>
                               <p>Mahindra First Choice</p>
                            </div>
                            <div className="closedhelp">
                                <div>
                                <small>status</small>
                                <p>CLOSED</p>
                                </div>
                            </div>
                       </div>
                   </div>
               </div>
           </Card>
           <Card className="mb-3">
               <div className="ticekcont">
                   <div className="garageserviec p-3">
                    <p>I want to cancel my booking</p>
                   </div>
                   <div className='p-3'>
                       <div className='helpcard12'>
                           <div>
                               <small>Ticket No.</small>
                               <p>MG123456789</p>
                            </div>
                            <div>
                               <small>Booking Date</small>
                               <p>Feb 20,2021</p>
                            </div>
                            <div>
                               <small>Booking Time</small>
                               <p>11 am</p>
                            </div>
                            <div className="experienchelp">
                                <div>
                              <small>Rate Experience</small>
                              <p>Review <svg id="Group_19003" data-name="Group 19003" xmlns="http://www.w3.org/2000/svg" width="156.027" height="19.124" viewBox="0 0 156.027 19.124">
                                <path id="Path_18641" data-name="Path 18641" d="M775,485.67a1,1,0,0,0-.86-.67l-5.69-.83L765.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L765,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#00155a"/>
                                <path id="Path_18642" data-name="Path 18642" d="M809,485.67a1,1,0,0,0-.86-.67l-5.69-.83L799.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L799,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#00155a"/>
                                <path id="Path_18643" data-name="Path 18643" d="M843,485.67a1,1,0,0,0-.86-.67l-5.69-.83L833.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L833,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#00155a"/>
                                <path id="Path_18644" data-name="Path 18644" d="M877,485.67a1,1,0,0,0-.86-.67l-5.69-.83L867.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L867,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#00155a"/>
                                <path id="Path_18645" data-name="Path 18645" d="M911,485.67a1,1,0,0,0-.86-.67l-5.69-.83L901.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L901,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#00155a"/>
                                </svg>

                     </p>
                     </div>
                            </div>
                       </div>
                       <div className='helpcard121'>
                       <div>
                               <small>Booking ID</small>
                               <p>MG123456789</p>
                            </div>
                            <div>
                               <small>Vehical Details</small>
                               <p>Scorpio-0099</p>
                            </div>
                            <div>
                               <small>Booking  Details</small>
                               <p>Mahindra First Choice</p>
                            </div>
                            <div className="closedhelp">
                                <div>
                                <small>status</small>
                                <p>CLOSED</p>
                                </div>
                            </div>
                       </div>
                   </div>
               </div>
           </Card>
      </Container>
  );
};

export default Myticket;
