import  "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMovie } from "../store/action";

function Fav (){
    const fav = useSelector((state)=>state.moviesName)
    const [update , setUpdate] = useState("update");
    const dispatch = useDispatch();
    function deleteOne(id,name){
        dispatch(deleteMovie({name,id}));
        setUpdate(name)
    }
    return(
        <Container>
            {fav.map((movie)=>{
                return(
                    <Row className="d-flex align-items-center" style={{border:"solid 2px #eee",marginBottom:"20px"}}>
                        <Col lg={8} md={8}><h1 style={{fontStyle:"italic",fontWeight:"bold"}}>{movie.name}</h1></Col>
                        <Col lg={4} md={4}>
                            <Button style={{width:"100px"}} as={Link} to={`/movies/${movie.id}`} variant="outline-primary">Details</Button>
                            <Button style={{width:"100px"}} onClick={()=>{deleteOne(movie.id , movie.name)}} variant="outline-danger">Delete</Button>
                        </Col>
                    </Row>
                )
            })}
        </Container>
    )
}

export default Fav