import React, { useState, useEffect } from "react";
import axios from "axios";

const Recommended = () => {
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        fetchAllBooks();
      }, []);
    
      const fetchAllBooks = async (event) => {
        await axios
          .get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Vq2xSURzIj2l7teI4GG1pmIwU9hoe4hG")
          .then((response) => {
            setBookData(response.data);
            console.log(response.data);
          });
      };
    
      return(
          <div>
              <h3>Recommended for you</h3>
              <ul>
                  <li>
                      {`${bookData[0]}`}
                  </li>
              </ul>
          </div>
      )
}

export default Recommended;