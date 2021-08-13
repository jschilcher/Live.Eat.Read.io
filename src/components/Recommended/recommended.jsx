import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import {NY_API} from "../../config/requests.json"

const Recommended = () => {
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        fetchAllBooks();
      }, []);
    
      const fetchAllBooks = async (event) => {
        await axios
          .get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${NY_API}`)
          .then((response) => {
            setBookData(response.data);
            console.log("response", response.data);
          });
      };

    if(bookData[0] ===  undefined){
        
        return (
            <div>Loading...</div>)}
    else{ 
        console.log("bookdata.results.books", bookData.results.books);
      return(
          <div>
              <h3>Recommended for you</h3>
              <ul>
                  <li>
                      {`${bookData.results.books[0].author}`}
                  </li>
              </ul>
          </div>
      );
    }
}

export default Recommended;