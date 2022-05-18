import React from 'react'
import {Link} from 'react-router-dom'
import bookchall from '../../../Images/drawable-xxxhdpi/Path 31939.png';
import bookchall1 from '../../../Images/drawable-xxxhdpi/Path 31754.png';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container,CardHeader,UncontrolledCollapse ,Card} from 'reactstrap';

const HelpFaq_Mob = () => {
  return (
    <div className="walletgetdata">
    <div className="main_account_head_13">
         <div className="nav_mobff px-2"> 
 <div className="arrow_marge_21"><i class="fa-solid fa-arrow-left"></i> <h6 className="arrow_non"> </h6></div>
     <div className="px-2 navmob222">
     <i class="fa-solid fa-bell"></i>
     </div>
 </div>
 <div className="allwalletmore">
     <div className="putinwallet px-3">
        <div className="subsub_garage"><img src={bookchall} alt="error"/><h5>Help & Support</h5></div> 
         <p>Read FAQs, Raise Help and Track Tickets</p>
     </div>
     <div className="ruppess1">
     <img src={bookchall1} alt="error"/>
     </div>
 </div>
</div>
<div className="estinav">
              <ul>
              <Link to="/MyTicket_Mob" className="estilink">  <li>My Tickets</li></Link>
               <Link to="/HelpFaq_Mob"  className="estilink"> <li>FAQs</li></Link>
                <Link to="/HelpTicke_Mob"><li className="helpme12"><button>Get Help</button></li></Link>
              </ul>
            </div>
            <div className="rounded shadow-1 mb-2">
                <div className="toggleheader">
                <h6 className="tooghed">Can I still purchase products on MG World if I don't 
have the mg coins balance?</h6>
                <p id="toggler1" className="togglebtn"><i class="fas fa-chevron-down"></i></p>
                </div>
                <UncontrolledCollapse toggler="#toggler1">
                <div className="toggletetext">
                   <p>Yes, you can buy all products on MG World if you don't have 
the coins balance, you can pay the price mentioned against 
the product and have it to your doorsteps</p>
                </div>

                </UncontrolledCollapse>
                </div>
                <div className="rounded shadow-1 mb-2">
                <div className="toggleheader">
                <h6 className="tooghed">Can I still purchase products on MG World if I don't 
have the mg coins balance?</h6>
                <p id="toggler11" className="togglebtn"><i class="fas fa-chevron-down"></i></p>
                </div>
                <UncontrolledCollapse toggler="#toggler11">
                <div className="toggletetext">
                   <p>Yes, you can buy all products on MG World if you don't have 
the coins balance, you can pay the price mentioned against 
the product and have it to your doorsteps</p>
                </div>

                </UncontrolledCollapse>
                </div>
                <div className="rounded shadow-1 mb-2">
                <div className="toggleheader">
                <h6 className="tooghed">Can I still purchase products on MG World if I don't 
have the mg coins balance?</h6>
                <p id="toggler12" className="togglebtn"><i class="fas fa-chevron-down"></i></p>
                </div>
                <UncontrolledCollapse toggler="#toggler12">
                <div className="toggletetext">
                   <p>Yes, you can buy all products on MG World if you don't have 
the coins balance, you can pay the price mentioned against 
the product and have it to your doorsteps</p>
                </div>

                </UncontrolledCollapse>
                </div>
</div>
  )
}

export default HelpFaq_Mob