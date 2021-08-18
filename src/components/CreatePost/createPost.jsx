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


    return(
        // <form onSubmit={handleSubmit} method="post">
        //     <h1>Create Post</h1>
        //         <input type="text" name="text" placeholder="Please share your book here" />
             
        //         <input type="text" />
        //     {/* <input type="text" name="myImage" onChange={handleChange} /> */}
        //     <button type="submit">Upload Post</button>
        // </form>

<div className="post-container">
<div className="row" >
  <div className="col-md-6">
    <div className="well well-sm">

      <div className="row" id="post-review-box">
        <div className="col-md-12">
        <form onSubmit={handleSubmit} accept-charset="UTF-8" method="post">

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
          

          
            <input id="ratings-hidden" name="rating" type="hidden"/>
            <textarea class="form-control animated" cols="50" id="new-review" name="comment" placeholder="Tell us about your book here!" rows="5"></textarea>

            <div class="text-right">
          
              <button class="btn btn-indie-trans" type="submit">Post</button>
           
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</div>
</div>
    
    )


    
}

export default CreatePost;




{/* <fieldset class="rating">
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
</fieldset> */}