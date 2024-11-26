import {Card, CardFooter, Image, Button} from "@nextui-org/react";

const Footer = () =>  {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover w-full"
        height={40}
        src="../../public/footer.png"
        width={1920}
        classNames={{
            img: "opacity-80"
          }}
      />
      <CardFooter className="border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-full shadow-small ml-1 z-10">
        <Button className="text-tiny text-white bg-black/20 " variant="flat" color="default" radius="lg" size="sm">
        Copyright © 2024 Ignacio Suarez Quilis. All Rights Reserved. Desarrollado con NextUI y React.
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Footer;