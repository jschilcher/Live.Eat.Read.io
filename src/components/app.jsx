import React from "react";
import { Switch, Route } from "react-router-dom";
import "./app.css"
import Title from "./Title/title"
import Login from "./Login/login";

function App() {
    return (
        <div className="App">
            <Title/>
            <Switch>
                <Route path="/" exact component={Login}/>
            </Switch>
        </div>
    )
}

export default App;