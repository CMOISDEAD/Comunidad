import {
  Link,
  Button,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

interface Props {
  location: ILocation;
}

export const Marker = ({ location }: Props) => {
  return (
    <Popover showArrow backdrop="opaque">
      <PopoverTrigger>
        <Image
          isBlurred
          src={location.image}
          alt="an image"
          className="w-60 cursor-pointer"
        />
      </PopoverTrigger>
      <PopoverContent className="p-5">
        <Button
          as={Link}
          href={`/sports/${location.sport}`}
          variant="flat"
          color="primary"
        >
          {location.sport}
        </Button>
      </PopoverContent>
    </Popover>
  );
};
