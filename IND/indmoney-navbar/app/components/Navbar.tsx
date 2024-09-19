import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Invest",
    "Features",
    "Market",
    "Pricing",
    "Disclosure"
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* INDmoney Logo */}
          <Link href="/">
            <Image
              src="/assets/indmoney.png"
              alt="INDmoney Logo"
              width={120}
              height={40}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Menu Items */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link href="#" className="text-lg font-semibold">{item}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Sign Up and Login Buttons */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="#" className="text-primary">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button color="primary" as={Link} href="#">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link href="#" className="w-full text-lg font-semibold">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
