import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedFile, setSelectedFile] = useState();
  const [errMsg, setErrMsg] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handelFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const validateSelectedFile = () => {
    const MIN_FILE_SIZE = 1024; // 1MB
    const MAX_FILE_SIZE = 1024 * 5; // 5MB

    if (!selectedFile) {
      setErrMsg("Please select a file");
      setIsSuccess(false);
      return;
    }

    const fileSizeInKB = selectedFile.size / 1024;
    if (fileSizeInKB < MIN_FILE_SIZE) {
      setErrMsg("File size is less than minimum limit");
      setIsSuccess(false);
      return;
    }
    if (fileSizeInKB > MAX_FILE_SIZE) {
      setErrMsg("File size is more than maximum limit");
      setIsSuccess(false);
      return;
    }

    // Reset error and set success status
    setErrMsg(false);
    setIsSuccess(true);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h4>File size validation</h4>
        </div>
        <div className="card-body">
          <p className="label">Chose File</p>

          <input type="file" name="file" onChange={handelFileChange} />

          <div className="space-between">
            <p className="info-message">Min Size: 1MB</p>
            <p className="info-message">Max Size: 5MB</p>
          </div>

          {isSuccess ? (
            <p className="success-message">Validation Successfull</p>
          ) : null}

          <p className="error-message">{errMsg}</p>

          <button className="btn" onClick={validateSelectedFile}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
