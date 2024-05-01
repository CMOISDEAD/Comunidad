import { useEffect } from "react";
import { Button, Kbd } from "@nextui-org/react";
import { locations } from "../../data/locations";
import { useAppStore } from "../../store/useAppStore";

export const Sites = () => {
  const { index, setIndex } = useAppStore();

  const handleNumber = (index: number) => {
    setIndex(index);
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
    <div className="absolute bottom-6 md:bottom-2 flex gap-8 md:gap-4 content-center items-center md:justify-center w-full font-mono overflow-auto">
      {locations.map((location, idx) => (
        <Button
          key={idx}
          size="sm"
          variant="light"
          className={`flex gap-2 content-center items-center ${index === idx && "text-primary-500"}`}
          onPress={() => handleNumber(idx)}
        >
          <Kbd className="hidden md:block">{idx + 1}</Kbd>
          <p className="text-xs">{location.title}</p>
        </Button>
      ))}
    </div>
  );
};
