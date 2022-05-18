import React from 'react';
import { Container,Row,Col,Card,Button,ButtonGroup,Input, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap';
import './Maragepages/mgdashboard.css'
import { Link } from 'react-router-dom';
import profileavt from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/Ellipse 12.png';
import profile from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/profile.png';
import mygarage from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/mygarage.png';
import myorder from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/myorder.png';
import chats from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/chats.png';
import bookmark from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/bookmark.png';
import mgcoin from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/mgcoin.png';
import helpsupport from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/helpsupport.png';
import referearn from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/referearn.png';
import Profile from "../ProfileDasboard/ProfileDashboard";
const Sidebar = () => {
  

  return (
    <div className="">
      <Card className="card12 d-flex rounded shadow">
               <CardBody >
                  <ul className="leftmenu">
                  <li className="">
                      <Link exact className="supportprofile1" to="/">
                     
                            <img src={profile} alt="error"/>
                            <p>Profile</p>
                          
                      </Link>  
                      </li>
                    
                     <li>
                       <Link className="supportprofile1" to="/mygarage"> 
                         <img src={mygarage} alt="error"/>
                        <p>My Garage</p>
                        </Link>
                            
                      </li>
                       <li><Link className="supportprofile1" to="/myorder">
                       <img src={myorder} alt="error"/>
                         <p>My Orders</p></Link>
                          
                       </li>
                       <li><Link className="supportprofile1" to="/chats">
                       <img src={chats} alt="error"/>
                          <p>Chats</p></Link>
                            
                       </li>
                       <li><Link className="supportprofile1" to="/favourites">
                       <img src={bookmark} alt="error"/>
                           <p>Favourites</p></Link>
                           
                       </li>
                       <li><Link className="supportprofile1" to="/mgcoin">
                       <img src={mgcoin} alt="error"/>
                          <p>MG Coins</p></Link>
                         
                       </li>
                        <li>
                            <Link className="supportprofile1" to="/helpsupport">
                            <img src={helpsupport} alt="error"/>
                                <p>Help & Supports</p>
                            </Link>
                            
                        </li>
                        <li>
                            <Link className="supportprofile1" to="/refer">
                            <img src={referearn} alt="error"/>
                                <p>Refer & Earn</p>
                            </Link>
                            
                        </li>
                  </ul>
               </CardBody>
               <footer>
                 <div>
                   <ul className="social_icons1">
                      <li><i class="fas fa-share-alt"><span>Share us</span></i></li>
                      <li><i class="fab fa-facebook-square"></i></li>
                      <li><i class="fab fa-twitter"></i></li>
                      <li><i class="fab fa-linkedin"></i></li>
                      <li><i class="fab fa-instagram"></i></li>
                   </ul>
                 </div>
               </footer>
            </Card>
            
      </div>
    )
};

export default Sidebar;
