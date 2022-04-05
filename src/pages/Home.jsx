import React from 'react';
import homeImg from '../img/home.jpg'

export default function Home() {
  return (
    <div 
    className="text-center text-danger my-5  vh-100">
        <img src={`${homeImg}`} alt="homepage" width="100%" />
    </div>
  )
}
