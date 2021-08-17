import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/navbar";
import Favorite from "../Favorite/favorite";
import Recommended from "../Recommended/recommended";
import Current from "../Current/current";
import profileimage from "./User.png";
import Image from "../Image/image";
// import "./profile.css";


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
                <div >
                  <img className="profile-image"
                    src={profileimage}
                    alt=""
                    width="100"
                    height="auto"
                  />
                </div>
                <Image/>
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
          <Recommended/>
          <Current/>
        </div>
    );
}

export default Profile;