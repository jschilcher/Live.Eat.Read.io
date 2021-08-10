import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/navbar";
import Favorite from "../Favorite/favorite";


function Profile() {
    const user = JSON.parse(localStorage.getItem("specificUser"));
  
    let username = "There is no user";
    if (user) {
      username = user[0].username;
    }

    let firstName = "Josh";
    if(user) {
        firstName = user[0].firstName;
    }

    let lastName = "Peck";
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
                    src="https://unsplash.com/photos/OfaDD5o8hpk"
                    alt=""
                  />
                </div>
                <div className="profile-user-settings">
                  <h1 className="profile-user-name">{`${username}`}</h1>
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
          <Favorite/>
        </div>
    );
}

export default Profile;