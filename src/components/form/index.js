import React from "react";
import "./form.scss";
import Input from "rsuite/Input";
import "rsuite/dist/rsuite.min.css";

export default function Form({ handleApiCall, dispatcha,selectedUrl }) {
  const [method, setmethod] = React.useState("get");
  const [formDat, setformData] = React.useState({});
  const [url, seturl] = React.useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      url: e.target.url.value || "https://pokeapi.co/api/v2/pokemon",
      json: e.target.JSON.value ? JSON.parse(e.target.JSON.value) : {},
      method: method,
    };
    setformData(formData);
    dispatcha({ type: "submit", payload: formDat });

    let unparsed = JSON.parse(localStorage.getItem("history")) || [];

      localStorage.setItem("history", JSON.stringify([formDat, ...unparsed]));
    dispatcha({
      type: "localStorage",
      payload: JSON.parse(localStorage.getItem("history") ),
    });
  };
  React.useEffect(() => {
    seturl(selectedUrl);
  },[selectedUrl] )
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" onChange={(e)=> seturl(e.target.value)} value={url}/>
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span onClick={() => setmethod("get")} id="get">
            GET
          </span>
          <span onClick={() => setmethod("post")} id="post">
            POST
          </span>
          <span onClick={() => setmethod("put")} id="put">
            PUT
          </span>
          <span onClick={() => setmethod("delete")} id="delete">
            DELETE
          </span>
        </label>
        <label htmlFor="w3review">JSON</label>
        <textarea id="w3review" name="JSON" rows="4" cols="50" />
      </form>
    </>
  );
}
