import { useEffect, useState } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./components/MovieCard";
//f6f121f4

const API_URL = "http://www.omdbapi.com?apikey=f6f121f4"; 
const movie1 = {
  "Title": "The Batman",
  "Year": "2022",
  "imdbID": "tt1877830",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
}

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
  }
  useEffect(() => {
   console.log(movies);
    searchMovies();
    
  }, []);
  return (
    <div className="app">
      <h1>MoviesHub</h1>
      <div className="search">
        <input type="text" placeholder="Search for Movies"  value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <img src={SearchIcon} onClick={()=>searchMovies(search)} alt="search" />
      </div>
      {
        movies?.length>0
        ?(
          <div className="container">
        {movies.map((movie)=>(
          <MovieCard movie ={movie}/>
        ))}
     </div>
        ) :
        (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
          )
      }
      <div className="footer"> 
            <h3>Copyright © 2022 Shubham Joshi</h3> 
            </div>
     
    </div>
  );
}

export default App;
