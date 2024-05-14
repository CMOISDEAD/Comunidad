interface ILocation {
  id: string;
  title: string;
  description: string;
  sport: string;
  image?: string;
  audio?: string;
  camera: {
    center: [number, number];
    zoom: number;
    pitch?: number;
    bearing?: number;
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
