import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { Container,Row,Col,Card,Button,ButtonGroup,CardHeader, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap';
import profile from '../Images/profile.png';
import helpsupport from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/helpsupport.png';
import favourites from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/favourites.png';
import referearn from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/referearn.png';
import contact from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/contactus.png';
const Resetpass = () => {
  return (
    <Container>
            <Card className="card1 active">
            <div className="login">
               <div className="">
               <div className="hello">
                 <h3>Hello User,</h3>
                 <Link> <i class="far fa-times" data-bs-dismiss="offcanvas"></i></Link>
                 </div>
                    <div className="headerProfile1">
                       <div><img src={profile} alt="error"/></div>
                    </div>
               </div>
               <CardBody className="login_head">
                   <h4>Log in</h4>
                   <div className="input_log">
                  <input placeholder="Enter Phone number or E-mail"/>
                  <div className="inputpass">
                    <input id="txtPassword" type="password" className="textfield password" placeholder="Password" />
                    <Link className="hyperlink">Forgot Password</Link>
                </div>
                  <Link to="/signup"><button className="contine_btn">CONTINUE</button></Link>
                  </div>
                  <h6 className="create_acc">New to Master Garage?<Link to="/signup"> Create Account</Link></h6>
               </CardBody>
               <footer>
                 <div className="tearmcondition">
                    <Link className="tearm"><p>Terms & Conditions</p></Link><p className="tearms">|</p>
                    <Link className="tearm"><p>Privacy Policy</p></Link>
                 </div>
               </footer>
               </div>
            </Card>
        </Container>
  )
}

export default Resetpass