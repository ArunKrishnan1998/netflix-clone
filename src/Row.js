import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import MovieTrailer from 'movie-trailer'

function Row({title, requestUrl, isLargeRow}) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const base_URL = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requestUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [requestUrl]);
    const trailerOpts = {
        height: "390px",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    };
    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl("");
        } else {
            MovieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
    return (
        <div class="row">
            <h2>{title}</h2>  

            <div class="row_posters">
                {movies.map(movie => (
                    <img class={`row_poster ${isLargeRow && 'row_poster_large'}`}
                        key={movie.id}
                        src={`${base_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} 
                        onClick={() => handleClick(movie)}/>
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={trailerOpts}/>}

        </div>
    )
}

export default Row