import React from 'react'
import { Container,Row,Col,Card,Button,ButtonGroup,Input, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import { Link } from 'react-router-dom';
import avatar from '../../Images/avatar.png'
import profile from '../../Images/manprofile.png';
import send from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/sendmessage.png';
import callcenter from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/callcenter.png';
import notok from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/notok.png'


import './Chat.css'
const Chat = () => {
    return (
            <Container>
              <div className="chatcontainer mt-4 rounded mb-4">
                  <div className="chatheader p-2">
                    <Link to="/Accountscan"> <p className="chatimg"><img src={callcenter}/></p></Link>
                     <div className="chatuser">
                         <h4>Customer Support- MG</h4>
                         <div className="ticketno">
                            <p className="logorestric">
                            <img src={notok} alt="error" width="13.53px"/>
                            </p>
                         <p>Ticket no. #012345</p>
                      </div>
                     </div>
                  </div>
                  <div className="contain">
                  <div className="senddata">
                    <div className="sendheader">
                    <div>
                            <div className="firstHeaer">
                                <p>How we can help you? Please select  a 
                                    query to continue from the following</p>
                            </div>
                            <div className="subissue">
                            <p>Payment related issue</p>
                            <p>Estimate related issue</p>
                            <p>Booking related issue</p>
                            <p>Service related issue</p>
                            </div>
                        </div>
                    </div>
                    <div className="sendimg">
                           <p><img src={avatar}/></p>
                        </div>
                  </div>
                  </div>
                  <div className="recivemessage">
                     <div className="maprofile"><img src={profile}/></div>
                     <div className="revivemessge"><p>I have payment related issue</p></div>
                  </div>
                     <div className="senddata">
                        <div className="resivefeed">
                           <p>Hello, I am Alex Morgan, 
                           I will be helping you with your issue today, 
                           Please explain me in detail about your issue</p>
                        </div>
                    <div className="sendimg1">
                           <p><img src={avatar}/></p>
                        </div>
                        
                  </div>
                       
                        <div className="supportfooter">
                   <p className="sendmessage">  <Link to="">  <i className="fas fa-paper-plane"></i></Link></p>
                       <Input type="text" className="inputtext" placeholder=""/>
                      </div>
              </div>
            </Container>
 
    )
}

export default Chat
