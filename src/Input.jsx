import React, { useRef } from "react";

const Input = () => {
  const inputOne = useRef();
  const buttonOne = useRef();
  const handleChange = () => {
    console.log(buttonOne);
    console.log(inputOne);
    buttonOne.current.innerHTML = "ok you click";
    inputOne.current.type = "number";
    inputOne.current.placeholder = "Enter your mobile number";

    inputOne.current.style.width = "400px";
  };
  const blurs = () => {
    buttonOne.current.innerHTML = "ok you click";
  };
  return (
    <div>
      <input ref={inputOne} type="text" placeholder="enter your name" />
      <button ref={buttonOne} onBlur={blurs} onClick={handleChange}>
        Click
      </button>
    </div>
  );
};

export default Input;
