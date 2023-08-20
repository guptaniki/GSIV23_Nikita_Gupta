import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./containres/movieDetails";
import MovieList from "./containres/movieList";
import Layout from "./components/layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getGenres} from './redux/genres'
function App() {
  const dispatch=new useDispatch();
  useEffect(()=>{
    dispatch(getGenres());
  },[dispatch])
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MovieList />}></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
