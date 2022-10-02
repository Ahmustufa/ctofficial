import { Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import Navigation from "../components/Navigation";
const Home = () => {
  return (
    <>
      <Navigation>
        <Grid container>
          <Grid items xs={12}>
            <Grid container>
              <BackgroundGrid items xs={12}>
                <HeaderText variant="h2" style={{ fontWeight: "bold" }}>
                  CYBER TECH
                </HeaderText>
                <Typography variant="h2" style={{ fontWeight: "" }}>
                  Where Inovation Is Conceived
                </Typography>
              </BackgroundGrid>
            </Grid>
          </Grid>
        </Grid>
      </Navigation>
    </>
  );
};

export default Home;

const BackgroundGrid = styled(Grid)`
  // background-image: url("https://syspree.com/wp-content/uploads/2020/07/Web-Design-company-in-Mumbai-_-The-Difference-Between-Web-Development-and-Web-Designing-_-SySpree-823x411.jpg");
  // height: 200px;
`;

const HeaderText = styled(Typography)`
  color: #1f6103;
`;
