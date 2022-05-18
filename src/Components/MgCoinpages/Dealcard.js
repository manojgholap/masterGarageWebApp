import React from 'react';
import { Container,Row,Col,Card,Button,ButtonGroup,Input, CardBody, CardTitle, CardText,CardSubtitle, CardFooter, CardHeader, CardImg } from 'reactstrap';
import Carimg from '../../Images/frontcar.jpg'
import coin from '../../Images/coin.png';
import './Deals.css'
const Dealcard = () => {
  return (
      <Card className="ml-3 rounded shadow">
         <CardImg
           top
           width="100%"
           src={Carimg}
           alt="car images"
         />
         <div className="footcarcard">
             <h6>Leather Seat Covers</h6>
             <div className="footcoin">
               <div className="moreinfo12">
                   <img src={coin} alt="error"/>
                   <p>1000 Mg coin</p>
               </div>
              <small>₹6,459</small>
             </div>
         </div>
       </Card>
  );
};

export default Dealcard;
