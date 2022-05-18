import React from 'react'
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container,CardHeader,UncontrolledCollapse ,Card} from 'reactstrap';
import { Link,withRouter,useHistory } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import back1 from '../../Images/drawable-xxxhdpi/Group 35650.png'



import './login.css'
const Login_Mob = () => {
  return (
    <div>
        <div className="cont_top">
            <Link to="./Login2_Mob">
                <img src={back1} alt="error"/>
            </Link>
        </div>
    </div>
  )
}

export default Login_Mob