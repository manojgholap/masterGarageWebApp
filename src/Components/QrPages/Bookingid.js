import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Row,Col,Card,Button,ButtonGroup,CardHeader, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap';
import firstChoice from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/firstchoise.png';
import './allqrpages.css'

const Bookingid = () => {
  return (
      <Container>
          <Card className="p-3 cardappoint">
             <Link to="/Mgcoinredeem"><h5><i class="fas fa-times"></i> Booking ID: MG1234567890 </h5></Link>
             <Card className="mt-3 mb-3 shadow rounded bookcolor">
                 <div className="firstchoise p-2">
                    <p><img src={firstChoice} alt="error"/></p>
                    <div className="bookinfo p-3">
                       <h5>Mahindra First Choice</h5>
                       <p>Kandivali East, Mumbai 400 101</p>
                       <small>Download Summary</small>
                    </div>
                 </div>
                 <p>*Vehicle has been serviced and delivered</p>
             </Card>
             <p>Appointment Details</p>
             <Card className="shadow rounded mb-3 p-4">
             <div className="appointdetails">
               <p>Maruti Suzuki  XL6 Petrol</p>
               <small>MH OI AB 3827</small>
                <div className="mt-2">
                <h6>Service Scheduled For:</h6>
                <div>  <p>21/01/2021</p> <p>04.00PM</p></div>
             </div> 
             </div>
             <div className="appointdetails">
                <h6>Service Buddy</h6>
                <p>Mr. Alex Morgan</p>
                <p>Service Technician</p>
             </div>
             </Card>
              <p>Service Details</p>
             <Card className="shadow rounded mb-3">
                <div className="servicedetails p-4">
                   <h6>
                       <p>Starter Motor Repair</p>
                       <p>₹1000</p>
                   </h6>
                    <h6>
                       <p>LHS Door Dent & Paint</p>
                       <p>₹1000</p>
                   </h6>
                    <h6>
                       <p>Comprehensive Service</p>
                       <p>₹1000</p>
                   </h6>
                    <h6>
                       <p>Inspections & Diagnostics</p>
                       <p>₹1000</p>
                   </h6>
                    <h6 className="totalbook">
                       <p>Total</p>
                       <p>₹1000</p>
                   </h6>
                    <h6 className="promo1">
                       <h5>PROMO - (MG500)</h5>
                       <p>you saved ₹500</p>
                   </h6>
                    <h6 className="promo2">
                       <h5>MG Coins (2000)</h5>
                       <p>redeemed ₹200</p>
                   </h6>
                    <h6>
                       <p>Other Charges</p>
                       <p>₹0</p>
                   </h6>
                    <h6>
                       <p>Taxes @18% GST</p>
                       <p>₹774</p>
                   </h6>
                    <h6 className="grandtotal">
                       <h5>Grand Total</h5>
                       <p>₹4974</p>
                   </h6>
                   <div className="grandsub">
                        <h6 className="totalsaving">
                            <h6>Your Total Saving</h6>
                            <p>₹700</p>
                        </h6>
                        <h6 className="totalsaving1">
                            <h6>MG Coins Earned on Booking</h6>
                            <p>₹1000</p>
                        </h6>
                   </div>
                </div>
             </Card>
             <p>Payment Details</p>
             <Card className="shadow rounded mb-3 p-4">
                   <div>
                     <h6>BOOKING ID</h6>
                     <p>MG1234567890</p>
                   </div>
                   <div>
                     <h6>Date & Time</h6>
                     <p>21/01/2021  at  11.00 AM</p>
                   </div>
                   <div>
                     <h6>Customer Name</h6>
                     <p>Mr. Sachin Tiwari</p>
                   </div>
                   <div>
                     <h6>Address</h6>
                     <p>A 1234, GCC Residency, Near Bisleri Office
                            Andheri East, Mummbai 400 001</p>
                   </div>
                   <div>
                     <h6>Contact</h6>
                     <p>88XXXXXX93</p>
                   </div>
                   <div>
                     <div>
                        <h6>Payment</h6>
                        <p>Paid via MasterCard XXX009</p>
                     </div>
                     <p>₹4979</p>
                   </div>
             </Card>
          </Card>
      </Container>
  )
};

export default Bookingid;
