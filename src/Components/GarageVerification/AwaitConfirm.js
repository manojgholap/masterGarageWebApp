import React, { useState, useEffect } from 'react';
import Await from './Await';
import Bokking from './Bokking'
import axios from 'axios';
import LoadingScreen from 'react-loading-screen';


const AwaitConfirm = (props) => {
  const [orderId, setOrderId] = useState(props.orderId || '');
  const [orderDetail, setOrderDetails] = useState('');

  useEffect(() => {
    axios.post(process.env.REACT_APP_Api_Url + "order/getOrderById", { orderId: orderId }).then((res) => {
      if (res.data.status == true) {
        setOrderDetails(res.data.resp)
      }
    })
  }, [orderId])
  return (
    <>
      {orderDetail ? <div>
        {orderDetail.garageStatus == "Confirmed" ?
          <Bokking orderDetail={orderDetail} /> :
          <Await orderDetail={orderDetail} />
        }
      </div> :
        <LoadingScreen
        loading={true}
        spinnerColor='#9ee5f8'
        textColor='#676767'
    />}
    </>
  )
}

export default AwaitConfirm