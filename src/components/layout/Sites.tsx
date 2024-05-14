import { useEffect } from "react";
import { Button, Kbd } from "@nextui-org/react";
import { locations, general } from "../../data/locations";
import { useAppStore } from "../../store/useAppStore";

export const Sites = () => {
  const { map, player, location, setLocation, setIndex } = useAppStore();

  const handleNumber = (title: string) => {
    const find = locations.find((loc) => loc.title === title);
    if (!find) return;
    setLocation(find);
    player.pause();
    map.flyTo(find?.camera);
    setIndex(locations.indexOf(find));
  };

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key >= "1" && e.key <= general.length.toString()) {
        handleNumber(general[Number(e.key) - 1].title);
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  });

  return (
    <div className="absolute bottom-6 md:bottom-2 flex gap-8 md:gap-4 content-center items-center md:justify-center w-full font-mono overflow-auto">
      {general.map((site, idx) => (
        <Button
          key={idx}
          size="sm"
          variant="light"
          className={`flex gap-2 content-center items-center ${site.title === location?.title && "text-primary-500"}`}
          onPress={() => handleNumber(site.title)}
        >
          <Kbd className="hidden md:block">{idx + 1}</Kbd>
          <p className="text-xs">{site.title}</p>
        </Button>
      ))}
    </div>
  );
};
