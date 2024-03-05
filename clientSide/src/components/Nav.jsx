import {
    Navbar,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
  } from "@nextui-org/react";
  import ThemeToggle from "../components/ThemeToggle";
  import { NavLink } from "react-router-dom";
  import { useState } from "react";
  
  const NavMenus = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Books",
      path: "/books",
    },
    {
      name: "Members",
      path: "/members",
    },
  ];
  
  const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <>
        <Navbar
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          shouldHideOnScroll
          height={"5rem"}
          maxWidth="full"
          className="md:px-[4.6rem] lg:px-[8.6rem]"
        >
          <NavbarContent justify="start">
            <p className="text-xl">Flask Library</p>
          </NavbarContent>
          <NavbarContent
            className="hidden sm:flex gap-[4vw] px-3"
            justify="center"
          >
            {NavMenus.map((menu) => (
              <NavbarItem key={menu.name}>
                <NavLink
                  to={menu.path}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "font-semibold text-md hidden sm:block"
                      : isPending
                      ? "text-md  hover:text-default-500 transition-all duration-800 sm:block hidden text-default-400"
                      : "text-md hover:text-default-400 transition-all duration-800 sm:block hidden text-default-600"
                  }
                >
                  {menu.name}
                </NavLink>
              </NavbarItem>
            ))}
          </NavbarContent>
          <NavbarContent justify="end" className="flex gap-6">
            <NavbarItem>
              <ThemeToggle />
            </NavbarItem>
            <NavbarMenuToggle className="sm:hidden" />
          </NavbarContent>
          <NavbarMenu className="items-end no-scrollbar gap-6 pt-8 pr-20">
            {NavMenus.map((menu) => (
              <NavbarMenuItem key={menu.name}>
                <NavLink
                  to={menu.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "font-semibold text-md sm:hidden"
                      : isPending
                      ? "text-md  hover:text-default-400 transition-all duration-800 sm:hidden text-default-500"
                      : "text-md hover:text-default-400 transition-all duration-800 sm:hidden  text-default-500"
                  }
                >
                  {menu.name}
                </NavLink>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </>
    );
  };
  
  export default Nav;
  