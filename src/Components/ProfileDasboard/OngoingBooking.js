import React from 'react';
import {Container,Col,Row,Card,CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import OngoingCard from './Ongoincard';

import './dashboard.css'
const OngoingBooking = () => {
  return (
       <Row className="mt-3">
         <Col lg={12} className="mb-3">
             <OngoingCard bookid="MG123456789"
              bookdate="Feb 20, 2021"
               booktime="11.00 am"
                status="Work On Progress" 
             bookdetail="Mahindra First Choice , Kandivali East 400 101"/>
         </Col> 
         <Col lg={12} className="mb-3">
             <OngoingCard bookid="MG123456789"
              bookdate="Feb 20, 2021"
               booktime="11.00 am"
                status="Work On Progress" 
             bookdetail="Mahindra First Choice , Kandivali East 400 101"/>
         </Col> 
       </Row>
    )
};

export default OngoingBooking;
