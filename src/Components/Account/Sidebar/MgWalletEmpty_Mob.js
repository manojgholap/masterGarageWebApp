import React from 'react'
import {Link} from 'react-router-dom'
import ring from '../../../Images/drawable-xxxhdpi/Group 17359.png';
import cripto from '../../../Images/Images/drawable-xxxhdpi/Group 29240.png';
import wallet from '../../../Images/drawable-xxxhdpi/Path 31935.png';
import rupess from '../../../Images/drawable-xxxhdpi/Path 31755.png';
import '../../MobileView/vehical.css';
const MgWalletEmpty_Mob = () => {
  return (
    <div className='walletgetdata'>
    <div className="main_account_head1">
            <div className="nav_mobff px-2"> 
    <div className="arrow_marge_21"><i class="fa-solid fa-arrow-left"></i> <h6 className="arrow_non"> Mg Wallet</h6></div>
        <div className="px-2 navmob22">
        <i class="fa-solid fa-bell"></i>
        </div>
    </div>
    <div className="allwalletmore">
        <div className="putinwallet px-3">
            <img src={wallet} alt="error"/><small>₹0</small>
            <p>Available Balance</p>
        </div>
        <div className="ruppess">
        <img src={rupess} alt="error"/>
        </div>
        <div className="btn_addMoney">
            <button>Add Money</button>
        </div>
    </div>
</div>

<div className=''>
   <ul className="btnallmgwallet">
      <Link to="/MgWallet_Mob"> <li><button>All</button></li></Link>
       <li><button>Spent</button></li>
       <li><button>Received</button></li>
   </ul>

</div>

<div className="notransection">
    <div>
        <img src={cripto} alt="error"/>
        <h5>No transactions yet!</h5>
    </div>
</div>
</div>
  )
}

export default MgWalletEmpty_Mob