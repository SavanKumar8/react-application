import React, { useEffect, useRef, useState } from "react";
import "./otp.css";

export default function Otp() {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);
  const pin5Ref = useRef(null);
  const pin6Ref = useRef(null);
  const [inputValue, setInputValue] = useState({
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
    value6: "",
  });
  const re = /^\d{0,4}$/;
  console.log(inputValue);
  const { value1, value2, value3, value4, value5, value6 } = inputValue;
  useEffect(() => {
    if (inputValue.value1 != "") {
      pin2Ref.current.focus();
    }
    if (inputValue.value2 != "" && inputValue.value2 != undefined) {
      pin3Ref.current.focus();
    }
    if (inputValue.value3 != "" && inputValue.value3 != undefined) {
      pin4Ref.current.focus();
    }
    if (inputValue.value4 != "" && inputValue.value4 != undefined) {
      pin5Ref.current.focus();
    }
    if (inputValue.value5 != "" && inputValue.value5 != undefined) {
      pin6Ref.current.focus();
    }
  }, [value1, value2, value3, value4, value5, value6]);
  return (
    <div class="container">
      <div class="heading">
        <h2>OTP Verification</h2>
        <p>Please enter the code we have sent you.</p>
      </div>
      <form>
        <div id="otp-container">OTP component here...</div>
        <input
          class="inputFiled"
          maxLength={1}
          ref={pin1Ref}
          value={inputValue.value1}
          onChange={(e) => {
            if (re.test(e.target.value)) {
              setInputValue((pre) => ({
                ...pre.value1,
                value1: e.target.value,
              }));
            }
          }}
        />
        <input
          class="inputFiled"
          maxLength={1}
          ref={pin2Ref}
          value={inputValue.value2}
          onChange={(e) => {
            if (re.test(e.target.value))
              setInputValue((pre) => ({
                ...pre.value2,
                value2: e.target.value,
              }));
          }}
        />
        <input
          class="inputFiled"
          maxLength={1}
          ref={pin3Ref}
          value={inputValue.value3}
          onChange={(e) => {
            if (re.test(e.target.value))
              setInputValue({ value3: e.target.value });
          }}
        />
        <input
          class="inputFiled"
          maxLength={1}
          ref={pin4Ref}
          value={inputValue.value4}
          onChange={(e) => {
            if (re.test(e.target.value))
              setInputValue({ value4: e.target.value });
          }}
        />
        <input
          class="inputFiled"
          maxLength={1}
          ref={pin5Ref}
          value={inputValue.value5}
          onChange={(e) => {
            if (re.test(e.target.value))
              setInputValue({ value5: e.target.value });
          }}
        />
        <input
          class="inputFiled"
          maxLength={1}
          ref={pin6Ref}
          value={inputValue.value6}
          onChange={(e) => {
            if (re.test(e.target.value))
              setInputValue({ value6: e.target.value });
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
