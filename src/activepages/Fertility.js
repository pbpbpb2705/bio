import React from "react";

function Fertility() {
  return (
    <div>
      <h1 className="title"> Fertility </h1>{" "}
      <form className="form" action="http://localhost:3000" method="POST">
        <h1> Seasons </h1>{" "}
        <select id="seasons" class="form-control">
          <option value="blank"> Select an option </option>{" "}
          <option value="-0.33"> Spring </option>{" "}
          <option value="0.33"> Summer </option>{" "}
          <option value="1"> Autumn </option>{" "}
          <option value="-1"> Winter </option>{" "}
        </select>{" "}
        <h1> Childish diseases </h1>{" "}
        <select id="childish-disease" class="form-control">
          <option value="blank"> Select an option </option>{" "}
          <option value="0"> Yes </option> <option value="1"> No </option>{" "}
        </select>{" "}
        <h1> Accident or serious trauma </h1>{" "}
        <select id="accident-trauma" class="form-control">
          <option value="blank"> Select an option </option>{" "}
          <option value="yes"> 0 </option> <option value="no"> 1 </option>{" "}
        </select>{" "}
        <h1> Surgical intervention </h1>{" "}
        <select id="surgical-intervention" class="form-control">
          <option value="blank"> Select an option </option>{" "}
          <option value="0"> Yes </option> <option value="1"> No </option>{" "}
        </select>{" "}
        <h1> High fever in the last year </h1>{" "}
        <select id="high-fever" class="form-control">
          <option value="blank"> Select an option </option>{" "}
          <option value="-1"> Less than three months ago </option>{" "}
          <option value="0"> More than three months ago </option>{" "}
          <option value="1"> No </option>{" "}
        </select>{" "}
        <h1> Frequency of alcohol consumption </h1>{" "}
        <select id="alcohol" class="form-control">
          <option value="blank"> Select an option </option>{" "}
          <option value="0.2"> Several times a day </option>{" "}
          <option value="0.4"> Everyday </option>{" "}
          <option value="0.6"> Several times a week </option>{" "}
          <option value="0.8"> Once a week </option>{" "}
          <option value="1"> Hardly ever or never </option>{" "}
        </select>{" "}
        <h1> Smoking habit </h1>{" "}
        <select id="smoking" class="form-control">
          <option value="blank"> Select an option </option>{" "}
          <option value="-1"> Never </option>{" "}
          <option value="0"> Occasional </option>{" "}
          <option value="1"> Daily </option>{" "}
        </select>{" "}
        <h1> Number of hours spent sitting per day </h1>{" "}
        <select id="sitting-hours" class="form-control">
          <option value="blank"> Select an option </option>{" "}
          <option value="0"> Opt1 </option> <option value="1"> Opt2 </option>"{" "}
        </select>
        <button className="btn1 btn-20px" type="submit">
          {" "}
          Predict{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
}

export default Fertility;
