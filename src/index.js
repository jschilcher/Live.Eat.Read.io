import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/index.css";
import App from "./components/app";


ReactDOM.render(
 <Router>
     <React.StrictMode>
        <App/>
     </React.StrictMode>
 </Router>,
document.getElementById("root"));
