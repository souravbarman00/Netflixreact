import React, { useState } from 'react';
import "./Style/Home.scss";
import { useEffect } from 'react';
import {BiPlay} from "react-icons/bi";
import {HiOutlineExclamationCircle} from "react-icons/hi";
import Row from './Row';
const imgurl="https://image.tmdb.org/t/p/original";
// import axios from 'axios';
// const apikey="2b21f9f96825181ca0bb812d7f6791a1";
const Movieurl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const Tvurl = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
const NowPlaying='https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjIxZjlmOTY4MjUxODFjYTBiYjgxMmQ3ZjY3OTFhMSIsInN1YiI6IjY0YWFhZDI5M2UyZWM4MDEyZWUzYWVkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._VaX9-R362mmreO0LEiEV7yUR7eQ6lgCWFpm5f9RocU',
        accept: 'application/json'
    },
    method: 'get'
  };
  
//   console.log(await fetchToCurl(url, options));

  
const Home = () => {
    const [Movies, SetMovies]=useState([]); 
    const [Tv,SetTv]=useState([]);
    const [Now,SetNow]=useState([]);
    useEffect(() => {
        const fetchAllMovies= async () => {
        const data=await fetch(Movieurl, options).then(res => res.json());
    //   .then(json => data.push(json))
    const {results}=data;
        // console.log(results);
        SetMovies(results);
        };
        fetchAllMovies();
        // console.log(Movies);
      },[]);
      useEffect(() => {
        const fetchAllTv= async () => {
        const data=await fetch(Tvurl, options).then(res => res.json());
    //   .then(json => data.push(json))
    const {results}=data;
        // console.log(results);
        SetTv(results);
        };
        fetchAllTv();
        // console.log(Movies);
      },[]);
      useEffect(() => {
        const fetchAllNow= async () => {
        const data=await fetch(NowPlaying, options).then(res => res.json());
    //   .then(json => data.push(json))
    const {results}=data;
        // console.log(results);
        SetNow(results);
        };
        fetchAllNow();
        // console.log(Movies);
      },[]);
    
  return (
    <section>
        <div className='Homeimg'
            style={
                {
                    backgroundImage: Movies[0] 
                        ? `url(${`${imgurl}/${Movies[0].backdrop_path}`})`
                        :"rgb(16,16,16)",

                }
            }>
                {Movies[0] && <h1>{Movies[0].original_title}</h1>}
                {Movies[0] && <h2>{Movies[0].overview}</h2>}
                <div>
                <button ><BiPlay />Play</button>
                <button><HiOutlineExclamationCircle/>More Info</button>
                </div>
                </div>
                <div>
                    <Row title={"Movies"} Movies={Movies} imgUrl={imgurl}/>
                    <Row title={"Tv Series"} Movies={Tv} imgUrl={imgurl} />
                    <Row title={"Now Playing"} Movies={Now} imgUrl={imgurl} />
                </div>
                
        
    <div className='Home'>
    
</div></section>
    
  );
}

export default Home