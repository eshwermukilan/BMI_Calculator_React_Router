# Ex06 BMI Calculator
## Date: 23-03-2026
## Name : Eshwer M
## Reg No : 212224040086

## AIM
To develop a responsive and interactive Body Mass Index (BMI) Calculator using React that allows users to input their height and weight, and calculates their BMI to categorize their health status (e.g., Underweight, Normal, Overweight, Obese).

## DESIGN STEPS

### STEP 1: Initialize React Project

<li>Create a new React app using create-react-app.</li>
<li>Install React Router using:</li>
npm install react-router-dom

### STEP 2: Set Up Routing

Create routing structure with react-router-dom:

<li>Home route (/) – Intro or Navigation</li>

<li>BMI Calculator route (/bmi)</li>

<li>Result route (/result)</li>

### STEP 3: Design the BMI Form Page

<li>Create a form to accept Height (in cm or m) and Weight (in kg).</li>

<li>On form submit, navigate to the result page with entered values via URL query params or context/state.</li>

## STEP 4: Handle Input Validation

<li>Check if height and weight are valid numbers.</li>

<li>Optionally, show error messages for invalid inputs.</li>

### STEP 5: Perform BMI Calculation

<li>In the result component:

<li>Extract height and weight from the route (URL or passed state).</li>

<li>Apply the BMI formula:</li>

![image](https://github.com/user-attachments/assets/ec785506-c96b-489e-8783-fb1a5d36101a)
​
 
<li>Convert height from cm to m if needed.</li></li>

### STEP 6: Display Result

<li>Show calculated BMI.</li>

<li>Show category based on BMI range:

<li>Underweight, Normal, Overweight, Obese, etc.</li></li>

### STEP 7: Navigation Options

<li>Provide a button to go back to the BMI form to calculate again.</li>

### STEP 8: Enhancements

<li>Add styling using CSS or Tailwind.</li>

## PROGRAM
### Home.jsx
```
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="container">

      <h1>BMI Calculator</h1>

      <button onClick={() => navigate("/bmi")}>
        Start
      </button>

    </div>
  );
}

export default Home;
```
### BMIForm.jsx
```
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BMIForm() {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {

    e.preventDefault();

    if (!height || !weight) {
      alert("Enter values");
      return;
    }

    navigate("/result", {
      state: { height, weight },
    });
  };

  return (

    <div className="container">

      <h2>Enter Details</h2>

      <form onSubmit={submit}>

        <input
          type="number"
          placeholder="Height (cm)"
          onChange={(e) => setHeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          onChange={(e) => setWeight(e.target.value)}
        />

        <button>Calculate</button>

      </form>

    </div>

  );
}

export default BMIForm;
```
### Result.jsx
```
import { useLocation, useNavigate } from "react-router-dom";

function Result() {

  const location = useLocation();
  const navigate = useNavigate();

  const { height, weight } = location.state;

  const h = height / 100;

  const bmi = (weight / (h * h)).toFixed(2);

  let status = "";

  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 25) status = "Normal";
  else if (bmi < 30) status = "Overweight";
  else status = "Obese";

  return (

    <div className="container">

      <h2>Result</h2>

      <h3>BMI = {bmi}</h3>

      <h3>Status = {status}</h3>

      <button onClick={() => navigate("/bmi")}>
        Try Again
      </button>

    </div>

  );
}

export default Result;
```
### App.jsx
```
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import BMIForm from "./BMIForm.jsx";
import Result from "./Result.jsx";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/bmi" element={<BMIForm />} />

        <Route path="/result" element={<Result />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
```
### Main.jsx
```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```
## OUTPUT
![alt text](exp6-1.png)
![alt text](exp6-2.png)
## RESULT
The BMI Calculator successfully takes user input for height and weight, performs the BMI calculation in real-time using React state and event handling, and displays the BMI value along with the corresponding health category.
