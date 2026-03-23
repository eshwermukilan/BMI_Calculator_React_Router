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