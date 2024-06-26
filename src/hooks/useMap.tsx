import { useState, useEffect, useRef, createRef } from "react";
import mapboxgl, { Map } from "mapbox-gl";

import { locations } from "../data/locations";
import { useAppStore } from "../store/useAppStore";
import { createRoot } from "react-dom/client";
import { Marker } from "../components/map/Marker";
import { useNavigate } from "react-router-dom";

export const useMap = () => {
  const navigate = useNavigate();
  const [coords, _setCoords] = useState<[number, number]>([
    -75.6723751, 4.536307,
  ]);
  const [zoom, _setZoom] = useState(13);
  const { index, location, setIndex, setLocation, setMap, player } =
    useAppStore();

  const container = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);

  const rotateCamera = (timestamp: number) => {
    map.current?.rotateTo((timestamp / 100) % 360, { duration: 0 });
    requestAnimationFrame(rotateCamera);
  };

  const moveMap = (idx: number) => {
    setLocation(locations[idx]);
    map.current?.flyTo(locations[idx].camera);
  };

  const playback = (forward: boolean) => {
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
    player.pause();
    player.currentTime = 0;
    const { audio } = locations[index];
    moveMap(index);
    if (!audio) return;
    setTimeout(() => {
      player.src = audio;
      player.play();
    }, 300);
  }, [index]);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a") {
        playback(false);
      } else if (e.key === "ArrowRight" || e.key === "d") {
        playback(true);
      } else if (e.key === "Enter") {
        navigate(`/sports/${location.sport}`);
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
      minZoom: 10,
      zoom: zoom,
      pitch: 50,
      antialias: true,
      dragPan: false,
      touchZoomRotate: { around: "center" },
      scrollZoom: { around: "center" },
    });
    map.current.dragRotate.disable();

    locations.forEach((location) => {
      const ref = createRef<HTMLDivElement | null>();

      // @ts-expect-error ref is read-only.
      ref.current = document.createElement("div");

      createRoot(ref.current).render(<Marker location={location} />);

      new mapboxgl.Marker(ref.current)
        .setLngLat(location.feature.geometry.coordinates as [number, number])
        .addTo(map.current!);
    });

    map.current.on("load", () => {
      setMap(map.current);
      moveMap(0);
    });
  }, []);

  return { container, map };
};
