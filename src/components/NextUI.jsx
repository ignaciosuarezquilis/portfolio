import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const NextUI= () => {
  return (
    <Navbar  shouldHideOnScroll>
      <NavbarContent className=" border-b border-b-gray-300  w-full my-2 mx-auto " justify="center">
        <NavbarItem>
          <Link color="foreground" href="#home">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#projects">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#skills">
            Habilidades
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#about-me" color="foreground">
            Sobre mi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contact">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NextUI;