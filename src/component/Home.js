import MovieList from './MovieList';
import Filter from './Filter';
import Add from './Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from '../List';
import {useState} from 'react';


function Home() {
  const addMovie = (newMovie) => {
    console.log(newMovie)
    setMovies([...movies, newMovie])
  }

const [movies, setMovies] = useState(List)
const [title , setTitle] = useState("")
const [rating , setRating] = useState(0)


  return (
    <div className="App">
    <Filter setRating={setRating} setTitle={setTitle} />
    <MovieList List={movies} title={title} rating={rating}/>
    <Add addMovie={addMovie}/>
    </div>
  );
}

export default Home;
