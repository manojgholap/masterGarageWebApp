import React, { useState, useEffect, memo, useMemo } from 'react';
import { CardBody, Input, Label, ButtonGroup, Button, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
import systemUpdate from '../../Images/systemUpdate.png';
import PS1 from '../../Images/ImagesAll/drawable-xxxhdpi/PS1.png';
import ShowMore from './ServicesShowmore';
import { Periodic, specialservice } from './Periodic';
import { useSelector, useDispatch } from 'react-redux';
import { selectVehical, getCartTotal } from '../../redux/action'
import { withRouter } from "react-router-dom";
import BasicShowmore from './BasicShowmore'
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
    const [category, setCategory] = useState([])
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

    useEffect(() => {
        console.log(category);
    }, [category])
    // useCallback(()=>{
    //     getServiceById()

    // },[Props.service])
    useEffect(() => {
        console.log(packages);
    }, [packages])

    const usedispatch = useDispatch()


    const handleClick = (item) => {
        console.log(item)
        let temdata = [...check.selectVehical, item]
        usedispatch(selectVehical(temdata))
    }
    // const handlShow =()=>{
    //     setShow(!isShow);
    // }
    const togglehandle = (item) => {
        console.log(item)
        let val = per.map((name) => {
            if (name.id == item.id) {
                name.toggle = !name.toggle
            }
            return name
        })
        console.log(val)
        let temdata = [...val]
        setper(temdata)
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
                                <><h3 className='submidtext2'>{name}</h3>
                                    <div>
                                        <div className='SubmidBgBox mb-3'>
                                            <Row>
                                                {Object.keys(service.category[name]).map((packageName) => {
                                                    return (<>
                                                    <Col sm={9} key='key'>
                                                        <div className="SubmidBgBox1">
                                                            <div className="p-3">
                                                                <p className='poppins18'>{packageName}</p>
                                                                <p className='poppins15light py-2'><img src="" style={{ width: '12px' }} alt="error"></img></p>
                                                                <p className='poppins15light'><img src="" style={{ width: '12px' }} alt="error"></img></p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className='OpenSans22'>&#8377;700</p>
                                                            {
                                                                Object.keys(service.category[name][packageName]).map((includes) => {
                                                                    return (<>

                                                                        {
                                                                            service.category[name][packageName][includes].map((value) => {
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

                                                                    </>
                                                                    )
                                                                })}
                                                        </div>
                                                    </Col>
                                                    </>)
                                                })}
                                            </Row>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </>
                )
            })
            }
        </div>


    )
}

export default MidBar;