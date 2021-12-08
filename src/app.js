import React from "react";
import { useState, useEffect, useReducer } from "react";
import "./app.scss";

import { Loader } from 'rsuite';
// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";
import axios from "axios";
import Drawer from "./Drawer";

export default function App() {
  const [open, setOpen] = useState(false);
  let initialState = {
    requestParams: {},
    data: null,
    ls: JSON.parse(localStorage.getItem("history")) || [],
    selectedUrl: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  let callApi = (requestParams) => {
    let resObj = {};
    axios[requestParams.method](requestParams.url, requestParams.json).then(
      (res) => {
        resObj = {
          count: res.data.count || res.data.length,
          Headers: res.headers,
          body: res.data,
        };
        const data = {
          count: resObj.count,
          results: resObj,
        };

        dispatch({ type: "data", payload: data });
        // setdata(data);
      }
    );

    
  };
  

  function reducer(state, action) {
    switch (action.type) {
      case "submit":
        return {
          ...state,
          requestParams: action.payload, 
        };
      case "data":
        return {
          ...state,
          data: action.payload,}
      case "localStorage":

        return {
          ...state,
          ls: action.payload,
        }
        case "selectedUrl":
          return {
            ...state,
            selectedUrl: action.payload,
          } 
      default:
        return state;
    }
  }

useEffect(() => {
  if (state.requestParams.url) {
    callApi(state.requestParams);
  }
}, [state.requestParams]);
  return (
    <React.Fragment>
      <Header />
      
      <div data-testid="method">Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <br/>
      <br/> 
      <Drawer locassssslStorage={state.ls} selectUrl={dispatch} setOpen={setOpen}/>
      <br/>
      <br/>
      <Form handleApiCall={callApi} dispatcha={dispatch} selectedUrl={state.selectedUrl}/>
      <br/>
      <br/>
    {  state.data ? <Results data={state.data} /> : <Loader size="lg" content="Loading..." />}
      <Footer />
    </React.Fragment>
  );
}
