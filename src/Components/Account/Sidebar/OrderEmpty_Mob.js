import React from 'react';
import {Link} from 'react-router-dom'
import scan from '../../../Images/drawable-xxxhdpi/Path 31771.png';
import vehical from '../../../Images/balano.jpg';
import del from '../../../Images/drawable-xxxhdpi/Group 31583.png';
import fast from '../../../Images/drawable-xxxhdpi/netc-fastag-logo-vector.png';
import challen from '../../../Images/drawable-xxxhdpi/Path 31913.png';
import insuren from '../../../Images/drawable-xxxhdpi/Path 31758.png';
import pucc from '../../../Images/drawable-xxxhdpi/Group 32377.png';
import firstchoice from '../../../Images/drawable-xxxhdpi/firstchoice.png';
import lcate from '../../../Images/drawable-xxxhdpi/Path 31705.png';
import home from '../../../Images/drawable-xxxhdpi/Path 23297.png';
import service from '../../../Images/drawable-xxxhdpi/Path 32534.png';
import maincent from '../../../Images/drawable-xxxhdpi/Group 35391.png';
import gaccount from '../../../Images/drawable-xxxhdpi/Path 31932.png';
import acc from '../../../Images/drawable-xxxhdpi/Path 32535.png';
import Fastaglogo from '../../../Images/drawable-xxxhdpi/Fastaglogo.png';
import garage from '../../../Images/drawable-xxxhdpi/Path 31922.png';
import garageimg from '../../../Images/drawable-xxxhdpi/Path 31936.png';
import bookchall from '../../../Images/drawable-xxxhdpi/Path 31938.png';
import bookchall1 from '../../../Images/drawable-xxxhdpi/Path 31928.png';
import notrich from '../../../Images/drawable-xxxhdpi/Group 32433.png';
const OrderEmpty_Mob = () => {
  return (
    <div className="walletgetdata">
    <div className="main_account_head1">
         <div className="nav_mobff px-2"> 
 <div className="arrow_marge_21"><i class="fa-solid fa-arrow-left"></i> <h6 className="arrow_non"> </h6></div>
     <div className="px-2 navmob224">
     <i class="fa-solid fa-bell"></i>
     </div>
 </div>
 <div className="allwalletmore">
     <div className="putinwallet px-3">
        <div className="subsub_garage"><img src={bookchall} alt="error"/><h5>My Orders</h5></div> 
         <p>Manage all your bookings at on place</p>
     </div>
     <div className="ruppess1">
     <img src={bookchall1} alt="error"/>
     </div>
 </div>
</div>
<div className="btnservice">
    <ul className="All_Main12">
        <li><button>All</button></li>
        <li className="btnbig"><button>Services & Repairs</button></li>
        <li className="btnbig"><button>Car Wash</button></li>
        <li><button>Fastag</button></li>
        <li><button>Challans</button></li>
        <li><button>Parkings</button></li>
        <li><button>Chauffers</button></li>
        <li><button>Insurance</button></li>
        <li><button>Cars</button></li>
    </ul>
</div>
<div className="estinav">
              <ul>
              <Link to="/OngoingOrder_Mob" className="estilink">  <li>Ongoing Orders</li></Link>
               <Link to="/OrderHis_Mob"  className="estilink"> <li>Orders History</li></Link>
                <Link><li className="helpme"><button>Get Help</button></li></Link>
              </ul>
            </div>
            <div className="centeresti">
                <div>
              <img src={notrich} alt="error"/>
              <h6>OPPS!!!     No Bookings Yet!</h6>
              <div className="m-3 viewesti">
                  <button>VIEW ESTIMATES</button>
                </div>
        </div>
            </div>
</div>
  )
}

export default OrderEmpty_Mob