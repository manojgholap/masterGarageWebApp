import React from 'react';
import Faq from './Faq';
import MyTicket from './Myticket';
import {BrowserRouter, Route, Switch,Link} from "react-router-dom";
import { Container,Row,Col,Card,Button,ButtonGroup,CardHeader, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import '../../Components/ProfileDasboard/dashboard.css';


const HelpSuppot = () => {
  return ( 
    <Container>
    <Card className="rounded shadow">
       <BrowserRouter> 
             <Container>
        <div className="mgNavigation p-3">
            <ul>
                <li><Link className="items13" to="/">My Tickets</Link></li>
                <li><Link className="items13" to="/faq">FAQ's</Link></li>
            </ul>
            <button className="helpsuppotbtn">Get Help</button>
            </div>
        <Switch>
            <Route exact path="/"  component={MyTicket}/>
            <Route path="/faq" component={Faq}/>
        </Switch>
        </Container>
    </BrowserRouter>

    </Card>
    </Container>

  )
};

export default HelpSuppot;
