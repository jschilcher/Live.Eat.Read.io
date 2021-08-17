import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../CreatePost/createPost.css";

const CreatePost = () => {
    const [username, setUsername] = useState("");
    const [text, setText] = useState("");
    const [rating, setRating] = useState("");
    const history = useHistory("/timeline");

    useEffect(() => {
        document.title = "Timeline - Live.Eat.Read";
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
                <fieldset class="rating">
                    <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                    <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                    <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                    <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                    <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                    <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                    <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                    <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                    <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                    <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                </fieldset>
            {/* <input type="text" name="myImage" onChange={handleChange} /> */}
            <button type="submit">Upload Post</button>
        </form>
    
    )


    
}

export default CreatePost;