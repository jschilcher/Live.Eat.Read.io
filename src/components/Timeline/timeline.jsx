import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/navbar";
import CreatePost from "../CreatePost/createPost";
import "./timeline.css";

const Timeline = () => {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        fetchAllPosts();
      }, [])
    
      const fetchAllPosts = async (event) => {
        await axios
          .get("http://localhost:5000/api/collections/post")
          .then((response) => {
            setPostData(response.data);
            console.log("post", response.data);
          });
      };

      if(postData[0] ===  undefined){
        
        return (
            <div>Loading...</div>)}
    else{ 
        console.log("postdata", postData);

    return(
      
        <div>
            <NavBar/>
            <div>
                <CreatePost/>
                <head>
	                <meta charset="utf-8" />
	                <meta name="viewport" content="width=device-width, initial-scale= 1.0" />
	                <title></title>
	                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
	                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
	                <link rel="stylesheet" href="main.css" /> 
                </head>
                <body>
                {postData.map((post) => (
	                <section class="container">
		                <div class="card">
		                  <div class="card-header">
		                    <div class="profile-img">
			                    {/* <img class="profile-img" src="https://i.pinimg.com/736x/a2/e1/8c/a2e18cbfbcaa8756fe5b40f472eeff45--profile-   picture-profile-pics.jpg"/> */}
		                    </div>
		                    <div class="profile-info">
			                    <div class="name">{`${postData[0].username}`}</div>
		                    </div>
		                    {/* <div class="time">
			                    1hr
		                    </div> */}
		                </div>
		                <div class="content">
			                <img src={`${post.image}`} class="content" />
		                </div>
		                <div class="card-footer">
			              <div class="footer-content">
                    <p>Rating: <span>{`${post.rating}`}</span></p>
                    <p><span>{`${post.text}`}</span></p>
				              <span class="likes">241 likes</span> 
					          <p><span>{`${post.comment[0].username}`}: {`${post.comment[0].text}`}</span></p>
				            <form class="form">
					          <span class="heart"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
					           <span class="add-comment"><input type="text" placeholder="Add a comment..." /></span>
					            <span class="options"><i class="fa fa-ellipsis-h"></i></span>
				            </form>
			              </div>
		                </div>
	                  </div>
	                </section>
                  ))}
                </body>
            </div>

        </div>
    );
}}


export default Timeline;