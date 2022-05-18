import React from 'react';
import {Row,Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import './ActivateFastag.css';
import FastagCard from '../../Images/drawable-xxxhdpi/FastagCard.png';

const ActFastag = () => (
    <>
        <div className='container-fluid px-5 py-2'>
                <Row>
                <Link to="/FastagOrder" style={{textDecoration:'none'}}><p className='poppins18R' ><svg xmlns="http://www.w3.org/2000/svg" width="20.667" height="20.143"  style={{marginRight:'10px'}} viewBox="0 0 20.667 20.143">
  <g id="Rounded_Button" data-name="Rounded Button" transform="translate(20.667 20.143) rotate(180)">
    <path id="icon-arrow-left" d="M8.783,21.441l1.024,1.024a1.1,1.1,0,0,0,1.564,0L20.338,13.5a1.1,1.1,0,0,0,0-1.564L11.371,2.972a1.1,1.1,0,0,0-1.564,0L8.783,4A1.108,1.108,0,0,0,8.8,5.579l5.558,5.3H1.1A1.1,1.1,0,0,0,0,11.981v1.476A1.1,1.1,0,0,0,1.1,14.564H14.36L8.8,19.859A1.1,1.1,0,0,0,8.783,21.441Z" transform="translate(0.004 -2.647)" fill="#2650d8"/>
  </g>
</svg>Activate Fastag</p></Link>
                </Row>
                <Row>
                    <Col sm={8}><ActivateBoxOne></ActivateBoxOne></Col>
                    <Col sm={4}><ActivateBoxTwo></ActivateBoxTwo></Col>
                </Row>
        </div>
    </>
);

const ActivateBoxOne = () =>(
    <>
        <div className='my-2 px-4 py-2'>
                <Row className='py-2'>
                    <p className='poppins20B'>Enter Fastag ID mentioned below the barcode</p>
                </Row>
                <Row className='py-2'>
                    <Col sm={4}>
                        <input className='poppins22L' name='cardinput' type='text' value="XXXXXX"></input>
                    </Col>
                    <Col sm={4}>
                        <input className='poppins22L' name='cardinput' type='text' value="XXX"></input>
                    </Col>
                    <Col sm={4}>
                        <input className='poppins22L' name='cardinput' type='text' value="XXXXXXX"></input>
                    </Col>   
                </Row>
                <Row className='py-3 mt-3'>
                    <label className='poppins18R py-2'>Vehicle registration number</label><br></br>
                    <input className='InputVechicle py-2' name="enter number" type='text' value="Enter your vehicle number as per your RC"></input>
                </Row>
                <Row className='py-3 '>
                    <label className='poppins18R py-2'>Enter your full name</label><br></br>
                    <input className='InputVechicle py-2 ' name="enter number" type='text' value="First name Last name"></input>
                </Row>
                <Row>
                    <Col sm={6}>
                    <label className='poppins18R py-2'>Enter DOB</label><br></br>
                    <input className='Re_InputVechicle py-2 ' name="enter number" type='text' value="DD-MM-YYYY"></input>
                    </Col>
                    <Col sm={6}>
                        <Row className='py-2'>
                            <Col sm={4}><p className='poppins18R py-3'>Vehicle RC </p></Col>
                            <Col sm={5}><UploadRC></UploadRC></Col>
                        </Row>    
                    </Col>
                </Row>
                <Row  className='py-3' >
                    <Link to="/ActivateFastag1" style={{textAlign:'center '}}><button className='FastagSubmit'>Submit</button></Link>
                </Row>
                <Row>
                    <p className='pt-3 poppins15L'>* Your Vehicle number and RC will be needed at the time of activation post delivery </p>
                </Row>
        </div>
    </>
);

const UploadRC = () => (
    <>
        <div>
            <form >
                <button className='uploadRc'> Upload RC</button>
                <i className='uploadarrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23.125" height="26.667" viewBox="0 0 23.125 26.667">
  <g id="Group_27332" data-name="Group 27332" transform="translate(-577.14 -570.416)">
    <path id="Path_21004" data-name="Path 21004" d="M1059,142.5v21.125" transform="translate(741.764 -462.917) rotate(90)" fill="none" stroke="#4250f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path id="icon-arrow-left" d="M8.783,21.441l1.024,1.024a1.1,1.1,0,0,0,1.564,0L20.338,13.5a1.1,1.1,0,0,0,0-1.564L11.371,2.972a1.1,1.1,0,0,0-1.564,0L8.783,4A1.108,1.108,0,0,0,8.8,5.579l5.558,5.3H1.1A1.1,1.1,0,0,0,0,11.981v1.476A1.1,1.1,0,0,0,1.1,14.564H14.36L8.8,19.859A1.1,1.1,0,0,0,8.783,21.441Z" transform="translate(575.983 591.08) rotate(-90)" fill="#2650d8"/>
  </g>
</svg>

                </i>
            </form>
        </div>
    </>
);
const ActivateBoxTwo = () =>(
    <>
        <div className='py-5'>
            <Row>
                <img src={FastagCard} style={{width:'440px',height:'234px'}}></img>
            </Row>
            <Row className='py-5 my-2'  style={{textAlign:'center'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="264.08" height="82.547" viewBox="0 0 264.08 82.547">
  <g id="Group_27335" data-name="Group 27335" transform="translate(-1091.5 -405.5)">
    <line id="Line_900" data-name="Line 900" y2="82.547" transform="translate(1092.5 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_963" data-name="Line 963" y2="82.547" transform="translate(1354.58 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_928" data-name="Line 928" y2="82.547" transform="translate(1199.161 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_940" data-name="Line 940" y2="82.547" transform="translate(1247.92 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_903" data-name="Line 903" y2="82.547" transform="translate(1122.974 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_941" data-name="Line 941" y2="82.547" transform="translate(1324.106 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_905" data-name="Line 905" y2="82.547" transform="translate(1132.117 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_942" data-name="Line 942" y2="82.547" transform="translate(1314.964 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_907" data-name="Line 907" y2="82.547" transform="translate(1141.259 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_943" data-name="Line 943" y2="82.547" transform="translate(1305.821 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_901" data-name="Line 901" y2="82.547" transform="translate(1098.595 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_964" data-name="Line 964" y2="82.547" transform="translate(1348.486 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_929" data-name="Line 929" y2="82.547" transform="translate(1205.255 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_944" data-name="Line 944" y2="82.547" transform="translate(1241.825 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_908" data-name="Line 908" y2="82.547" transform="translate(1103.166 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_965" data-name="Line 965" y2="82.547" transform="translate(1343.914 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_930" data-name="Line 930" y2="82.547" transform="translate(1209.827 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_913" data-name="Line 913" y2="82.547" transform="translate(1148.878 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_945" data-name="Line 945" y2="82.547" transform="translate(1298.203 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_918" data-name="Line 918" y2="82.547" transform="translate(1164.115 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_946" data-name="Line 946" y2="82.547" transform="translate(1282.965 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_923" data-name="Line 923" y2="82.547" transform="translate(1179.352 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_947" data-name="Line 947" y2="82.547" transform="translate(1267.728 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_909" data-name="Line 909" y2="82.547" transform="translate(1106.214 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_966" data-name="Line 966" y2="82.547" transform="translate(1340.867 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_931" data-name="Line 931" y2="82.547" transform="translate(1212.874 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_914" data-name="Line 914" y2="82.547" transform="translate(1151.925 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_948" data-name="Line 948" y2="82.547" transform="translate(1295.155 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_919" data-name="Line 919" y2="82.547" transform="translate(1167.162 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_949" data-name="Line 949" y2="82.547" transform="translate(1279.918 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_924" data-name="Line 924" y2="82.547" transform="translate(1182.4 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_950" data-name="Line 950" y2="82.547" transform="translate(1264.681 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_910" data-name="Line 910" y2="82.547" transform="translate(1109.261 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_967" data-name="Line 967" y2="82.547" transform="translate(1337.819 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_932" data-name="Line 932" y2="82.547" transform="translate(1215.922 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_915" data-name="Line 915" y2="82.547" transform="translate(1154.973 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_951" data-name="Line 951" y2="82.547" transform="translate(1292.108 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_920" data-name="Line 920" y2="82.547" transform="translate(1170.21 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_952" data-name="Line 952" y2="82.547" transform="translate(1276.871 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_925" data-name="Line 925" y2="82.547" transform="translate(1185.447 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_953" data-name="Line 953" y2="82.547" transform="translate(1261.633 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_911" data-name="Line 911" y2="82.547" transform="translate(1112.308 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_968" data-name="Line 968" y2="82.547" transform="translate(1334.772 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_933" data-name="Line 933" y2="82.547" transform="translate(1218.969 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_916" data-name="Line 916" y2="82.547" transform="translate(1158.02 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_954" data-name="Line 954" y2="82.547" transform="translate(1289.06 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_921" data-name="Line 921" y2="82.547" transform="translate(1173.257 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_955" data-name="Line 955" y2="82.547" transform="translate(1273.823 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_926" data-name="Line 926" y2="82.547" transform="translate(1188.495 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_956" data-name="Line 956" y2="82.547" transform="translate(1258.586 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_912" data-name="Line 912" y2="82.547" transform="translate(1115.356 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_969" data-name="Line 969" y2="82.547" transform="translate(1331.725 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_934" data-name="Line 934" y2="82.547" transform="translate(1222.016 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_917" data-name="Line 917" y2="82.547" transform="translate(1161.068 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_957" data-name="Line 957" y2="82.547" transform="translate(1286.013 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_922" data-name="Line 922" y2="82.547" transform="translate(1176.305 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_958" data-name="Line 958" y2="82.547" transform="translate(1270.776 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_927" data-name="Line 927" y2="82.547" transform="translate(1191.542 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_959" data-name="Line 959" y2="82.547" transform="translate(1255.538 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_902" data-name="Line 902" y2="82.547" transform="translate(1127.546 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_960" data-name="Line 960" y2="82.547" transform="translate(1319.535 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_904" data-name="Line 904" y2="82.547" transform="translate(1136.688 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_961" data-name="Line 961" y2="82.547" transform="translate(1310.392 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_906" data-name="Line 906" y2="82.547" transform="translate(1145.83 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_962" data-name="Line 962" y2="82.547" transform="translate(1301.25 405.5)" fill="none" stroke="#00155a" stroke-width="2"/>
    <line id="Line_936" data-name="Line 936" y2="82.547" transform="translate(1237.254 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_937" data-name="Line 937" y2="82.547" transform="translate(1234.206 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_938" data-name="Line 938" y2="82.547" transform="translate(1231.159 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_939" data-name="Line 939" y2="82.547" transform="translate(1228.111 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
    <line id="Line_935" data-name="Line 935" y2="82.547" transform="translate(1225.064 405.5)" fill="none" stroke="#00155a" stroke-width="1"/>
  </g>
</svg><p className='poppins22R'>123456-001-0000001</p>

            </Row>
            <Row style={{textAlign:'center'}}>
                <p className='poppins20B'>Look for the code in your FASTag</p>
            </Row>
        </div>
    </>
);
export default ActFastag;