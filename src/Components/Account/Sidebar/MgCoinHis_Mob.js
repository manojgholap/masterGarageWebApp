import React from 'react'
import '../Routing/profile.css';
import {Link} from 'react-router-dom'
import ring from '../../../Images/drawable-xxxhdpi/Group 17359.png';
import cripto from '../../../Images/Images/drawable-xxxhdpi/Group 29240.png';
import wallet from '../../../Images/drawable-xxxhdpi/Path 31935.png';
import rupess from '../../../Images/drawable-xxxhdpi/Path 31755.png';
import coinmgg from '../../../Images/drawable-xxxhdpi/Group 32604.png';
import notran from '../../../Images/drawable-xxxhdpi/Group 29240.png';
const MgCoinHis_Mob = () => {
  return (
    <div className='walletgetdata'>
       <div className="main_account_head12">
            <div className="nav_mobff px-2"> 
    <div className="arrow_marge_21"><i class="fa-solid fa-arrow-left"></i> <h6 className="arrow_non"> Mg Coin</h6></div>
        <div className="px-2 navmob22">
            <img src={ring} alt="error"/>
        </div>
    </div>
    <div className="allwalletmore">
        <div className="putinwallet12 px-3">
            <img src={coinmgg} alt="error"/>
        </div>
        <div className="btn_addMoney1">
            <div className="mgcoinies px-3 mb-2">
              <div>
                <p>Coin Balance</p>
                <h5>2000 MG Coins</h5>
              </div>
              <div> <img src={rupess} alt="error"/></div>
            </div>
            <div className="mgcoinies">
              <div className="totval">
                <p>Total Coins Earned</p>
                <h6>5000 Coins</h6>
              </div>
              <div>  <p>Total Coins Spent</p>
                <h6>3000 Coins</h6></div>
            </div>
        </div>
    </div>
</div>
<div className=''>
   <ul className="btnallmgwallet">
      <Link to="/MgCoinDeal_Mob" className="routemg"> <li>Deal</li></Link>
       <Link to="/MgCoinHis_Mob" className="routemg"><li>History</li></Link>
      <Link to="/MgCoinFaq_Mob" className="routemg"> <li>FAQ's</li></Link>
       <Link to="/MgCoinhTw_Mob" className="routemg"><li>How it's Works</li></Link>
   </ul>

</div>
<div className=''>
   <ul className="btnallmgwallet">
      <Link to="/MgCoinFill_Mob"> <li><button>All</button></li></Link>
       <li><button>Spent</button></li>
       <li><button>Received</button></li>
   </ul>

</div>

<div className="notransection">
    <div>
        <img src={notran} alt="error"/>
        <h5>No transactions yet!</h5>
    </div>
</div>
</div>
  )
}

export default MgCoinHis_Mob