import React,{useState, useEffect} from 'react';
import axios from '../axios';
import '../CSS/Row.css';
import Youtube from "react-youtube";



function Row(props){

    const baseImgUrl = "https://image.tmdb.org/t/p/w500";
    const [trailerUrl, setTrailerUrl] = useState("");
    const [movies,setMovies] = useState([]);

    useEffect(()=>{

        async function fetchdata(){
            const request = await axios.get(props.fetchurl);
            setMovies(request.data.results);
            return request;
        }   
    fetchdata();
            
       
    },[props.fetchurl]);
    //run only when [] changes hence it never changes it only run once
    // dependend on []

    // Options for react-youtube
    const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
    };

    const handleClick = async (movie) => {
        if (trailerUrl) {
          setTrailerUrl("");
        } else {
          let trailerurl = await axios.get(
            `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
          );
          setTrailerUrl(trailerurl.data.results[0]?.key);
        }
      };


    return(
        <div className="row">
            <h2>{props.title}</h2>

            <div className="row_posters">
                {movies.map((movie)=>{
                    return (<img key={movie.id}
                        onClick ={()=>handleClick(movie)}
                        src={baseImgUrl +  (props.isLargeRow ? movie.backdrop_path : movie.poster_path)} 
                        alt={movie.original_name} 
                            style={{width: ((props.isLargeRow) ? "280px" : "200px") }}/>)
                })}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
        )
}

export default Row;