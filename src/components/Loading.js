import React from 'react'
import Logo from "../images/logo.png";
const Loading = () => {
  return (
    <div className='loading'>
        <div className='loading_image'>
            <img src={Logo} alt="" />
        </div>
        <h3>Loading...</h3>
    </div>
  )
}

export default Loading