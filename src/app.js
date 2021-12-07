import React from "react";
import { useState, useEffect } from "react";
import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";
import axios from "axios";

export default function App() {
  const [requestParams, setrequestParams] = useState({});
  const [data, setdata] = useState(null);
  let callApi = (requestParams) => {
    let resObj = {};
    axios[requestParams.method](requestParams.url,requestParams.json).then((res) => {
      resObj = {
        count: res.data.count  || res.data.length,
        Headers: res.headers,
        body: res.data,
      };
      const data = {
        count: resObj.count,
        results: resObj,
      };
      setdata(data);
    });

  };
  useEffect(() => {
    setrequestParams(requestParams);
  },[requestParams]);
  return (
    <React.Fragment>
      <Header />
      <div data-testid="method">Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}


