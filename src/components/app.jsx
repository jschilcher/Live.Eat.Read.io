import React from "react";
import { Switch, Route } from "react-router-dom";
import "./app.css"
import Title from "./Title/title"

function App() {
    return (
        <div className="App">
            <Title/>
            <Switch>

            </Switch>
        </div>
    )
}

export default App;