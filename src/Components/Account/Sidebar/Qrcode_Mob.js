import React,{useState,useEffect,useRef} from 'react'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
//import QrReader from 'react-qr-reader';
//import QRCode from 'react-qr-code';
import QrCode from 'qrcode.react'

const Qrcode_Mob = () => {
    const qrRef=useRef(null)
     const[scanResultFile,setScanResultFile]=useState('')
     const [qrText, setQrText] = useState("helle im looking for page");
     const [scanning, setScanning] = useState(false);
const [scannerValue, setScannerValue] = useState('');

    const onScanfile=()=>{
        qrRef.current.openImageDialog();
    }
  return (
    <div className="walletgetdata">
   <Link to="/Register_Mob">   
     <div className="qralign">
        <QrCode
    id="1234610"
    value="123410"
    size={290}
    level={"H"}
    includeMargin={true}
  />
  </div></Link>

  
       </div>

    


  )
}

export default Qrcode_Mob