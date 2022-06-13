import React, { useEffect,useState } from 'react'
import '../../MobileView/vehical.css';
import { Link } from 'react-router-dom'
import user1 from '../../../Images/drawable-xxxhdpi/users.png';
import edites from '../../../Images/drawable-xxxhdpi/Group 32622.png';
import wallet from '../../../Images/drawable-xxxhdpi/Group 32181.png';
import profile from '../../../Images/drawable-xxxhdpi/Group 32176.png';
import star from '../../../Images/drawable-xxxhdpi/Group 32186.png';
import garage from '../../../Images/drawable-xxxhdpi/Group 32178.png';
import order from '../../../Images/drawable-xxxhdpi/Group 32179.png';
import fav from '../../../Images/drawable-xxxhdpi/Group 32180.png';
import chat from '../../../Images/drawable-xxxhdpi/Group 32182.png';
import help from '../../../Images/drawable-xxxhdpi/Group 32183.png';
import refer from '../../../Images/drawable-xxxhdpi/Group 32184.png';
import home from '../../../Images/drawable-xxxhdpi/Path 23297.png';
import service from '../../../Images/drawable-xxxhdpi/Path 32534.png';
import maincent from '../../../Images/drawable-xxxhdpi/Group 35391.png';
import gaccount from '../../../Images/drawable-xxxhdpi/Path 31932.png';
import acc from '../../../Images/drawable-xxxhdpi/Path 32535.png';
import logout from '../../../Images/drawable-xxxhdpi/Group 32185.png';
import logo2 from '../../../Images/drawable-xxxhdpi/logo2.png';
import axios from 'axios';

const MobAccount = () => {
    const [isLogin, setLogin] = useState(false);
    const [user, setUser] = useState('')

    useEffect(() => {
        let mobileNumber = localStorage.getItem("mobileNumber");
        const isLogin = localStorage.getItem('isLogin');
        console.log(isLogin);
        if (isLogin) {
            axios({
                method: "GET",
                url: process.env.REACT_APP_Master_Garage + "user/getOwnerDetails.php",
                params: { phone_no: mobileNumber }
            }).then((res) => {
                if (res.data.success == 1) {
                    setUser(res.data.result)
                    setLogin(true)
                }
            })
        }
    },[isLogin])
    return (
        <div className="allprofo">
            <div className="main_account_head">
                <div className="nav_mobff px-2">
                    <div className="arrow_marge_21"><i class="fa-solid fa-arrow-left"></i> <h6 className="arrow_non"> Account</h6></div>
                    <div className="px-2 navmob22">
                        <i class="fa-solid fa-bell"></i>
                    </div>
                </div>
                <div className="sub_profo">
                    <div className="user_profile">
                        <img src={user1} alt="error" />
                        <div className="user_info">
                            <h5>User</h5>
                            <p>{user.phone_no || "+91 9999999999"}</p>
                            <p>{user.email||"sachin.vipmail@gmail.com"}</p>
                        </div>
                    </div>
                    <Link to="/Edit_Mob"><div className="edit_profile">
                        <img src={edites} alt="error" />
                    </div></Link>
                </div>
            </div>

            <div className="bac_desg">
                <div className="nevigationbar">
                    <div className="cont_icon_dis">
                        <img src={profile} alt="error" />
                        <p>Profile</p>
                    </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                <Link to="/MgWalletEmpty_Mob" className="likdeco">  <div className="nevigationbar">
                    <div className="cont_icon_dis">
                        <img src={wallet} alt="error" />
                        <p>MG Wallet</p>
                    </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </div></Link>
                <Link to="/MgCoinDeal_Mob" className="likdeco">  <div className="nevigationbar">
                    <div className="cont_icon_dis">
                        <img src={star} alt="error" />
                        <p>MG Coins</p>
                    </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </div></Link>
            </div>

            <div className="bac_desg">
                <Link to="/SubmitGarage" className="likdeco"><div className="nevigationbar">
                    <div className="cont_icon_dis">
                        <img src={garage} alt="error" />
                        <p>My Garage</p>
                    </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                </Link>
                <Link to="/OrderEmpty_Mob" className="likdeco">  <div className="nevigationbar">
                    <div className="cont_icon_dis">
                        <img src={order} alt="error" />
                        <p>My Orders</p>
                    </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </div></Link>
                <div className="nevigationbar">
                    <div className="cont_icon_dis">
                        <img src={fav} alt="error" />
                        <p>My Favourites</p>
                    </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>

            <div className="bac_desg">
                <div className="nevigationbar">
                    <Link to="/ChatEmpty_Mob" className="likdeco">  <div className="cont_icon_dis">
                        <img src={chat} alt="error" />
                        <p>Chats</p>
                    </div></Link>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                <div className="nevigationbar">
                    <Link to="/HelpSupEmpty_Mob" className="likdeco"> <div className="cont_icon_dis">
                        <img src={help} alt="error" />
                        <p>Help & Support</p>
                    </div></Link>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                <div className="nevigationbar">
                    <Link to="/Refer_Mob" className="likdeco"><div className="cont_icon_dis">
                        <img src={refer} alt="error" />
                        <p>Refer & Earn</p>
                    </div></Link>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>

            <div className="bac_desg">
                <Link to="/Fastage_Mob" className="lindeco">  <div className="nevigationbar1">
                    <div className="cont_icon_dis">
                        <img src={logout} alt="error" />
                        <h6 className="logoutfoot">Logout</h6>
                    </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </div></Link>
            </div>

            <div className="footnevigate">
                <div>
                    <div className="logofoot">
                        <img src={logo2} alt="error" />
                        <h3>Master Garage </h3>
                    </div>
                    <p>Version 2.0.9</p>
                </div>
            </div>
            <div className="foot_Foot_Head">
                <ul className="ulfoot_Line">
                    <li className="ulfoot_Line1">
                        <img src={home} alt="eror" />
                        <p>Home</p>
                    </li>
                    <li className="ulfoot_Line1">
                        <img src={service} alt="eror" />
                        <p>Services</p>
                    </li>
                    <li className="maincent">
                        <img src={maincent} alt="eror" />
                    </li>
                    <li className="ulfoot_Line1">
                        <img src={gaccount} alt="eror" />
                        <p>My Garage</p>
                    </li>
                    <li className="ulfoot_Line1">
                        <img src={acc} alt="eror" />
                        <p>Account</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MobAccount