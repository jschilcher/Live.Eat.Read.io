import React, { useState, useEffect } from "react";
import axios from "axios";

const Image = () => {
    const [image, setImage] = useState(
        {
            image: "",
        }
    );

    const postImage = async (event) => {
        const formData = new FormData();
        formData.append("file", image.image);

        await axios.post("http://localhost:5000/api/collections/upload", formData)
        .then(response => {
            console.log(response);
        })
        .catch(error => {console.log(error);})
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        postImage();

    };

    const handleChange = (event) => {
        setImage({...image,image: event.target.files[0]});
    }

    return(
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h1>Image Upload</h1>
            <input type="file" accept=".png, .jpg, jpeg" name="file" onChange={handleChange} />
            <input type="submit" value="Upload Image"/>
        </form>
    
    )
    
}

export default Image;