import './App.css';
import Row from './Row';
import Requests from './requests'
import Banner from './Banner'
import Nav from './Nav'
function App() {
  return (
    <div className="app">
  <Nav />
  <Banner />
  <Row
    title="Netflix Originals"
    requestUrl={Requests.fetchNetflixOriginals}
    isLargeRow/>
  <Row title="Trending" requestUrl={Requests.fetchTrending} />
  <Row title="Top Rated" requestUrl={Requests.fetchTopRated} />
  <Row title="Action Movies" requestUrl={Requests.fetchActionMovies} />
  <Row title="Comedy Movies" requestUrl={Requests.fetchComedyMovies} />
  <Row title="Horror Movies" requestUrl={Requests.fetchHorrorMovies} />
  <Row title="Romance Movies" requestUrl={Requests.fetchRomanceMovies} />
  <Row title="Documentaries" requestUrl={Requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
