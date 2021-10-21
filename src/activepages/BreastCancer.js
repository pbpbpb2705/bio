import React from 'react'
import {useState} from 'react'
import "./Layout.css"
function BreastCancer() {
    return (
      <div>
        <h1 className="title">Breast Cancer</h1>
        <form className="form" action="http://localhost:3000" method="POST">
          <h1> Age</h1>
          <textarea id="Age" class="form-control" rows="1" cols="5"></textarea>
          <h1>BMI</h1>
          <textarea id="BMI" class="form-control" rows="1" cols="5"></textarea>
          <h1>Glucose</h1>
          <textarea
            id="Glucose"
            class="form-control"
            rows="1"
            cols="5"
          ></textarea>
          <h1>Insulin</h1>
          <textarea
            id="Insulin"
            class="form-control"
            rows="1"
            cols="5"
          ></textarea>
          <h1>HOMA</h1>
          <textarea id="HOMA" class="form-control" rows="1" cols="5"></textarea>
          <h1>Leptin</h1>
          <textarea
            id="Leptin"
            class="form-control"
            rows="1"
            cols="5"
          ></textarea>
          <h1>Adiponect</h1>
          <textarea
            id="Adiponect"
            class="form-control"
            rows="1"
            cols="5"
          ></textarea>
          <h1> Resistin</h1>
          <textarea
            id="Resistin"
            class="form-control"
            rows="1"
            cols="5"
          ></textarea>
          <h1>MCP.1</h1>
          <textarea
            id="MCP.1"
            class="form-control"
            rows="1"
            cols="5"
          ></textarea>

          <button className="btn1 btn-20px" type="submit"> Predict </button>
        </form>
      </div>
    );
}

export default BreastCancer;
