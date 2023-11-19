import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import requests from "../api/requests";
import "./Banner.css";
import styled from "styled-components";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보를 가져오기(여러 영화)
    const request = await axios.get(requests.fetchNowPlaying);
    // 여러 영화 중 하나의 ID를 가져오기
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;
    // 특정 영화의 더 상세한 정보를 가져오기(비디오 정보 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  };

  const truncate = (string, num) => {
    return string?.length > num ? string.substr(0, num - 1) + "..." : string;
  };

  if (!isClicked) {
    // play button 누르기 전
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className="banner__buttons">
            {movie.videos?.results.length < 1 ? null : (
              <button
                className="banner__button play"
                onClick={() => setIsClicked(true)}
              >
                Play
              </button>
            )}
            <button className="banner__button info">More Information</button>
          </div>
          <h1 className="banner__description">
            {truncate(movie.overview, 100)}
          </h1>
        </div>
        <div className="banner__fadeBottom"></div>
      </header>
    );
  } else {
    return (
      <Container>
        <HomeContainer>
          <Iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></Iframe>
        </HomeContainer>
      </Container>
    );
    // play button 누른 상태
  }
};

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 1;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default Banner;