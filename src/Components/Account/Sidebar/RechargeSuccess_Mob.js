import React from 'react'
import trans from '../../../Images/drawable-xxxhdpi/Group 35035.png';

import home from '../../../Images/drawable-xxxhdpi/Path 23297.png';
import service from '../../../Images/drawable-xxxhdpi/Path 32534.png';
import maincent from '../../../Images/drawable-xxxhdpi/Group 35391.png';
import gaccount from '../../../Images/drawable-xxxhdpi/Path 31932.png';
import acc from '../../../Images/drawable-xxxhdpi/Path 32535.png';
import scan from '../../../Images/drawable-xxxhdpi/Path 31771.png';
import Fastaglogo from '../../../Images/drawable-xxxhdpi/Fastaglogo.png';
const RechargeSuccess_Mob = () => {
  return (
    <div className="walletgetdata">
            <div className='billdetail'>
                    <div className="redet">
                        <div className="uptodate">
                        <h6>MH04AB1234</h6>
                        <p>Prashant Kishor</p>
                        </div>
                        <div className="uptodate">
                            <h6>Fastag Balance:<small>250</small></h6>
                            <p><i class="fa-solid fa-arrow-rotate-right"></i>Update Balance</p>
                        </div>

                    </div>
                   
             
                </div>
                <div className="trascection">
                      <img src={trans} alt="error"/>
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

export default RechargeSuccess_Mob