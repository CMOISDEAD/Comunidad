import { useState, useEffect, useRef, createRef } from "react";
import mapboxgl, { Map } from "mapbox-gl";

import { markers } from "../data/markers";
import { locations } from "../data/locations";
import { createRoot } from "react-dom/client";
import { Marker } from "../components/map/Marker";

export const useMap = () => {
  const [coords, _setCoords] = useState<[number, number]>([
    -75.6723751, 4.536307,
  ]);
  const [zoom, _setZoom] = useState(13);

  const container = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);

  const highlightBorough = (code: any) => {
    map.current?.setFilter("highlight", ["==", "borocode", code]);
  };

  const playback = (index: number) => {
    // locations[index].title, locations[index].description;
    highlightBorough(locations[index].id ? locations[index].id : "");

    // @ts-expect-error location is not a valid type.
    map.current?.flyTo(locations[index].camera);

    map.current?.once("moveend", () => {
      window.setTimeout(() => {
        index = (index + 1) % locations.length;
        playback(index);
      }, 3000);
    });
  };

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
      container: container.current || "",
      style: "mapbox://styles/mapbox/dark-v11",
      center: coords,
      maxZoom: 16,
      minZoom: 9,
      zoom: zoom,
    });

    map.current.on("load", () => {
      map.current?.addSource("boroughs", {
        type: "vector",
        url: "mapbox://{}",
      });
      map.current?.addLayer(
        {
          id: "highlight",
          type: "fill",
          source: "boroughs",
          "source-layer": "original",
          paint: {
            "fill-color": "#fd6b50",
            "fill-opacity": 0.25,
          },
          filter: ["==", "borocode", ""],
        },
        // "road-label", // Place polygon under labels.
      );

      playback(0);
    });

    markers.features.forEach((feature) => {
      const ref = createRef<HTMLDivElement | null>();

      // @ts-expect-error ref is read-only.
      ref.current = document.createElement("div");

      createRoot(ref.current).render(<Marker feature={feature} />);

      new mapboxgl.Marker(ref.current)
        .setLngLat(feature.geometry.coordinates as [number, number])
        .addTo(map.current!);
    });
  }, []);

  return { container, map };
};
