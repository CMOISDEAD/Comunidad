import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import { Button, Kbd } from "@nextui-org/react";
import { locations } from "../../data/locations";
import { useAppStore } from "../../store/useAppStore";
import { useEffect } from "react";

export const Hud = () => {
  const { index, setIndex } = useAppStore();

  const handleNumber = (index: number) => {
    setIndex(index);
  };

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

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      // manage numbers from 1 to 6 and setIndex
      if (e.key >= "1" && e.key <= "6") {
        setIndex(Number(e.key) - 1);
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  });

  return (
    <>
      <div className="absolute top-2 left-2 flex gap-4 content-center items-center justify-between">
        <div className="flex gap-3 content-center items-center justify-center w-52">
          <Button
            size="sm"
            variant="light"
            onPress={() => handleNavigation(false)}
          >
            <Kbd>a</Kbd>
            <Kbd>
              <RxArrowLeft />
            </Kbd>
          </Button>
          <p className="text-xs font-mono">navigate</p>
          <Button
            size="sm"
            variant="light"
            onPress={() => handleNavigation(true)}
          >
            <Kbd>d</Kbd>
            <Kbd>
              <RxArrowRight />
            </Kbd>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-2 flex gap-4 content-center items-center justify-center w-full font-mono">
        {locations.map((location, idx) => (
          <Button
            key={idx}
            size="sm"
            variant="light"
            className={`flex gap-2 content-center items-center ${index === idx && "text-primary-500"}`}
            onPress={() => handleNumber(idx)}
          >
            <Kbd>{idx + 1}</Kbd>
            <p className="text-xs">{location.title}</p>
          </Button>
        ))}
      </div>
      <div className="absolute top-2 right-2">
        <h1 className="text-2xl font-bold text-gray-300">
          Comunidad Deportiva
        </h1>
      </div>
    </>
  );
};
