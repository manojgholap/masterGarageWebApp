import React from "react";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import { Container,Row,Col,Card,Button,ButtonGroup,CardHeader, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'

import Profile from "../ProfileDasboard/ProfileDashboard";
import MyGarage from "../ProfileDasboard/MyGarage";
import MyOrder from "../ProfileDasboard/MyOrder";
import Chats from '../ProfileDasboard/Chats';
import Favourites from '../Favourites/Favourites';
import MgCoin from '../ProfileDasboard/MgCoin';
import HelpSupport from '../Helpsupport/HelpSuppot';
import Refer from '../ProfileDasboard/Refer';
import Sidebar from './Sidebar';

function Routes() {
    return (
        <BrowserRouter> 
        <Container fluid className="mt-4"  style={{display:"flex"}}>
        <Sidebar/>
            <Switch>
                <Route exact path="/"  component={Profile}/>
                <Route path="/mygarage" component={MyGarage}/>
                <Route path="/myorder" component={MyOrder}/>
                <Route path="/chats" component={Chats}/>
                <Route path="/favourites" component={Favourites}/>
                <Route path="/mgcoin" component={MgCoin}/>
                <Route path="/helpsupport" component={HelpSupport}/>
                <Route path="/refer" component={Refer}/>
            </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default Routes;