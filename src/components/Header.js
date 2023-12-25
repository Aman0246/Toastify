import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div className='header' style={{display:'flex',justifyContent:'space-between',height:'3rem'}}>
        <div style={{alignItems:'center',display:'flex',padding:'10px',fontWeight:'bolder',color:'white'}}>Header</div>
        <div style={{display:'flex',justifyContent:'space-between',paddingRight:'.5rem'}}>
          
        <Link  to={"/"} className='Components'>Component1</Link>
        <Link  to={"/Component2"} className='Components'>Component2</Link>
        <Link  to={"/Component3"} className='Components'>Component3</Link>
          
        </div>
    </div>
  )
}
