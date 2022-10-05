import { Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import Navigation from "../components/Navigation";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";

import WhyChooseUs from "../components/WhyChooseUs";
import AOS from "aos";
// import "@fontsource/roboto/500.css";
import "aos/dist/aos.css";
import { Stack } from "@mui/system";
import Services from "./Services";
const Home = () => {
  AOS.init();
  // new Typewriter("#typewriter", {
  //   strings: ["Conceived", "World"],
  //   autoStart: true,
  // });
  return (
    <>
      <Navigation>
        <Grid
          container
          style={{ height: "100vh" }}
          columns={{ md: 9, lg: 10, sm: 6, xs: 3, xl: 12 }}
        >
          <Grid items xs={12}>
            <Grid container gap={4}>
              <HeadGrid item xs={9}>
                <Stack spacing={2} px={9} py={9}>
                  <HeaderText variant="h2" style={{ fontWeight: "bold" }}>
                    CYBER TECH
                  </HeaderText>
                  <div style={{ display: "flex" }}>
                    <Typography variant="h2">
                      Where Inovation Is{" "}
                      <Typewriter
                        options={{
                          strings: ["Conceived", "Built"],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </Typography>
                  </div>
                </Stack>
              </HeadGrid>
            </Grid>

            {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="https://www.flydigital.co.uk/wp-content/uploads/website-design-sheffield-projects-2.png" />
            </div> */}
            <Services />
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

const HeadGrid = styled(Grid)`
  box-shadow: #2f3c68 -5px 5px, #2f3c68 -10px 10px, #2f3c68 -15px 15px,
    #2f3c68 -20px 20px;
`;
