import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Profile = () => {
    return(
        <div className="col-md-12">
<nav className="navbar navbar-default navbar-fixed-top">
  
  <div class="container">
  {/* <!-- Brand and toggle get grouped for better mobile display --> */}
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav-collapse" aria-expanded="false">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand logo" href="#">
      <img align="left" class="img img-logo img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/64754/cool-story-bro-hi.png" /><span>Wuddup?! <small>BETA</small></span>
    </a>
  </div>

  {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
  <div class="collapse navbar-collapse" id="main-nav-collapse">
    <ul id="site-nav" class="nav navbar-nav">
    </ul>
    {/* <!--Site Nav / navbar left--> */}

    <ul class="nav navbar-nav navbar-right">

      <li class="dropdown">
        <a href="#" class="dropdown-toggle name-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          Menu 
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
          <li><a href="#">Logout</a></li>
        </ul>
      </li>
      {/* <!--User drop down--> */}

    </ul>
    {/* <!--user nav / navbar left--> */}

  </div>
  {/* <!-- /.navbar-collapse --> */}
  </div>
</nav>
</div>
    );
}

export default Profile;