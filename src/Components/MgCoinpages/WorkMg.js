import React from 'react';
import { Container,Row,Col,Card,Button,ButtonGroup,Input, CardBody, CardTitle, CardText,CardSubtitle, CardFooter, CardHeader, CardImg, CardGroup } from 'reactstrap';
import './Deals.css';
import {Link} from 'react-router-dom';
const WorkMg = () => {
  return (
      <Container>
         <Row>
             <Col className='workbackground'>
                 <div className="workcardhead">
                     <p>How it Works</p>
                     <Link className="help1"><i class="fas fa-question-circle"></i>Help</Link>
                 </div>
               <div>
                   <div className="workcard">
                   <p><i class="fas fa-star"></i></p>
                   <p>Start earning MG Coins once you complete the sign up, Value of 10 MG Coin is equal to 1 Rupee, 
                       you can redeem it for product or service purchase on MG World & Marketplace</p>
                  </div>
               </div>
               <div>
                   <div  className="workcard">
                   <p><i class="fas fa-gift"></i></p>
                   <p>Start earning MG Coins once you complete the sign up, Value of 10 MG Coin is equal to 1 Rupee, 
                       you can redeem it for product or service purchase on MG World & Marketplace</p>
                       </div>    
               </div>
               <div>
                   <div className="workcard">
                       
                   <p><i class="fas fa-crown"></i></p>
                   <p>Start earning MG Coins once you complete the sign up, Value of 10 MG Coin is equal to 1 Rupee, 
                       you can redeem it for product or service purchase on MG World & Marketplace</p>
                   </div>
               </div>
               <div>
                   <div className="workcard">
                   <p><i class="fas fa-trophy"></i></p>
                   <p>Start earning MG Coins once you complete the sign up, Value of 10 MG Coin is equal to 1 Rupee, 
                       you can redeem it for product or service purchase on MG World & Marketplace</p>
                </div>
               </div>
               <div>
                   <div className="workcard">
                   <p><i class="fas fa-star"></i></p>
                   <p>Start earning MG Coins once you complete the sign up, Value of 10 MG Coin is equal to 1 Rupee, 
                       you can redeem it for product or service purchase on MG World & Marketplace</p>
                </div>
               </div>
               <div>
                   <div className="workcard">
                   <p><i class="fas fa-star"></i></p>
                   <p>Start earning MG Coins once you complete the sign up, Value of 10 MG Coin is equal to 1 Rupee, 
                       you can redeem it for product or service purchase on MG World & Marketplace</p>
                 </div>    
               </div>
             </Col>
         </Row>
      </Container>
  );
};

export default WorkMg;
