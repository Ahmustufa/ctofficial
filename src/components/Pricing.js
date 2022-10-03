import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Stack } from "@mui/system";
const Pricing = () => {
  return (
    <>
      <Grid container>
        <Grid items xs={12}>
          <Stack spacing={2} sx={{ my: "2rem" }}>
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Pricing
            </Typography>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Designed for business teams like yours
            </Typography>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Here at Cyber Tech we focus on markets where technology,
              innovation, and capital <br /> can unlock long-term value and
              drive economic growth.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <MyGrid
        container
        gap={{ lg: 2, md: 2, sm: 2 }}
        columns={{ xs: 2, sm: 4, md: 7, lg: 15 }}
      >
        <Grid></Grid>
        <CardGrid
          item
          xs={2}
          sx={{ backgroundColor: "#eeeeee", flexDirection: "column" }}
          sm={3}
          md={3}
          lg={4}
        >
          <Stack sx={{ alignSelf: "start" }} px={9} spacing={1}>
            <Head variant="h4" sx={{ fontWeight: "bold" }}>
              Simple
            </Head>
            <Typography>For Small Businesses</Typography>
            <Typography sx={{ display: "flex", alignItems: "end" }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", paddingRight: "8px" }}
              >
                $30{" "}
              </Typography>
              /month
            </Typography>
          </Stack>
          <Stack sx={{ alignSelf: "start" }} px={9} spacing={2}>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              Individual configuration
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              No setup, or hidden fees
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              Team size: 1 developer
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              Premium support: 6 months
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              Free updates: 6 months
            </Typography>
          </Stack>

          <Button
            variant="contained"
            sx={{
              borderRadius: "10px",
              backgroundColor: "#2F3C68",
              px: "80px",
            }}
          >
            Subscribe
          </Button>
        </CardGrid>
        <CardGrid
          item
          xs={2}
          sx={{
            backgroundColor: "#2F3C68",
            flexDirection: "column",
            color: "white",
          }}
          sm={3}
          md={3}
          lg={4}
        >
          <Stack sx={{ alignSelf: "start" }} px={9} spacing={1}>
            <Head variant="h4" sx={{ fontWeight: "bold" }}>
              Premium
            </Head>
            <Typography>For Medium Businesses</Typography>
            <Typography sx={{ display: "flex", alignItems: "end" }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", paddingRight: "8px" }}
              >
                $100{" "}
              </Typography>
              /month
            </Typography>
          </Stack>
          <Stack sx={{ alignSelf: "start" }} px={9} spacing={2}>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              Individual configuration
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              No setup, or hidden fees
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              Team size: 10 developers
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              Premium support: 24 months
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              Free updates: 24 months
            </Typography>
          </Stack>

          <Button
            variant="contained"
            sx={{
              borderRadius: "10px",
              backgroundColor: "#eeeeee",
              color: "#2F3C68",
              px: "80px",
            }}
          >
            Subscribe
          </Button>
        </CardGrid>
        <CardGrid
          item
          xs={2}
          sx={{ backgroundColor: "#eeeeee", flexDirection: "column" }}
          sm={3}
          md={3}
          lg={4}
        >
          <Stack sx={{ alignSelf: "start" }} px={9} spacing={1}>
            <Head variant="h4" sx={{ fontWeight: "bold" }}>
              Deluxe
            </Head>
            <Typography>For Enterprise Level Businesses</Typography>
            <Typography sx={{ display: "flex", alignItems: "end" }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", paddingRight: "8px" }}
              >
                $200{" "}
              </Typography>
              /month
            </Typography>
          </Stack>
          <Stack sx={{ alignSelf: "start" }} px={9} spacing={2}>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              Individual configuration
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              No setup, or hidden fees
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              Team size: 100+ developers
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              Premium support: 36 months
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon />
              Free updates: 36 months
            </Typography>
          </Stack>

          <Button
            variant="contained"
            sx={{
              borderRadius: "10px",
              backgroundColor: "#2F3C68",
              px: "80px",
            }}
          >
            Subscribe
          </Button>
        </CardGrid>
        <Grid></Grid>
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
  height: 35rem;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;
`;

const Head = styled(Typography)``;
