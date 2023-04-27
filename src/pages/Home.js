import React from "react";
import Brand from "../components/Brand";
import Hero from "../components/Hero";
import Type from "../components/Typed";
import ProductList from "../components/ProductList";


export default function Home() {
  return (
    <>
      <Hero />
      <Brand />
      <ProductList />
      <Type />
    </>
  );
}
