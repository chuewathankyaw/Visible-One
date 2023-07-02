import { useEffect } from "react";
import { AboutTrippro } from "../components/home/aboutTrippro/aboutTri";
import { Banner } from "../components/home/banner/banner";
import { Challenges } from "../components/home/challenges/challenges";
import { Footer } from "../components/home/footer/footer";
import { Header } from "../components/home/header/header";
import { Slider } from "../components/home/slider/slider";
import Fade from "react-reveal/Fade";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />

      <AboutTrippro />
      <Challenges />

      <Slider />
      <Footer />
    </>
  );
};
