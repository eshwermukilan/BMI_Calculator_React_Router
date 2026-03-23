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