import React from 'react';
//import '../styles/AboutMe.css';
import {Progress} from "@nextui-org/react";
import Porcentaje from './Porcentaje'
import {Card, CardBody} from "@nextui-org/react";

const AboutMe = () => {
  return (
    <section id="about-me" className="h-screen flex flex-col items-center justify-center">
      <h1>Sobre mi</h1>
      
      {/* Sección de Educación */}
      <div className="education">
        <p><strong>Ingeniería Informática</strong>, Universidad Nacional de Mar del Plata</p>
        <Porcentaje/>
        <Card>
      <CardBody>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, fugit delectus voluptates id tempora temporibus repudiandae, quisquam praesentium assumenda modi dolor, nisi eius animi vitae? Fuga minus accusamus deleniti ducimus.</p>
      </CardBody>
    </Card>
      </div>

    </section>
  );
};

export default AboutMe;


