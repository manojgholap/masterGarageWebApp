import React from 'react';
import {Container,Col,Row,Card,CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../ProfileDasboard/dashboard.css'
const MyorderCard = ({orderid,orderdate,ordertime,orderAmount,orderDetail,vehicaldetail}) => {
  return ( 
    <Card>
    <div className="mainongoincont p-3">
        <div>
            <div className="ongoingheader1">
                <div className="bookdetails011">
                    <small>Bookin ID</small>
                    <p>{orderid}</p>
                </div>
                <div className="bookdetails02">
                    <small>Booking Date</small>
                    <p>{orderdate}</p>
                </div>
                <div className="bookdetails02">
                    <small>Booking Time</small>
                    <p>{ordertime}</p>
                </div>
            </div>
            <div className='ongoingheader1'>
                <div className="bookdetails_011">
                  <small>Booking Amount</small>
                  <p>{orderAmount}</p>
                </div>
                <div className="bookdetails_001">
                <small>Vehical Details</small>
                  <p>{vehicaldetail}</p>
                </div>
                <div className="bookdetails_02">
                <small>Booking Details</small>
                  <p>{orderDetail}</p>
                </div>
            </div>
        </div>
        <div className="onbookfoot">  
        <div>
             <p className="ongoingbookicon"><i class="far fa-comments"></i></p>
                <button className='ongoingbookbtn'>View all</button>
            </div>
      </div>
    </div>
</Card>
  )
};

export default MyorderCard;
