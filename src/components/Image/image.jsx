import React, { useState, useEffect } from "react";
import axios from "axios";

const Image = () => {
    const [image, setImage] = useState();


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("myImage", image);
        const config = {
            headers: {"content-type": "multipart/form-data"}
        };
        axios.post("http://localhost:5000/api/images/upload")
        .then(response => alert("Image uploaded"))
        .catch((error) => {})
    };

    const handleChange = (event) => {
        setImage({file:event.target.files[0]});
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Image Upload</h1>
            <input type="image" name="myImage" onChange={handleChange} />
            <button type="submit">Upload Image</button>
        </form>
    
    )
    
}

export default Image;