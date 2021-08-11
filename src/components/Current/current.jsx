import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Current = () => {
    const [currentBookData, setVurrentBookData] = useState([]);

    useEffect(() => {
        fetchCurrentBook();
      }, []);
    
      const fetchCurrentBook = async (event) => {
        await axios
          .get("https://www.googleapis.com/books/v1/volumes?q=searchquery&orderBy=newest&key=AIzaSyBpDVTdJFBDqUXBsK6PkNiDeS5zkHfhODQ")
          .then((response) => {
            setCurrentBookData(response.data);
            console.log(response.data);
          });
      };
}

export default Current;