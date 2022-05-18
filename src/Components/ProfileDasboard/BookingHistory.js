import React from 'react';
import {Container,Col,Row,Card,CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import BookingHistoryCard from './Bookinghistorycard';


import './dashboard.css'
const BookingHistory = () => {
  return ( 
      <Container>
          <Row className="mt-3">
              <Col lg={12} className="mb-3">
          <BookingHistoryCard className=""
          bookid="MG123456789"
           bookdate="Feb 20, 2021"
           booktime="11.00 am"
           totalbook="₹ 6,459" 
           bookdetail="Mahindra First Choice , Kandivali East 400 101"
          />
          </Col>
          <Col lg={12} className="mb-3">
          <BookingHistoryCard className=""
          bookid="MG123456789"
           bookdate="Feb 20, 2021"
           booktime="11.00 am"
           totalbook="₹ 6,459" 
           bookdetail="Mahindra First Choice , Kandivali East 400 101"
          />
          </Col>
          </Row>
      </Container>
  )
};

export default BookingHistory;
