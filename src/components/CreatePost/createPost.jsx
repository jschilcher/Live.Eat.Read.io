import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
    const [username, setUsername] = useState("");
    const [text, setText] = useState("");
    const [rating, setRating] = useState("");
    const history = useHistory("/timeline");

    useEffect(() => {
        document.title = "Register - WizardGram";
      }, []);
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          let post = {
            username: username,
            text: text,
            rating: rating,
          };
          
          await axios.post(
            "http://localhost:5000/api/collections/post",
          
            post
          );
    
          alert(
            "Uploaded post! Please Click 'OK'"
          );
          history.push("/timeline");
        } catch {
          console.log("HandleSubmit has failed");
        }
      };
  


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const formData = new FormData();
    //     formData.append("createpost", createPost);
    //     const config = {
    //         headers: {"content-type": "multipart/form-data"}
    //     };
    //     axios.post("http://localhost:5000/api/")
    //     .then(response => alert("Post uploaded"))
    //     .catch((error) => {})
    // };

    // const handleChange = (event) => {
    //     setCreatePost({createPost:event.target.files[0]});
    // }

    return(
        <form onSubmit={handleSubmit} method="post">
            <h1>Create Post</h1>
            {/* <input type="text" name="myImage" onChange={handleChange} /> */}
            <button type="submit">Upload Post</button>
        </form>
    
    )
    
}

export default CreatePost;