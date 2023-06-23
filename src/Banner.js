import React, { useEffect, useState } from 'react'
import axios from './axios';
import Requests from './requests'
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(Requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
            return request;
        }
        fetchData();
    }, [])

    console.log("movie.... >", movie)
    function truncate(str, n) {
        return str.length > n ? str.substr(0, n-1) + "..." : str;
    }
  return (
    <header class="banner" style={{
                            backgroundSize: 'cover',
                            backgroundImage: `url(
                                                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                                                )`,
                            backgroundPosition: "center center"
                            }}>
        <div class="banner_contents">
            <h1 class="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>

            <div class="banner_buttons">
                <button class="banner_button">Play</button>
                <button class="banner_button">my List</button>
            </div>

            <h1 class="banner_description">
                {movie?.overview}
            </h1>
        </div>
        <div class="banner_faded_bottom"></div>
    </header>

  )
}

export default Banner