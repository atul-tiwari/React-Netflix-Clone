import React,{useState, useEffect} from 'react';
import axios from '../axios';
import '../CSS/Row.css';


function Row(props){

    const baseImgUrl = "https://image.tmdb.org/t/p/w500";

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
    return(
        <div className="row">
            <h2>{props.title}</h2>

            <div className="row_posters">
                {movies.map((movie)=>{
                    return (<img key={movie.id} 
                        src={baseImgUrl +  (props.isLargeRow ? movie.backdrop_path : movie.poster_path)} 
                        alt={movie.original_name} />)
                })}
            </div>

        </div>
        )
}

export default Row;