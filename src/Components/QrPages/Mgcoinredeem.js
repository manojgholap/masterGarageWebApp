import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Row,Col,Card,Button,ButtonGroup,CardHeader, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap';
import './allqrpages.css'
import coingroup from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/coingroup.png';

const Mgcoinredeem = () => {
  return ( 
      <Container>
        <Card className="reedem mt-4 p-3">
          <div className="reedemcont">
                <Link to="/Moreredeem"> <p><img src={coingroup} alt="error"/></p></Link>
              <h6>500 MG Coins Reedemed</h6>
                <small>you saved</small>
                <h4>₹ 50</h4>
                 <small>with MG Coins</small>
                 <p className="keepheart"><i class="fas fa-heart"></i> Keep visiting Master Garage</p>
                 
           </div>
           <div className="reedemfoot">
                    <p>WOW</p>
                 </div>
        </Card>
      </Container>
  )
};

export default Mgcoinredeem;
