import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {Google_API} from "../../config/requests.json";

const Current = () => {
    const [currentBookData, setCurrentBookData] = useState([]);
    const [searchResult, setSearchResult] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Here is the search", searchResult)
      fetchCurrentBook();
    }

    useEffect(() => {
        fetchCurrentBook();
      }, []);
    
      const fetchCurrentBook = async (event) => {
        await axios
          .get(`https://www.googleapis.com/books/v1/volumes?q=${searchResult}&orderBy=newest&key=${Google_API}`)
          .then((response) => {
            setCurrentBookData(response.data.items[0].volumeInfo);
            console.log("got it", response.data.items[0].volumeInfo);
          });
      };

    return (
        <div>
            <h3>I am currently reading</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search books" onChange={({target}) => setSearchResult(target.value)}/>
                <button type="submit">Search</button>
            </form>
            <div className="book-card" style={{width: 200}}>
                {/* <img src={`${book.image}`} className="card-img-top" alt="" /> */}
                <div className="card-body">
                  <h5 className="card-title">{`${currentBookData.title}`}</h5>
                  {/* <h6>{`${book.author}`}</h6> */}
                  <p className="card-text">{`${currentBookData.description}`}</p>
                </div>
              </div>
        </div>
    )
}

export default Current;