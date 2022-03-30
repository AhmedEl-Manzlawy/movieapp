import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/Home";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className="container my-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie" component={Movie} />
          <Route path="/details/:id" component={MovieDetails} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
