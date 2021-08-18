import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
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
              {bookData.map((book) => (
              <div className="card" style={{width: 200}}>
                <img src={`${book.image}`} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{`${book.title}`}</h5>
                  <h6>{`${book.author}`}</h6>
                  <p className="card-text">{`${book.description}`}</p>
                </div>
              </div>
              ))}
              {/* <div className="card" style={{width: 200}}>
                <img src={`${bookData[1].image}`} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{`${bookData[1].title}`}</h5>
                  <h6>{`${bookData[1].author}`}</h6>
                  <p className="card-text">{`${bookData[1].description}`}</p>
                </div>
              </div> */}
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