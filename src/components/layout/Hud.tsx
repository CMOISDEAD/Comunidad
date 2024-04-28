import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import { Button, Kbd } from "@nextui-org/react";
import { locations } from "../../data/locations";

export const Hud = () => {
  return (
    <>
      <div className="absolute top-2 left-2 flex gap-4 content-center items-center justify-between">
        <div className="flex gap-3 content-centet items-center justify-center">
          <Kbd>a</Kbd>
          <Kbd>
            <RxArrowLeft />
          </Kbd>
          <p className="text-xs font-mono">navigate</p>
          <Kbd>d</Kbd>
          <Kbd>
            <RxArrowRight />
          </Kbd>
        </div>
      </div>
      <div className="absolute bottom-2 flex gap-4 content-center items-center justify-center w-full font-mono">
        {locations.map((location, index) => (
          <Button
            key={index}
            size="sm"
            variant="light"
            className={`flex gap-2 content-center items-center ${index === 0 && "text-primary-500"}`}
          >
            <Kbd>{index + 1}</Kbd>
            <p className="text-xs">{location.title}</p>
          </Button>
        ))}
      </div>
    </>
  );
};
