import { Link, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { RxArrowLeft } from "react-icons/rx";

export const Navigation = () => {
  return (
    <Navbar isBordered shouldHideOnScroll>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/" color="foreground">
            <h1 className="hidden text-2xl font-bold text-gray-300 font-tactic md:block">
              Comunidad Deportiva
            </h1>
            <h1 className="md:hidden text-2xl font-bold text-gray-300 font-tactic">
              ComDep
            </h1>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          <Link
            href="/"
            color="foreground"
            className="flex gap-4 content-center items-center justify-center"
          >
            <RxArrowLeft />
            <h1 className="hidden text-2xl font-bold text-gray-300 font-tactic md:block">
              Comunidad Deportiva
            </h1>
            <h1 className="md:hidden text-2xl font-bold text-gray-300 font-tactic">
              ComDep
            </h1>
          </Link>
        </NavbarBrand>
      </NavbarContent>
    </Navbar>
  );
};
