import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import headImg from "../assets/bg-head.png";
import Typewriter from "typewriter-effect";
import Navigation from "./Navigation";
import "@fontsource/roboto/500.css";
const Header = () => {
  return (
    <Main>
      <Navigation />
      <Grid container gap={4}>
        <HeadGrid item xs={10}>
          <Stack spacing={2} px={9} py={9}>
            <HeaderText
              variant="h2"
              style={{ fontWeight: "bold", fontFamily: "roboto" }}
            >
              CYBER TECH
            </HeaderText>
            <div style={{ display: "flex" }}>
              <Typography variant="h2" color="white">
                Where Inovation Is{" "}
                <Typewriter
                  options={{
                    strings: ["Conceived", "Built"],
                    autoStart: true,
                    loop: true,
                    color: "white",
                  }}
                  style={{ color: "white" }}
                />
              </Typography>
            </div>
          </Stack>
        </HeadGrid>
      </Grid>
    </Main>
  );
};

export default Header;

const Main = styled.div`
  background-image: url(${headImg});
  background-position: center;
  background-size: cover;
`;

const HeaderText = styled(Typography)`
  color: white;
  &::after {
    border-bottom: 5px solid;
    // border-width: 2px 10px;
    border-radius: 10px;
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #000;
    transition: width 0.3s;
    // border-radius: 20px;
  }
  ,
  &:hover:after {
    display: block;
    width: 50%;
  }
`;

const HeadGrid = styled(Grid)`
  //   box-shadow: #2f3c68 -5px 5px, #2f3c68 -10px 10px, #2f3c68 -15px 15px,
  //     #2f3c68 -20px 20px;
`;
