import Loader from "../components/Loader";
import Navigation from "../components/Navigation";

import { useEffect } from "react";

import WhyChooseUs from "../components/WhyChooseUs";
import AOS from "aos";
import "@fontsource/roboto/500.css";
import "aos/dist/aos.css";
import { Stack } from "@mui/system";
import Services from "./Services";
import { Grid } from "@mui/material";
import styled from "styled-components";
import Header from "../components/Header";
const Home = () => {
  AOS.init();
  // new Typewriter("#typewriter", {
  //   strings: ["Conceived", "World"],
  //   autoStart: true,
  // });
  return (
    <>
      {/* <Navigation> */}
      <Grid
        container
        style={{ height: "100vh" }}
        columns={{ md: 9, lg: 10, sm: 6, xs: 3, xl: 12 }}
      >
        <Grid items xs={12}>
          <Header />
          <Services />
        </Grid>
      </Grid>
      {/* </Navigation> */}
    </>
  );
};

export default Home;

const BackgroundGrid = styled(Grid)``;
