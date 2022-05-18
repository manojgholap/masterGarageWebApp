import React from 'react';
import {BrowserRouter, Route, Switch,Link} from "react-router-dom";
import { Container,Row,Col,Card,Button,ButtonGroup,Input, CardBody, CardTitle, CardText,CardSubtitle, CardFooter, CardHeader } from 'reactstrap';
import './dashboard.css';
import Ongoingorder from '../../Components/MyOrder/Ongoingorder';
import OrderHistory from '../../Components/MyOrder/OrderHistory';

const MyOrder = () => {
    return (
        <Container fluid>
        <Card className="rounded shadow">
           <BrowserRouter> 
                 <Container>
            <div className="mgNavigation mt-3">
                <ul>
                    <li><Link className="items13" to="/">On Going Order</Link></li>
                    <li><Link className="items13" to="/OrderHistory">Order History</Link></li>
                </ul>
                </div>
            <Switch>
                <Route exact path="/"  component={Ongoingorder}/>
                <Route path="/OrderHistory" component={OrderHistory}/>
            </Switch>
            </Container>
        </BrowserRouter>

        </Card>
        </Container>
        
    )
}

export default MyOrder
