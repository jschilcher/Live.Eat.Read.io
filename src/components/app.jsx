import React from "react";
import { Switch, Route } from "react-router-dom";
import "./app.css"
import Title from "./Title/title"
import Login from "./Login/login";
import Register from "./Register/register";
import Profile from "./Profile/profile";
import Timeline from "./Timeline/timeline";
import Logout from "./Logout/logout";

function App() {
    return (
        <div className="App">
            <Title/>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/timeline" component={Timeline}/>
                <Route path="/logout" component={Logout}/>
            </Switch>
        </div>
    )
}

export default App;