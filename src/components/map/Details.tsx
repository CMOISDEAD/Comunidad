import {
  Link,
  Card,
  CardBody,
  CardHeader,
  Button,
  Progress,
  Skeleton,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { RxArrowRight } from "react-icons/rx";
import { useAppStore } from "../../store/useAppStore";

export const Details = () => {
  const [value, setValue] = useState(0);
  const { location } = useAppStore();

  useEffect(() => {
    setValue(0);
    const interval = setInterval(() => {
      setValue((v) => v + 10);
    }, 200);
    return () => clearInterval(interval);
  }, [location]);

  return (
    <Card isBlurred className="absolute top-12 left-2 w-52 z-50">
      {location ? (
        <>
          <Progress
            value={value}
            size="sm"
            color="primary"
            aria-label="loading"
          />
          <CardHeader>
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold capitalize">
                {location.title}
              </h2>
              <h4 className="text-xl text-default-500 capitalize">
                {location.sport}
              </h4>
            </div>
          </CardHeader>
          <CardBody>
            <p className="hidden text-sm mb-5 md:block">
              {location.description}
            </p>
            <Button
              fullWidth
              variant="flat"
              color="primary"
              as={Link}
              href={`/sports/${location.sport}`}
              endContent={<RxArrowRight />}
            >
              View More
            </Button>
          </CardBody>
        </>
      ) : (
        <CardBody>
          <Skeleton className="rounded-lg">
            <div className="h-64 rounded-lg bg-default-300"></div>
          </Skeleton>
        </CardBody>
      )}
    </Card>
  );
};
