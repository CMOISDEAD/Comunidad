import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Progress,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { RxArrowRight } from "react-icons/rx";

interface Props {
  location: {
    title: string;
    description: string;
  } | null;
}

export const Details = ({ location }: Props) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(0);
    const interval = setInterval(() => {
      setValue((v) => v + 10);
    }, 200);
    return () => clearInterval(interval);
  }, [location]);

  return (
    <Card isBlurred className="absolute top-10 left-2 w-52 z-50">
      {location ? (
        <>
          <Progress value={value} size="sm" color="primary" aria-label="loading" />
          <CardHeader>
            <h2 className="text-3xl font-bold capitalize">{location.title}</h2>
          </CardHeader>
          <CardBody>
            <p className="text-sm mb-5">{location.description}</p>
            <Button
              fullWidth
              variant="flat"
              color="primary"
              endContent={<RxArrowRight />}
            >
              Go to the page
            </Button>
          </CardBody>
        </>
      ) : (
        <CardBody>
          <p className="text-sm">No location selected</p>
        </CardBody>
      )}
    </Card>
  );
};
