import React from 'react'

function COVID19() {
    return (
      <div>
        <h1 className="title">Breast Cancer</h1>
        <form className="form" action="http://localhost:3000" method="POST">
          <h1> Gender</h1>
          <select id="gender" class="form-control">
            <option value="blank">Select an option</option>
            <option value="male">Male</option>
            <option value="female">Female</option>"
          </select>
          <h1>Cough</h1>
          <select id="cough" class="form-control">
            <option value="blank">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>"
          </select>
          <h1>Fever</h1>
          <select id="fever" class="form-control">
            <option value="blank">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>"
          </select>
          <h1>Sore throat</h1>
          <select id="sore_throat" class="form-control">
            <option value="blank">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>"
          </select>
          <h1>Shortness of breath</h1>
          <select id="shortness_of_breath" class="form-control">
            <option value="blank">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>"
          </select>
          <h1>Headache</h1>
          <select id="headache" class="form-control">
            <option value="blank">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>"
          </select>
          <h1>Corona result</h1>
          <select id="corona-result" class="form-control">
            <option value="blank">Select an option</option>
            <option value="positive">Positive</option>
            <option value="negative">Negative</option>"
          </select>
          <h1>60 and above</h1>
          <select id="60_above" class="form-control">
            <option value="blank">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>"
          </select>
          <h1>Test indication</h1>
          <select id="test_indication" class="form-control">
            <option value="blank">Select an option</option>
            <option value="abroad">Abroad</option>
            <option value="contact_with_confirmed">
              Contact with confirmed
            </option>
            <option value="other">Other</option>
          </select>
          <button className="btn1 btn-20px" type="submit">
            {" "}
            Predict{" "}
          </button>
        </form>
      </div>
    );
}

export default COVID19
