import React, { useState, useEffect } from "react";
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
            console.log(response.data);
          });
      };

      let results = bookData.results;
    //   console.log("result", results.books[0]);
    //   let books = results.books[0];
    //   console.log("Book", books.author);
    //   let author = books.author;
    
      return(
          <div>
              <h3>Recommended for you</h3>
              <ul>
                  <li>
                      {/* {`${author}`} */}
                  </li>
              </ul>
          </div>
      )
}

export default Recommended;