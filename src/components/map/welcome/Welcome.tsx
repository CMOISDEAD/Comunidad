import {
  Button,
  Kbd,
  Divider,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";

interface Props {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const Welcome = ({ isOpen, onOpenChange }: Props) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>!Welcome to the map!</ModalHeader>
            <ModalBody>
              <p>
                This is a simple map where you can navigate through different
                locations.
              </p>
              <Divider />
              <h3 className="text-lg font-bold capitalize">Navigation:</h3>
              <div className="flex content-center items-center justify-evenly text-sm">
                <ul>
                  <li className="mb-2">
                    <span className="inline-flex gap-1 mr-2">
                      <Kbd>
                        <RxArrowLeft />
                      </Kbd>
                      <Kbd>a</Kbd>
                    </span>
                    Move backward
                  </li>
                  <li>
                    <span className="inline-flex gap-1 mr-2">
                      <Kbd>
                        <RxArrowRight />
                      </Kbd>
                      <Kbd>d</Kbd>
                    </span>
                    Move forward
                  </li>
                </ul>
                <ul>
                  <li className="mb-2">
                    <Kbd className="mr-2">m</Kbd>
                    Mute/unmute the sound
                  </li>
                  <li>
                    <Kbd keys={["enter"]} className="mr-2" />
                    Go to the location
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
                  Use the numbers to navigate to the location directly. For
                  example, press <Kbd>1</Kbd> to go to the{" "}
                  <span className="text-primary font-bold">first location</span>
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
                Enjoy!
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
