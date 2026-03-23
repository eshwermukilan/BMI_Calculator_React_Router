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