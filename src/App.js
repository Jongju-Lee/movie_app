import "./App.css";
import requests from "./api/requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>

      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated}></Row>
      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      ></Row>
      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      ></Row>
    </div>
  );
};

export default App;
