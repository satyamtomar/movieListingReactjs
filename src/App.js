import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from './components/MovieDetails';
import './assets/css/main.css';
import LikedMovies from './components/LikedMovies';
function App() {
  return (
  //  <Home/>
   <Router>
   {/* <Header/> */}
   
             <Routes>
         <Route exact path="/" key="Home"  element={<Home/>} />
        
          
         <Route exact path="/likedMovies" key="LikedMovies"  element={<LikedMovies/>} />
        
          

         <Route exact path='/movieDetails/:id' key="movieDetails" element={<MovieDetails/>}/>
          
         </Routes>
         </Router>
  );
}

export default App;
