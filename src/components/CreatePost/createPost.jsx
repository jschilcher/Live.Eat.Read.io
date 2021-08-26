import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../CreatePost/createPost.css";

const CreatePost = () => {
    const [username, setUsername] = useState("");
    const [text, setText] = useState("");
    const [rating, setRating] = useState("");
    const [image, setImage] = useState("");
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
            image: image,
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

        <div className="post-container">
        <div className="row" >
        <div className="col-md-6">
            <div >

            <div className="row" id="post-review-box">
                <div className="col-md-12">
                <form onSubmit={handleSubmit} accept-charset="UTF-8" method="post">
                <h3>Create Post</h3>

                    <input type="text" id="username" name="username" placeholder="Username" className="form-control" onChange={({target}) => setUsername(target.value)}/>
                    <textarea className="form-control animated" cols="50" id="new-review" name="text" placeholder="Tell us about your book here!" rows="5" onChange={({target}) => setText(target.value)}></textarea>
                    <input type="text" id="image" name="image" placeholder="Image link" className="form-control" onChange={({target}) => setImage(target.value)}/>
                    <input type="text" id="rating" name="rating" placeholder="Rating" className="form-control" onChange={({target}) => setRating(target.value)}/>
                    

                    <div >
                
                    <input
                                className="btn-block btn-color"
                                type="submit"
                                value="Post"
                            />
                
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