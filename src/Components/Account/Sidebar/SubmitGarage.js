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
const SubmitGarage = () => {
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
        <div className="vehical_add_cont">
            <div className="suv_addvehical">
                <img src={Car} alt="alt"/>
                 <h5>Enter Vehicle Registration Number</h5>
                 <p>So we can show you the best prices for your </p>
                <p>vehicle service in nearby garages</p>
            </div>
        </div>
    <div class="addvechiclebox1">
    <form>
        <input className='vechicleInput' type="text" placeholder="Example - MH 01 AB 1234" name="add vechicle" />
        <Link to ="/GarageAddVeh_Mob"><button className='vechiclebtn'>Submit</button></Link>
    </form>
    </div>
    <div className="suv_addvehical1">
   <p> Don't worry your information is safe with us, we will use your number </p>
<p>to fetch your car make & model so we can show prices accordingly</p>
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

export default SubmitGarage