import React from 'react';
import { Container,Row,Col,Card,Button,ButtonGroup,Input,UncontrolledCollapse, CardBody, CardTitle, CardText,CardSubtitle, CardFooter, CardHeader, CardImg } from 'reactstrap';
import './Deals.css'
const Faq = () => {
  return (
      <Container className="mt-3">
    <Card className="rounded shadow-1 mb-2">
        <CardHeader className="toggleheader">
       <p> Can I still purchase products on MG World if I don't have the mg coins balance?</p>
    <button id="toggler1" className="togglebtn"><i class="fas fa-chevron-down"></i></button>
  </CardHeader>
  <UncontrolledCollapse toggler="#toggler1">
    <Card>
      <CardBody className="toggletetext">
    <p>  Yes, you can buy all products on MG World if you don't have the coins balance, you can pay the price mentioned against
         the product and have it to your doorsteps</p>
      </CardBody>
    </Card>
  </UncontrolledCollapse>
</Card>
<Card className="rounded shadow-1 mb-2">
        <CardHeader className="toggleheader">
       <p> Can I still purchase products on MG World if I don't have the mg coins balance?</p>
    <button id="toggler2" className="togglebtn"><i class="fas fa-chevron-down"></i></button>
  </CardHeader>
  <UncontrolledCollapse toggler="#toggler2">
    <Card>
    <CardBody className="toggletetext">
     <p> Yes, you can buy all products on MG World if you don't have the coins balance, you can pay the price mentioned against the product and have it to your doorsteps</p>
      </CardBody>
    </Card>
  </UncontrolledCollapse>
</Card>
<Card className="rounded shadow-1 mb-2">
        <CardHeader className="toggleheader">
       <p> Can I still purchase products on MG World if I don't have the mg coins balance?</p>
    <button id="toggler3" className="togglebtn"><i class="fas fa-chevron-down"></i></button>
  </CardHeader>
  <UncontrolledCollapse toggler="#toggler3">
    <Card>
      <CardBody className="toggletetext">
     <p> Yes, you can buy all products on MG World if you don't have the coins balance, you can pay the price mentioned against the product and have it to your doorsteps</p>
      </CardBody>
    </Card>
  </UncontrolledCollapse>
</Card>
</Container>
  );
};

export default Faq;
