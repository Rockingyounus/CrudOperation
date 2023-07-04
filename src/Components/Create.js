import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("https://649bc3bb048075719236e324.mockapi.io/Crud-operationss", {
        name: name,
        email: email,
        header,
      })
      .then()
      .catch();

    history("/read");
  };

  return (
    <>
      <h2>Create</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handlesubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;