import { useState, useEffect, useRef } from "react";
import mapboxgl, { Map } from "mapbox-gl";
// @ts-expect-error Threebox is not defined.
import { Threebox } from "threebox-plugin";

import { locations } from "../data/locations";

export const useMap = () => {
  const [coords, _setCoords] = useState<[number, number]>([
    -75.6723751, 4.536307,
  ]);
  const [zoom, _setZoom] = useState(13);
  const [index, setIndex] = useState(0);
  const [location, setLocation] = useState<any>(null);

  const container = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);

  const moveMap = (idx: number) => {
    setLocation(locations[idx]);
    // @ts-expect-error map is not defined.
    map.current?.flyTo(locations[idx].camera);
  };

  const playback = (forward: boolean) => {
    const length = locations.length;

    setIndex((prev) => {
      const newIndex = forward
        ? prev === length - 1
          ? 0
          : prev + 1
        : prev === 0
          ? length - 1
          : prev - 1;

      moveMap(newIndex);
      return newIndex;
    });
  };

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a") {
        playback(false);
      } else if (e.key === "ArrowRight" || e.key === "d") {
        playback(true);
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  });

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
      container: container.current || "",
      style: "mapbox://styles/mapbox/dark-v11",
      center: coords,
      maxZoom: 19,
      minZoom: 9,
      zoom: zoom,
      pitch: 50,
      antialias: true,
    });

    //@ts-expect-error tb is not defined.
    const tb = (window.tb = new Threebox(
      map.current,
      map.current.getCanvas().getContext("webgl"),
      {
        defaultLights: true,
      },
    ));

    map.current.on("style.load", () => {
      map.current?.addLayer({
        id: "custom-threebox-model",
        type: "custom",
        renderingMode: "3d",
        onAdd: () => {
          locations.forEach(({ camera, model }) => {
            tb.loadObj(model.options, (obj: any) => {
              obj.setCoords(camera.center);
              obj.setRotation({ x: 0, y: 0, z: 241 });
              tb.add(obj);
            });
          });
        },
        render: () => tb.update(),
      });
    });

    map.current.on("load", () => moveMap(0));
  }, []);

  return { container, map, location };
};
