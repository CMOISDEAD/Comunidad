import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { Navigation as Nav } from "../../components/navbar/Navigation";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard } from "swiper/modules";
import { sports } from "../../data/sports";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "react-photo-view/dist/react-photo-view.css";

export const Sport = () => {
  const { sport } = useParams();
  const { name, header, paragraphs, achievements }: ISport =
    sports[sport?.toLowerCase()!];

  return (
    <>
      <Nav />
      <PhotoProvider>
        <header>
          <PhotoView src={header.image}>
            <Image
              removeWrapper
              radius="none"
              src={header.image}
              alt="header image"
              className="h-96 lg:h-[28rem] w-full object-cover"
            />
          </PhotoView>
        </header>

        <div className="relative md:h-64 py-2 flex flex-col md:flex-row gap-3 content-center items-center justify-evenly">
          <p className="font-vulture text-9xl absolute -z-10 text-center">
            {name}
          </p>

          {achievements.map((item, idx) => (
            <Card isBlurred key={idx} className="w-80 h-52">
              <CardHeader>
                <h3 className="font-bold text-xl">{item.title}</h3>
              </CardHeader>
              <CardBody className="text-sm">
                {item.list ? (
                  <ul>
                    {item.list.map((achivement, idx) => (
                      <li key={idx}>{achivement}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.text}</p>
                )}
              </CardBody>
              {item.year && (
                <CardFooter>
                  <p className="text-xs text-center text-gray-500">
                    {item.year}
                  </p>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>

        <div>
          <div className="bg-background/80 py-2 my-2">
            <h1 className="text-center text-xl font-bold">
              Deslice hacia abajo para ver más imágenes
            </h1>
            <p className="text-center text-xs">
              Use las flechas del teclado para navegar entre las imágenes
            </p>
          </div>

          <Swiper
            direction="vertical"
            className="max-h-64 md:max-h-screen"
            modules={[Keyboard]}
            keyboard={{
              enabled: true,
            }}
          >
            {paragraphs.map((p, idx) => (
              <SwiperSlide key={idx}>
                <Swiper
                  className="container mx-auto"
                  modules={[Pagination, Keyboard]}
                  pagination={{
                    clickable: true,
                  }}
                  keyboard={{
                    enabled: true,
                  }}
                >
                  {p.images &&
                    p.images.map((image, idx) => (
                      <SwiperSlide key={idx}>
                        <PhotoView src={image.url}>
                          <div className="relative group cursor-pointer">
                            <Image
                              removeWrapper
                              radius="none"
                              src={image.url}
                              alt="header image"
                              className="w-full max-h-screen object-cover"
                            />
                            <Card className="hidden md:block absolute bottom-2 left-2 z-20 bg-background/80 backdrop-blur px-2 py-1 w-80 shadow">
                              <CardBody>
                                <p>{p.paragraph}</p>
                              </CardBody>
                            </Card>
                          </div>
                        </PhotoView>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </PhotoProvider>
    </>
  );
};
