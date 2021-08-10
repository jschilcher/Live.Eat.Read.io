import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/navbar";

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
            console.log(response.data);
          });
      };

    return(
        <div>
            <NavBar/>
            <div>
                <h3>Create Post</h3>
            </div>

        </div>
    );
}
export default Timeline;