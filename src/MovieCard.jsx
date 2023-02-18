import React from "react";

const MovieCard=(props)=>{
    const movie=props.movie;
    return(
        <div className="movie">
        <p>{movie.Year}</p>
        <img src={movie.Poster!=="N/A" ? movie.Poster:"https://via.placeholder.com/400"} alt={movie.Title}/>
        <div className="about">
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
    );
}

export default MovieCard;