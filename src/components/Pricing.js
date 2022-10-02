import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const Pricing = () => {
  return (
    <>
      <MyGrid container gap={2}>
        <Grid item xs={1}></Grid>
        <CardGrid
          item
          xs={3}
          sx={{ backgroundColor: "#eeeeee", flexDirection: "column" }}
        >
          <Head variant="h3">Free</Head>
          <Typography>For Small businesses</Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            $ 30
          </Typography>

          <Typography
            sx={{
              display: "flex",

              alignItems: "center",
            }}
          >
            {" "}
            <CheckCircleIcon /> 1 Users
          </Typography>

          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <CheckCircleIcon />
            10 Downloads per day
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <CheckCircleIcon />1 Users
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <CheckCircleIcon />1 Users
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              px: "50px",
              backgroundColor: "#2F3C68",
            }}
          >
            Subscribe
          </Button>
        </CardGrid>
        <CardGrid
          item
          xs={3}
          sx={{
            backgroundColor: "#2F3C68",
            flexDirection: "column",
            color: "white",
          }}
        >
          <Head variant="h3">Gold</Head>
          <Typography>For medium businesses</Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            $ 100
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <CheckCircleIcon />1 Users
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <CheckCircleIcon />1 Users
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <CheckCircleIcon />1 Users
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <CheckCircleIcon />1 Users
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              backgroundColor: "white",
              color: "black",
              px: "50px",
            }}
          >
            Subscribe
          </Button>
        </CardGrid>
        <CardGrid
          item
          xs={3}
          sx={{ backgroundColor: "#eeeeee", flexDirection: "column" }}
        >
          <Head variant="h3">Diamond</Head>
          <Typography>For Enterprises</Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            $ 200
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <CheckCircleIcon />1 Users
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <CheckCircleIcon />1 Users
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <CheckCircleIcon />1 Users
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <CheckCircleIcon />1 Users
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              px: "50px",
              backgroundColor: "#2F3C68",
            }}
          >
            Subscribe
          </Button>
        </CardGrid>
        <Grid item xs={1}></Grid>
      </MyGrid>
    </>
  );
};

export default Pricing;

const MyGrid = styled(Grid)``;

const CardGrid = styled(Grid)`
  height: 500px;
  width: 200px;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Head = styled(Typography)``;
