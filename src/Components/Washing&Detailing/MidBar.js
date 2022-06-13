import React, { useState, useEffect, memo, useMemo } from "react";
import {
  CardBody,
  Input,
  Label,
  ButtonGroup,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";
import "../PeriodicServices/periodic.css";
import systemUpdate from "../../Images/systemUpdate.png";
import BasicService from "../../Images/BasicService.png";
import PS1 from "../../Images/ImagesAll/drawable-xxxhdpi/PS1.png";
import morning from "../../Images/drawable-xxhdpi/morning.png"
import waterless from "../../Images/drawable-xxhdpi/waterless.png"
import durable from "../../Images/drawable-xxhdpi/durable.png"
import protect from "../../Images/drawable-xxhdpi/protect.png"
import freshfeel from "../../Images/drawable-xxhdpi/freshfeel.png"
// import { Washing } from "./Washing";
import { useSelector, useDispatch } from "react-redux";
import { selectVehical, getCartTotal } from "../../redux/action";
import { withRouter } from "react-router-dom";
import BasicShowmore from "../PeriodicServices/BasicShowmore";
import { showMessage } from "../../Healper";
import axios from "axios";
import checked from '../../Images/check.png';
import LoadingScreen from 'react-loading-screen';

// import { CloseButton } from "react-bootstrap-icons";
function MidBar(props) {
  const [show, toggleShow] = useState(false);
  const [toggl, setToggl] = useState("");
  const [toggle2, setToggl2] = useState("");
  const [toggle3, setToggl3] = useState("");
  const [searchTeam, setSeachTeam] = useState("");
  // const [per, setper] = useState(Washing);
  const [packages, setPackages] = useState();
  const check = useSelector((state) => state.check);
  const [isService, setService] = useState([]);

  const togglehandle = (item) => {
    console.log(item)
    let val = packages.map((name) => {
      if (name.tid == item.tid) {
        name.toggle = !name.toggle
      }
      return name
    })
    console.log(val)
    let temdata = [...val]
    setPackages(temdata)
  }

  function getServiceById() {
    if (!props.serviceId) return;
    axios(
      {
        method: "post",
        url: process.env.REACT_APP_Master_Garage + "getServiceById.php",
        data: { serviceId: props.serviceId },
      })
      .then((res) => {
        console.log(res.data.result);
        let obj = res.data.result;
        let obj1 = [];
        obj.forEach((element, index) => {
          Object.assign(element, { toggle: false });
          Object.assign(element, { tid: index });
          Object.assign(element, { isService: false });
          obj1.push(element)
        })
        setPackages(obj1);
      });
  }

  useEffect(() => {
    getServiceById();
  }, [props.serviceId]);

  const usedispatch = useDispatch();

  const handleClick = (service) => {
    console.log(service)
    let val = packages.map((name) => {
      if (name.tid == service.tid) {
        name.isService = !name.isService
      }
      return name
    })
    console.log(val)
    let temdata = [...val]
    setPackages(temdata)
    setService([...isService,service])
    // props.setServiceSelect(service);
  };
   useEffect(()=>{
    props.setServiceSelect(isService);
   },[isService])

  const carSelect = () => {
    showMessage("info", "select your car before chosing service");
  };

  return (
    <>
      {packages ? 
      <div className='px-5 midbar'>
          <div className='SubmidBgBox' style={{backgroundColor:"aliceblue"}}>
           <Row sm={10}>
             <Col sm={6}>
             <h1 className='submidtext' style={{fontSize:"30px",marginLeft:"10px"}}>DoorStep Daily</h1>
             <h1 className='submidtext' style={{fontSize:"30px",marginLeft:"10px"}}>  Car Wash </h1>
             <h1 className='submidtext' style={{fontSize:"30px",marginLeft:"10px"}}> Starting @ 399 </h1>
             </Col>
             <Col sm={6}>
               <img src={morning} height="auto" width="250px" />
             </Col>
           </Row>
           <Row>
                        <ul className="row2  mt-3">
                            <li className='ServicesBG'>
                                    <div className="rowBox p-2">
                                        <img src={waterless} alt="error" />
                                    </div>
                            </li>
                            <li className='ServicesBG'>
                                    <div className="rowBox p-2">
                                        <img src={durable} alt="error" />
                                    </div>
                            </li>
                            <li className='ServicesBG' >
                                    <div className="rowBox p-2">
                                        <img src={freshfeel} alt="error" />
                                    </div>
                            </li>
                            <li className='ServicesBG'>
                                    <div className="rowBox p-2">
                                        <img src={protect} alt="error" />
                                    </div>
                            </li>
                            </ul>
           </Row>
          </div>

        <div className="midBar-comp-body">
          <div className="p-3">
            <p className="submidtext text-uppercase">{props.serviceName}</p>
            {packages?.map((service) => {
              return (
                <>
                  <h3 className='submidtext2'>{service.package_name}</h3>
                  <div>
                    <div className='SubmidBgBox mb-3'>
                      <Row>
                        <Col sm={12} key='key'>
                          <div className="SubmidBgBox1 p-3 flex-container">
                            {service.toggle ? (
                              <span
                                className="close-batch text-white"
                                onClick={() => togglehandle(service)}
                              >
                                x
                              </span>
                            ) : <span className="close-batch text-white"></span>}
                            <div className="flex-item-left">
                              <p className='poppins18 text-dark'>{service.package_name}</p>
                              <p className='poppins15light py-2'><img src={systemUpdate} style={{ width: '12px' }} alt="error"></img>{service.months_or_kms}</p>
                              <p className='poppins15light'><img src={checked} style={{ width: '12px' }} alt="error"></img>{service.points} point service</p>
                              <div className="toggle-price">
                                {!service.toggle ? (
                                  <Link
                                    className="bgCalling show_more"
                                    onClick={() => togglehandle(service)}
                                  >
                                    {service.toggle
                                      ? null
                                      : "show more"}
                                  </Link>
                                ) : null}
                                <p style={{ margin: 0 }}>
                                  starting @ {service.costs}
                                </p>
                              </div>
                              {service.toggle && (
                                <div>
                                  <hr />
                                  <BasicShowmore></BasicShowmore>
                                </div>)}
                            </div>
                            <div className="flex-item-right">
                              <div
                                className="add_Car"
                                style={{
                                  width: "120px",
                                  height: "165px",
                                  marginLeft: "-20px",
                                }}
                              >
                                <img
                                  src={service.imageUri}
                                  style={{
                                    width: "127px",
                                    height: "120px",
                                  }}
                                  alt="error"
                                ></img>
                                {
                                  <button
                                    className="addcar"
                                    onClick={() =>
                                      props.isCarSelect
                                        ? service.isService?
                                          showMessage("info","service allready added")
                                          :handleClick(service)
                                        : carSelect()
                                    }
                                  >
                                    {props.isCarSelect
                                      ? service.isService
                                        ? "Added"
                                        : "Add"
                                      : "Add Car"}
                                  </button>
                                }
                              </div>
                            </div>
                          </div>
                        </Col>
                        {/* <Col sm={3}>
                        <div className="add_Car" style={{ width: '120px', height: '165px', marginLeft: '-20px' }}>
                          <img src={service.imageUri} style={{ width: '127px', height: '120px' }} alt="error"></img>
                          <button className='addcar' onClick={() => handleClick(service)}>ADD CAR</button>
                        </div>
                      </Col> */}
                      </Row>
                    </div>
                  </div>
                </>
              )
            })
            }
          </div>
        </div>
        <Row className=' footerbg m-0 mt-3'>

          <h2>Peace of Mind Guarantee Program</h2>
          <ol>
            <li><i class="fas fa-chevron-circle-down"></i> Competitive Pricing</li>
            <li><i class="fas fa-chevron-circle-down"></i> Secure Payments</li>
            <li><i class="fas fa-chevron-circle-down"></i> High Quality Service</li>
            <li><i class="fas fa-chevron-circle-down"></i> &#8377;25000 Warrenty</li>
          </ol>
          <span>Know more    <i class="fas fa-arrow-circle-right"></i></span>
          <img src={PS1} style={{ float: 'right', width: '200px', height: '60px' }}></img>
        </Row>
      </div> :
        <LoadingScreen
          loading={true}
          spinnerColor='#9ee5f8'
          textColor='#676767'
        />}
    </>
  )
}
export default MidBar;
