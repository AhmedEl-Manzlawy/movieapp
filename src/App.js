import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/Home";
import Favourite from "./pages/Favourite"

import './App.css';

function App() {
  return (
    <div className="App bg-dark border-bottom">
      <Router>
      <Navbar />
      <div className="container my-5 bg-dark">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movie} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/favourite" component={Favourite} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
