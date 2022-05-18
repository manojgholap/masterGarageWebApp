import React from 'react';
import {Container,Col,Row} from 'reactstrap';
import './myorder.css'
//import OngoingBooking from '../ProfileDasboard/Ongoincard';
import Ongoing from '../../Images/ImagesAll/drawable-hdpi/ongoingorder.png';
import MyorderCard from './MyorderCard';
const Ongoingorder = () => {
  return (
      <Container>
        {/* <div className="containerOrder">
        <div>
        <div className="ongoing">
           <img src={Ongoing} alt="error"/>
           <h4>OPPS!!!     No Bookings Yet!</h4>
        </div>
        <div className="ordertbtn">
         <button className="btnongoing">Book now</button>
         </div>
        </div>
        </div> */}
              <Row className="mt-3">
         <Col lg={12} className="mb-3">
             <MyorderCard orderid="MG123456789"
              orderdate="Feb 20, 2021"
               ordertime="11.00 am"
               orderAmount="₹ 6,459" 
               vehicaldetail="Scorpio-0099"
             orderDetail="Mahindra First Choice"/>
         </Col> 
         <Col lg={12} className="mb-3">
             <MyorderCard orderid="MG123456789"
              orderdate="Feb 20, 2021"
               ordertime="11.00 am"
               orderAmount="₹ 6,459" 
               vehicaldetail="Scorpio-0099"
             orderDetail="Mahindra First Choice"/>
         </Col> 
       </Row>
      </Container>
  );
};

export default Ongoingorder;
