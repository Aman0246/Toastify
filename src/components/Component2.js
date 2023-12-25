import React, { useState } from 'react'
import { IoMdSettings } from 'react-icons/io'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function Component2() {
    const[customNotify,setcustomNotify] = useState("")
   
    const notify = () => toast.success(customNotify);
  return (
    <div style={{width:'20%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{width:'80%'}}>
        <div>Enter Custom Toast Text</div>
        <input placeholder='custom Toast Message' value={customNotify} onChange={(e)=>setcustomNotify(e.target.value)} style={{width:'97%'}} type="text" name="" id="" />
        <button onClick={notify} style={{backgroundColor:'#daacda',marginTop:'1rem',color:'white',border:"0px ",padding:'.5rem',cursor:'pointer',width:'100%'}} >Show custom Toast Message</button>
        </div>
        <div>
        <IoMdSettings style={{backgroundColor:'#d4cccc',padding:'.4rem',fontSize:'20px',cursor:'pointer'}}/>
        </div>





        <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>   



    </div>
  )
}
