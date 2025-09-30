import React, { useState } from 'react';
import "./BmiCal.css";

function BmiCal() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  // logic
  let calBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter valid weight and height');
    } else {
      let bmiValue  = weight / ( (height/100) * (height/100) );

      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 18.5) {
        setMessage('You are underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setMessage('You are a healthy weight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage('You are overweight');
      } else {
        setMessage('You are obese');
      }
    }
  };

  // reload
  let reload = () => {
  setWeight("");
  setHeight("");
  setBmi("");
  setMessage("");
};


  return (
    <>
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="number"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (in)</label>
            <input
              type="number"
              placeholder="Enter height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default BmiCal;
