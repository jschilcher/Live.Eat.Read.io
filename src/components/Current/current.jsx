import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {Google_API} from "../../config/requests.json";

const Current = () => {
    const [currentBookData, setCurrentBookData] = useState([]);

    useEffect(() => {
        fetchCurrentBook();
      }, []);
    
      const fetchCurrentBook = async (event) => {
        await axios
          .get(`https://www.googleapis.com/books/v1/volumes?q=searchquery&orderBy=newest&key=${Google_API}`)
          .then((response) => {
            setCurrentBookData(response.data);
            console.log(response.data);
          });
      };

    return (
        <div>
            <h3>I am currently reading</h3>
            <form>
                <input type="text" placeholder="Search books" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Current;