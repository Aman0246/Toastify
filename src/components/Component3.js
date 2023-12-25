    import React, { useEffect, useState } from 'react';
    import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    import { data } from '../Constants/Data';

    export default function Component3() {
    const [counter, setCounter] = useState('');
    const [start,setStart]=useState(0)
    const[dataPerPage,setdataPerPage]=useState(5)
    let datatoview=data.responseData.slice(start,dataPerPage+start)
    const [refres,setrefresh] = useState(true)
    useEffect(()=>{
  
    },[])
    const handleClick = () => {
        if (counter === '') {
        alert('Please Enter Time');
        } else {
        toast.success(`Timer started for ${counter} seconds`); 
        setTimeout(() => {
            setrefresh(false)
        }, counter * 1000);
        }
    };
    const handlePrevious=()=>{
        if(start<=0){
            return alert("click on next")
        }
        setStart(start-5)
    }
    const handleNext=()=>{
        if(start>245){
            return alert("click on previous")
        }
        setStart(start+5)
    }
    console.log(localStorage.getItem("hide"))
    return (
        <div style={{ display: 'flex' }}>
            {refres &&
        
        <div style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '50%', marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>Enter Countdown Time</div>
            <input
                value={counter}
                onChange={(e) => setCounter(e.target.value)}
                style={{ padding: '1rem' }}
                placeholder="Enter Here"
                type="number"
            />
            <button
                onClick={handleClick}
                style={{ backgroundColor: '#daacda', border: 'none', padding: '.5rem', color: 'white', cursor: 'pointer' }}
            >
                Start Timer
            </button>
            </div>
        </div>
        }{
            !refres &&
            <div style={{ width: '70%',display:'flex',justifyContent:'space-around' }}>
            <div style={{width:'80%'}}>
                {datatoview.map((e)=>{
                    return(<div>{e.country_name}</div>)
                })}
            </div>
            <div>
                <button style={{marginRight:'10px'}} onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
        }
       

        <ToastContainer
            position="bottom-center"
            autoClose={counter * 1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
            theme="colored"
        />
        </div>
    );
    }
