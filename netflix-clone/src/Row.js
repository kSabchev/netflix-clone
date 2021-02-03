import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./Row.css";
function Row( { title, fetchUrl, isLargeRow = false}) {
    const [ movies, setMovies] = useState([]);

    useEffect( () =>{
        async function fetchData() {
            const request = await axios.get()
            setMovies(request.data.results);
            return request;

        }
    }

    return (
        <div>
            
        </div>
    )
}

export default Row
