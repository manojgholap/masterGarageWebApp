import React, { useState, useEffect, memo, useMemo } from 'react';
import { CardBody, Input, Label, ButtonGroup, Button, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
import systemUpdate from '../../Images/systemUpdate.png';
import BasicService from '../../Images/BasicService.png';
import PS1 from '../../Images/ImagesAll/drawable-xxxhdpi/PS1.png';
import ShowMore from './ServicesShowmore';
import { Periodic, specialservice } from './Periodic';
import { useSelector, useDispatch } from 'react-redux';
import { selectVehical, getCartTotal } from '../../redux/action'
import { withRouter } from "react-router-dom";
import BasicShowmore from './BasicShowmore'
import {showMessage} from '../../Healper'
import axios from 'axios';
function MidBar(props) {
    const [show, toggleShow] = useState(false);
    const [toggl, setToggl] = useState("");
    const [toggle2, setToggl2] = useState("");
    const [toggle3, setToggl3] = useState("");
    const [searchTeam, setSeachTeam] = useState("")
    const [per, setper] = useState(Periodic);
    const [packages, setPackages] = useState()
    const check = useSelector((state) => state.check)
    const [isService, setService] = useState(false)
    const [isShowMore, setShowMore] = useState(false)
    const fee=700
    
    function getServiceById() {
        if (!props.service) return
        axios.post(process.env.REACT_APP_Api_Url + "service/getServiceById", { id: props.service })
            .then((res) => {
                if (res.data.status == true) {
                    setPackages(res.data.resp)
                }
                else {
                    console.log("something went wrong");
                }
            })
    }

    useEffect(() => {
        getServiceById()
    }, [props.service])

    const usedispatch = useDispatch()

    const handleClick = (packageName) => {
        props.setServiceSelect(packageName)
        setService(true)
    }
    const carSelect=()=>{
        showMessage("info","select your car before chosing service");
    }

    return (
        <div className='px-5 midbar'>
            <form action="/" method="get">
                <div className='searchbox'>
                    <i class='fas fa-search'></i>
                    <input
                        onChange={(e) => {
                            setSeachTeam(e.target.value)
                        }}
                        className='Searchgarage'
                        type="text"
                        placeholder="Search for Services"
                        name="Location"
                    />
                </div>

            </form>
            {packages?.map(service => {
                return (<>
                    <div className='py-4'>
                        <p className=' submidtext'>{service.service}</p>
                        {Object.keys(service.category).map((name, index) => {
                            return (
                                <>
                                    <h3 className='submidtext2'>{name}</h3>
                                    <div>
                                        <div className='SubmidBgBox mb-3'>
                                            <Row>
                                                {Object.keys(service.category[name]).map((packageName) => {
                                                    
                                                    return (
                                                        <>
                                                            <Col sm={6} key='key'>
                                                                <div className="SubmidBgBox1">
                                                                    <div className="p-3">
                                                                        <p className='poppins18'>{service.category[name][packageName].title}</p>
                                                                        {
                                                                            service.category[name][packageName].package?.map((includes) => {
                                                                                return (<><p className='poppins15light py-2'><img src={systemUpdate} style={{ width: '12px' }} alt="error"></img>
                                                                                    {includes}</p>
                                                                                </>
                                                                                )
                                                                            })}
                                                                        <Link className="bgcalling" onClick={() => setShowMore(isShowMore ? false : true)}>{isShowMore ? 'hide' : 'show more'}</Link>
                                                                    </div>
                                                                </div>
                                                                {isShowMore && <div>
                                                                                {
                                                                                    service.category[name][packageName].includes?.map((value) => {
                                                                                        return (<><p>
                                                                                            <ul className='Showmore'>
                                                                                                <li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{ marginRight: '10px' }} viewBox="0 0 15 15">
                                                                                                    <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c" />
                                                                                                </svg>{value}</p>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </p></>
                                                                                        )
                                                                                    })}
                                                                </div>}
                                                            </Col>
                                                    
                                                            <Col sm={6}>
                                                                <Row>
                                                                <Col sm={6} style={{position:'relative',top:"90px"}}>
                                                                        <p>starting @{service.category[name][packageName].price}</p>
                                                            </Col>
                                                                <Col sm={6}><div className="add_Car" style={{ width: '120px', height: '165px', marginLeft: '-20px' }}>
                                                                    <img src={BasicService} style={{ width: '127px', height: '120px' }} alt="error"></img>
                                                                    {<button className='addcar' onClick={() => props.isCarSelect? handleClick(service.category[name][packageName]):carSelect()}>{props.isCarSelect ? isService?"Added":"Add" : "Add Car"}</button>}
                                                                </div>
                                                                </Col>
                                                                </Row>
                                                            </Col>
                                                        </>)
                                                })}</Row>
                                        </div>
                                    </div>
                                </>
                            )
                        })}


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
                    </div>
                </>
                )
            })
            }
        </div>
    )
}

// const Services = (props) => {
//     console.log(props.showMore.price);
//     return (
//         <>
//             <p className='OpenSans22'>&#8377;{props.showMore.price}</p>
//             <p>
//                 <ul className='Showmore'>
//                     <li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{ marginRight: '10px' }} viewBox="0 0 15 15">
//                         <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c" />
//                     </svg></p>
//                     </li>
//                 </ul>
//             </p>
//         </>
//     )
// }

export default MidBar;