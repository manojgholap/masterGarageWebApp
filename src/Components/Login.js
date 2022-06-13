import React, { useState, useEffect } from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ButtonGroup, CardHeader, CardBody, CardTitle, CardText, CardSubtitle, CardFooter } from 'reactstrap';
import profile from '../Images/profile.png';
import helpsupport from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/helpsupport.png';
import favourites from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/favourites.png';
import referearn from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/referearn.png';
import contact from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/contactus.png';
import Profile from './Profile'
import axios from 'axios';
const Login = ({ show }) => {
   const [isLogin, setLogin] = useState(false);
   const [user, setUser] = useState('')
   useEffect(() => {
      let mobileNumber = localStorage.getItem("mobileNumber");
      const isLogin = localStorage.getItem('isLogin');
      console.log(isLogin);
      if (isLogin) {
         axios({
            method:"GET",
            url:process.env.REACT_APP_Master_Garage + "user/getOwnerDetails.php",
            params:{phone_no:mobileNumber}
         }).then((res)=>{
          if(res.data.success==1){
            setUser(res.data.result)
            setLogin(true)
          }
         })
         // axios.post(process.env.REACT_APP_Api_Url + "user/getUserDetails", { mobileNumber: mobileNumber })
         //    .then((res, err) => {
         //       if (res.data.status == true) {
         //          setUser(res.data.resp)
         //          setLogin(true)
         //       }
         //    })
      }

   }, [isLogin])

   return (
      <Container>
         {
            isLogin ? <Profile user={user}></Profile> :
               <Card className="card1 active">
                  <div className="login">
                     <div className="">
                        <div className="hello">
                           <h3>Hello User,</h3>
                           <Link to="/home"><i class="fas fa-times"></i></Link>
                        </div>
                        <div className="headerProfile">
                           <div><img src={profile} alt="error" /></div>
                           <div className="logindetail">
                              <Link to="/login2"><button className="Login">Login</button></Link>
                              <p>Don't have an account? </p>
                              <h6>No problem <Link to="/signUp">Sign-up</Link> now & earn rewards</h6>
                           </div>
                        </div>
                     </div>
                     <CardBody >
                        <ul className="supportprofile">
                           <Link to="/HelpsSupport">
                              <li>
                                 <img src={helpsupport} alt="error" />
                                 <p>Help & Support</p>
                              </li>
                           </Link>
                           <Link to="/favourites">
                              <li>
                                 <img src={favourites} alt="error" />
                                 <p>Favourites</p>
                              </li>
                           </Link>
                           <Link to="/refer">
                              <li>
                                 <img src={referearn} alt="error" />
                                 <p>Refer & Earn</p>
                              </li>
                           </Link>
                           <Link to="/contact">
                              <li>
                                 <img src={contact} alt="error" />
                                 <p>Contact Us</p>
                              </li>
                           </Link>
                        </ul>
                     </CardBody>
                     <footer>
                        <div className="footerlog">
                           <ul className="social_icon">
                              <li><i class="fas fa-share-alt"></i><span>Share us</span></li>
                              <li><i class="fab fa-facebook-square"></i></li>
                              <li><i class="fab fa-twitter"></i></li>
                              <li><i class="fab fa-linkedin"></i></li>
                              <li><i class="fab fa-instagram"></i></li>
                           </ul>
                        </div>
                        <div className="tearmcondition">
                           <Link className="tearm"><p>Terms & Conditions</p></Link><p className="tearms">|</p>
                           <Link className="tearm"><p>Privacy Policy</p></Link>
                        </div>
                     </footer>
                  </div>
               </Card>
         }
      </Container>
   )
}

export default Login


