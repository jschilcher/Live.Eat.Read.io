import React from "react";
import { Switch, Route } from "react-router-dom";
import "./app.css"
import Title from "./Title/title"
import Login from "./Login/login";
import Register from "./Register/register";
import Profile from "./Profile/profile";

function App() {
    return (
        <div className="App">
            <Title/>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
            </Switch>
        </div>
    )
}

export default App;