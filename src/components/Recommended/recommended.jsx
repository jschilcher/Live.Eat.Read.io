import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import {NY_API} from "../../config/requests.json"

const Recommended = () => {
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        document.title = "Recommended - Live.Eat.Read.";
      }, []);

    useEffect(() => {
        fetchAllBooks();
      }, []);
    
      const fetchAllBooks = async (event) => {
        await axios
          .get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${NY_API}`)
          .then((response) => {
       
            setBookData(response.data.results.books);
      }).catch(err => console.log(err)) 
      };

    if(bookData[0] ===  undefined){
        console.log(bookData)
        return (
            <div>Loading...</div>)}
    else{ 
        console.log('Got into that else block')
        console.log(bookData)
      return(
          <div>
              <h3>Recommended for you</h3>
              <ul>
                  <li>
                      {`${bookData[0].author}`}
                  </li>
              </ul>
          </div>
      );
    }
}

export default Recommended;