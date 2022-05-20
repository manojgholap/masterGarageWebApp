import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
import SideBar from './SideBar';
import MidBar from './MidBar';
import AddVechicle from './AddVechiclebtn';
import { useState } from 'react';
import BookGarage from '../GarageBook/BookGarage';
function Periodic(props) {
    const [isCarSelect, setCarSelect] = useState(false)
    const [isServiceSelect, setServiceSelect] = useState('')
    const [isGarageSelected, setGarageSelected] = useState('')
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
                            <Link to="/HomeMain1"><i className='fa fa-arrow-left'></i></Link>
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
export default Periodic;







