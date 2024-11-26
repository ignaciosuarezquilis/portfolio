import React, { useState } from 'react';
//import '../styles/Home.css'; // Asegúrate de tener este archivo CSS correspondiente
import 'font-awesome/css/font-awesome.min.css'; // Importa Font Awesome
import Tweet from './Tweet';

const Home = () => {

  return (
    <section id="home">
      <div className="h-screen flex items-center justify-center w-full">
        <Tweet/>
      </div>
    </section>
  );
};

export default Home;
