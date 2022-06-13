import React, { useState, useEffect } from 'react';
import { CardBody, Input, Label, ButtonGroup, Row, Col, Card, Button, CardTitle, CardText, Container } from 'reactstrap';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import './periodic.css';
import axios from 'axios';
import SideBar from './SideBar';
import MidBar from './MidBar';
import Car from '../../Images/ImagesAll/drawable-xhdpi/Car.png';
import petrol from '../../Images/drawable-xxhdpi/petrol.png';
import diesel from '../../Images/drawable-xxhdpi/diesel.png';
import cng from '../../Images/drawable-xxhdpi/cng.png';
import { registerVehicalNo } from '../../redux/action';
import data from '../utill/data.json'
import { showMessage } from '../../Healper'
import LoadingScreen from 'react-loading-screen';


const EditVehicle = (props) => {
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
            let response = res.name.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase());
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
        const vehicleList = process.env.REACT_APP_Master_Garage + "getAllBrands.php";

        axios.get(vehicleList)
            .then(res => {
                console.log(res.data)
                setServiceList(res.data.result)
            })
            .catch(err => {
                console.log(err)

            })
        // axios.get(listService)
        //     .then(res => {
        //         console.log(res.data.resp)
        //         setServiceList(res.data.resp)
        //     })
        //     .catch(err => {
        //         console.log(err)

        //     })
    }, [])

    function onBrandselected(e) {
        setBrand(e);
    }

    return (
        <>

            {brand ? <Cars brand={brand} setShow={props.setShow} setBrand={setBrand} id={props.id}></Cars> :

                <div className="periodic_cont">

                    <div class="boxlast py-3 midbar">
                        <Row >
                            {/* <h4>Enter Vechicle Registration Number</h4> */}
                            <Col lg={1}></Col>
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
                                                    <Col lg={4} style={{ marginBottom: "10px" }} key={brand.vehicleId}>
                                                        <img src={`${process.env.REACT_APP_Master_Garage + "brands/" + brand.imageUri}`} width="100px" height="100px" value={brand.vehicleId} onClick={() => onBrandselected(brand)} />
                                                        <p>{brand.name}</p>
                                                    </Col>
                                                </>
                                            )
                                        }) :
                                            serviseList.map(brand => {
                                                return (
                                                    <>

                                                        <Col lg={4} style={{ marginBottom: "10px" }} key={brand.vehicleId}>
                                                            {/* <button className='btn btn-danger' onClick={onBrandselected} value={brand.make}>{brand.make}</button> */}
                                                            <div >
                                                                <img src={`${process.env.REACT_APP_Master_Garage + "brands/" + brand.imageUri}`} width="100px" height="100px" value={brand.vehicleId} onClick={() => onBrandselected(brand)} />
                                                                <p>{brand.name}</p>
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

    function searchCar(e) {
        var value = cars.filter((res) => {
            let response = res.name.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase());
            return response
        })
        if (value.length > 0) {
            setSearchCars(value)
        } else {
            setSearchCars(false)
        }
    }

    function onCarselected(e) {
        setSelectCar(e);
    }

    useEffect(() => {
        const carById = process.env.REACT_APP_Master_Garage + "getVehicleById.php"
        axios.post(carById, { vehicleId: brand.brand.vehicleId })
            .then(res => {
                console.log(res.data)
                setCars(res.data.result)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            {isCarSelect ? <FuelType props={{ brand: brand.brand, car: isCarSelect }} id={brand.vehicleId} setShow={brand.setShow} setSelectCar={setSelectCar}></FuelType> :
                <div className="periodic_cont" >
                    <div class="boxlast py-3 midbar">
                        <Row >
                            {/* <h4>Enter Vechicle Registration Number</h4> */}
                            <Col lg={1}></Col>
                            <Col lg={3}><Link><i className='fa fa-arrow-left' onClick={() => brand.setBrand('')}></i></Link></Col>
                            <Col lg={3}><img src={`${process.env.REACT_APP_Master_Garage + "brands/" + brand.brand.imageUri}`} width="100px" height="100px" /></Col>
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
                                                        <img src={`${process.env.REACT_APP_Master_Garage + "brands/Models/" + cars.imageUri}`} width="100px" height="100px" value={cars} onClick={() => onCarselected(cars)} />
                                                        <p>{cars.name}</p>
                                                    </Col>
                                                </>
                                            )
                                        })
                                            :
                                            cars.map(cars => {
                                                return (
                                                    <>
                                                        <Col lg={4} style={{ marginBottom: "10px" }} key={cars}>

                                                            {/* <button className='btn btn-danger' value={brand.make} onClick={onBrandselected}>{brand.make}</button> */}
                                                            <img src={`${process.env.REACT_APP_Master_Garage + "brands/Models/" + cars.imageUri}`} width="100px" height="100px" value={cars} onClick={() => onCarselected(cars)} />
                                                            <p>{cars.name}</p>
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
        // const carService = process.env.REACT_APP_Api_Url + "car/getCarByBrandName";
        const getFuelType = process.env.REACT_APP_Master_Garage + "getFuelType.php"
            axios.post(getFuelType, { modelId: props.props.car.modelId })
                .then(res => {
                            console.log(res.data.result);
                             setFuelType(res.data.result)

                        // var car = res.data.resp[0].carPhoto;
                        // var fuel = res.data.resp[0].fueltype
                        // for (const key in car) {
                        //     if (props.props.car == car[key]) {
                        //     }
                    // }
                })
                .catch(err => {
                    console.log(err)
                })
    }, [])

    function addCar(fuel) {
        const isLogin = localStorage.getItem('isLogin');
        if (isLogin == "true") {
            axios.post(process.env.REACT_APP_Api_Url + 'user/updateUserCar',
                {
                    make: props.props.brand,
                    fueltype: fuel,
                    car: props.props.car,
                    id: props.id,
                    mobileNumber: localStorage.getItem('mobileNumber')
                })
                .then((res) => {
                    if (res.data.status == true) {
                        showMessage("success", res.data.message);
                        props.setShow(false)
                        history.push('/PeriodicService')

                    }
                    else {
                        showMessage("error", res.data.err)
                    }
                })
        }
        else {
            axios.post(process.env.REACT_APP_Api_Url + 'user/updateUserTempCar',
                {
                    make: props.props.brand,
                    fueltype: fuel,
                    car: props.props.car,
                    id: props.id,
                    token: localStorage.getItem('token')
                })
                .then((res) => {
                    if (res.data.status == true) {
                        showMessage("success", res.data.message);
                        props.setShow(false)
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
            <Row >
                <Col lg={1}></Col>
                <Col lg={1}>
                    <Link><i className='fa fa-arrow-left' onClick={() => props.setSelectCar('')}></i></Link>
                </Col>
                <Col lg={6}>
                    <img src={`${process.env.REACT_APP_Master_Garage + "brands/" + props.props.brand.imageUri}`} width="100px" height="100px" />{props.props.car.name}
                </Col>
            </Row>
            <Row >
                {fueltype &&
                    fueltype.map(fuel => {
                        return (
                            <Card body style={{ justifyContent: 'center', cursor: "pointer", backgroundColor: "aliceblue" }} className='mb-2' onClick={() => addCar(fuel)}>
                                <Row>
                                    <Col sm="2">
                                    </Col>
                                    <Col sm="4">
                                        <img src={fuel.fuel == "Petrol" ? petrol : fuel.fuel == "Diesel" ? diesel : cng}></img>
                                    </Col>
                                    <Col sm="4" style={{ marginTop: "20px" }}>
                                        <h4><b>{fuel.fuel}</b></h4>
                                    </Col>
                                </Row>
                            </Card>
                        )
                    })
                }
            </Row>
        </>
    )
}

export default EditVehicle