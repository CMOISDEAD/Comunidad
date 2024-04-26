import "mapbox-gl/dist/mapbox-gl.css";
import { useMap } from "../../hooks/useMap";

export const MapView = () => {
  const { container } = useMap();

  return (
    <div className="h-screen">
      <div ref={container} className="h-full w-full" />
    </div>
  );
};
