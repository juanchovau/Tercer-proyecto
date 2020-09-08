import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Lyaout"
import {createStore, applyMiddleware} from "redux";
import reducer from "./Reducers/Reducers"
import {Provider} from "react-redux";
import thunk from "redux-thunk";



const store = createStore(reducer, applyMiddleware(thunk));


function App() {


  return (
    <Provider store={store} >
    <div className = "App">
      <Layout />
    </div>
    </Provider>

  );
}

export default App;



