import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/navbar";


function Profile() {
    const user = JSON.parse(localStorage.getItem("specificUser"));
  
    let breakdown = "There is no user";
    if (user) {
      breakdown = user[0].username;
    }

    let firstName = "Josh Peck";
    if(user) {
        firstName = user[0].firstName;
    }

    let lastName = "Josh Peck";
    if(user) {
        lastName = user[0].lastName;
    }

    return (
        <div>
            <NavBar/>
          <header>
            <div className="container">
              <div className="profile">
                <div className="profile-image">
                  <img
                    src="User.jpg"
                    alt=""
                  />
                </div>
                <div className="profile-user-settings">
                  <h1 className="profile-user-name">{`${breakdown}`}</h1>
                    <h5>{`${firstName}`} {`${lastName}`}</h5>
                  <button className="btn profile-edit-btn">Upload Profile Image</button>

                </div>
    
                <div className="profile-bio">
                  <p>
    
                  </p>
                </div>
              </div>
            </div>
          </header>{" "}
          </div>
    );
}

export default Profile;