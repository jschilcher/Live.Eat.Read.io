import React, { useState, useEffect } from "react";
import axios from "axios";

const Image = () => {
    const [image, setImage] = useState();

    const postImage = async (event) => {

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("myImage", image);
    
        axios.post("http://localhost:5000/api/images/upload", formData)
        .then(response => alert("Image uploaded"))
        .catch((error) => {console.log(error);})
    };

    const handleChange = (event) => {
        setImage({image:event.target.files[0]});
    }

    return(
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h1>Image Upload</h1>
            <input type="file" accept=".png, .jpg, jpeg" name="myImage" onChange={handleChange} />
            <input type="submit" value="Upload Image"/>
        </form>
    
    )
    
}

export default Image;