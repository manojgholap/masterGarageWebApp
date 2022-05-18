import React from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './HomeFasTag.css';
import HomeFastag from '../../Images/ImagesAll/drawable-xxxhdpi/HomeFastag.png';
import Fastaglogo from '../../Images/Fastaglogo.png';

const HomeFasTag = () => (
    <>
        <div className='conatiner-fluid px-5 py-3'>
            <Row>
                <Col sm={6}>
                    <p className='poppins46'>Fastag Simplified</p>
                    <p className='poppins15light'>Manage all your fastags at one place, get rewarded on every recharge </p>
                    <ul className='HomeFastaglist'>
                        <li className='py-5'>
                      <Link to="/BuyFastag" style={{textDecoration:'none'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="94.107" height="69.467" viewBox="0 0 94.107 69.467">
  <g id="Group_17726" data-name="Group 17726" transform="translate(8.75 17.75)">
    <path id="Path_15012" data-name="Path 15012" d="M3296.656-369.886a3.447,3.447,0,0,1,1.924,1.834.886.886,0,0,0,.685.353,4.122,4.122,0,0,1,4.257,3.52c.877,3.584,1.819,7.151,2.749,10.785h60.514a3.472,3.472,0,0,1,3.4,1.641,8.744,8.744,0,0,1,.479,1.286v.733c-.047.032-.126.055-.137.1q-1.291,5.115-2.57,10.232-2.246,8.93-4.506,17.857c-.532,2.106-1.387,2.77-3.51,2.77-14.593,0-29.185.019-43.777-.029-1.519-.005-2.757.121-3.658,1.572a30.784,30.784,0,0,1-2.475,3.045h55.323c.241,0,.483-.013.723,0a1.119,1.119,0,0,1,1.154,1.122c.105,1.12-.5,1.781-1.7,1.793-1.581.016-3.162,0-4.832,0,.126.314.2.5.277.69a6.108,6.108,0,0,1-1.386,6.939,21.809,21.809,0,0,1-2.822,1.719h-2.708c-.012-.028-.018-.077-.036-.081a6.062,6.062,0,0,1-4.644-7.133,20.2,20.2,0,0,1,.542-2.085h-26.751c.1.255.17.444.249.631a6.209,6.209,0,0,1-1.381,6.94,18.394,18.394,0,0,1-3,1.729h-2.528a21.923,21.923,0,0,1-2.239-1.109,6.267,6.267,0,0,1-1.843-8.145c-.964-.092-1.921-.155-2.872-.281a2.455,2.455,0,0,1-2.16-1.891,3.277,3.277,0,0,1,.682-3.216c1.125-1.2,2.151-2.49,3.175-3.779a1.206,1.206,0,0,0,.063-.892q-2.262-9.2-4.562-18.385-3.04-12.039-6.126-24.065c-.2-.79-.814-1.118-1.9-1.024a3.173,3.173,0,0,1-3.01,2.177c-4.779-.085-9.56-.076-14.339-.009a3.3,3.3,0,0,1-3.32-1.67v-4.03a4,4,0,0,1,2.167-1.649Zm71.021,19.649h-60.516a1.237,1.237,0,0,0-.021.32q1.711,6.8,3.428,13.606c1.146,4.565,2.28,9.133,3.432,13.7.134.528.285.938,1.047.937q22.328-.047,44.655-.008a.916.916,0,0,0,1.03-.758c.253-.949.494-1.9.731-2.856q2.569-10.275,5.128-20.551C3366.952-347.29,3367.305-348.731,3367.677-350.237Zm-49.91,38.971a3.227,3.227,0,0,0-3.227,3.231,3.314,3.314,0,0,0,3.207,3.184,3.231,3.231,0,0,0,3.259-3.3A3.161,3.161,0,0,0,3317.767-311.266Zm37.539,0a3.066,3.066,0,0,0-3.141,3.2,3.307,3.307,0,0,0,3.261,3.237,3.33,3.33,0,0,0,3.152-3.344A3.237,3.237,0,0,0,3355.306-311.266ZM3295.718-366.9h-14.732v1.362h14.732Z" transform="translate(-3286.063 352.886)" fill="#00155a" stroke="#00155a" stroke-width="1.5"/>
    <g id="Rounded_Button" data-name="Rounded Button" transform="translate(36.303 -15.017)">
      <g id="Path_30358" data-name="Path 30358" fill="#2650d8">
        <path d="M 16 30.5 C 12.12691020965576 30.5 8.485639572143555 28.99173927307129 5.746950149536133 26.25304985046387 C 3.008260011672974 23.51436042785645 1.5 19.87309074401855 1.5 16 C 1.5 12.12691020965576 3.008260011672974 8.485639572143555 5.746950149536133 5.746950149536133 C 8.485639572143555 3.008260011672974 12.12691020965576 1.5 16 1.5 C 19.87309074401855 1.5 23.51436042785645 3.008260011672974 26.25304985046387 5.746950149536133 C 28.99173927307129 8.485639572143555 30.5 12.12691020965576 30.5 16 C 30.5 19.87309074401855 28.99173927307129 23.51436042785645 26.25304985046387 26.25304985046387 C 23.51436042785645 28.99173927307129 19.87309074401855 30.5 16 30.5 Z" stroke="none"/>
        <path d="M 16 3 C 12.5275707244873 3 9.262990951538086 4.352239608764648 6.807609558105469 6.807609558105469 C 4.352239608764648 9.262990951538086 3 12.5275707244873 3 16 C 3 19.47243118286133 4.352239608764648 22.73701095581055 6.807609558105469 25.19239044189453 C 9.262990951538086 27.64776039123535 12.5275707244873 29 16 29 C 19.47243118286133 29 22.73701095581055 27.64776039123535 25.19239044189453 25.19239044189453 C 27.64776039123535 22.73701095581055 29 19.47243118286133 29 16 C 29 12.5275707244873 27.64776039123535 9.262990951538086 25.19239044189453 6.807609558105469 C 22.73701095581055 4.352239608764648 19.47243118286133 3 16 3 M 16 0 C 24.8365592956543 0 32 7.163440704345703 32 16 C 32 24.8365592956543 24.8365592956543 32 16 32 C 7.163440704345703 32 0 24.8365592956543 0 16 C 0 7.163440704345703 7.163440704345703 0 16 0 Z" stroke="none" fill="#00155a"/>
      </g>
      <path id="icon-arrow-left" d="M6.7,16.984l.781.781a.841.841,0,0,0,1.193,0l6.84-6.837a.841.841,0,0,0,0-1.193L8.673,2.9a.841.841,0,0,0-1.193,0L6.7,3.676a.845.845,0,0,0,.014,1.207l4.24,4.039H.841A.842.842,0,0,0,0,9.767v1.126a.842.842,0,0,0,.844.844H10.954l-4.24,4.039A.839.839,0,0,0,6.7,16.984Z" transform="translate(26.33 8.121) rotate(90)" fill="#fff"/>
    </g>
  </g>
</svg>
<p className='poppins18 py-3'>BUY</p>
                      </Link>
                    </li>
                        <li  className='py-5'>
                        <Link to="/RechargeFastag" style={{textDecoration:'none'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73">
  <g id="Group_27220" data-name="Group 27220" transform="translate(-364 -307)">
    <g id="Group_16589" data-name="Group 16589" transform="translate(381.794 327.165)">
      <g id="Group_16588" data-name="Group 16588">
        <path id="Path_12819" data-name="Path 12819" d="M200.568,76.376S190.354,89.364,185.823,95.13c-2.8-2.934-5.852-6.119-5.852-6.119a4.858,4.858,0,0,0-7,6.735l9.705,10.149a4.837,4.837,0,0,0,7.308-.349l18.2-23.128a4.859,4.859,0,0,0-7.612-6.043Z" transform="translate(-171.62 -74.534)" fill="#2650d8"/>
      </g>
    </g>
    <g id="Ellipse_2145" data-name="Ellipse 2145" transform="translate(364 307)" fill="none" stroke="#00155a" stroke-width="5">
      <circle cx="36.5" cy="36.5" r="36.5" stroke="none"/>
      <circle cx="36.5" cy="36.5" r="34" fill="none"/>
    </g>
  </g>
</svg><p className='poppins18 py-3'>RECHARGE</p>
                        </Link>
                        
</li>
                        <li className='py-5'>
                        <Link to="/ActivateFastag" style={{textDecoration:'none'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="77.3" height="72.638" viewBox="0 0 77.3 72.638">
  <g id="Group_27509" data-name="Group 27509" transform="translate(-708.85 -28.181)">
    <path id="Path_30396" data-name="Path 30396" d="M770.165,26.605h-45.33a15.834,15.834,0,1,0,0,31.669h11.527V71.067l-.562-.472a7.329,7.329,0,0,0-9.706.424,6.333,6.333,0,0,0,.412,9.427l9.856,8.271v7.971a2.257,2.257,0,0,0,2.256,2.256h27.073a2.257,2.257,0,0,0,2.256-2.256V71.338a6.781,6.781,0,0,0-5.933-6.716L749.9,63.113V58.274h20.267a15.834,15.834,0,1,0,0-31.668ZM740.874,94.432V89.92h22.561v4.512ZM761.456,69.1a2.26,2.26,0,0,1,1.979,2.239v14.07H739.442L729.4,76.989a1.827,1.827,0,0,1-.119-2.78,2.8,2.8,0,0,1,3.615-.158l4.27,3.582a2.256,2.256,0,0,0,3.7-1.728V47.059a2.256,2.256,0,1,1,4.512,0V65.105a2.255,2.255,0,0,0,1.979,2.238Zm8.709-15.337H749.9v-6.7a6.768,6.768,0,0,0-13.537,0v6.7H724.835a11.323,11.323,0,1,1,0-22.645h45.33a11.323,11.323,0,1,1,0,22.645Z" transform="translate(0 1.726)" fill="#00155a" stroke="#fff" stroke-width="0.3"/>
    <path id="Path_30397" data-name="Path 30397" d="M734.948,29.61l-7.426,7.428L724.6,34.122a2.255,2.255,0,0,0-3.188,3.19l4.508,4.511a2.257,2.257,0,0,0,3.192,0L738.14,32.8a2.256,2.256,0,1,0-3.192-3.19Z" transform="translate(33.5 8.405)" fill="#2650d8" stroke="#fff" stroke-width="0.3"/>
  </g>
</svg>
<p className='poppins18 py-3'>ACTIVATE</p>
                        </Link>
                        </li>
                        <li  className='py-5'>
                        <Link to="/ActivateFastag2" style={{textDecoration:'none'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="56.46" height="74.128" viewBox="0 0 56.46 74.128">
  <g id="Group_27210" data-name="Group 27210" transform="translate(0.25 0.411)">
    <path id="Path_29147" data-name="Path 29147" d="M137.954,93.9a3.38,3.38,0,0,0-3.676.559l-4.765,4.218-6.482-5.8a3.429,3.429,0,0,0-4.576,0l-6.476,5.792L105.5,92.875a3.429,3.429,0,0,0-4.576,0l-6.484,5.8-4.768-4.218A3.409,3.409,0,0,0,84,97.026V160.28a3.413,3.413,0,0,0,5.682,2.571l4.764-4.218,6.482,5.8a3.43,3.43,0,0,0,4.576,0l6.477-5.794,6.477,5.793a3.431,3.431,0,0,0,4.577,0l6.483-5.8,4.769,4.218a3.409,3.409,0,0,0,5.674-2.571V97.026A3.38,3.38,0,0,0,137.954,93.9Zm-6.17,62.166a3.426,3.426,0,0,0-4.558.012l-6.482,5.8-6.476-5.793a3.429,3.429,0,0,0-4.577,0l-6.477,5.793-6.485-5.8a3.409,3.409,0,0,0-4.546-.012l-4.751,4.217v-9.15l-.017-54.1,4.759,4.217a3.428,3.428,0,0,0,4.559-.011l6.482-5.8,6.477,5.792a3.428,3.428,0,0,0,4.576,0l6.477-5.792,6.485,5.8a3.411,3.411,0,0,0,4.545.012l4.751-4.219v43.482l.018,19.771Z" transform="translate(-84 -92)" fill="#00155a" stroke="#5d6186" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="0.5"/>
    <path id="Path_29148" data-name="Path 29148" d="M129.911,125.912h-34.4a1.815,1.815,0,0,0,0,3.629h34.4a1.815,1.815,0,0,0,0-3.629Z" transform="translate(-85.227 -91.049)" fill="#2650d8"/>
    <path id="Path_29149" data-name="Path 29149" d="M117.166,115.914H95.84a2.142,2.142,0,0,0,0,4.284h21.326a2.142,2.142,0,1,0,0-4.284Z" transform="translate(-85.227 -91.797)" fill="#2650d8"/>
    <path id="Path_29150" data-name="Path 29150" d="M132.5,135.91H95.642a1.944,1.944,0,0,0,0,3.888H132.5a1.944,1.944,0,0,0,0-3.888Z" transform="translate(-85.227 -88.326)" fill="#2650d8"/>
  </g>
</svg>
<p className='poppins18 py-3'>PASSBOOK</p>
                        </Link> 
                        </li>
                    </ul>
                </Col>
                <Col sm={6}>
                    <img src={HomeFastag} style={{width:'527px',height:'336px'}}></img>
                </Col>
            </Row>
            <Row>
            <div className='cardsScrollBox'>
            <ul className='cards'>
            <li>
                <div className='yellowcard p-4'>
                    <Row>
                        <Col sm={6}><svg xmlns="http://www.w3.org/2000/svg" width="114.638" height="24.304" viewBox="0 0 114.638 24.304">
  <g id="Group_18163" data-name="Group 18163" transform="translate(113.931 23.597) rotate(180)" opacity="0.6">
    <path id="Path_19600" data-name="Path 19600" d="M11.445,22.89l3.2-3.2L6.4,11.445,14.647,3.2,11.445,0,0,11.445Z" transform="translate(98.577 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_19601" data-name="Path 19601" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.207-3.2Z" transform="translate(92.003 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.938"/>
    <path id="Path_19602" data-name="Path 19602" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(85.428 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.875"/>
    <path id="Path_19603" data-name="Path 19603" d="M6.409,11.445,14.658,3.2,11.445,0,0,11.445,11.445,22.89l3.213-3.2Z" transform="translate(78.854 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.813"/>
    <path id="Path_19604" data-name="Path 19604" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(72.286 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.75"/>
    <path id="Path_19605" data-name="Path 19605" d="M6.409,11.445,14.646,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(65.717 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.688"/>
    <path id="Path_19606" data-name="Path 19606" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(59.143 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.625"/>
    <path id="Path_19607" data-name="Path 19607" d="M6.4,11.445,14.648,3.2,11.446,0,0,11.445,11.446,22.89l3.2-3.2Z" transform="translate(52.573 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.563"/>
    <path id="Path_19608" data-name="Path 19608" d="M6.4,11.445,14.644,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(46.002 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.5"/>
    <path id="Path_19609" data-name="Path 19609" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.208-3.2Z" transform="translate(39.432 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.438"/>
    <path id="Path_19610" data-name="Path 19610" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(32.855 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.375"/>
    <path id="Path_19611" data-name="Path 19611" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(26.284 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.313"/>
    <path id="Path_19612" data-name="Path 19612" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(19.712 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.25"/>
    <path id="Path_19613" data-name="Path 19613" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(13.142 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.188"/>
    <path id="Path_19614" data-name="Path 19614" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(6.571 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.125"/>
    <path id="Path_19615" data-name="Path 19615" d="M6.4,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.063"/>
  </g>
</svg>
</Col>
<Col sm={6}><img src={Fastaglogo} style={{width:'100px',height:'22px',float:'right'}}></img></Col> 
</Row>
<Row className='py-4'>
    <Col sm={6}><p className='poppins22'>Alcazar</p></Col>
    <Col sm={6}><p className='poppins18' style={{float:'right'}}>MH 01 AB 3827</p></Col>
</Row>
<Row>
    <Col sm={7} className='greybg'>
        <div>
            <span className='poppins15 px-1'>Balance :</span>
            <span className='poppins15bold px-1'>&#8377;459</span>
            <span className='green12'><svg xmlns="http://www.w3.org/2000/svg" width="11.336" height="11.336" className='mx-2' viewBox="0 0 11.336 11.336">
  <path id="Path_30243" data-name="Path 30243" d="M5.668,0A5.668,5.668,0,1,1,0,5.668,5.668,5.668,0,0,1,5.668,0Z" fill="#53bd8c"/>
</svg>
ACTIVE</span>
        </div>
    </Col>
    <Col sm={5} className='py-2 text-end' >
        <button className='Rechargebtn'>Recharge</button>
    </Col>
</Row>
                </div>
            </li>
            <li>
                <div className='greycard p-4'>
                    <Row>
                        <Col sm={6}><svg xmlns="http://www.w3.org/2000/svg" width="114.638" height="24.304" viewBox="0 0 114.638 24.304">
  <g id="Group_18163" data-name="Group 18163" transform="translate(113.931 23.597) rotate(180)" opacity="0.6">
    <path id="Path_19600" data-name="Path 19600" d="M11.445,22.89l3.2-3.2L6.4,11.445,14.647,3.2,11.445,0,0,11.445Z" transform="translate(98.577 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_19601" data-name="Path 19601" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.207-3.2Z" transform="translate(92.003 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.938"/>
    <path id="Path_19602" data-name="Path 19602" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(85.428 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.875"/>
    <path id="Path_19603" data-name="Path 19603" d="M6.409,11.445,14.658,3.2,11.445,0,0,11.445,11.445,22.89l3.213-3.2Z" transform="translate(78.854 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.813"/>
    <path id="Path_19604" data-name="Path 19604" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(72.286 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.75"/>
    <path id="Path_19605" data-name="Path 19605" d="M6.409,11.445,14.646,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(65.717 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.688"/>
    <path id="Path_19606" data-name="Path 19606" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(59.143 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.625"/>
    <path id="Path_19607" data-name="Path 19607" d="M6.4,11.445,14.648,3.2,11.446,0,0,11.445,11.446,22.89l3.2-3.2Z" transform="translate(52.573 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.563"/>
    <path id="Path_19608" data-name="Path 19608" d="M6.4,11.445,14.644,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(46.002 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.5"/>
    <path id="Path_19609" data-name="Path 19609" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.208-3.2Z" transform="translate(39.432 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.438"/>
    <path id="Path_19610" data-name="Path 19610" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(32.855 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.375"/>
    <path id="Path_19611" data-name="Path 19611" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(26.284 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.313"/>
    <path id="Path_19612" data-name="Path 19612" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(19.712 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.25"/>
    <path id="Path_19613" data-name="Path 19613" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(13.142 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.188"/>
    <path id="Path_19614" data-name="Path 19614" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(6.571 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.125"/>
    <path id="Path_19615" data-name="Path 19615" d="M6.4,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.063"/>
  </g>
</svg>
</Col>
<Col sm={6}><img src={Fastaglogo} style={{width:'100px',height:'22px',float:'right'}}></img></Col> 
</Row>
<Row className='py-4'>
    <Col sm={6}><p className='poppins22'>Alcazar</p></Col>
    <Col sm={6}><p className='poppins18' style={{float:'right'}}>MH 01 AB 3827</p></Col>
</Row>
<Row>
    <Col sm={7} className='greybg'>
        <div>
            <span className='poppins15 px-1'>Balance :</span>
            <span className='poppins15bold px-1'>&#8377;459</span>
            <span className='green12'><svg xmlns="http://www.w3.org/2000/svg" width="11.336" height="11.336" className='mx-2' viewBox="0 0 11.336 11.336">
  <path id="Path_30243" data-name="Path 30243" d="M5.668,0A5.668,5.668,0,1,1,0,5.668,5.668,5.668,0,0,1,5.668,0Z" fill="#53bd8c"/>
</svg>
ACTIVE</span>
        </div>
    </Col>
    <Col sm={5} className='py-2 text-end' >
        <button className='Rechargebtn'>Recharge</button>
    </Col>
</Row>
                </div>
            </li>
            <li>
                <div className='bluecard p-4'>
                    <Row>
                        <Col sm={6}><svg xmlns="http://www.w3.org/2000/svg" width="114.638" height="24.304" viewBox="0 0 114.638 24.304">
  <g id="Group_18163" data-name="Group 18163" transform="translate(113.931 23.597) rotate(180)" opacity="0.6">
    <path id="Path_19600" data-name="Path 19600" d="M11.445,22.89l3.2-3.2L6.4,11.445,14.647,3.2,11.445,0,0,11.445Z" transform="translate(98.577 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_19601" data-name="Path 19601" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.207-3.2Z" transform="translate(92.003 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.938"/>
    <path id="Path_19602" data-name="Path 19602" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(85.428 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.875"/>
    <path id="Path_19603" data-name="Path 19603" d="M6.409,11.445,14.658,3.2,11.445,0,0,11.445,11.445,22.89l3.213-3.2Z" transform="translate(78.854 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.813"/>
    <path id="Path_19604" data-name="Path 19604" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(72.286 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.75"/>
    <path id="Path_19605" data-name="Path 19605" d="M6.409,11.445,14.646,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(65.717 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.688"/>
    <path id="Path_19606" data-name="Path 19606" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(59.143 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.625"/>
    <path id="Path_19607" data-name="Path 19607" d="M6.4,11.445,14.648,3.2,11.446,0,0,11.445,11.446,22.89l3.2-3.2Z" transform="translate(52.573 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.563"/>
    <path id="Path_19608" data-name="Path 19608" d="M6.4,11.445,14.644,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(46.002 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.5"/>
    <path id="Path_19609" data-name="Path 19609" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.208-3.2Z" transform="translate(39.432 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.438"/>
    <path id="Path_19610" data-name="Path 19610" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(32.855 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.375"/>
    <path id="Path_19611" data-name="Path 19611" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(26.284 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.313"/>
    <path id="Path_19612" data-name="Path 19612" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(19.712 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.25"/>
    <path id="Path_19613" data-name="Path 19613" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(13.142 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.188"/>
    <path id="Path_19614" data-name="Path 19614" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(6.571 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.125"/>
    <path id="Path_19615" data-name="Path 19615" d="M6.4,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.063"/>
  </g>
</svg>
</Col>
<Col sm={6}><img src={Fastaglogo} style={{width:'100px',height:'22px',float:'right'}}></img></Col> 
</Row>
<Row className='py-4'>
    <Col sm={6}><p className='poppins22'>Alcazar</p></Col>
    <Col sm={6}><p className='poppins18' style={{float:'right'}}>MH 01 AB 3827</p></Col>
</Row>
<Row>
    <Col sm={7} className='greybg'>
        <div>
            <span className='poppins15 px-1'>Balance :</span>
            <span className='poppins15bold px-1'>&#8377;459</span>
            <span className='green12'><svg xmlns="http://www.w3.org/2000/svg" width="11.336" height="11.336" className='mx-2' viewBox="0 0 11.336 11.336">
  <path id="Path_30243" data-name="Path 30243" d="M5.668,0A5.668,5.668,0,1,1,0,5.668,5.668,5.668,0,0,1,5.668,0Z" fill="#53bd8c"/>
</svg>
ACTIVE</span>
        </div>
    </Col>
    <Col sm={5} className='py-2 text-end' >
        <button className='Rechargebtn'>Recharge</button>
    </Col>
</Row>
                </div>
            </li>
            <li>
                <div className='yellowcard p-4'>
                    <Row>
                        <Col sm={6}><svg xmlns="http://www.w3.org/2000/svg" width="114.638" height="24.304" viewBox="0 0 114.638 24.304">
  <g id="Group_18163" data-name="Group 18163" transform="translate(113.931 23.597) rotate(180)" opacity="0.6">
    <path id="Path_19600" data-name="Path 19600" d="M11.445,22.89l3.2-3.2L6.4,11.445,14.647,3.2,11.445,0,0,11.445Z" transform="translate(98.577 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_19601" data-name="Path 19601" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.207-3.2Z" transform="translate(92.003 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.938"/>
    <path id="Path_19602" data-name="Path 19602" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(85.428 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.875"/>
    <path id="Path_19603" data-name="Path 19603" d="M6.409,11.445,14.658,3.2,11.445,0,0,11.445,11.445,22.89l3.213-3.2Z" transform="translate(78.854 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.813"/>
    <path id="Path_19604" data-name="Path 19604" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(72.286 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.75"/>
    <path id="Path_19605" data-name="Path 19605" d="M6.409,11.445,14.646,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(65.717 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.688"/>
    <path id="Path_19606" data-name="Path 19606" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(59.143 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.625"/>
    <path id="Path_19607" data-name="Path 19607" d="M6.4,11.445,14.648,3.2,11.446,0,0,11.445,11.446,22.89l3.2-3.2Z" transform="translate(52.573 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.563"/>
    <path id="Path_19608" data-name="Path 19608" d="M6.4,11.445,14.644,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(46.002 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.5"/>
    <path id="Path_19609" data-name="Path 19609" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.208-3.2Z" transform="translate(39.432 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.438"/>
    <path id="Path_19610" data-name="Path 19610" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(32.855 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.375"/>
    <path id="Path_19611" data-name="Path 19611" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(26.284 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.313"/>
    <path id="Path_19612" data-name="Path 19612" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(19.712 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.25"/>
    <path id="Path_19613" data-name="Path 19613" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(13.142 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.188"/>
    <path id="Path_19614" data-name="Path 19614" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(6.571 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.125"/>
    <path id="Path_19615" data-name="Path 19615" d="M6.4,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.063"/>
  </g>
</svg>
</Col>
<Col sm={6}><img src={Fastaglogo} style={{width:'100px',height:'22px',float:'right'}}></img></Col> 
</Row>
<Row className='py-4'>
    <Col sm={6}><p className='poppins22'>Alcazar</p></Col>
    <Col sm={6}><p className='poppins18' style={{float:'right'}}>MH 01 AB 3827</p></Col>
</Row>
<Row>
    <Col sm={7} className='greybg'>
        <div>
            <span className='poppins15 px-1'>Balance :</span>
            <span className='poppins15bold px-1'>&#8377;459</span>
            <span className='green12'><svg xmlns="http://www.w3.org/2000/svg" width="11.336" height="11.336" className='mx-2' viewBox="0 0 11.336 11.336">
  <path id="Path_30243" data-name="Path 30243" d="M5.668,0A5.668,5.668,0,1,1,0,5.668,5.668,5.668,0,0,1,5.668,0Z" fill="#53bd8c"/>
</svg>
ACTIVE</span>
        </div>
    </Col>
    <Col sm={5} className='py-2 text-end' >
        <button className='Rechargebtn'>Recharge</button>
    </Col>
</Row>
                </div>
            </li>
            <li>
                <div className='greycard p-4'>
                    <Row>
                        <Col sm={6}><svg xmlns="http://www.w3.org/2000/svg" width="114.638" height="24.304" viewBox="0 0 114.638 24.304">
  <g id="Group_18163" data-name="Group 18163" transform="translate(113.931 23.597) rotate(180)" opacity="0.6">
    <path id="Path_19600" data-name="Path 19600" d="M11.445,22.89l3.2-3.2L6.4,11.445,14.647,3.2,11.445,0,0,11.445Z" transform="translate(98.577 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_19601" data-name="Path 19601" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.207-3.2Z" transform="translate(92.003 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.938"/>
    <path id="Path_19602" data-name="Path 19602" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(85.428 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.875"/>
    <path id="Path_19603" data-name="Path 19603" d="M6.409,11.445,14.658,3.2,11.445,0,0,11.445,11.445,22.89l3.213-3.2Z" transform="translate(78.854 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.813"/>
    <path id="Path_19604" data-name="Path 19604" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(72.286 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.75"/>
    <path id="Path_19605" data-name="Path 19605" d="M6.409,11.445,14.646,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(65.717 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.688"/>
    <path id="Path_19606" data-name="Path 19606" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(59.143 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.625"/>
    <path id="Path_19607" data-name="Path 19607" d="M6.4,11.445,14.648,3.2,11.446,0,0,11.445,11.446,22.89l3.2-3.2Z" transform="translate(52.573 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.563"/>
    <path id="Path_19608" data-name="Path 19608" d="M6.4,11.445,14.644,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(46.002 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.5"/>
    <path id="Path_19609" data-name="Path 19609" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.208-3.2Z" transform="translate(39.432 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.438"/>
    <path id="Path_19610" data-name="Path 19610" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(32.855 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.375"/>
    <path id="Path_19611" data-name="Path 19611" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(26.284 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.313"/>
    <path id="Path_19612" data-name="Path 19612" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(19.712 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.25"/>
    <path id="Path_19613" data-name="Path 19613" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(13.142 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.188"/>
    <path id="Path_19614" data-name="Path 19614" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(6.571 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.125"/>
    <path id="Path_19615" data-name="Path 19615" d="M6.4,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.063"/>
  </g>
</svg>
</Col>
<Col sm={6}><img src={Fastaglogo} style={{width:'100px',height:'22px',float:'right'}}></img></Col> 
</Row>
<Row className='py-4'>
    <Col sm={6}><p className='poppins22'>Alcazar</p></Col>
    <Col sm={6}><p className='poppins18' style={{float:'right'}}>MH 01 AB 3827</p></Col>
</Row>
<Row>
    <Col sm={7} className='greybg'>
        <div>
            <span className='poppins15 px-1'>Balance :</span>
            <span className='poppins15bold px-1'>&#8377;459</span>
            <span className='green12'><svg xmlns="http://www.w3.org/2000/svg" width="11.336" height="11.336" className='mx-2' viewBox="0 0 11.336 11.336">
  <path id="Path_30243" data-name="Path 30243" d="M5.668,0A5.668,5.668,0,1,1,0,5.668,5.668,5.668,0,0,1,5.668,0Z" fill="#53bd8c"/>
</svg>
ACTIVE</span>
        </div>
    </Col>
    <Col sm={5} className='py-2 text-end' >
        <button className='Rechargebtn'>Recharge</button>
    </Col>
</Row>
                </div>
            </li>
             <li>
                <div className='bluecard p-4'>
                    <Row>
                        <Col sm={6}><svg xmlns="http://www.w3.org/2000/svg" width="114.638" height="24.304" viewBox="0 0 114.638 24.304">
  <g id="Group_18163" data-name="Group 18163" transform="translate(113.931 23.597) rotate(180)" opacity="0.6">
    <path id="Path_19600" data-name="Path 19600" d="M11.445,22.89l3.2-3.2L6.4,11.445,14.647,3.2,11.445,0,0,11.445Z" transform="translate(98.577 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_19601" data-name="Path 19601" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.207-3.2Z" transform="translate(92.003 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.938"/>
    <path id="Path_19602" data-name="Path 19602" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(85.428 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.875"/>
    <path id="Path_19603" data-name="Path 19603" d="M6.409,11.445,14.658,3.2,11.445,0,0,11.445,11.445,22.89l3.213-3.2Z" transform="translate(78.854 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.813"/>
    <path id="Path_19604" data-name="Path 19604" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(72.286 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.75"/>
    <path id="Path_19605" data-name="Path 19605" d="M6.409,11.445,14.646,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(65.717 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.688"/>
    <path id="Path_19606" data-name="Path 19606" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(59.143 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.625"/>
    <path id="Path_19607" data-name="Path 19607" d="M6.4,11.445,14.648,3.2,11.446,0,0,11.445,11.446,22.89l3.2-3.2Z" transform="translate(52.573 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.563"/>
    <path id="Path_19608" data-name="Path 19608" d="M6.4,11.445,14.644,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(46.002 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.5"/>
    <path id="Path_19609" data-name="Path 19609" d="M6.4,11.445,14.647,3.2,11.439,0,0,11.445,11.439,22.89l3.208-3.2Z" transform="translate(39.432 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.438"/>
    <path id="Path_19610" data-name="Path 19610" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(32.855 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.375"/>
    <path id="Path_19611" data-name="Path 19611" d="M6.409,11.445,14.652,3.2,11.445,0,0,11.445,11.445,22.89l3.207-3.2Z" transform="translate(26.284 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.313"/>
    <path id="Path_19612" data-name="Path 19612" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(19.712 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.25"/>
    <path id="Path_19613" data-name="Path 19613" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(13.142 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.188"/>
    <path id="Path_19614" data-name="Path 19614" d="M6.409,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(6.571 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.125"/>
    <path id="Path_19615" data-name="Path 19615" d="M6.4,11.445,14.647,3.2,11.445,0,0,11.445,11.445,22.89l3.2-3.2Z" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" opacity="0.063"/>
  </g>
</svg>
</Col>
<Col sm={6}><img src={Fastaglogo} style={{width:'100px',height:'22px',float:'right'}}></img></Col> 
</Row>
<Row className='py-4'>
    <Col sm={6}><p className='poppins22'>Alcazar</p></Col>
    <Col sm={6}><p className='poppins18' style={{float:'right'}}>MH 01 AB 3827</p></Col>
</Row>
<Row>
    <Col sm={7} className='greybg'>
        <div>
            <span className='poppins15 px-1'>Balance :</span>
            <span className='poppins15bold px-1'>&#8377;459</span>
            <span className='green12'><svg xmlns="http://www.w3.org/2000/svg" width="11.336" height="11.336" className='mx-2' viewBox="0 0 11.336 11.336">
  <path id="Path_30243" data-name="Path 30243" d="M5.668,0A5.668,5.668,0,1,1,0,5.668,5.668,5.668,0,0,1,5.668,0Z" fill="#53bd8c"/>
</svg>
ACTIVE</span>
        </div>
    </Col>
    <Col sm={5} className='py-2 text-end' >
        <button className='Rechargebtn'>Recharge</button>
    </Col>
</Row>
                </div>
            </li>
            
        
    </ul>
            </div>
   
            

            </Row>
        </div>
    </>
);

export default HomeFasTag;