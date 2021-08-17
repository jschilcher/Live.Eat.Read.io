import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/navbar";
import CreatePost from "../CreatePost/createPost";

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
                <ul>
                    <div>{`${postData[0].username}`}</div>
                    <img src={`${postData[0].image}`} alt="" />
                    {`${postData[0].text}`}
                </ul>
            </div>

        </div>
    );
}}
export default Timeline;