import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Container } from 'reactstrap'
import Account from '../Sidebar/Account';
import Edit_Mob from '../Sidebar/Edit_Mob'
const MobRouting = () => {
  return (
    <BrowserRouter> 
    <Container fluid className="mt-4"  style={{display:"flex"}}>
        <Switch>
            <Route exact path="/Account"  component={Account}/>
            <Route exact path="/Edit_Mob"  component={Edit_Mob}/>
        </Switch>
        </Container>
    </BrowserRouter>
  )
}

export default MobRouting