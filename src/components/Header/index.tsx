import Link from "next/link";
import { Navbar } from "../Navbar";
import { HeroSection } from "../HeroSection";

export const Header = () => {
  return (
    <>
      <header className=" bg-header">
        <Navbar />
        <HeroSection />
      </header>
    </>
  );
};
