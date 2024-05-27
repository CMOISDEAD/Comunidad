import {
  Button,
  Kbd,
  Divider,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect } from "react";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";

export const Welcome = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const showWelcome = window.sessionStorage.getItem("showWelcome");
    if (!showWelcome) {
      onOpen();
      window.sessionStorage.setItem("showWelcome", "true");
    }
  }, []);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
              <p>
                Bienvenido a{" "}
                <span className="font-tactic">Comnudad Deportiva</span>
              </p>
            </ModalHeader>
            <ModalBody>
              <p>
                Proyecto de Grado del Programa Comunicacion Social y Periodismo
                de la Universidad del Quindio.
              </p>
              <Divider />
              <h3 className="text-lg font-bold capitalize">Navegacion:</h3>
              <div className="flex content-center items-center justify-evenly text-sm">
                <ul>
                  <li className="mb-2">
                    <span className="inline-flex gap-1 mr-2">
                      <Kbd>
                        <RxArrowLeft />
                      </Kbd>
                      <Kbd>a</Kbd>
                    </span>
                    Mover hacia atras
                  </li>
                  <li>
                    <span className="inline-flex gap-1 mr-2">
                      <Kbd>
                        <RxArrowRight />
                      </Kbd>
                      <Kbd>d</Kbd>
                    </span>
                    Mover hacia adelante
                  </li>
                </ul>
                <ul>
                  <li className="mb-2">
                    <Kbd className="mr-2">m</Kbd>
                    Mute/Unmute el audio
                  </li>
                  <li>
                    <Kbd keys={["enter"]} className="mr-2" />
                    Ir a la ubicacion actual
                  </li>
                </ul>
              </div>

              <div className="flex flex-col content-center items-center justify-center gap-2">
                <div className="flex content-center items-center gap-4 text-sm">
                  {[1, 2, 3, 4, 5, 6].map((number) => (
                    <Kbd key={number}>{number}</Kbd>
                  ))}
                </div>
                <p className="text-sm text-center">
                  Usa los numeros para ir directamente al municipio deseado. Por
                  ejemplo, presiona <Kbd>1</Kbd> para ir a{" "}
                  <span className="text-primary font-bold">
                    la primera locacion
                  </span>
                  .
                </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                fullWidth
                color="primary"
                variant="flat"
                onPress={onClose}
              >
                Entendido
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
