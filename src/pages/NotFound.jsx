import React from "react";
import error from "../img/error.jpg"

export default function NotFound() {
  return (
    <div className="container text-center mt-3 vh-100 ">
      <img src={`${error}`}  alt="error" width="80%" />
    </div>
  );
}
