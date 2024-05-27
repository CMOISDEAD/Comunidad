import {
  Image,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

export const Team = () => {
  return (
    <Popover showArrow backdrop="opaque">
      <PopoverTrigger>
        <Button variant="light" color="primary">
          <h1 className="hidden text-2xl font-bold text-gray-300 font-tactic md:block">
            Comunidad Deportiva
          </h1>
          <h1 className="md:hidden text-2xl font-bold text-gray-300 font-tactic">
            ComDep
          </h1>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-4 content-center justify-center items-center px-6 py-3 max-w-80">
        <p className="text-center text-xs font-mono">
          Proyecto de grado del Programa de Comunicacion Social y Periodismo.
        </p>
        <div className="flex gap-4 content-center items-center justify-center">
          {people.map((person, index) => (
            <div key={index} className="flex flex-col gap-2 max-w-20">
              <Image
                isBlurred
                src={person.img}
                alt={`${person.name} profile picutre`}
                className="w-20 h-20"
              />
              <p className="text-xs font-mono text-center">{person.name}</p>
            </div>
          ))}
        </div>
        <a href="https://uniquindio.edu.co/" target="_blank">
          <Image
            isBlurred
            src="/images/comunicacion.png"
            alt="Logo de la Universidad del Quindio, Programa CSP"
          />
        </a>
      </PopoverContent>
    </Popover>
  );
};

const people = [
  {
    name: "Jeison Cano",
    img: "/images/jeison.jpg",
  },
  {
    name: "Natalia",
    img: "/images/natalia.jpg",
  },
  {
    name: "Jeison Cano",
    img: "/images/juan.jpg",
  },
];
