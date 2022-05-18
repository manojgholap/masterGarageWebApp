import React, { useState, useEffect } from 'react';
import { CardBody, Input, Label, ButtonGroup, Row, Col, Card, Button, CardTitle, CardText, Container } from 'reactstrap';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import './periodic.css';
import axios from 'axios';
import SideBar from './SideBar';
import MidBar from './MidBar';
import Car from '../../Images/ImagesAll/drawable-xhdpi/Car.png';
import { registerVehicalNo } from '../../redux/action';
import data from '../utill/data.json'
import { showMessage } from '../../Healper'
import LoadingScreen from 'react-loading-screen';

function PeriodicADDvechicle() {
    const [serviseList, setServiceList] = useState([])
    const [servisePack, setServicePack] = useState([])

    const listPackage = ""

    useEffect(() => {
        const listService = "http://mastergarage.in/garageapi/getServiceList.php";
        axios.get(listService)
            .then(res => {
                console.log(res.data.result)
                setServiceList(res.data.result)
            })
            .catch(err => {
                console.log(err)

            })
    }, [])

    const filterServicePack = (serviceId) => {
        const serpack = "http://mastergarage.in/garageapi/getServicePackage2.php"

        const updatedSerivce = serpack.filter((curEle) => {
            return curEle.serviceId === serviceId;
        })
        console.log(updatedSerivce)
        setServicePack(updatedSerivce)
    }
    const SubLast = () => {
        const [brand, setBrand] = useState("")
        const [information, setInformation] = useState('')
        const [valid, setValid] = useState("")
        const [serviseList, setServiceList] = useState('');
        const [isSearchBrand, setSearchBrand] = useState(false)

        const check = useSelector((state) => state.check?.registerVehicalNo)
        const usedispatch = useDispatch()
        const history = useHistory()

        function searchBrand(e) {
            var value = serviseList.filter((res) => {
                let response = res.make.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase());
                return response
            })
            if (value.length > 0) {
                setSearchBrand(value)
            } else {
                setSearchBrand(false)
            }
        }

        useEffect(() => {
            const listService = process.env.REACT_APP_Api_Url + "car/getAllCarBrands";
            axios.get(listService)
                .then(res => {
                    console.log(res.data.resp)
                    setServiceList(res.data.resp)
                })
                .catch(err => {
                    console.log(err)

                })
        }, [])

        const handlefilter = () => {
            let temp = true
            let tempreg = [...check]
            Object.entries(data.cars).map(a => {
                a[1].map(b => {
                    if (b.Registeration == brand) {
                        temp = b
                    }

                })

            })
            if (temp == true) {
                setValid("error")
            }
            else {
                setValid("success")
                history.push('/ServiceEstimates')
            }
            //setPage((currentPage)=>currentPage + 1);
            //information(temp)
            console.log(temp)
            tempreg.push(temp)

            usedispatch(registerVehicalNo(tempreg))
        }

        function onBrandselected(e) {
            console.log(e.target.attributes.value.value);
            setBrand(e.target.attributes.value.value);
        }

        return (
            <>

                {brand ? <Cars brand={brand}></Cars> :

                    <div className="periodic_cont">
                        <div className="progressbar">
                            <div className="prog">
                            </div>
                            <div className="pagesize1"><li></li><li>|</li><li>|</li><li>|</li><li>|</li><li></li></div>
                            <div className="pagesize">
                                <li>E</li>
                                <li>Vehical</li>
                                <li>Service</li>
                                <li>Garage</li>
                                <li>Basic</li>
                                <li>F</li>
                            </div>
                        </div>
                        <div class="boxlast py-3 midbar">
                            <Row >
                                {/* <h4>Enter Vechicle Registration Number</h4> */}
                                <Col lg={1}></Col>
                                <Col lg={1}>
                                    <Link to="/PeriodicService"><i className='fa fa-arrow-left'></i></Link>
                                </Col>
                                <Col lg={6}><p>Select Your Car Brand</p></Col>
                            </Row>
                            <Row style={{ justifyContent: 'center', textAlign: 'center' }}>
                                {/* <img src={Car} style={{float:'center',width:'270px',height:'187px',padding:'20px'}} alt="error"></img> */}


                                <form className='py-3'>
                                    <input
                                        className='addvechicleInput'
                                        type="text"
                                        onChange={searchBrand}
                                        placeholder="search by make or model    "
                                        name="add vechicle"
                                    />
                                </form>
                                <Container >
                                    <div className="all_garage" style={{ cursor: "pointer" }} >

                                        {serviseList ? <Row >
                                            {isSearchBrand ? isSearchBrand.map(brand => {
                                                return (
                                                    <>
                                                        <Col lg={4} style={{ marginBottom: "10px" }} key={brand.makde_id}>
                                                            <img src={`${process.env.REACT_APP_Api_Url + brand.makePhoto}`} width="100px" height="100px" value={brand.make} onClick={onBrandselected} />
                                                        </Col>
                                                    </>
                                                )
                                            }) :
                                                serviseList.map(brand => {
                                                    return (
                                                        <>

                                                            <Col lg={4} style={{ marginBottom: "10px" }} key={brand.make}>
                                                                {/* <button className='btn btn-danger' onClick={onBrandselected} value={brand.make}>{brand.make}</button> */}
                                                                <div >
                                                                    <img src={`${process.env.REACT_APP_Api_Url + brand.makePhoto}`} width="100px" height="100px" value={brand.make} onClick={onBrandselected} />
                                                                    <p>{brand.make}</p>
                                                                </div>
                                                            </Col>
                                                        </>
                                                    )
                                                })}
                                            {/* <p className='poppins12light' style={{ textAlign: 'left' }}>Don't worry your information safe with us we will use your number to fetch your car make & model so we can show accordingly</p> */}
                                        </Row> : <LoadingScreen
                                            loading={true}
                                            spinnerColor='#9ee5f8'
                                            textColor='#676767'
                                        />}
                                    </div>
                                </Container>
                            </Row>
                        </div>

                    </div>
                }
            </>
        )
    }
    const Cars = (brand) => {
        const [cars, setCars] = useState([])
        const [isCars, setSearchCars] = useState(false)
        const [isCarSelect, setSelectCar] = useState('')
        const [carPhoto, setCarPhoto] = useState([])

        function searchCar(e) {
            var value = carPhoto.filter((res) => {
                let response = res.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase());
                return response
            })
            if (value.length > 0) {
                setSearchCars(value)
            } else {
                setSearchCars(false)
            }
        }

        function onCarselected(e) {
            console.log(e.target.attributes.value.value);
            setSelectCar(e.target.attributes.value.value);
        }

        useEffect(() => {
            const carService = process.env.REACT_APP_Api_Url + "car/getCarByBrandName";
            axios.post(carService, { brandName: brand.brand })
                .then(res => {
                    if (res.data.status == true) {
                        setCars(res.data.resp[0].car)
                        setCarPhoto(res.data.resp[0].carPhoto)
                        console.log(res.data.resp[0].carPhoto)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }, [])

        return (
            <>
                {isCarSelect ? <FuelType props={{ brand: brand.brand, car: isCarSelect }}></FuelType> :
                    <div className="periodic_cont" >
                        <div className="progressbar">
                            <div className="prog">
                            </div>
                            <div className="pagesize1"><li></li><li>|</li><li>|</li><li>|</li><li>|</li><li></li></div>
                            <div className="pagesize">
                                <li>E</li>
                                <li>Vehical</li>
                                <li>Service</li>
                                <li>Garage</li>
                                <li>Basic</li>
                                <li>F</li>
                            </div>
                        </div>
                        <div class="boxlast py-3 midbar">
                            <Row >
                                {/* <h4>Enter Vechicle Registration Number</h4> */}
                                <Col lg={1}></Col>
                                <Col lg={3}><Link to="/PeriodicService"><i className='fa fa-arrow-left'></i></Link></Col>
                                <Col lg={3}><img src={`${process.env.REACT_APP_Api_Url + brand.brand}.jpeg`} width="100px" height="100px" /></Col>
                            </Row>
                            <Row style={{ justifyContent: 'center', textAlign: 'center' }}>

                                <form className='py-3'>
                                    <input
                                        className='addvechicleInput'
                                        type="text"
                                        onChange={searchCar}
                                        placeholder="search by make or model"
                                        name="add vechicle"
                                    />
                                </form>
                                <Container >
                                    <div className="all_garage" style={{ cursor: "pointer" }} >
                                        <Row>
                                            {isCars ? isCars.map(cars => {
                                                return (
                                                    <>
                                                        <Col lg={4} style={{ marginBottom: "10px" }} key={cars}>
                                                            {/* <button className='btn btn-danger' value={brand.make} onClick={onBrandselected}>{brand.make}</button> */}
                                                            <img src={`${process.env.REACT_APP_Api_Url}models/${brand.brand}/${cars}`} width="100px" height="100px" value={cars} onClick={onCarselected} />
                                                            <p>{cars.split('.')[0]}</p>
                                                        </Col>
                                                    </>
                                                )
                                            })
                                                :
                                                carPhoto.map(cars => {
                                                    return (
                                                        <>
                                                            <Col lg={4} style={{ marginBottom: "10px" }} key={cars}>

                                                                {/* <button className='btn btn-danger' value={brand.make} onClick={onBrandselected}>{brand.make}</button> */}
                                                                <img src={`${process.env.REACT_APP_Api_Url}models/${brand.brand}/${cars}`} width="100px" height="100px" value={cars} onClick={onCarselected} />
                                                                <p>{cars.split('.')[0]}</p>
                                                            </Col>
                                                        </>
                                                    )
                                                })
                                            }
                                            {/* <p className='poppins12light' style={{ textAlign: 'left' }}>Don't worry your information safe with us we will use your number to fetch your car make & model so we can show accordingly</p> */}
                                        </Row>
                                    </div>
                                </Container>
                            </Row>
                        </div>
                    </div>}
            </>
        )
    }
    const FuelType = (props) => {
        const [fueltype, setFuelType] = useState('')

        const history = useHistory()

        useEffect(() => {
            const carService = process.env.REACT_APP_Api_Url + "car/getCarByBrandName";
            axios.post(carService, { brandName: props.props.brand })
                .then(res => {
                    if (res.data.status == true) {
                        var car = res.data.resp[0].carPhoto;
                        var fuel = res.data.resp[0].fueltype
                        for (const key in car) {
                            if (props.props.car == car[key]) {
                                setFuelType(fuel[key])
                            }
                        }
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }, [])

        function addCar(e) {
            const isLogin = localStorage.getItem('isLogin');
            if (isLogin == "true") {
                axios.post(process.env.REACT_APP_Api_Url + 'user/addUserCar',
                    {
                        make: props.props.brand,
                        fueltype: e.target.value,
                        car: props.props.car,
                        mobileNumber: localStorage.getItem('mobileNumber')
                    })
                    .then((res) => {
                        if (res.data.status == true) {
                            showMessage("success", res.data.message);
                            history.push('/PeriodicService')
                        }
                        else {
                            showMessage("error", res.data.err)
                        }
                    })
            }
            else {
                axios.post(process.env.REACT_APP_Api_Url + 'user/addUserTempCar',
                    {
                        make: props.props.brand,
                        fueltype: e.target.value,
                        car: props.props.car,
                        token: localStorage.getItem('token')
                    })
                    .then((res) => {
                        if (res.data.status == true) {
                            showMessage("success", res.data.message);
                            history.push('/PeriodicService')
                        }
                        else {
                            showMessage("error", res.data.err)
                        }
                    })
            }
        }
        return (
            <>
                <div className="periodic_cont">
                    <div className="progressbar">
                        <div className="prog">
                        </div>
                        <div className="pagesize1"><li></li><li>|</li><li>|</li><li>|</li><li>|</li><li></li></div>
                        <div className="pagesize">
                            <li>E</li>
                            <li>Vehical</li>
                            <li>Service</li>
                            <li>Garage</li>
                            <li>Basic</li>
                            <li>F</li>
                        </div>
                    </div>
                    <div class="boxlast py-3" >
                        <Row >
                            {/* <h4>Enter Vechicle Registration Number</h4> */}
                            <Col lg={1}></Col>
                            <Col lg={1}>
                                <Link to="/PeriodicService"><i className='fa fa-arrow-left'></i></Link>
                            </Col>
                            <Col lg={6}>
                                <img src={`${process.env.REACT_APP_Api_Url + props.props.brand}.jpeg`} width="100px" height="100px" />{"(" + props.props.car.split('.')[0] + ")"}
                            </Col>
                        </Row>
                        <Row >
                            {fueltype ?
                                fueltype.map(fuel => {
                                    console.log(fuel);
                                    return (
                                        <Col sm="4">
                                            <Card body style={{ justifyContent: 'center' }}>
                                                <CardText><i class='fas fa-gas-pump fa-3x' ></i></CardText>
                                                <Button value={fuel} onClick={addCar}>{fuel}</Button>
                                            </Card>
                                        </Col>
                                    )
                                })
                                : <><Col sm="4">
                                    <Card body style={{ justifyContent: 'center' }}>
                                        <CardText><i class='fas fa-gas-pump fa-3x' ></i></CardText>
                                        <Button value="Petrol" onClick={addCar}>Petrol</Button>
                                    </Card>
                                </Col>
                                    <Col sm="4">
                                        <Card body style={{ justifyContent: 'center' }}>
                                            <CardText><i class='fas fa-gas-pump fa-3x' ></i></CardText>
                                            <Button value="CNG" onClick={addCar}>CNG</Button>
                                        </Card>
                                    </Col></>}


                        </Row>

                    </div>
                </div>

            </>
        )
    }
    return (<>
        <div className='container-fluid px-5'>
            <Row className="">
                <div className='py-3 periodic_top'>
                    <Link to="/PeriodicService" className="periodicadd"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/PeriodicService" className="periodicadd1">Add services & Choose a garage</Link>
                </div>
            </Row>
            <Row>
                <Col lg={8} className="periodic_hide">
                    <SideBar></SideBar>
                    </Col>
                
                <Col lg={4} sm={3}><SubLast></SubLast></Col>

            </Row>

        </div>

    </>)
}


export default withRouter(PeriodicADDvechicle);





