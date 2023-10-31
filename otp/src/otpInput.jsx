import React, { useState, useRef } from "react";

const OTPInput = () => {
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const submitButtonRef = useRef(null);

  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [activeInput, setActiveInput] = useState(0);

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      otp[index] = "";
      setOTP([...otp]);

      if (index > 0) {
        setActiveInput(index - 1);
        inputRefs[index - 1].current.focus();
      }
    } else if (e.key === "ArrowLeft") {
      if (index > 0) {
        setActiveInput(index - 1);
        inputRefs[index - 1].current.focus();
      }
    } else if (e.key === "ArrowRight") {
      if (index < 5) {
        setActiveInput(index + 1);
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleChange = (index, e) => {
    const value = e.target.value;

    if (index === 5 && value.length > 1) {
      otp[5] = value.charAt(0);
    } else {
      otp[index] = value;
    }

    setOTP([...otp]);

    if (value !== "" && index < 5) {
      setActiveInput(index + 1);
      inputRefs[index + 1].current.focus();
    } else if (otp.join("").length === 6) {
      submitButtonRef.current.focus(); // Focus the submit button when OTP is complete
    }
  };

  return (
    <div>
      <div className="otp-input">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={() => setActiveInput(index)}
            style={{
              borderColor: activeInput === index ? "yellow" : "black",
            }}
            ref={inputRefs[index]}
          />
        ))}
      </div>
      <form>
        <button
          style={{
            backgroundColor: "#008CBA",
            marginTop: 15,
            textAlign: "center",
            marginLeft: 55,
          }}
          type="submit"
          ref={submitButtonRef}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default OTPInput;
