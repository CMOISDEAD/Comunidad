import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { RxBox } from "react-icons/rx";

export const Navigation = () => {
  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/" color="foreground" className="gap-2">
            <RxBox />
            <p className="font-bold text-inerit capitalize">
              Comunidad Deportiva
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          <Link href="/" color="foreground" className="gap-2">
            <RxBox />
            <p className="font-bold text-inerit">Comunidad Deportiva</p>
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link href="/" color="foreground">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/" color="foreground">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/" color="foreground">
            Contact
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/" color="foreground">
            About
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
