import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Stack } from "@mui/system";
const Pricing = () => {
  return (
    <>
      <MyGrid container gap={2}>
        <CardGrid
          item
          xs={3}
          sx={{ backgroundColor: "#eeeeee", flexDirection: "column" }}
        >
          <Stack sx={{ alignSelf: "start" }} px={9}>
            <Head variant="h4">Simple</Head>
            <Typography>For Small Businesses</Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              $ 30
            </Typography>
          </Stack>
          <Stack sx={{ alignSelf: "start" }} px={9} spacing={1}>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />1 Users
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              10 Downloads per day
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              Daily content updates
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />1 Users
            </Typography>
          </Stack>

          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              backgroundColor: "#2F3C68",
            }}
            size="large"
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
          <Stack sx={{ alignSelf: "start" }} px={9}>
            <Head variant="h4">Premium</Head>
            <Typography>For Medium Businesses</Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              $ 30
            </Typography>
          </Stack>
          <Stack sx={{ alignSelf: "start" }} px={9} spacing={1}>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />1 Users
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              10 Downloads per day
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              Daily content updates
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />1 Users
            </Typography>
          </Stack>

          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              backgroundColor: "#eeeeee",
              color: "#2F3C68",
            }}
            size="large"
          >
            Subscribe
          </Button>
        </CardGrid>
        <CardGrid
          item
          xs={3}
          sx={{ backgroundColor: "#eeeeee", flexDirection: "column" }}
        >
          <Stack sx={{ alignSelf: "start" }} px={9}>
            <Head variant="h4">Deluxe</Head>
            <Typography>For Enterprise Level Businesses</Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              $ 30
            </Typography>
          </Stack>
          <Stack sx={{ alignSelf: "start" }} px={9} spacing={1}>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />1 Users
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              10 Downloads per day
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              Daily content updates
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />1 Users
            </Typography>
          </Stack>

          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              backgroundColor: "#2F3C68",
            }}
            size="large"
          >
            Subscribe
          </Button>
        </CardGrid>

        {/* <CardGrid
          item
          xs={3}
          sx={{
            backgroundColor: "#2F3C68",
            flexDirection: "column",
            color: "white",
          }}
        >
          <Head variant="h3">Premium</Head>
          <Typography>For Medium Businesses</Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            $ 100
          </Typography>
          <Stack>
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
          </Stack>
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
          <Head variant="h3">Deluxe</Head>
          <Typography>For Enterprise Level</Typography>
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
        </CardGrid> */}
      </MyGrid>
    </>
  );
};

export default Pricing;

const MyGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardGrid = styled(Grid)`
  height: 500px;
  width: 150px;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Head = styled(Typography)``;
