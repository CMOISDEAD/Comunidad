import "mapbox-gl/dist/mapbox-gl.css";
import { useMap } from "../../hooks/useMap";
import { Details } from "./Details";

export const MapView = () => {
  const { container } = useMap();

  return (
    <div className="h-screen">
      <Details />
      <div ref={container} className="h-full w-full" />
    </div>
  );
};
