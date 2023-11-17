import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const DetailPage = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  console.log("movieId", movieId);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(`/movie/${movieId}`);
      setMovie(request.data);
      console.log(request.data);
    };
    fetchData();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  } else {
    return (
      <section>
        <img
          className="modal__poster-img"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="poster"
        />
      </section>
    );
  }
};

export default DetailPage;
