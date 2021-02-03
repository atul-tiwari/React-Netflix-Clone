import React, { useEffect, useState } from 'react'
import axios from '../axios';
import request from '../requests';
import '../CSS/Banner.css';

function Banner() {

    const [bannerMovie , setBannerMovie] = useState({});

    useEffect(()=>{
        async function fetchBAnner(){
            const result = await axios.get(request[Math.floor(Math.random()*request.length)].link)
            setBannerMovie(result.data.results[Math.floor(Math.random()*result.data.results.length)]);
            return result
        }
        fetchBAnner();
    },[]);

    console.log(bannerMovie);

    return (
        <header className= "banner" style={{backgroundImage:"url('https://image.tmdb.org/t/p/w1280"+bannerMovie?.backdrop_path+"')"}}>
            <div>
            <h1>{bannerMovie?.name || bannerMovie?.title || bannerMovie?.original_name}</h1>
            <div className="banner-but-div">
                <button className="banner-but">Play</button>
                <button className="banner-but">My List</button>
            </div>
            <p>{bannerMovie.overview?.length > 150 ? (bannerMovie.overview?.substr(0,149) + "...") :  bannerMovie.overview}</p>
            </div>
        </header>
    )
}

export default Banner
