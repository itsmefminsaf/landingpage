import { Suspense } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

const page = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Nav />
      <Hero />
    </Suspense>
  );
};
export default page;
