import { useTitle } from "../../hooks/useTitle";
import About from "./About";
import Features from "./Features";
import Hero from "./Hero";
import Services from "./Services";


const Home = () => {
  useTitle("Welcome");

  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Features />
    </div>
  );
};

export default Home;
