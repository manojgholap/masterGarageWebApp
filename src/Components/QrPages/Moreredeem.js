import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Row,Col,Card,Button,ButtonGroup,CardHeader, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap';
import morereedem from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/Path 28995.png';

const Moreredeem = () => {
  return(
             <Container>
        <Card className="reedem mt-4 p-3">
           <div className="reedemcont">
                <p><img src={morereedem} alt="error"/></p>
              <h6>'TRYNEW' APPLIED</h6>
                <small>you saved</small>
                <h4>₹ 500</h4>
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

export default Moreredeem;
