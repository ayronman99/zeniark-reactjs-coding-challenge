import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Zeniark from "../images/zeniark-logo.png"

export default function HomePage() {

  return (
    <div className="page page-home" style={{padding: "3rem"}}>
      <div className="page-title">
        <img src={Zeniark} alt="Zeniark Logo"/>
        <h1>Welcome to the Trivia Challenge!</h1>
      </div>
      <div className="page-body">
        <p>You will be presented with 10 True or False questions.</p>
        <p className='can-you'>Can you score 10/10?</p>
      </div>
      <div className="page-control">
        <button className='start'>
          <Link to="quiz">LET’S START!</Link>
          <hr />
        </button>
      </div>
    </div>
  )
}
