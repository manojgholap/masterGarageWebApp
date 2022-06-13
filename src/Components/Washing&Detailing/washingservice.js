import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../PeriodicServices/periodic.css';
import SideBar from './SideBar';
import AddVechicle from '../PeriodicServices/AddVechiclebtn';
import { useState } from 'react';
import BookGarage from '../GarageBook/BookGarage';
function WashingService(props) {
    const [isCarSelect, setCarSelect] = useState(false)
    const [isServiceSelect, setServiceSelect] = useState('')
    const [isGarageSelected, setGarageSelected] = useState(props.isGarageSelected||'');
    console.log(props);
    return <>
        <div className='container-fluid px-5'>
            {isGarageSelected ?
                <>
                    <BookGarage isCarSelect={isCarSelect}
                        isServiceSelect={isServiceSelect}
                        isGarageSelected={isGarageSelected}
                        setCarSelect={setCarSelect}
                        setGarageSelected={setGarageSelected} >
                    </BookGarage>
                </> : <>
                    <Row>
                        <div className='py-3 top-0-cal'>
                            <Link to="/Washing"><i className='fa fa-arrow-left'></i></Link>Washing & Detailing
                        </div>
                    </Row>
                    <Row>
                        <Col lg={8} className="side_hide">
                            <SideBar isCarSelect={isCarSelect} setServiceSelect={setServiceSelect}  ></SideBar>
                        </Col>
                        <Col lg={4} ><AddVechicle setCarSelect={setCarSelect} isServiceSelect={isServiceSelect} setGarageSelected={setGarageSelected}></AddVechicle></Col>
                    </Row>
                </>
            }
        </div>
    </>
}
export default WashingService;







