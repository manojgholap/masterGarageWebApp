import React from 'react';
import OrderhistoryCard from './Orderhistorycard';
import {Container,Col,Row,Card,CardBody} from 'reactstrap';

const OrderHistory = () => {
  return ( 
    <Container>
    <Row className="mt-3">
        <Col lg={12} className="mb-3">
    <OrderhistoryCard className=""
    bookid="MG123456789"
     bookdate="Feb 20, 2021"
     booktime="11.00 am"
     totalbook="₹ 6,459" 
     bookdetail="Mahindra First Choice , Kandivali East 400 101"
    />
    </Col>
    <Col lg={12} className="mb-3">
    <OrderhistoryCard className=""
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

export default OrderHistory;
