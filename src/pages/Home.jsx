import { Grid } from "@mui/material";
import React from "react";
import Loader from "../components/Loader";
import Navigation from "../components/Navigation";
const Home = () => {
  return (
    <>
      <Navigation>
        <Grid container>
          <Grid items xs={12}>
            Home
          </Grid>
        </Grid>
      </Navigation>
    </>
  );
};

export default Home;
