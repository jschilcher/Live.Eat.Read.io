import React, { useState, useEffect } from "react";
import axios from "axios";

const CreatePost = () => {
    const [createPost, setCreatePost] = useState();


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("createpost", createPost);
        const config = {
            headers: {"content-type": "multipart/form-data"}
        };
        axios.post("http://localhost:5000/api/")
        .then(response => alert("Post uploaded"))
        .catch((error) => {})
    };

    const handleChange = (event) => {
        setCreatePost({createPost:event.target.files[0]});
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Create Post</h1>
            <input type="image" name="myImage" onChange={handleChange} />
            <button type="submit">Upload Post</button>
        </form>
    
    )
    
}

export default CreatePost;