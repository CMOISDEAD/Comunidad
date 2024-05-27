import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import { Button, Kbd } from "@nextui-org/react";
import { locations } from "../../data/locations";
import { useAppStore } from "../../store/useAppStore";
import { Team } from "./Team";
import { Sites } from "./Sites";

export const Hud = () => {
  const { index, setIndex } = useAppStore();

  const handleNavigation = (forward: boolean) => {
    const length = locations.length;
    const newIndex = forward
      ? index === length - 1
        ? 0
        : index + 1
      : index === 0
        ? length - 1
        : index - 1;
    setIndex(newIndex);
  };

  return (
    <>
      <div className="absolute top-2 left-2 flex gap-4 content-center items-center justify-between">
        <div className="flex gap-3 content-center items-center justify-center w-52">
          <Button
            size="sm"
            variant="light"
            onPress={() => handleNavigation(false)}
          >
            <Kbd className="hidden md:block">a</Kbd>
            <Kbd>
              <RxArrowLeft />
            </Kbd>
          </Button>
          <p className="text-xs font-mono">navegacion</p>
          <Button
            size="sm"
            variant="light"
            onPress={() => handleNavigation(true)}
          >
            <Kbd className="hidden md:block">d</Kbd>
            <Kbd>
              <RxArrowRight />
            </Kbd>
          </Button>
        </div>
      </div>
      <Sites />
      <div className="absolute top-2 right-2">
        <Team />
      </div>
    </>
  );
};
