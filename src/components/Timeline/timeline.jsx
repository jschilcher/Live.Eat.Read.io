import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

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
          });
      };

    return(
        <div></div>
    );
}
export default Timeline;