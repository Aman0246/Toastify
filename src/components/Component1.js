import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { IoMdSettings } from "react-icons/io";
export default function Component1() {
    const notify = () => toast.success("Wow so easy !");
  return (
    <div style={{display:'flex',justifyContent:"center",marginTop:'5%'}}>
    <div style={{display:'flex', height:'80vh',width:'90%',alignItems:'start',gap:'2rem'}}>

        <button style={{backgroundColor:'#daacda',color:'white',fontSize:'20px',border:"0px ",padding:'.9rem',cursor:'pointer'}} onClick={notify}> Show Toast Message </button>
        
        <IoMdSettings style={{backgroundColor:'#d4cccc',padding:'1rem',fontSize:'20px',cursor:'pointer'}}/>
        
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
</div>
  )
}
