interface ILocation {
  id: string;
  city: string;
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

interface ISport {
  paragraphs: {
    images?: {
      url: string;
      caption?: string;
    }[];
    paragraph: string;
  }[];
  header: {
    image: string;
    caption: string;
  };
  achievements: {
    title: string;
    list?: string[];
    text?: string;
    year: number;
  }[];
}
