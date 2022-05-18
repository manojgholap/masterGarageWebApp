import React from 'react'
import {BrowserRouter, Route, Switch,Link} from "react-router-dom";
import { Container,Row,Col,Card,Button,ButtonGroup,Input, CardBody, CardTitle, CardText,CardSubtitle, CardFooter, CardHeader } from 'reactstrap';
import Coins from '../../Images/Images/drawable-ldpi/coins.png';
import './dashboard.css';
import Deal from '../MgCoinpages/Deal'
import Historypage from '../MgCoinpages/History';
import Faq from '../MgCoinpages/Faq';
import WorkMg from '../MgCoinpages/WorkMg'

const MgCoin = () => {
    return (
        <Container>
        <Card className="rounded shadow containerprofile1">
             <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="500" viewBox="0 0 1440 320"><path fill="#FF9100" fill-opacity="1" d="M0,64L60,96C120,128,240,192,360,186.7C480,181,600,107,720,117.3C840,128,960,224,1080,250.7C1200,277,1320,235,1380,213.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
               <div className="containerprofile">
                <img src={Coins} alt="error"/>
                <div className="refercoins">
                         <div className="firstContainer">
                             <div className="someinfo">
                                 <small>Wallet Balance</small>
                                 <h3>2000 MG Coins</h3>
                                
                             </div>
                             <div className="moreList1">
                                <ul>
                                     <li>
                                         <small>Total Coins Earned</small>
                                         <h4>5000 Coins</h4>
                                    </li>
                                    <li>
                                         <small>Total Coins Spent</small>
                                         <h4>3000 Coins</h4>
                                    </li>
                                </ul>
                             </div>
                         </div>
                     <div className="containlast">
                         <div className="coincolor">
                         <div className="tencoins">
                          <p>10 MG Coin = 1 Rupee</p>
                        </div>
                     <div className="containlast1">
                         <p>Refer a friend to Master Garage & earn 500 MG Coins, also earn more after they complete their first service booking</p>
                         <i class="fas fa-share-alt"></i>
                     </div>
                   </div>
             </div>
                </div>
            </div>
     </Card>
     <div>
     <BrowserRouter> 
        <Container>
            <div className="mgNavigation mt-3">
                <ul>
                    <li><Link className="items13" to="/">Deal</Link></li>
                    <li><Link className="items13" to="/history">History</Link></li>
                    <li><Link className="items13" to="/faq">FAQ's</Link></li>
                    <li><Link className="items13" to="/workmg">How it Works</Link></li>
                </ul>
                </div>
            <Switch>
                <Route exact path="/"  component={Deal}/>
                <Route path="/history" component={Historypage}/>
                <Route path="/faq" component={Faq}/>
                <Route path="/workmg" component={WorkMg}/>
            </Switch>
            </Container>
        </BrowserRouter>
     </div>
    </Container>
    )
}

export default MgCoin
