import React from 'react';
import DealCard from './Dealcard';
import { Container,Row,Col,Card,Button,ButtonGroup,Input, CardBody, CardTitle, CardText,CardSubtitle, CardFooter, CardHeader, CardImg, CardGroup } from 'reactstrap';
import './Deals.css'

const Deal = () => {
  return <Container className="mt-3">
           <Row className="g-4 cardrow">
               <Col lg={4}>
              <DealCard/>
              </Col>
              <Col lg={4}>
              <DealCard/>
              </Col>
              <Col lg={4}>
              <DealCard/>
              </Col>
              <Col lg={4}>
              <DealCard/>
              </Col>
              <Col lg={4}>
              <DealCard/>
              </Col>
              <Col lg={4}>
              <DealCard/>
              </Col>
              <Col lg={4}>
              <DealCard/>
              </Col>
              <Col lg={4}>
              <DealCard/>
              </Col>
              <Col lg={4}>
              <DealCard/>
              </Col>
           </Row>
       </Container>
};

export default Deal;
