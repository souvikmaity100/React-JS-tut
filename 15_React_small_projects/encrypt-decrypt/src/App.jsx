import React, { useState } from "react";
import CryptoJS from "crypto-js";
import "./App.css";
const SERECT_KEY = "dsgh35sFD$EC%c5v4";

function App() {
  const [text, setText] = useState("");
  const [screen, setScreen] = useState("encrypt");
  const [errMsg, setErrMsg] = useState(false);
  const [encryptedData, setEncryptedData] = useState("");
  const [decrpytedData, setDecryptedData] = useState("");

  const switchScreen = (type) => {
    setScreen(type);

    setText("");
    setEncryptedData("");
    setDecryptedData("")
    setErrMsg(false);
  };

  const encryptData = () => {
    try {
      const data = CryptoJS.AES.encrypt(
        JSON.stringify(text),
        SERECT_KEY
      ).toString();
      setEncryptedData(data);
      setErrMsg(false);
    } catch (error) {
      setErrMsg("Encryption failed. Please check your input.");
      setEncryptedData("");
    }
  };

  const decryptData = () => {
    try {
      const bytes = CryptoJS.AES.decrypt(text, SERECT_KEY);
      const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      setDecryptedData(data);
      setErrMsg(false);
    } catch (error) {
      setErrMsg("Decryption failed. Please check your input.");
      setDecryptedData("");
    }
  };

  const handelClick = () => {
    if (!text) {
      setErrMsg("Please Enter Some Text.");
      return;
    }

    if (screen === "encrypt") {
      encryptData();
    } else {
      decryptData();
    }
  };

  return (
    <div className="container">
      <div>
        <button
          className={`btn btn-left ${screen === "encrypt" ? "active" : ""}`}
          onClick={() => {
            switchScreen("encrypt");
          }}
        >
          Encrypt
        </button>
        <button
          className={`btn btn-right ${screen === "decrypt" ? "active" : ""}`}
          onClick={() => {
            switchScreen("decrypt");
          }}
        >
          Decrypt
        </button>
      </div>

      <div className="card">
        <textarea
          value={text}
          onChange={({ target }) => {
            setText(target.value);
          }}
          placeholder={
            screen === "encrypt" ? "Enter Your Text" : "Enter Encrypted Data"
          }
        ></textarea>

        {errMsg && <div className="error">{errMsg}</div>}

        <button
          className={`btn btn-submit ${
            screen === "encrypt" ? "encrypt-btn" : "decrypt-btn"
          }`}
          onClick={handelClick}
        >
          {screen === "encrypt" ? "Encrypt" : "Decrypt"}
        </button>
      </div>

      {encryptedData || decrpytedData ? (
        <div className="content">
          <label>{screen === "encrypt" ? "ENCRYPTED" : "DECRYPTED"} DATA</label>
          <p>{screen === "encrypt" ? encryptedData : decrpytedData}</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;
