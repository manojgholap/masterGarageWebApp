import React from 'react'
import {Container,Col,Row,Card,CardBody} from 'reactstrap';
import {BrowserRouter, Route, Switch,Link} from 'react-router-dom';
import './dashboard.css'
import Mgcard from './Mggaragecard';
import alcazar from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/Alcazar.png';
import balano from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/Baleno.png';
import i10 from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/Elite i20.png';
import Recharge from './Recharge';
import fastag from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/Fastag-logo.png';
import challan1 from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/challan1.png';
import insurance1 from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/insurance1.png';
import pucc from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/pucc.png';
import Ongoing from './OngoingBooking';
import BookingHistory from './BookingHistory';



const MyGarage = () => {
    return (
        <Container>
        <div className="rounded shadow p-2">
           <div className="allvehicals">
             <h5>All Vehicles(3)</h5>
            <Link to="/PeriodicADDvechicle" className="addmorevehical"><i class="fas fa-plus-circle"></i> <p>Add New Vehicle</p></Link>
           </div>
           <div className="allcarcard">
               <Row>
                   <Col lg={4}>
                 <Mgcard className="firstcarcardlink" images={alcazar} carName="Alcazar" model="MH 01 AB 3827" />
               </Col>
               <Col lg={4}>
                 <Mgcard images={balano} carName="Baleno" model="MH 01 AB 3827" />
               </Col>
               <Col lg={4}>
                 <Mgcard images={i10} carName="i10" model="MH 01 AB 3827" />
               </Col>
           </Row>
           <Row className="mt-3">
               <Col lg={3}>
                  <Card>
                  <div className="p-3 backrecharge">
         <div className="rechareghead">
             <div className="recharegval"><Link className="mgpak1"><img src={fastag} alt="error"/></Link></div>
             <p>Recharge</p>
         </div>
         <div className="recharegval1">
             <small>Balance</small>
             <p>₹459</p>
         </div>
         </div>
                  </Card>
               </Col>
               <Col lg={3}>
                  <Card>
                  <div className="p-3 backrecharge">
         <div className="rechareghead">
             <div className="recharegval">
                 <Link  className="mgpak2">
                 <img src={challan1} alt="error"/>
                </Link>
            </div>
             <p>Pay Now</p>
         </div>
         <div className="recharegval1">
             <small>Total</small>
             <p>8 Challans</p>
         </div>
         </div>
                  </Card>
               </Col>
               <Col lg={3}>
                  <Card>
                  <div className="p-3 backrecharge">
         <div className="rechareghead">
             <div className="recharegval">
                 <Link className="mgpak3">
                       <img src={insurance1} alt="error"/>
                 </Link>
                 <p>Insurance</p>
            </div>
             <p>Renew</p>
         </div>
         <div className="recharegval1">
             <small>Validity</small>
             <p>28,Feb 2018</p>
         </div>
         </div>
                  </Card>
               </Col>
               <Col lg={3}>
                  <Card>
                  <div className="p-3 backrecharge">
         <div className="rechareghead">
             <div className="recharegval1">
                 <Link className="mgpak4">
                   <img src={pucc} alt="error"/>
                </Link>  
               <p>PUCC</p>
            </div>
         </div>
         <div className="recharegval1">
             <small>Balance</small>
             <p>₹459</p>
         </div>
         </div>
                  </Card>
               </Col>
           </Row>
           </div>
           <div>
     <BrowserRouter> 
        <Container>
            <div className="mgNavigation mt-3">
                <ul className="onbookfocus">
                    <li><Link className="items13" to="/">Ongoing Booking</Link></li>
                    <li><Link className="items13" to="/bookinghistory">Booking History</Link></li>
                </ul>
                </div>
            <Switch>
                <Route exact path="/"  component={Ongoing}/>
                <Route path="/bookinghistory" component={BookingHistory}/>
            </Switch>
            </Container>
        </BrowserRouter>
     </div>
        </div>   
        </Container>
    )
}

export default MyGarage
