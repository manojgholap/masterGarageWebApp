import React,{useState,useEffect} from 'react';
import Await from './Await';
import Bokking from './Bokking'
const AwaitConfirm = () => {
    const[loading,setLoading]=useState(true);

useEffect(()=>{
  const loadData=async ()=>{
    await new Promise((r)=>setTimeout(r,2000));

    setLoading((loading)=>!loading);
  };
  loadData();
},[])
  return (
      <div>
     {loading ?(
         <Await/>
     ):(
         <Bokking/>
     )

     }
     </div>
  )
}

export default AwaitConfirm