import { useParams } from "react-router-dom";
import { Image } from "@nextui-org/react";
import { Navigation } from "../../components/navbar/Navigation";
import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";

export const Sport = () => {
  const { sport } = useParams();

  return (
    <>
      <Navigation />
      <div className="my-5 container mx-auto mih-h-screen">
        <h1 className="text-4xl font-bold text-center mb-5">{sport}</h1>
        <PhotoProvider>
          <div className="flex gap-2 content-center items-center justify-center">
            {images.map((item, index) => (
              <PhotoView key={index} src={item}>
                <Image
                  removeWrapper
                  draggable={false}
                  src={item}
                  alt="some images"
                  className="object-cover w-32 h-32 hover:cursor-pointer"
                />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </>
  );
};

const images = [
  "https://react-photo-view.vercel.app/_next/static/media/4.57ff8e86.jpg",
  "https://react-photo-view.vercel.app/_next/static/media/2.b43f1ead.jpg",
  "https://react-photo-view.vercel.app/_next/static/media/3.70695fb9.jpg",
];
