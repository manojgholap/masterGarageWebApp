import React,{useState} from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ButtonGroup, CardHeader, CardBody, CardTitle, CardText, CardSubtitle, CardFooter } from 'reactstrap'
import profileavt from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/Ellipse 12.png';
import profile from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/profile.png';
import mygarage from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/mygarage.png';
import myorder from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/myorder.png';
import chats from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/chats.png';
import bookmark from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/bookmark.png';
import mgcoin from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/mgcoin.png';
import helpsupport from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/helpsupport.png';
import referearn from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/referearn.png';
import ProfileDashboard from './ProfileDasboard/ProfileDashboard';
import MyGarage from './ProfileDasboard/MyGarage';

const Login = ({user}) => {
      const [isprofile,setProfile]=useState(false)
      const [isMyGarage,setMyGarage]=useState(false)
   return (
      <Container>
         {isprofile?<ProfileDashboard user={user}></ProfileDashboard>:
          isMyGarage?<MyGarage></MyGarage>:
         <Card className="card1 d-flex rounded">
            <div className="login">
               <div className="">
                  <div className="hello">
                     <h5>Hello {user.first_name?user.first_name:"User"},</h5>
                     <p> <i class="far fa-times"></i></p>
                  </div>
                  <div className="headerProfile">
                     <div><img src={user.imageUri?user.imageUri:profileavt} width="70%" height="80%" alt={profileavt} /></div>
                     <div className="logindetail1">
                        <h3>{user.first_name?user.first_name +" "+user.last_name:""}</h3>
                        <p>{user.phone_no?user.phone_no:"xxxxxxxxxx"}</p>
                        <p>{user.email?user.email:"xxxxx@gmail.com"}</p>
                     </div>
                  </div>
               </div>
               </div>
               {/* <CardBody > */}
                  <ul className="supportprofile">
                        <li  onClick={()=>setProfile(true)} style={{cursor:"pointer"}} >
                           <img src={profile} alt="error" />
                            <p >Profile</p>
                        </li>
                        <li  onClick={()=>setMyGarage(true)} style={{cursor:"pointer"}} >
                           <img src={mygarage} alt="error" />
                           <p>My Garage</p>
                        </li>
                     <Link to="/MyOrder">
                        <li>
                           <img src={myorder} alt="error" />
                           <p>My Orders</p>
                        </li>
                     </Link>
                     <Link to="/chat">
                        <li>
                           <img src={chats} alt="error" />
                           <p>Chats</p>
                        </li>
                     </Link>
                     <li>
                        <img src={bookmark} alt="error" />
                        <p>Bookmarks</p>
                     </li>
                     <Link to="/MgCoin">
                        <li>
                           <img src={mgcoin} alt="error" />
                           <p>MG Coins</p>
                        </li>
                     </Link>
                     <Link to="/HelpsSupport">
                        <li>
                           <img src={helpsupport} alt="error" />
                           <p>Help & Support</p>
                        </li>
                     </Link>
                     <Link to="/refer">
                        <li>
                           <img src={referearn} alt="error" />
                           <p>Refer & Earn</p>
                        </li>
                     </Link>
                  </ul>
               {/* </CardBody> */}
               <footer>
                  <div>
                     <ul className="social_icons">
                        <li><i class="fas fa-share-alt"></i><span>Share us</span></li>
                        <li><i class="fab fa-facebook-square"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-linkedin"></i></li>
                        <li><i class="fab fa-instagram"></i></li>
                     </ul>
                  </div>
               </footer>
         </Card>
}
      </Container>
   )
}

export default Login
