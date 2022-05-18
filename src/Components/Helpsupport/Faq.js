import React from 'react';
import {Link} from "react-router-dom";
import { Container,Row,Col,Card,Button,ButtonGroup,CardHeader, CardBody,UncontrolledCollapse } from 'reactstrap'
const Faq = () => {
  return( 
    <Container className="mt-3">
    <Card className="rounded shadow-1 mb-2">
        <CardHeader className="toggleheader">
       <p>Garage is taking too much time to complete the service</p>
    <button id="toggler1" className="togglebtn"><i class="fas fa-chevron-down"></i></button>
  </CardHeader>
  <UncontrolledCollapse toggler="#toggler1">
    <Card>
      <CardBody className="toggletetext">
    <p>Yes, you can buy all products on MG World if you don't have the coins balance, you can pay the price 
        mentioned against the product and have it to your doorsteps</p>
      </CardBody>
    </Card>
  </UncontrolledCollapse>
</Card>
<Card className="rounded shadow-1 mb-2">
        <CardHeader className="toggleheader">
       <p>What should I do if I am not able to redeem mg coins balance?</p>
    <button id="toggler2" className="togglebtn"><i class="fas fa-chevron-down"></i></button>
  </CardHeader>
  <UncontrolledCollapse toggler="#toggler2">
    <Card>
    <CardBody className="toggletetext">
     <p>Yes, you can buy all products on MG World if you don't have the coins balance, you can pay the 
         price mentioned against the product and have it to your doorsteps</p>
      </CardBody>
    </Card>
  </UncontrolledCollapse>
</Card>
<Card className="rounded shadow-1 mb-2">
        <CardHeader className="toggleheader">
       <p>Can I redeem MG Coins for my service booking?</p>
    <button id="toggler3" className="togglebtn"><i class="fas fa-chevron-down"></i></button>
  </CardHeader>
  <UncontrolledCollapse toggler="#toggler3">
    <Card>
      <CardBody className="toggletetext">
     <p>Yes absolutely, the whole idea behind coins is to give our beloved customers an additional discount. You can 
         redeem it at confirmation page by clicking on "Apply" button below.</p>
      </CardBody>
    </Card>
  </UncontrolledCollapse>
</Card>
</Container>
  );
};

export default Faq;
