import { Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import Navigation from "../components/Navigation";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Pricing from "../components/Pricing";
import WhyChooseUs from "../components/WhyChooseUs";
const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["CYBER TECH"],
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 100,
      showCursor: true,
      cursorChar: "",
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <Navigation>
        <Grid container>
          <Grid items xs={12}>
            <Grid container>
              <BackgroundGrid items xs={12}>
                <HeaderText
                  variant="h2"
                  style={{ fontWeight: "bold" }}
                  ref={el}
                >
                  {" "}
                </HeaderText>
                <Typography variant="h2" style={{ fontWeight: "" }}>
                  Where Inovation Is Conceived
                </Typography>
                {/* <Typography variant="h2" style={{ fontWeight: "" }}>
                  Software Development beyond expectations! We strive to
                  mesmerize through
                </Typography> */}
              </BackgroundGrid>
            </Grid>
            <Pricing />
            <WhyChooseUs />
          </Grid>
        </Grid>
      </Navigation>
    </>
  );
};

export default Home;

const BackgroundGrid = styled(Grid)``;

const HeaderText = styled(Typography)`
  color: #2f3c68;
`;
