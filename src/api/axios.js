import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "a10b5e9d31fba219ccd2247674ee5b38",
    language: "ko-KR",
  },
});

export default instance;
