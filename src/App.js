import TopNavbar from './Components/TopNavbar/TopNavbar';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import HomeMaintain from './Components/Home_Maintain/HomeMaintain';
import HomeMain1 from './Components/Home_Maintain/HomeMain1';
import Periodic from './Components/PeriodicServices/PeriodicService'
import PeriodicADDvechicle from './Components/PeriodicServices/PeriodicADDvechicle';
import PeriodicServiceAdded from './Components/PeriodicServices/PeriodicServicesAdded';
import ServiceEstimates from './Components/PeriodicServices/ServiceEstimates';
import BasicShowmore from './Components/PeriodicServices/BasicShowmore';
import BookGarage from './Components/GarageBook/BookGarage';
import LoginBook from './Components/GarageBook/LoginGarage';
import Aboutus from './Components/AboutUs';
import Address from './Components/GarageBook/Adaddress';
import PayBook from './Components/GarageBook/PaymentGarage';
import PayNow from './Components/GarageBook/Paynow';
import ScheduleBook from './Components/GarageBook/ScheduleBook';
import HomeChallan from './Components/HomeChallan/HomeChallan';
import DueChallan from './Components/HomeChallan/DueChallan';
import DueChallan1 from './Components/HomeChallan/DueChallan1';
import HomeFasTag from './Components/HomeFastag/HomeFastag';
import BuyFastag from './Components/HomeFastag/BuyFastag';
import FastagSucessful from './Components/HomeFastag/FastagOrder';
import RechargeFasTag from './Components/HomeFastag/RechargeFastag';
import RechargeFastag1 from './Components/HomeFastag/RechargeFastag1';
import RechargeSucessful from './Components/HomeFastag/RechargeSucessful';
import ActFastag from './Components/HomeFastag/ActivateFastag';
import ActivateFastag1 from './Components/HomeFastag/ActivateFastag1';
import ActivateFastag2 from './Components/HomeFastag/ActivateFastag2';
import ChaufferHome from './Components/HomeChauffer/ChaufferHome';
import ChaufferBook from './Components/HomeChauffer/ChaufferBook';
import ChaufferBooked from './Components/HomeChauffer/ChaufferBooked';
import ChaufferAwait from './Components/HomeChauffer/ChaufferAwait';
import ChaufferDeclined from './Components/HomeChauffer/ChaufferDeclined';
import Await from './Components/GarageVerification/Await';
import Tacking from './Components/AboutUs';
import 'izitoast-react/dist/iziToast.css';

import Dummypage from './Components/GarageBook/Dummypage';

import ContactUs from './Components/Contact';
import Faq from './Components/Faq';
import JoiinUs from './Components/joinUs';
import Services from './Components/Service';
import Booking1 from './Components/Booking/Booking1';
import ConfirmBooking from './Components/Booking/ConfirmBooking';
import Vehicaldelivery from './Components/Booking/Vehicaldelivery'
import Login from './Components/Login';
import Login2 from './Components/Login2';
import Signup from './Components/Signup';
import Otp from './Components/Otp';
import Resetpass from './Components/Resetpass';
import Profile from './Components/Profile';
import ProfileDashboard from './Components/ProfileDasboard/ProfileDashboard'
import MyGarage from './Components/ProfileDasboard/MyGarage';
import MyOrder from './Components/ProfileDasboard/MyOrder';
import Chats from './Components/ProfileDasboard/Chats';
import Favourites from './Components/Favourites/Favourites';
import MgCoin from './Components/ProfileDasboard/MgCoin';
import HelpsSupport from './Components/ProfileDasboard/HelpsSupport';
import Refer from './Components/ProfileDasboard/Refer';
import modifyreview from './Components/Booking/ModifyReview';
import Payment from './Components/Booking/PaymentDetails';
import Thanking from './Components/Booking/Thanking';
import Chat from './Components/Booking/Chat';
import Notification from './Components/Locaton/Notification';
import Search from './Components/Locaton/Search';
import Addvehical from './Components/Locaton/Addvihical';
import Addinstruction from './Components/Locaton/Addinstruction';
import Bookingid from './Components/QrPages/Bookingid';
//import Sidebar from './Components/dashborad/Sidebar';
import bokking from './Components/GarageVerification/Bokking'

//MOBLE RESPONSIVE
import Mob_tracking from './Components/MobileView/Mob_tracking';
import Mob_Secedule from './Components/MobileView/Mob_Secedule';
import Mob_Track2 from './Components/MobileView/Mob_Track2';
import Mob_Track3 from './Components/MobileView/Mob_Track3';
import Mob_Track4 from './Components/MobileView/Mob_Track4';
import SelectPayment_mob from './Components/MobileView/SelectPayment_mob';
import PlaceOrder_Mob from './Components/MobileView/PlaceOrder_Mob';
import PaySuccess_Mob from './Components/MobileView/PaySuccess_Mob';
import Congratulation_Mob from './Components/MobileView/Congratulation_Mob';
import GarageNotAvailable_Mob from './Components/MobileView/GarageNotAvailable_Mob';
import BookingCancle_Mob from './Components/MobileView/BookingCancle_Mob';
import SelectMap_Mob from './Components/MobileView/SelectMap_Mob';
import SaveAdd_Mob from './Components/MobileView/SaveAdd_Mob';
import GetCurrentLoc_Mob from './Components/MobileView/GetCurrentLoc_Mob';


//RESPONSIVE LOGIN
import Login_Mob from './Components/MobileView/Login_Mob';
import Otp_Mob from './Components/MobileView/Otb_Mob';
import SignUp_Mob from './Components/MobileView/SignUp_Mob';
import Login2_Mob from './Components/MobileView/Login2_Mob';
import Home_Mob from './Components/MobileView/Home_Mob';
import Vehical_history from './Components/MobileView/AddVehical_his';
import Vehical_Add from './Components/MobileView/AddVehical'
import Service_Mob from './Components/MobileView/Service_Mob'
import vehicla_mob from './Components/MobileView/Mob_VehicalRecive';
import Service_Add from './Components/MobileView/Service_Add'
import Service_Added from './Components/MobileView/Service_added'
import Estimate_Mob from './Components/MobileView/Estimate_Mob'
import Map_Mob from './Components/MobileView/Map_Mob'
import Garage_Mob from './Components/MobileView/Garage_Mob';
import Timedate_sched from './Components/MobileView/Timedate_sched'
import ConfirmBook_Mob from './Components/MobileView/ConfirmBook_Mob';



//SIDEBAR MOBILE
import Edit_Mob from './Components/Account/Sidebar/Edit_Mob'
import MgWallet_Mob from './Components/Account/Sidebar/MgWallet_Mob'
import MgWalletEmpty_Mob from './Components/Account/Sidebar/MgWalletEmpty_Mob'
import MgCoinDeal_Mob from './Components/Account/Sidebar/MgCoinDeal_Mob'
import MgCoinHis_Mob from './Components/Account/Sidebar/MgCoinHis_Mob'
import MgCoinFaq_Mob from './Components/Account/Sidebar/MgCoinFaq_Mob'
import MgCoinhTw_Mob from './Components/Account/Sidebar/MgCoinhTw_Mob'
import MgCoinFill_Mob from './Components/Account/Sidebar/MgCoinFill_Mob'
import SubmitGarage from './Components/Account/Sidebar/SubmitGarage'
import GarageAddVeh_Mob from './Components/Account/Sidebar/GarageAddVeh_Mob'
import EmptyEstimate_Mob from './Components/Account/Sidebar/EmptyEstimate_Mob'
import SaveEstimate_Mob from './Components/Account/Sidebar/SaveEstimate_Mob'
import RecentOrderEsti_Mob from './Components/Account/Sidebar/RecentOrderEsti_Mob'
import OrderEmpty_Mob from './Components/Account/Sidebar/OrderEmpty_Mob'
import OngoingOrder_Mob from './Components/Account/Sidebar/OngoingOrder_Mob'
import OrderHis_Mob from './Components/Account/Sidebar/OrderHis_Mob'
import HelpSupEmpty_Mob from './Components/Account/Sidebar/HelpSupEmpty_Mob'
import HelpTicke_Mob from './Components/Account/Sidebar/HelpTicke_Mob'
import HelpFaq_Mob from './Components/Account/Sidebar/HelpFaq_Mob'

import MyTicket_Mob from './Components/Account/Sidebar/MyTicket_Mob'
import Refer_Mob from './Components/Account/Sidebar/Refer_Mob'
import ChatEmpty_Mob from './Components/Account/Sidebar/ChatEmpty_Mob'
import Chat_Mob from './Components/Account/Sidebar/Chat_Mob'
import Fastage_Mob from './Components/Account/Sidebar/Fastage_Mob'

import ActiveFastage_Mob from './Components/Account/Sidebar/ActiveFastage_Mob'
import RechargeCard_Mob from './Components/Account/Sidebar/RechargeCard_Mob'
import RechargeCoupan_Mob from './Components/Account/Sidebar/RechargeCoupan_Mob'
import RechargeSuccess_Mob from './Components/Account/Sidebar/RechargeSuccess_Mob'
import PassbookEmpty_Mob from './Components/Account/Sidebar/PassbookEmpty_Mob'
import PassbookVehNo_Mob from './Components/Account/Sidebar/PassbookVehNo_Mob'
import PassbookVehical_Mob from './Components/Account/Sidebar/PassbookVehical_Mob'
import ActiveCard_Mob from './Components/Account/Sidebar/ActiveCard_Mob'



//QRcScanning
import Register_Mob from './Components/Account/Sidebar/Register_Mob'
import ActiveTab_Mob from './Components/Account/Sidebar/ActiveTab_Mob'
import ContactOwnerVeh_Mob from './Components/Account/Sidebar/ContactOwnerVeh_Mob'
import OtpVeri__Mob from './Components/Account/Sidebar/OtpVeri__Mob'
import Qrcode_Mob from './Components/Account/Sidebar/Qrcode_Mob'


//import JobCar from './Components/JobCard/JobCar';
import Jobcardprogress from './Components/JobCard/Jobcardprogress';
import Nextcarprogress from './Components/JobCard/Nextcarprogress';
import Accountscan from './Components/JobCard/Accountscan';
import Routes1 from './Components/dashborad/Routes';
import Location from './Components/Locaton/Location';
import Location1 from './Components/Locaton/Location1';
import AddChauffer from './Components/Chauffer/AddChauffer';
import Vehicalqr from './Components/QrPages/Vehicalqr';
import Mgcoinredeem from './Components/QrPages/Mgcoinredeem';
import Moreredeem from './Components/QrPages/Moreredeem';
import AwaitConfirm from './Components/GarageVerification/AwaitConfirm';

//tracking car
import CartTrack2 from './Components/Booking/Cartrack2';
import Carttrack3 from './Components/Booking/Carttrack3';
import Carttrack4 from './Components/Booking/Carttract4';
import Carttrack5 from './Components/Booking/Carttrack5';
import TrackFinish from './Components/Booking/TrackFinish';
import Outdelivery from './Components/Booking/Outdelivery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';

//import "react-step-progress/dist/index.css";
//
import { UserAuthContextProvider } from "./Components/context/UserAuthContext"
import compareandChoose from './Components/Compare';
import Routes from './Components/dashborad/Routes';
import MobAccount from './Components/Account/Routing/MobAccount';
import { makeid } from './Healper';
function App() {
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      console.log(localStorage.getItem('token'));
    } else {
      const token = makeid(10);
      localStorage.setItem("token", token);
      localStorage.setItem("isLogin",false)
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <TopNavbar></TopNavbar>
          {/* <UserAuthContextProvider> */}
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/home' component={Home} />
              <Route path='/Dummypage' component={Dummypage} />
              {/* <Route path='/' exact component={Login_Mob}/> */}
              <Route path='/HomeMaintain' component={HomeMaintain} />
              <Route path='/HomeMain1' component={HomeMain1} />
              <Route path="/Confirmbook" component={Aboutus} />
              <Route path='/joinus' component={JoiinUs} />
              <Route path='/services' component={Services} />
              <Route path='/faq' component={Faq} />
              <Route path='/contact' component={ContactUs} />
              <Route path='/booking1' component={Booking1} />
              <Route path='/confirmbooking' component={ConfirmBooking} />
              <Route path='/modifyreview' component={modifyreview} />
              <Route path="/Vehicaldelivery" component={Vehicaldelivery} />
              <Route path="/login" component={Login} />
              <Route path="/login2" component={Login2} />
              <Route path="/signup" component={Signup} />
              <Route path="/otp" component={Otp} />
              <Route path="/Resetpass" component={Resetpass} />
              <Route path="/profile" component={Profile} />
              <Route path="/profileDashboard" component={ProfileDashboard} />
              <Route path="/MyGarage" component={MyGarage} />
              <Route path="/MyOrder" component={MyOrder} />
              <Route path="/Chats" component={Chats} />
              <Route path="/Favourites" component={Favourites} />
              <Route path="/MgCoin" component={MgCoin} />
              <Route path="/HelpsSupport" component={HelpsSupport} />
              <Route path="/Refer" component={Refer} />
              <Route path="/payment" component={Payment} />
              <Route path="/thanking" component={Thanking} />
              <Route path="/Chat" component={Chat} />
              {/* <Route path="/Sidebar" component={Sidebar}/> */}
              <Route path="/jobprogress" component={Jobcardprogress} />
              <Route path="/Nextcarprogress" component={Nextcarprogress} />
              <Route path="/Accountscan" component={Accountscan} />
              <Route path="/Routes" component={Routes1} />
              <Route path="/location" component={Location} />
              <Route path="/notification" component={Notification} />
              <Route path="/location1" component={Location1} />
              <Route path="/search" component={Search} />
              <Route path="/addvehical" component={Addvehical} />
              <Route path="/addinstruction" component={Addinstruction} />
              <Route path="/addchauffer" component={AddChauffer} />
              <Route path="/PeriodicService" component={Periodic} />
              <Route path="/PeriodicADDvechicle" component={PeriodicADDvechicle} />
              <Route path="/PeriodicServiceAdded" component={PeriodicServiceAdded} />
              <Route path="/BasicShowmore" component={BasicShowmore} />
              <Route path="/ServiceEstimates" component={ServiceEstimates} />
              <Route path="/BookGarage" component={BookGarage} />
              <Route path="/LoginGarage" component={LoginBook} />
              <Route path="/vehicalqr" component={Vehicalqr} />
              <Route path="/Bookingid" component={Bookingid} />
              <Route path="/Mgcoinredeem" component={Mgcoinredeem} />
              <Route path="/Moreredeem" component={Moreredeem} />
              <Route path="/Adaddress" component={Address} />
              <Route path="/PaymentGarage" component={PayBook} />
              <Route path="/Paynow" component={PayNow} />
              <Route path="/ScheduleBook" component={ScheduleBook} />
              <Route path="/HomeChallan" component={HomeChallan} />
              <Route path="/DueChallan" component={DueChallan} />
              <Route path="/DueChallan1" component={DueChallan1} />
              <Route path="/HomeFasTag" component={HomeFasTag} />
              <Route path="/BuyFastag" component={BuyFastag} />
              <Route path="/FastagOrder" component={FastagSucessful} />
              <Route path="/RechargeFastag" component={RechargeFasTag} />
              <Route path="/RechargeFastag1" component={RechargeFastag1} />
              <Route path="/RechargeSucessful" component={RechargeSucessful} />
              <Route path="/ActivateFastag" component={ActFastag} />
              <Route path="/ActivateFastag1" component={ActivateFastag1} />
              <Route path="/ActivateFastag2" component={ActivateFastag2} />
              <Route path="/ChaufferBook" component={ChaufferBook} />
              <Route path="/ChaufferBooked" component={ChaufferBooked} />
              <Route path="/ChaufferAwait" component={ChaufferAwait} />
              <Route path="/Await" component={Await} />
              <Route path="/AwaitConfirm" component={AwaitConfirm} />
              <Route path="/ChaufferDeclined" component={ChaufferDeclined} />
              <Route path="/ChaufferHome" component={ChaufferHome} />
              <Route path="/bokking" component={bokking} />
              <Route path="/Outdelivery" component={Outdelivery} />
              <Route path="/compareandChoose" component={compareandChoose} />
              {/* tracking  car*/}
              <Route path="/CartTrack2" component={CartTrack2} />
              <Route path="/Carttrack3" component={Carttrack3} />
              <Route path="/Carttrack4" component={Carttrack4} />
              <Route path="/Carttrack5" component={Carttrack5} />
              <Route path="/TrackFinish" component={TrackFinish} />

              {/*MOBILE RESPONSIVE*/}
              <Route path="/Login2_Mob" component={Login2_Mob} />
              <Route path="/SignUp_Mob" component={SignUp_Mob} />
              <Route path="/Otp_Mob" component={Otp_Mob} />
              <Route path="/Home_Mob" component={Home_Mob} />
              <Route path="/Mob_tracking" component={Mob_tracking} />
              <Route path="/Mob_Secedule" component={Mob_Secedule} />
              <Route path="/Mob_Track2" component={Mob_Track2} />
              <Route path="/Mob_Track3" component={Mob_Track3} />
              <Route path="/Mob_Track4" component={Mob_Track4} />
              <Route path="/Vehical_history" component={Vehical_history} />
              <Route path="/Vehical_Add" component={Vehical_Add} />
              <Route path="/Service_Mob" component={Service_Mob} />
              <Route path="/vehicla_mob" component={vehicla_mob} />
              <Route path="/Service_Add" component={Service_Add} />
              <Route path="/Service_Added" component={Service_Added} />
              <Route path="/Estimate_Mob" component={Estimate_Mob} />
              <Route path="/Map_Mob" component={Map_Mob} />
              <Route path="/Garage_Mob" component={Garage_Mob} />
              <Route path="/Timedate_sched" component={Timedate_sched} />
              <Route path="/SelectPayment_mob" component={SelectPayment_mob} />
              <Route path="/PaySuccess_Mob" component={PaySuccess_Mob} />
              <Route path="/PlaceOrder_Mob" component={PlaceOrder_Mob} />
              <Route path="/Congratulation_Mob" component={Congratulation_Mob} />
              <Route path="/GarageNotAvailable_Mob" component={GarageNotAvailable_Mob} />
              <Route path="/BookingCancle_Mob" component={BookingCancle_Mob} />
              <Route path="/SelectMap_Mob" component={SelectMap_Mob} />
              <Route path="/SaveAdd_Mob" component={SaveAdd_Mob} />
              <Route path="/GetCurrentLoc_Mob" component={GetCurrentLoc_Mob} />
              <Route path="/ConfirmBook_Mob" component={ConfirmBook_Mob} />
              <Route path="/mobaccount" component={MobAccount} />


              {/* SIDEBAR MOBILE */}
              <Route path="/Edit_Mob" component={Edit_Mob} />
              <Route path="/MgWallet_Mob" component={MgWallet_Mob} />
              <Route path="/MgWalletEmpty_Mob" component={MgWalletEmpty_Mob} />
              <Route path="/MgCoinDeal_Mob" component={MgCoinDeal_Mob} />
              <Route path="/MgCoinHis_Mob" component={MgCoinHis_Mob} />
              <Route path="/MgCoinFaq_Mob" component={MgCoinFaq_Mob} />
              <Route path="/MgCoinhTw_Mob" component={MgCoinhTw_Mob} />
              <Route path="/MgCoinFill_Mob" component={MgCoinFill_Mob} />
              <Route path="/SubmitGarage" component={SubmitGarage} />
              <Route path="/GarageAddVeh_Mob" component={GarageAddVeh_Mob} />
              <Route path="/EmptyEstimate_Mob" component={EmptyEstimate_Mob} />
              <Route path="/SaveEstimate_Mob" component={SaveEstimate_Mob} />
              <Route path="/RecentOrderEsti_Mob" component={RecentOrderEsti_Mob} />
              <Route path="/OrderEmpty_Mob" component={OrderEmpty_Mob} />
              <Route path="/OngoingOrder_Mob" component={OngoingOrder_Mob} />
              <Route path="/OrderHis_Mob" component={OrderHis_Mob} />
              <Route path="/HelpSupEmpty_Mob" component={HelpSupEmpty_Mob} />
              <Route path="/MyTicket_Mob" component={MyTicket_Mob} />
              <Route path="/HelpTicke_Mob" component={HelpTicke_Mob} />
              <Route path="/HelpFaq_Mob" component={HelpFaq_Mob} />

              <Route path="/Register_Mob" component={Register_Mob} />
              <Route path="/ActiveTab_Mob" component={ActiveTab_Mob} />
              <Route path="/ContactOwnerVeh_Mob" component={ContactOwnerVeh_Mob} />
              <Route path="/OtpVeri__Mob" component={OtpVeri__Mob} />
              <Route path="/Qrcode_Mob" component={Qrcode_Mob} />

              <Route path="/Refer_Mob" component={Refer_Mob} />
              <Route path="/ChatEmpty_Mob" component={ChatEmpty_Mob} />
              <Route path="/Chat_Mob" component={Chat_Mob} />
              <Route path="/Fastage_Mob" component={Fastage_Mob} />
              <Route path="/ActiveFastage_Mob" component={ActiveFastage_Mob} />
              <Route path="/RechargeCard_Mob" component={RechargeCard_Mob} />
              <Route path="/RechargeCoupan_Mob" component={RechargeCoupan_Mob} />
              <Route path="/RechargeSuccess_Mob" component={RechargeSuccess_Mob} />
              <Route path="/PassbookEmpty_Mob" component={PassbookEmpty_Mob} />
              <Route path="/PassbookVehNo_Mob" component={PassbookVehNo_Mob} />
              <Route path="/PassbookVehical_Mob" component={PassbookVehical_Mob} />
              <Route path="/ActiveCard_Mob" component={ActiveCard_Mob} />
            </Switch>
          {/* </UserAuthContextProvider> */}
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
