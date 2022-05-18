import React from 'react'
import '../Routing/profile.css';
import {Link} from 'react-router-dom'
import garage from '../../../Images/drawable-xxxhdpi/Path 31922.png';
import garageimg from '../../../Images/drawable-xxxhdpi/Path 31936.png';
import Car from '../../../Images/drawable-xxxhdpi/Car.png';

import home from '../../../Images/drawable-xxxhdpi/Path 23297.png';
import service from '../../../Images/drawable-xxxhdpi/Path 32534.png';
import maincent from '../../../Images/drawable-xxxhdpi/Group 35391.png';
import gaccount from '../../../Images/drawable-xxxhdpi/Path 31932.png';
import acc from '../../../Images/drawable-xxxhdpi/Path 32535.png';
import scan from '../../../Images/drawable-xxxhdpi/Path 31771.png';
import Fastaglogo from '../../../Images/drawable-xxxhdpi/Fastaglogo.png';

import vehical from '../../../Images/balano.jpg';
const GarageAddVeh_Mob = () => {
  return (
    <div className="walletgetdata">
    <div className="main_account_head_1">
         <div className="nav_mobff px-2"> 
 <div className="arrow_marge_21"><i class="fa-solid fa-arrow-left"></i> <h6 className="arrow_non"></h6></div>
     <div className="px-2 navmob223">
     <i class="fa-solid fa-bell"></i>
     </div>
 </div>
 <div className="allwalletmore">
     <div className="putinwallet px-3">
        <div className="subsub_garage"><img src={garageimg} alt="error"/><h5>My Garage</h5></div> 
         <p>Manage all your cars at one place, 
Your all in one "Digital Garage"</p>
     </div>
     <div className="ruppess1">
     <img src={garage} alt="error"/>
     </div>
 </div>
</div>

<div class="addvechiclebox1">
           
        <form>
            <input className='vechicleInput' type="text" placeholder="Example - MH 01 AB 1234" name="add vechicle" />
            <Link to ="/EmptyEstimate_Mob"><button className='vechiclebtn'>Add Vechicle</button></Link>
        </form>
        </div>

        <div>
            <div className="vehical_card">
                <img className="scanner" src={scan} alt="error"/>
                <div className="primery"><p>PRIMARY</p></div>
                <div>
                    <img src={vehical} alt="error"/>
                </div>
                <div className="detail_veh">
                    <h5>Alcazar</h5>
                    <small>MH 01 AB 3827</small>
                    <p>AMIT JOSHI</p>
                    <h5 className="fastageget"><img src={Fastaglogo} alt="error"/><h6>₹459.00</h6></h5>
                </div>

            </div>
            <div className="vehical_card">
                <img className="scanner" src={scan} alt="error"/>
                <div>
                    <img src={vehical} alt="error"/>
                </div>
                <div className="detail_veh">
                    <h5>Alcazar</h5>
                    <small>MH 01 AB 3827</small>
                    <p>AMIT JOSHI</p>
                    <h5 className="fastageget"><img src={Fastaglogo} alt="error"/><h6>₹459.00</h6></h5>
                </div>

            </div>
            <div className="vehical_card">
                <img className="scanner" src={scan} alt="error"/>
                <div>
                    <img src={vehical} alt="error"/>
                </div>
                <div className="detail_veh">
                    <h5>Alcazar</h5>
                    <small>MH 01 AB 3827</small>
                    <p>AMIT JOSHI</p>
                    <h5 className="fastageget"><img src={Fastaglogo} alt="error"/><h6>₹459.00</h6></h5>
                </div>

            </div>
        </div>
<div className="foot_Foot_Head1">
 <ul className="ulfoot_Line">
     <li className="ulfoot_Line1">
         <img src={home} alt="eror"/>
         <p>Home</p>
     </li>
     <li className="ulfoot_Line1">
         <img src={service} alt="eror"/>
         <p>Services</p>
     </li>
     <li className="maincent">
         <img src={maincent} alt="eror"/>
     </li>
     <li className="ulfoot_Line1">
         <img src={gaccount} alt="eror"/>
         <p>My Garage</p>
     </li>
     <li className="ulfoot_Line1">
         <img src={acc} alt="eror"/>
         <p>Account</p>
     </li>
 </ul>
</div>
</div>
  )
}

export default GarageAddVeh_Mob