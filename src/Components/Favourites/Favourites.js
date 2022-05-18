import React from 'react'
import {Link,BrowserRouter, Route, Switch} from "react-router-dom";
import { Container,Row,Col,Card,Button,ButtonGroup,CardHeader, CardBody,UncontrolledCollapse } from 'reactstrap';
import Cars from './Car';
import Garage from './Garages';
import Insurance from './Insurance';
import Chauffers from './Chauffer';
import Parking from './Parking';


const Favourites = () => {
    return (
        <Container>
                 <BrowserRouter> 
                 <Container>
            <div className="mgNavigation mt-3">
                <ul>
                    <li><Link className="items13" to="/">Garages</Link></li>
                    <li><Link className="items13" to="/Cars">Cars</Link></li>
                    <li><Link className="items13" to="/Parking">Parking</Link></li>
                    <li><Link className="items13" to="/Insurance">Insurance</Link></li>
                    <li><Link className="items13" to="/Chauffers">Chauffers</Link></li>
                </ul>
                </div>
            <Switch>
                <Route exact path="/"  component={Garage}/>
                <Route path="/Cars" component={Cars}/>
                <Route path="/Parking" component={Parking}/>
                <Route path="/Insurance" component={Insurance}/>
                <Route path="/Chauffers" component={Chauffers}/>
            </Switch>
            </Container>
        </BrowserRouter>
        </Container>
    )
}

export default Favourites
