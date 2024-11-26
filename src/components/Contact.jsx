import React, { useState } from 'react';
import { FiMail, FiLinkedin, FiCopy } from 'react-icons/fi'; // Importando iconos de react-icons
//import '../styles/Contact.css';

import {Snippet} from "@nextui-org/snippet";
import {MdEmail} from "react-icons/md";
import { Image } from '@nextui-org/image';
import Footer from './Footer'

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  return (
    <section id="contact" className='flex flex-col items-center justify-center'>
      <h1>Contacto</h1>
      <Snippet
      tooltipProps={{
        color: "foreground",
        content: "Copy this snippet",
        disableAnimation: true,
        placement: "right",
        closeDelay: 0
      }}
      hideSymbol 
    >
      ignaciosuarezquilis@gmail.com
    </Snippet>

      {/* LinkedIn Section */}
      <div className="contact-linkedin">
        <a href="https://www.linkedin.com/in/ignacio-suarez-quilis-8181ab190/" target="_blank" rel="noopener noreferrer">
          <FiLinkedin className="linkedin-icon" />
          LinkedIn
        </a>
      </div>

      <div className='w-full'><Footer/></div>

    
    </section>
  );
}

export default Contact;
