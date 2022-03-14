import React ,{ useEffect, useState}from "react";
import axios from "../api/axios";
import requests from "../api/requests";

export default function Banner() {

    const [movie, setMovie] = useState([]);
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        //현재 상영중인 영화 정보를 가져오기(여러 영화)
        const request = await axios.get(requests.fetchNowPlaying);

        const MovieId =
        request.data.results[
            Math.floor(Math.random() * request.data.results.length)
        ].id;

        //특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)
        const {data : movieDetail} = await axios.get(`movie/${movieId}`, {
            params : { append_to_response : "viedeos"},
        });
        setMovie(movieDetail);

    }
    return
        <header
        className="banner"
        style={{ 
            backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}}
            backgroundPosition="top center"

            >
        </header>;
}
