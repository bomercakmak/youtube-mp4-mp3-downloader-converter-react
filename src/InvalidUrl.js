import React from 'react'
import './InvalidUrl.css'
import gif from './gif/gif.gif'

function InvalidUrl() {
    return (
        <div className="default">
      <h1>Please enter a valid URL !</h1> 
      <br />
      <p>Please try again like this</p>
      <img src={gif} alt="" />
    </div>
    )
}

export default InvalidUrl
