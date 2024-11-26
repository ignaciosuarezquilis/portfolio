import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";


const EachProject = ({nombre,img_link,descrip}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");

  return (
    <div>
      <Card className="py-4" isPressable onPress={onOpen}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{nombre}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 visible-image">
          <Image
            width={300}
            alt="NextUI Album Cover"
            src={img_link}
            classNames={{
              img: "opacity-80" // Esto aplicará una opacidad del 50% si estás usando Tailwind CSS
            }}
          />
          <small className="text-default-500">{descrip}</small>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} placement={modalPlacement} onOpenChange={onOpenChange}>
        <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{nombre}</ModalHeader>
            <ModalBody>
              <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam pulvinar risus non risus hendrerit venenatis.
                Pellentesque sit amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam pulvinar risus non risus hendrerit venenatis.
                Pellentesque sit amet hendrerit risus, sed porttitor quam.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  </div>
    
  );
}

export default EachProject;
