import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [otp, setOtp] = useState("");
  const [minutes, setminutes] = useState(0);
  const [seconds, setSeconds] = useState(10);

  const resendOTP = () => {
    setSeconds(59);
    setminutes(1);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setminutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      // cleanup: stop the interval when the component unmounts
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <div className="container">
      <div className="card">
        <h4>Verify OTP</h4>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={({ target }) => setOtp(target.value)}
        />
        <div className="countdown-text">
          <p>
            Time Remaning:{" "}
            <span style={{ fontWeight: 600 }}>
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </p>

          {/* Button to resend otp */}
          <button
            disabled={seconds > 0 || minutes > 0}
            style={{ color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630" }}
            onClick={resendOTP}
          >
            Resend OTP
          </button>
        </div>

        <button className="submit-btn">SUBMIT</button>
      </div>
    </div>
  );
}

export default App;
