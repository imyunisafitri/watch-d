import React from "react";
import Brand from "../components/Brand";
import Hero from "../components/Hero";
import Watch from "./Watch";
import Type from "../components/Typed";

export default function Home() {
  return (
    <>
      <Hero />
      <Brand />
      <Watch />
      <Type />
    </>
  );
}
