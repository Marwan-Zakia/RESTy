import React from "react";
import "./form.scss";
import Input from 'rsuite/Input';
import "rsuite/dist/rsuite.min.css"

export default function Form( {handleApiCall} ) {
  const [method, setmethod] = React.useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      url: e.target.url.value || "https://pokeapi.co/api/v2/pokemon",
      json: e.target.JSON.value,
      method: method,
    };
    handleApiCall(formData)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" />
         
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span onClick={() => setmethod("GET")} id="get">
            GET
          </span>
          <span onClick={() => setmethod("POST")} id="post">
            POST
          </span>
          <span onClick={() => setmethod("PUT")} id="put">
            PUT
          </span>
          <span onClick={() => setmethod("DELETE")} id="delete">
            DELETE
          </span>
        </label>

        <label htmlFor="w3review">JSON</label>

<textarea id="w3review" name="JSON" rows="4" cols="50"/>
      </form>
    </>
  );
}
