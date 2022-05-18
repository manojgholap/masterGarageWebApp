import React from 'react';
import { Container,Row,Col,Card,Button,ButtonGroup,Input, CardBody, CardTitle, CardText,CardSubtitle, CardFooter, CardHeader } from 'reactstrap';
import './dashboard.css';
import {Link} from 'react-router-dom';
const Recharge = ({img,info,whatrecharge,value,total}) => {
  return (
      <Card className=''>
          <div className="p-3 backrecharge">
         <div className="rechareghead">
             <div className="recharegval"><Link><img src={img} alt="error"/></Link><p>{whatrecharge}</p></div>
             <p>{info}</p>
         </div>
         <div className="recharegval1">
             <small>{value}</small>
             <p>{total}</p>
         </div>
         </div>
      </Card>
    )
};

export default Recharge;
