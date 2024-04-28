interface ILocation {
  id: string;
  title: string;
  description: string;
  sport: string;
  image?: string;
  camera: {
    center: [number, number];
    zoom: number;
    pitch?: number;
    bearing?: number;
  };
  model: {
    options?: {
      obj: string;
      type: string;
      scale: { x: number; y: number; z: number };
      units: string;
      rotation: { x: number; y: number; z: number };
    };
  };
  feature: {
    type: string;
    properties: {
      title: string;
      description: string;
    };
    geometry: {
      coordinates: [number, number];
      type: string;
    };
  };
}
}
