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
            <CreatePost/>
            {postData.map((post) => (
            <div> 
                <body>
                
	                <section className="container">
		                <div className="card">
		                  <div className="card-header">
		                    <div className="profile-img">
		                    </div>
		                    <div className="profile-info">
			                    <div className="name">{`${post.username}`}</div>
		                    </div>
		                </div>
		                <div className="content">
			                <img src={`${post.image}`} className="content" alt="" />
		                </div>
		                <div class="card-footer">
			              <div class="footer-content">
                    <p>Rating: <span>{`${post.rating}`}</span></p>
                    <p><span>{`${post.text}`}</span></p>
				              <span class="likes">241 likes</span> 
					          {/* <p><span>{`${post.comment[0].username}`}: {`${post.comment[0].text}`}</span></p> */}
				            <form class="form">
					          <span class="heart"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
					           <span class="add-comment"><input type="text" placeholder="Add a comment..." /></span>
					            <span class="options"><i class="fa fa-ellipsis-h"></i></span>
				            </form>
			              </div>
		                </div>
	                  </div>
	                </section>
                 
                </body>
               
            </div>
            ))}
        </div>
    );
}}


export default Timeline;