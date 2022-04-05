import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/Home";
import Favourite from "./pages/Favourite";
import { LanguageContext } from "./context/language";
import { useState } from "react";
import Movies from "./pages/Movie";
import './App.css';


function App() {
  const  [languageContext ,setLanguageContext] = useState('en');

  return (
    <div className="root bg-dark text-light  ">
      <LanguageContext.Provider value={{languageContext,setLanguageContext}}>
      <Router>
        <Navbar />
        <div className="container ">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/movies/:id" exact component={MovieDetails} />
            <Route path="/favourite" exact component={Favourite} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
