import React from 'react'
import "./Predict.module.css"
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './Layout.css';
function Predict() {
  const history = useHistory();
  function handleClickBC() {
    history.push('/breastcancer');
  }
  function handleClickCOVID() {
    history.push('/covid19');
  }
    return (
      <div className="predict-container">
        <div className="button-container">
          <h1> Which disease do you want to diagnose?</h1>
          <button className="btn1 btn-20px" onClick={handleClickBC}>
            {" "}
            Breast Cancer
          </button>
          <button className="btn1 btn-20px" onClick={handleClickCOVID}>
            Covid - 19
          </button>
        </div>
      </div>
    );
}

export default Predict
