import React from 'react'
import { Link,withRouter } from 'react-router-dom';
import payment from '../../../drawable-xxxhdpi/Path 2044.png';
import amount from '../../../drawable-xxxhdpi/Group 35044.png';
import coup from '../../../drawable-xxxhdpi/Group 31886.png';
import redem from '../../../drawable-xxxhdpi/Group 29935.png';
import balano from '../../../Images/drawable-xxxhdpi/balano.jpg';

import home from '../../../Images/drawable-xxxhdpi/Path 23297.png';
import service from '../../../Images/drawable-xxxhdpi/Path 32534.png';
import maincent from '../../../Images/drawable-xxxhdpi/Group 35391.png';
import gaccount from '../../../Images/drawable-xxxhdpi/Path 31932.png';
import acc from '../../../Images/drawable-xxxhdpi/Path 32535.png';
import scan from '../../../Images/drawable-xxxhdpi/Path 31771.png';
import Fastaglogo from '../../../Images/drawable-xxxhdpi/Fastaglogo.png';
const RechargeCoupan_Mob = () => {
  return (
    <div className="add_Top">
    <div className="nav_mob"> 
<div className="arrow_marge"><i class="fa-solid fa-arrow-left"></i> <h6 className="arrow_non">Recharge Fastag</h6></div>
      <div className="px-2">
          <i class="fa-solid fa-bell"></i>
      </div>
</div>

        <div>
            <div className="bankpayment">
                <img src={payment} alt="error"/>
                <input placeholder='Paytm Payments Bank' className="paytobank"/>
                <i class="fa-solid fa-angles-down"></i>
            </div>

            <div  className="reviseallinfo1">
                <div className="reviseallinfo">
                    <img src={balano} alt="error"/>
                    <div className="revisehead">
                        <p>MH04AB1234</p>
                        <small>Prashant Kishor</small>
                    </div>
                    <div>
                        <small>Available Balance</small>
                    <p className="amoutrevies">₹ 459 <i class="fa-solid fa-arrow-rotate-right"></i></p>
                    </div>
                        </div>
                        <p className="footrevice">Balance last updated on 21/01/21 at 3.44 pm</p>
           
            </div>
            <div className="inputamoutrevies">
            <div className="input_field">
                <p>Enter recharge amount</p>
                <input placeholder='240'/>
            </div>
                </div>

                <div>
                    <ul className="revicediffamount">
                        <li><p>₹ 250</p></li>
                        <li><p>₹ 250</p></li>
                        <li><p>₹ 250</p></li>
                        <li><p>₹ 250</p></li>
                    </ul>
                </div>
                <div className="lastDEtails">
                    <img src={coup} alt="error"/>
                    <img src={redem} alt="error"/>
                </div>

                <div className='billdetail'>
                    <h6>Bill Details</h6>
                    <div className="redet">
                        <h6>Recharge Amount</h6>
                        <p>₹ 250</p>
                    </div>
                    <div className="redet">
                        <h6>Other Charges</h6>
                        <p>₹ 0</p>
                    </div>
                    <div className="redet1">
                        <p>Grand Total</p>
                        <p>₹ 250</p>
                    </div>
                </div>
        </div>
        <div className="payontime">
        <div className="payontimesub">
            <h5>₹6,459</h5>
            <Link to="#">View Detailed Bill</Link>
        </div>
       <Link to="/RechargeSuccess_Mob"> <button>Select Payment Method</button></Link>
    </div>
  
</div>
  )
}

export default RechargeCoupan_Mob