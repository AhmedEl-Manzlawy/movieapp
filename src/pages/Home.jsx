import { Link, NavLink } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

function Home (){


    return(
        <Navbar bg="dark" variant="dark">
            <div className="container-fluid">
                <h1>
                     Movies
                </h1>
                <NavLink as={Link} to="/">Home</NavLink>
            </div>
        </Navbar>
    )
}

export default Home