import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import FirstChoiceGarage from '../src/Images/FirstChoiceGarage.png';
import CarOnStand from '../src/Images/CarOnStand.png';
import OilFilling from '../src/Images/OilFilling.png';
import systemUpdate from '../src/Images/systemUpdate.png';
import check from '../src/Images/check.png';
import BasicService from '../src/Images/BasicService.png';
import StandardService from '../src/Images/StandardService.png';
import EngineScanning from '../src/Images/EngineScanning.png';
import ComprehensiveService from '../src/Images/ComprehensiveService.png';
import CompleteService from '../src/Images/CompleteService.png';
import CarInspection from '../src/Images/CarInspection.png';
import StarterMotor from '../src/Images/StarterMotor.png';
import CarFluid from '../src/Images/CarFluid.png';
import SideCar from '../src/Images/SideCar.png';
import './BkByAdd.css';

const BookByGarageADD = () => (
    <>
        <div>
            <div className='container-fluid p-0'>
                <BookADDFirst></BookADDFirst>
                <BookADDSecond></BookADDSecond>
            </div>
        </div>
    </>
);

const BookADDFirst = () =>(
    <>
        <div className='FirstBox px-5 py-2'>
        
<Row style={{borderBottom:'1px solid #999999'}}>
    <Col sm={1} style={{width:'3%'}}><Link to="/BBGVechicleAdded"><svg xmlns="http://www.w3.org/2000/svg" width="20.667" height="20.143" viewBox="0 0 20.667 20.143">
  <g id="Rounded_Button" data-name="Rounded Button" transform="translate(20.667 20.143) rotate(180)">
    <path id="icon-arrow-left" d="M8.783,21.441l1.024,1.024a1.1,1.1,0,0,0,1.564,0L20.338,13.5a1.1,1.1,0,0,0,0-1.564L11.371,2.972a1.1,1.1,0,0,0-1.564,0L8.783,4A1.108,1.108,0,0,0,8.8,5.579l5.558,5.3H1.1A1.1,1.1,0,0,0,0,11.981v1.476A1.1,1.1,0,0,0,1.1,14.564H14.36L8.8,19.859A1.1,1.1,0,0,0,8.783,21.441Z" transform="translate(0.004 -2.647)" fill="#2650d8"/>
  </g>
</svg></Link></Col>
    <Col sm={11} style={{width:'97%'}}> 
    <Row >
                
                <Col sm={8}>
                <Row>
                    <Col sm={2}><img src={FirstChoiceGarage} alt="First choice garage" style={{width:'150px',height:'150px'}}></img></Col>
                    <Col sm={10} className='px-4'>
                        <Row>
                            <Col sm={8}>
                                <p className="poppins25">Mahindra First Choice</p>
                                <p className='poppins15'>Service & Repairs <span className='stars'><svg xmlns="http://www.w3.org/2000/svg" width="121.098" height="18.019" viewBox="0 0 121.098 18.019">
  <g id="Group_27073" data-name="Group 27073" transform="translate(-570.693 -124)">
    <path id="Path_20422" data-name="Path 20422" d="M1226.73,338.8a.993.993,0,0,0-.86-.686l-5.42-.493-2.14-5.017a1,1,0,0,0-1.84,0l-2.14,5.016-5.42.493a.993.993,0,0,0-.86.686,1,1,0,0,0,.29,1.06l4.1,3.594-1.21,5.323a1,1,0,0,0,.97,1.221,1.027,1.027,0,0,0,.52-.142l4.67-2.8,4.68,2.8a1,1,0,0,0,1.48-1.079l-1.21-5.323,4.1-3.593a.988.988,0,0,0,.29-1.061Z" transform="translate(-637.309 -208)" fill="#ffc107"/>
    <path id="Path_20423" data-name="Path 20423" d="M1252.27,338.8a1,1,0,0,0-.86-.686l-5.42-.493-2.15-5.017a.979.979,0,0,0-.91-.606,1,1,0,0,0-.92.607l-2.15,5.016-5.42.493a1,1,0,0,0-.57,1.746l4.1,3.594-1.21,5.323a1,1,0,0,0,1.49,1.079l4.68-2.8,4.67,2.8a1,1,0,0,0,1.1-.048,1.024,1.024,0,0,0,.39-1.031l-1.21-5.323,4.09-3.593a.993.993,0,0,0,.3-1.061Z" transform="translate(-637.309 -208)" fill="#ffc107"/>
    <path id="Path_20424" data-name="Path 20424" d="M1277.8,338.8a.993.993,0,0,0-.86-.686l-5.42-.493-2.14-5.017a1,1,0,0,0-1.84,0l-2.14,5.016-5.43.493a1,1,0,0,0-.56,1.746l4.1,3.594-1.21,5.323a.988.988,0,0,0,.39,1.031.964.964,0,0,0,.58.19.992.992,0,0,0,.51-.142l4.68-2.8,4.67,2.8a1,1,0,0,0,1.49-1.079l-1.21-5.323,4.1-3.593a1.007,1.007,0,0,0,.29-1.061Z" transform="translate(-637.309 -208)" fill="#ffc107"/>
    <path id="Path_20425" data-name="Path 20425" d="M1303.33,338.8a.993.993,0,0,0-.86-.686l-5.42-.493-2.14-5.017a1,1,0,0,0-1.84,0l-2.14,5.016-5.42.493a1,1,0,0,0-.57,1.746l4.1,3.594-1.21,5.323a1,1,0,0,0,.97,1.221.966.966,0,0,0,.51-.142l4.68-2.8,4.68,2.8a1,1,0,0,0,1.48-1.079l-1.21-5.323,4.1-3.593a.989.989,0,0,0,.29-1.061Z" transform="translate(-637.309 -208)" fill="#ffc107"/>
    <path id="Path_20426" data-name="Path 20426" d="M1327.94,338.862h0a.239.239,0,0,1,.21.17l.72-.231-.72.232a.242.242,0,0,1-.07.265h0l-4.1,3.593-.33.3.1.435,1.2,5.323h0a.233.233,0,0,1-.09.257h0a.244.244,0,0,1-.27.013h-.01l-4.67-2.795-.39-.23-.38.23-4.68,2.795h0a.222.222,0,0,1-.12.036.269.269,0,0,1-.15-.048.232.232,0,0,1-.09-.257h0l1.2-5.322.1-.435-.33-.3-4.1-3.593v0a.222.222,0,0,1-.07-.263.242.242,0,0,1,.21-.172h0l5.42-.492.45-.04.17-.412,2.15-5.016h0a.245.245,0,0,1,.22-.152.249.249,0,0,1,.23.151h0l2.15,5.016.17.412.45.04Z" transform="translate(-637.309 -208)" fill="none" stroke="#999" stroke-width="1.5"/>
  </g>
</svg></span></p>
                                

                            </Col>
                            <Col sm={4}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68">
  <defs>
    <filter id="Ellipse_1542" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_26144" data-name="Group 26144" transform="translate(-1314 -503)">
    <g transform="matrix(1, 0, 0, 1, 1314, 503)" filter="url(#Ellipse_1542)">
      <circle id="Ellipse_1542-2" data-name="Ellipse 1542" cx="25" cy="25" r="25" transform="translate(9 6)" fill="#53bd8c"/>
    </g>
    <g id="telephone-2" transform="translate(1336.96 522.919)">
      <path id="Path_1428" data-name="Path 1428" d="M5.386,14.733a23.514,23.514,0,0,0,7.821,6.127,12.173,12.173,0,0,0,4.377,1.3c.106,0,.207.009.312.009a3.624,3.624,0,0,0,2.811-1.208.1.1,0,0,0,.018-.023,11.832,11.832,0,0,1,.886-.919c.216-.207.436-.423.648-.643a2.218,2.218,0,0,0-.009-3.3l-2.76-2.76a2.234,2.234,0,0,0-1.617-.744,2.309,2.309,0,0,0-1.635.739l-1.644,1.644c-.152-.087-.308-.165-.455-.239a5.679,5.679,0,0,1-.505-.276A17.4,17.4,0,0,1,9.478,10.65,10.02,10.02,0,0,1,8.073,8.409c.432-.39.836-.8,1.226-1.2.138-.142.28-.285.423-.427a2.354,2.354,0,0,0,.762-1.653,2.336,2.336,0,0,0-.762-1.653L8.353,2.108c-.161-.161-.312-.317-.468-.478-.3-.312-.62-.634-.932-.923A2.29,2.29,0,0,0,5.336,0,2.357,2.357,0,0,0,3.7.712L1.983,2.429A3.529,3.529,0,0,0,.931,4.689,8.5,8.5,0,0,0,1.57,8.363,21.375,21.375,0,0,0,5.386,14.733ZM2.052,4.786a2.429,2.429,0,0,1,.73-1.561L4.49,1.516a1.237,1.237,0,0,1,.845-.39,1.173,1.173,0,0,1,.827.4c.308.285.6.583.909.9.156.161.317.321.478.487L8.918,4.28a1.247,1.247,0,0,1,.432.859A1.247,1.247,0,0,1,8.918,6c-.142.142-.285.289-.427.432-.427.432-.827.84-1.268,1.231L7.2,7.683A.9.9,0,0,0,6.97,8.7c0,.014.009.023.014.037A10.809,10.809,0,0,0,8.6,11.362a18.365,18.365,0,0,0,4.427,4.032,6.574,6.574,0,0,0,.606.331,5.681,5.681,0,0,1,.505.276l.051.028a.96.96,0,0,0,.445.115.974.974,0,0,0,.684-.312l1.718-1.718a1.215,1.215,0,0,1,.84-.409,1.153,1.153,0,0,1,.813.409l2.769,2.765a1.108,1.108,0,0,1-.014,1.731c-.193.207-.395.4-.611.611a13.226,13.226,0,0,0-.96,1,2.521,2.521,0,0,1-1.97.836c-.078,0-.161,0-.239-.009A11.059,11.059,0,0,1,13.7,19.859a22.338,22.338,0,0,1-7.445-5.833A20.459,20.459,0,0,1,2.63,7.987,7.407,7.407,0,0,1,2.052,4.786Z" transform="translate(-0.912 0)" fill="#fff" stroke="#fff" stroke-width="1"/>
    </g>
  </g>
</svg>
<svg xmlns="http://www.w3.org/2000/svg"  width="68" height="68" viewBox="0 0 68 68">
  <defs>
    <filter id="Ellipse_1931" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_26145" data-name="Group 26145" transform="translate(-728.973 -111)">
    <g transform="matrix(1, 0, 0, 1, 728.97, 111)" filter="url(#Ellipse_1931)">
      <circle id="Ellipse_1931-2" data-name="Ellipse 1931" cx="25" cy="25" r="25" transform="translate(9 6)" fill="#53bd8c"/>
    </g>
    <path id="Path_22984" data-name="Path 22984" d="M56.129,36.978a9.837,9.837,0,0,1-1.056,4.461,9.978,9.978,0,0,1-8.921,5.517A9.835,9.835,0,0,1,41.691,45.9L35,48.129l2.23-6.691a9.837,9.837,0,0,1-1.056-4.461,9.978,9.978,0,0,1,5.517-8.921A9.838,9.838,0,0,1,46.151,27h.587a9.954,9.954,0,0,1,9.391,9.391Z" transform="translate(717.408 104.436)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>


                            </Col>
                        </Row>
                        <p className='poppins15light'><svg xmlns="http://www.w3.org/2000/svg" width="8.279" height="12.766" viewBox="0 0 8.279 12.766">
  <path id="Icon_metro-location" data-name="Icon metro-location" d="M12.494,1.928a4.067,4.067,0,0,0-4.14,3.989c0,3.989,4.14,8.777,4.14,8.777s4.14-4.787,4.14-8.777a4.067,4.067,0,0,0-4.14-3.989Zm0,6.433A2.491,2.491,0,0,1,9.959,5.918a2.537,2.537,0,0,1,5.071,0A2.491,2.491,0,0,1,12.494,8.361Zm-1.6-2.444a1.605,1.605,0,0,1,3.208,0,1.605,1.605,0,0,1-3.208,0Z" transform="translate(-8.355 -1.928)" fill="#999"/>
</svg>
Kandivali East  400 101
</p>
                        <Row>
                        <ul className='offers'>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="96" height="38" viewBox="0 0 96 38">
  <g id="Group_26469" data-name="Group 26469" transform="translate(0.788 0.5)">
    <rect id="Rectangle_8362" data-name="Rectangle 8362" width="95" height="37" rx="5" transform="translate(-0.288)" fill="none" stroke="#2650d8" stroke-width="1"/>
    <g id="Group_26466" data-name="Group 26466" transform="translate(12.333 10)">
      <path id="Path_28639" data-name="Path 28639" d="M501.273,581.22l-6-6a1.325,1.325,0,0,0-.94-.387h-4.666a1.337,1.337,0,0,0-1.334,1.333v4.667a1.331,1.331,0,0,0,.394.947l6,6a1.324,1.324,0,0,0,.94.386,1.3,1.3,0,0,0,.94-.393l4.666-4.667a1.3,1.3,0,0,0,.394-.94A1.347,1.347,0,0,0,501.273,581.22Zm-9.419-1.8a1,1,0,1,1,1-1A1,1,0,0,1,491.854,579.418Z" transform="translate(-488.333 -573)" fill="none" stroke="#2650d8" stroke-width="1.5"/>
      <text id="Offers" transform="translate(21.366 13)" fill="#2650d8" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Offers</tspan></text>
    </g>
  </g>
</svg></li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="96" height="38" viewBox="0 0 96 38">
  <g id="Group_27076" data-name="Group 27076" transform="translate(0.788 0.5)">
    <rect id="Rectangle_8362" data-name="Rectangle 8362" width="95" height="37" rx="5" transform="translate(-0.288)" fill="none" stroke="#2650d8" stroke-width="1"/>
    <g id="Group_26466" data-name="Group 26466" transform="translate(12.333 10)">
      <text id="Direction" transform="translate(21.366 13)" fill="#2650d8" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Direction</tspan></text>
    </g>
    <g id="Group_27079" data-name="Group 27079" transform="translate(10.349 9.529)">
      <g id="Group_26380" data-name="Group 26380" transform="translate(0 2.204)">
        <path id="Path_28633" data-name="Path 28633" d="M216.667,577.54v10.827l4.736-2.706,5.414,2.706,4.736-2.706V574.833l-4.736,2.707-5.414-2.707Z" transform="translate(-216.667 -574.833)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Path_28634" data-name="Path 28634" d="M226.667,577.5v10.828" transform="translate(-216.516 -574.793)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Path_28635" data-name="Path 28635" d="M221.333,574.833v10.828" transform="translate(-216.597 -574.833)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      </g>
    </g>
  </g>
</svg></li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="96" height="38" viewBox="0 0 96 38">
  <g id="Group_27077" data-name="Group 27077" transform="translate(0.788 0.5)">
    <rect id="Rectangle_8362" data-name="Rectangle 8362" width="95" height="37" rx="5" transform="translate(-0.288)" fill="none" stroke="#2650d8" stroke-width="1"/>
    <g id="Group_26466" data-name="Group 26466" transform="translate(12.333 10)">
      <text id="Favourite" transform="translate(16.366 13)" fill="#2650d8" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Favourite</tspan></text>
    </g>
    <path id="Path_30207" data-name="Path 30207" d="M369.378,576.7a4.088,4.088,0,0,0-5.786,0l-.789.788-.787-.788a4.091,4.091,0,1,0-5.786,5.784l.789.789,5.784,5.786,5.786-5.786.789-.789a4.089,4.089,0,0,0,0-5.784Z" transform="translate(-347.424 -563.779)" fill="none" stroke="#2650d8" stroke-width="1.5"/>
  </g>
</svg></li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="96" height="38" viewBox="0 0 96 38">
  <g id="Group_27078" data-name="Group 27078" transform="translate(0.788 0.5)">
    <rect id="Rectangle_8362" data-name="Rectangle 8362" width="95" height="37" rx="5" transform="translate(-0.288)" fill="none" stroke="#2650d8" stroke-width="1"/>
    <g id="Group_26466" data-name="Group 26466" transform="translate(12.333 10)">
      <text id="Share" transform="translate(21.366 13)" fill="#2650d8" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Share</tspan></text>
      <g id="Group_27080" data-name="Group 27080" transform="translate(-0.709 1.271)">
        <path id="Path_28641" data-name="Path 28641" d="M612.169,588.5A2.169,2.169,0,1,0,610,586.336,2.168,2.168,0,0,0,612.169,588.5Z" transform="translate(-601.325 -574.045)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Path_28642" data-name="Path 28642" d="M604.169,583.837A2.169,2.169,0,1,0,602,581.669,2.168,2.168,0,0,0,604.169,583.837Z" transform="translate(-602 -574.439)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Path_28643" data-name="Path 28643" d="M605.727,582.507l4.937,2.877" transform="translate(-601.685 -574.186)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Path_28644" data-name="Path 28644" d="M612.169,579.17A2.169,2.169,0,1,0,610,577,2.168,2.168,0,0,0,612.169,579.17Z" transform="translate(-601.325 -574.833)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Path_28645" data-name="Path 28645" d="M610.657,577.84l-4.93,2.877" transform="translate(-601.685 -574.579)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      </g>
    </g>
  </g>
</svg></li>
                            <li><svg xmlns="http://www.w3.org/2000/svg"  width="224" height="25" viewBox="0 0 224 25">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_7307" data-name="Rectangle 7307" width="25" height="25" fill="#ed7d2b"/>
    </clipPath>
  </defs>
  <g id="Group_26053" data-name="Group 26053" transform="translate(-97 -979)">
    <text id="_50_Off_I_Use_Code:_TRYNEW" data-name="50% Off I Use Code: TRYNEW" transform="translate(127 997)" fill="#ed7d2b" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">50% Off I Use Code: TRYNEW</tspan></text>
    <g id="Group_18144" data-name="Group 18144" transform="translate(97 979)" clip-path="url(#clip-path)">
      <path id="Path_19133" data-name="Path 19133" d="M451.241,646.826a.736.736,0,0,1,0-.647l.933-1.908a2.171,2.171,0,0,0-.936-2.883l-1.875-1a.731.731,0,0,1-.381-.524l-.366-2.092A2.172,2.172,0,0,0,446.161,636l-2.1.3a.729.729,0,0,1-.616-.2l-1.527-1.477a2.171,2.171,0,0,0-3.031,0l-1.527,1.477a.727.727,0,0,1-.615.2l-2.1-.3a2.17,2.17,0,0,0-2.452,1.781l-.368,2.092a.729.729,0,0,1-.38.524l-1.877,1a2.171,2.171,0,0,0-.936,2.882l.933,1.908a.728.728,0,0,1,0,.647l-.933,1.908a2.172,2.172,0,0,0,.936,2.883l1.877,1a.731.731,0,0,1,.38.524l.368,2.092a2.166,2.166,0,0,0,2.139,1.8,2.21,2.21,0,0,0,.313-.021l2.1-.3a.731.731,0,0,1,.615.2l1.527,1.477a2.171,2.171,0,0,0,3.031,0l1.527-1.477a.733.733,0,0,1,.616-.2l2.1.3a2.172,2.172,0,0,0,2.453-1.782l.366-2.092a.733.733,0,0,1,.381-.524l1.875-1a2.171,2.171,0,0,0,.936-2.883Zm-13.724-6.814a2.644,2.644,0,1,1-2.644,2.644A2.648,2.648,0,0,1,437.517,640.012Zm-1.364,11.758a.721.721,0,0,1-1.02-1.019l9.518-9.518a.72.72,0,0,1,1.019,1.019Zm7.133,1.221a2.644,2.644,0,1,1,2.644-2.644A2.648,2.648,0,0,1,443.285,652.992Z" transform="translate(-427.899 -634)" fill="#ed7d2b"/>
      <path id="Path_19134" data-name="Path 19134" d="M440.547,646.115a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,440.547,646.115Z" transform="translate(-425.161 -630.968)" fill="#ed7d2b"/>
      <path id="Path_19135" data-name="Path 19135" d="M435.934,639.962a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,435.934,639.962Z" transform="translate(-426.315 -632.508)" fill="#ed7d2b"/>
    </g>
  </g>
</svg>
</li>
                        </ul>
                        




                        </Row>
                    </Col>
                </Row>
                

                    <Row></Row>
                </Col>
                <Col sm={4}>
                
                <Row>
                    <Col sm={8} style={{paddingLeft:'34px'}}><img src={CarOnStand} style={{width:'250px',height:'144px'}}></img></Col>
                    <Col sm={4}>
                    <img src={OilFilling} style={{width:'120px',height:'70px',marginBottom:'5px'}}></img><svg xmlns="http://www.w3.org/2000/svg" width="120" height="70" viewBox="0 0 120 70">
  <g id="Group_20676" data-name="Group 20676" transform="translate(0.158 0.256)">
    <rect id="Rectangle_8039" data-name="Rectangle 8039" width="120" height="70" transform="translate(-0.158 -0.256)" fill="#eceff5"/>
    <g id="Group_20675" data-name="Group 20675" transform="translate(27.842 17.411)">
      <text id="_20_Images" data-name="20 Images" transform="translate(0 13.334)" fill="#5d6186" font-size="12" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">20 Images</tspan></text>
      <text id="view_all" data-name="view all" transform="translate(17 31.334)" fill="#5d6186" font-size="9" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">view all</tspan></text>
    </g>
  </g>
</svg>
</Col>
                </Row>
                    
                    
                    
                </Col>
            </Row></Col>
</Row>
<Row>
    <ul className='Benefits'>
        <li><svg xmlns="http://www.w3.org/2000/svg" width="144" height="20" viewBox="0 0 144 20">
  <g id="Group_27086" data-name="Group 27086" transform="translate(-50 -282)">
    <text id="Service_Warranty" data-name="Service Warranty" transform="translate(83 298)" fill="#5d6186" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Service Warranty</tspan></text>
    <path id="Path_26970" data-name="Path 26970" d="M93,207a9,9,0,1,0,9,9A9.01,9.01,0,0,0,93,207Zm4.151,7.613-4.725,4.726a.282.282,0,0,1-.388,0l-3.17-3.17a.277.277,0,0,1,0-.389l.405-.4a.276.276,0,0,1,.388,0l2.471,2.471a.139.139,0,0,0,.2,0l4.027-4.027a.283.283,0,0,1,.388,0l.405.406a.274.274,0,0,1,0,.388Z" transform="translate(-34 76.633)" fill="#53bd8c"/>
  </g>
</svg>
</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" width="125" height="20" viewBox="0 0 125 20">
  <g id="Group_27085" data-name="Group 27085" transform="translate(-241 -282)">
    <text id="Early_Drop_off" data-name="Early Drop off" transform="translate(274 298)" fill="#5d6186" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Early Drop off</tspan></text>
    <path id="Path_26967" data-name="Path 26967" d="M93,207a9,9,0,1,0,9,9A9.01,9.01,0,0,0,93,207Zm4.151,7.613-4.725,4.726a.282.282,0,0,1-.388,0l-3.17-3.17a.277.277,0,0,1,0-.389l.405-.4a.276.276,0,0,1,.388,0l2.471,2.471a.139.139,0,0,0,.2,0l4.027-4.027a.283.283,0,0,1,.388,0l.405.406a.274.274,0,0,1,0,.388Z" transform="translate(157 76.633)" fill="#53bd8c"/>
  </g>
</svg>
</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" width="199.693" height="20" viewBox="0 0 199.693 20">
  <g id="Group_27084" data-name="Group 27084" transform="translate(-447 -282)">
    <text id="OEM_and_OES_Parts_Used" data-name="OEM and OES Parts Used" transform="translate(479.693 298)" fill="#5d6186" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">OEM and OES Parts Used</tspan></text>
    <path id="Path_26969" data-name="Path 26969" d="M93,207a9,9,0,1,0,9,9A9.01,9.01,0,0,0,93,207Zm4.151,7.613-4.725,4.726a.282.282,0,0,1-.388,0l-3.17-3.17a.277.277,0,0,1,0-.389l.405-.4a.276.276,0,0,1,.388,0l2.471,2.471a.139.139,0,0,0,.2,0l4.027-4.027a.283.283,0,0,1,.388,0l.405.406a.274.274,0,0,1,0,.388Z" transform="translate(363 76.633)" fill="#53bd8c"/>
  </g>
</svg>
</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" width="133.693" height="20" viewBox="0 0 133.693 20">
  <g id="Group_27083" data-name="Group 27083" transform="translate(-691.693 -282)">
    <text id="Free_Inspection" data-name="Free Inspection" transform="translate(724.386 298)" fill="#5d6186" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Free Inspection</tspan></text>
    <path id="Path_26966" data-name="Path 26966" d="M93,207a9,9,0,1,0,9,9A9.01,9.01,0,0,0,93,207Zm4.151,7.613-4.725,4.726a.282.282,0,0,1-.388,0l-3.17-3.17a.277.277,0,0,1,0-.389l.405-.4a.276.276,0,0,1,.388,0l2.471,2.471a.139.139,0,0,0,.2,0l4.027-4.027a.283.283,0,0,1,.388,0l.405.406a.274.274,0,0,1,0,.388Z" transform="translate(607.693 76.633)" fill="#53bd8c"/>
  </g>
</svg>
</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" width="206.883" height="20" viewBox="0 0 206.883 20">
  <g id="Group_27082" data-name="Group 27082" transform="translate(-912 -282)">
    <text id="Free_Pick_Up_and_Drop_Off" data-name="Free Pick Up and Drop Off" transform="translate(944.883 298)" fill="#5d6186" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Free Pick Up and Drop Off</tspan></text>
    <path id="Path_26968" data-name="Path 26968" d="M93,207a9,9,0,1,0,9,9A9.01,9.01,0,0,0,93,207Zm4.151,7.613-4.725,4.726a.282.282,0,0,1-.388,0l-3.17-3.17a.277.277,0,0,1,0-.389l.405-.4a.276.276,0,0,1,.388,0l2.471,2.471a.139.139,0,0,0,.2,0l4.027-4.027a.283.283,0,0,1,.388,0l.405.406a.274.274,0,0,1,0,.388Z" transform="translate(828 76.633)" fill="#53bd8c"/>
  </g>
</svg>
</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" width="205.883" height="20" viewBox="0 0 205.883 20">
  <g id="Group_27081" data-name="Group 27081" transform="translate(-1163.883 -282)">
    <text id="Customer_Waiting_Lounge" data-name="Customer Waiting Lounge" transform="translate(1196.766 298)" fill="#5d6186" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Customer Waiting Lounge</tspan></text>
    <path id="Path_26965" data-name="Path 26965" d="M93,207a9,9,0,1,0,9,9A9.01,9.01,0,0,0,93,207Zm4.151,7.613-4.725,4.726a.282.282,0,0,1-.388,0l-3.17-3.17a.277.277,0,0,1,0-.389l.405-.4a.276.276,0,0,1,.388,0l2.471,2.471a.139.139,0,0,0,.2,0l4.027-4.027a.283.283,0,0,1,.388,0l.405.406a.274.274,0,0,1,0,.388Z" transform="translate(1079.883 76.633)" fill="#53bd8c"/>
  </g>
</svg>
</li>
    </ul>
</Row>

               
        </div>
    </>
);

const BookADDSecond = () =>(
    <>
        <div className='container-fluid'>
            <Row className='px-5 py-3'>
                <Col sm={3} ><BookADDPartOne></BookADDPartOne></Col>
                <Col sm={5}><BookADDPartTwo></BookADDPartTwo></Col>
                <Col sm={4}><BookADDPartThree></BookADDPartThree></Col>
            </Row>
        </div>
    </>
);
const SearchBar = () => (
    <form action="/" method="get">
    <div className='Searchbox'>
    <i class='fas fa-search'></i>
        <input
        className='SearchGarage'
            type="text"
            placeholder="Search for Garages"
            name="Search" 
        />
    </div>
        
    </form>
);

const BookADDPartOne = () =>(
    <>
        <div>
            <Row>
                <SearchBar></SearchBar>         
            </Row>
            <Row className='px-4'>
                <ul className='ServiceOptions my-4 p-0'>
                    <li ><span className='PeriodicService'>Periodic Service</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="20" style={{float:'right'}} viewBox="0 0 4 20">
  <path id="Rectangle_8325" data-name="Rectangle 8325" d="M2,0H4A0,0,0,0,1,4,0V20a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z" fill="#2650d8"/>
</svg>

                        <ul>
                            <li>Scheduled Service Packages</li>
                            <li style={{color:'#999999',fontFamily:'300'}}>Other Service Packages</li>
                        </ul>
                    </li>
                    <li>Running Repairs</li>
                    <li>Denting & Painting</li>
                    <li>Body Fittings</li>
                    <li>AC Service & Repairs</li>
                    <li>Battery Care</li>
                    <li>Wheel Care</li>
                    <li>Auto Detailing</li>
                    <li>Insurance Repairs</li>
                </ul>
            </Row>
        </div>
    </>
);

const BookADDPartTwo = () =>(
    <>
       <Row>
           <p className='poppins22'>PERIODIC SERVICE</p>
       </Row>
       <Row>
           <p className='.poppins15 py-3 '><svg xmlns="http://www.w3.org/2000/svg" width="4" height="20" viewBox="0 0 4 20">
  <path id="Rectangle_8695" data-name="Rectangle 8695" d="M0,0H2A2,2,0,0,1,4,2V18a2,2,0,0,1-2,2H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" fill="#4ee59d"/>
</svg>
 Scheduled Service Packages</p>
       </Row>
        <Row className='PartTwoBgBox p-2 my-2'>
            <Col sm={9}>
                <p className='poppins18'>Basic Service</p>
                <p className='poppins15light'><img src={systemUpdate} style={{width:'12px'}}></img> Every 5000 Kms or 3 months</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img> 9 Points Service</p>
                <div style={{paddingTop:'25px'}}>
                <Link to ="" style={{marginTop:'40px' ,fontSize:'12px'}}>Show more</Link>
                </div>
               

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={BasicService} style={{width:'127px',height:'120px'}}></img>
                <button className='Partaddcar'>ADD CAR</button>
                </div>
                
            </Col>
        </Row> 
        <Row className='PartTwoBgBox px-2'>
        <Row className='p-0'><svg id="Group_26850" style={{width:'25%'}} data-name="Group 26850" xmlns="http://www.w3.org/2000/svg" width="113" height="15" viewBox="0 0 113 15">
  <rect id="Rectangle_6338" data-name="Rectangle 6338" width="113" height="15" rx="2" fill="#2650d8"/>
  <text id="Recommended" transform="translate(56 12)" fill="#fff" font-size="11" font-family="SegoeUI, Segoe UI" letter-spacing="0.003em"><tspan x="-36.75" y="0">Recommended</tspan></text>
</svg></Row>
    
            <Col sm={9}>
                <p className='poppins18'>Standard Service</p>
                <p className='poppins15light'><img src={systemUpdate} style={{width:'12px'}}></img> Every 10000 Kms or 6 months</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img> 15 Points Service</p>
                <Link to ="" style={{marginTop:'40px' ,fontSize:'12px'}}>Show more</Link>

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={StandardService} style={{width:'127px',height:'120px'}}></img>
                <button className='Partaddcar'>ADD CAR</button>
                </div>
                
            </Col>
        </Row> 
        <Row className='PartTwoBgBox p-2 my-2'>
            <Col sm={9}>
                <p className='poppins18'>Comprehensive Service</p>
                <p className='poppins15light'><img src={systemUpdate} style={{width:'12px'}}></img> Every 10000 Kms or 6 months</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img> 20 Points Service</p>
                <Link to ="" style={{marginTop:'40px' ,fontSize:'12px'}}>Show more</Link>

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={ComprehensiveService} style={{width:'127px',height:'120px'}}></img>
                <button className='Partaddcar'>ADD CAR</button>
                </div>
                
            </Col>
        </Row>
        <Row>
           <p className='.poppins18 py-3 '>Other Service Packages</p>
       </Row> 
       <Row className='PartTwoBgBox p-2 my-2'>
            <Col sm={9}>
                <p className='poppins18'>Engine Scanning</p>
                <p className='poppins15light'><img src={systemUpdate} style={{width:'12px'}}></img> Every 10000 Kms or 6 months</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img>Scanner Report Provided</p>
                <Link to ="" style={{marginTop:'40px' ,fontSize:'12px'}}>Show more</Link>

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={EngineScanning} style={{width:'127px',height:'120px'}}></img>
                <button className='Partaddcar'>ADD CAR</button>
                </div>
                
            </Col>
        </Row> 
        <Row className='PartTwoBgBox p-2 my-2'>
            <Col sm={9}>
                <p className='poppins18'>Complete Suspension Inspection</p>
                <p className='poppins15light'><img src={systemUpdate} style={{width:'12px'}}></img> Every 10000 Kms or 6 months</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img>Scanner Report Provided</p>
                <Link to ="" style={{marginTop:'40px' ,fontSize:'12px'}}>Show more</Link>

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={CompleteService} style={{width:'127px',height:'120px'}}></img>
                <button className='Partaddcar'>ADD CAR</button>
                </div>
                
            </Col>
        </Row>
        <Row className='PartTwoBgBox px-2'>
        <Row className='p-0'><svg id="Group_26850" style={{width:'25%'}} data-name="Group 26850" xmlns="http://www.w3.org/2000/svg" width="113" height="15" viewBox="0 0 113 15">
  <rect id="Rectangle_6338" data-name="Rectangle 6338" width="113" height="15" rx="2" fill="#2650d8"/>
  <text id="Recommended" transform="translate(56 12)" fill="#fff" font-size="11" font-family="SegoeUI, Segoe UI" letter-spacing="0.003em"><tspan x="-36.75" y="0">Recommended</tspan></text>
</svg></Row>
    
            <Col sm={9}>
                <p className='poppins18'>Car Inspection & Diagnostics</p>
                <p className='poppins15light'><img src={systemUpdate} style={{width:'12px'}}></img> Every 10000 Kms or 6 months</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img> Scanner Report Provided</p>
                <Link to ="" style={{marginTop:'40px' ,fontSize:'12px'}}>Show more</Link>

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={CarInspection} style={{width:'127px',height:'120px'}}></img>
                <button className='Partaddcar'>ADD CAR</button>
                </div>
                
            </Col>
        </Row>
        <Row className='PartTwoBgBox p-2 my-2'>
            <Col sm={9}>
                <p className='poppins18'>Car Fluid Check</p>
                <p className='poppins15light'><img src={systemUpdate} style={{width:'12px'}}></img> On Leakage or Check Lights</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img>5 Points Checklist</p>
                <Link to ="" style={{marginTop:'40px' ,fontSize:'12px'}}>Show more</Link>

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={CarFluid} style={{width:'127px',height:'120px'}}></img>
                <button className='Partaddcar'>ADD CAR</button>
                </div>
                
            </Col>
        </Row> 
        <Row className='PartTwoBgBox p-2 my-2'>
            <Col sm={9}>
                <p className='poppins18'>Starter Motor Repair</p>
                <p className='poppins15light'><img src={systemUpdate} style={{width:'12px'}}></img> In Case of Car not Starting
</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img>5 Points Service</p>
                <Link to ="" style={{marginTop:'40px' ,fontSize:'12px'}}>Show more</Link>

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={StarterMotor} style={{width:'127px',height:'120px'}}></img>
                <button className='Partaddcar'>ADD CAR</button>
                </div>
                
            </Col>
        </Row> 
    </>
);

const BookADDPartThree = () => (
    <>
        <div className='PartThreeBgBox py-5 px-3'>
            <img src={SideCar} style={{width:'201px',height:'86px'}}></img><br></br><br></br>
            <p className='poppins18' style={{textAlign:'left'}}>Enter Vehicle Registration Number</p>
            <p className='poppins15light'>So we can give you exact prices for your vehicle</p>
            
                <form className='py-4'>
                    <input className='PartThreeSearch mx-1'  type="text" name="Search" placeholder='Example- MH 01 AB 1234'></input>
                    <button className='PartThreebtn mx-1'>Submit</button>
                </form>

            <p className='poppins12'>Don't worry your information is safe with us, we will not spam you</p>
        </div>
    </>
);
export default BookByGarageADD;