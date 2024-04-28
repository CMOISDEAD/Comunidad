import {
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
  const handleClick = () => alert(`Marker clicked: ${location.sport}`);

  return (
    <Popover showArrow>
      <PopoverTrigger>
        <Image
          isBlurred
          src={location.image}
          alt="an image"
          className="w-60 cursor-pointer"
        />
      </PopoverTrigger>
      <PopoverContent>
        <Button onClick={handleClick}>{location.sport}</Button>
      </PopoverContent>
    </Popover>
  );
};
