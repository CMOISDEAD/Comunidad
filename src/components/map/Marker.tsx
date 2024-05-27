import { Link, Image } from "@nextui-org/react";

interface Props {
  location: ILocation;
}

export const Marker = ({ location }: Props) => {
  return (
    <Link
      className="relative cursor-pointer"
      href={`/sports/${location.sport}`}
    >
      <p className="font-vulture text-7xl z-10 text-nowrap mb-20 text-foreground">
        {location.feature.properties.title.split(" ").slice(0, 2).join(" ")}
      </p>
      <Image
        isBlurred
        src={`https://res.cloudinary.com/djfou58lo/image/upload/v1716770506/comunidad/${location.image}`}
        alt="an image"
        classNames={{
          img: "w-36 z-20",
          wrapper: "absolute top-0 left-0 right-0 m-auto w-fit",
        }}
      />
    </Link>
  );
};
