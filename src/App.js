import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./searchIcon.svg"

//my key: c1a1b508

const API_URL="http://www.omdbapi.com/?i=tt3896198&apikey=c1a1b508";

function App(){
    const [movies,setMovies]=useState([]);
    const [search,setSearch]=useState("");

    const searchMovies= async (title)=>{
        const response= await fetch(`${API_URL}&s=${title}`);
        const data= await response.json();
        setMovies(data.Search);
        console.log(data.Search)
    }

    useEffect(()=>{
        searchMovies("Superman");
    },[]);

    return(
        <div className="app">
            <h1 className="title">Cuinica Movies</h1>
            <div className="search">
                <input
                    placeholder="Search for movies here"
                    value={search}
                    onChange={(e)=>{setSearch(e.target.value)}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>{searchMovies(search)}}
                />
            </div>
            <div className="container">
               {
                   movies.length > 0 ?
                   (
                    movies.map((item)=>(<MovieCard movie={item}/>))
                   ):
                   (
                    <div className="empty">
                        <p>There are no movies</p>
                    </div>
                   )
               }
            </div>
        </div>
    );
}

export default App; 