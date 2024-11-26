import EachProject from "./EachProject";
import {Spacer} from "@nextui-org/react";

const Projects = () => {
  return (
    <section id="projects" className="h-screen flex flex-col items-center justify-center" >
      <h1 className="p-8">Projects</h1>   
      <div className="flex">
        <EachProject nombre="Proyecto 1" 
        img_link="https://nextui.org/images/hero-card-complete.jpeg" descrip="dsadasdasdsadsad"/> 
        <Spacer x={8} />
        <EachProject nombre="Proyecto 2" img_link="https://nextui.org/images/hero-card-complete.jpeg" descrip="dsadasdasdsadsad"/>
        <Spacer x={8} /> 
        <EachProject nombre="Proyecto 3" img_link="https://nextui.org/images/hero-card-complete.jpeg" descrip="dsadasdasdsadsad"/>
      </div>
    </section>


       
  );
}

export default Projects;