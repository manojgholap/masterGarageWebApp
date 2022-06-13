import { Row, Col } from 'reactstrap';
import './periodic.css';
import SideBar from './SideBar';
import AddVechicle from './AddVechiclebtn';

function Service(props) {
    return <>
        <div className='container-fluid px-5'>
            <Row>
                <Col lg={8} className="side_hide">
                    <SideBar isCarSelect={props.isCarSelect} setServiceSelect={props.setServiceSelect}  ></SideBar>
                </Col>
                <Col lg={4} ><AddVechicle isGarageSelected={props.isGarageSelected} isBookByGarage={props.isBookByGarage} setCheckout={props.setCheckout} setCarSelect={props.setCarSelect} isServiceSelect={props.isServiceSelect} setGarageSelected={props.setGarageSelected}></AddVechicle></Col>
            </Row>
        </div>
    </>
}
export default Service;







