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
import { RxArrowRight, RxPause, RxPlay } from "react-icons/rx";
import { useAppStore } from "../../store/useAppStore";

export const Details = () => {
  const [value, setValue] = useState(0);
  const { location, player } = useAppStore();

  useEffect(() => {
    setValue(0);
    const interval = setInterval(() => {
      setValue((v) => v + 10);
    }, 200);
    return () => clearInterval(interval);
  }, [location]);

  const toggle = () => {
    if (player.paused) {
      player.play();
    } else {
      player.pause();
    }
  };

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
            <div className="flex flex-col w-full">
              <div className="flex gap-8 justify-between content-center items-center w-full">
                <h2 className="text-2xl font-bold capitalize w-1/2 flex-grow">
                  {location.sport}
                </h2>
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  color="primary"
                  onPress={toggle}
                >
                  {player.paused ? <RxPlay /> : <RxPause />}
                </Button>
              </div>
              <h4 className="text-lg text-default-500 capitalize">
                {location.city}
              </h4>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-sm mb-5 line-clamp-2 md:line-clamp-5 lg:md-line-6">
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
              Ver mas
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
