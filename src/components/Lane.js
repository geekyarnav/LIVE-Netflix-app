import React from 'react';
import {useState,useEffect} from 'react';
import axios from "../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Lane.css";

// Base URL 4 Thumbnails
const base_url = "https://image.tmdb.org/t/p/original/";

// passing 2 props from App/Lane -> Lane.js
//  3rd prop for horizontal thumbnels
function Lane({ title,fetchUrl,isLargeLane }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    
    // Sideeffects for state hook
    useEffect(()=>{

        //if [], run once when the row loads & dont run again 
        // It depeends on movies[initialstate value]

        async function fetchData(){
            //Wait for Api to load.
            const request = await axios.get(fetchUrl);
            console.log(request);
            // GET REQUEST  = "https://api.themoviedb.org/3/fetchUrl"
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

        const opts={
            height:"390",
            width:"100%",
            playerVars:{  autoplay:1,  }

            }
        
        const handleClick=(movie)=>{
            if (trailerUrl){
                setTrailerUrl("");
            }else{
                movieTrailer(movie?.name || "")
                .then(url=>{
                    const urlParams=new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error)=>console.log(error));
            }
        }
        return (
        <div className="lane">

            <h2>{title}</h2>

            <div className="lane-thumbnails">
                {movies.map(movie =>(
                    <img
                        key={movie.id}
                        onClick={()=>handleClick(movie)}
                        className={`lane-thumbnail ${isLargeLane && " lane-thumbnailLarge"}`}
                        src={`${base_url}${
                            isLargeLane ? movie.poster_path: movie.backdrop_path}`} 
                        alt={movie.name}    
                    /> 
                ))}
            </div>
            {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Lane;
