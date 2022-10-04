import {
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import { choose } from "../assets/index";
import { background } from "../assets/index";
import bgImg from "../assets/bg-demo.png";
import ch1 from "../assets/choose_1.png";
import { height } from "@mui/system";
const WhyChooseUs = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} my={4}>
          <Stack spacing={3}>
            <Typography variant="h3" textAlign="center">
              Why Choose Us
            </Typography>
            <Typography variant="h4" textAlign="center">
              We love what we do and we're great at it!
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      <Wrapper>
        <Grid
          container
          gap={{ lg: 5 }}
          spacing={{ xs: 2, md: 3, lg: 2 }}
          columns={{ xs: 3, sm: 8, md: 12 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {choose.map((item, index) => (
            <CardGrid
              item
              xs={3}
              // sm={4}
              // md={4}
              key={index}
              style={{ flexDirection: "column" }}
            >
              <div style={{ height: "300px", marginBottom: "1rem" }}>
                {item.image}
              </div>
              <div
                style={{
                  height: "140px",
                  display: "flex",
                  flexDirection: "column",
                  padding: "5px",
                }}
              >
                <Typography variant="h4" sx={{ paddingBottom: "10px" }}>
                  {item.title}
                </Typography>
                <Typography variant="subtitle1">{item.description}</Typography>
              </div>
            </CardGrid>
          ))}
        </Grid>
        {/* {choose.map((item, index) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image={ch1} key={index} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))} */}
      </Wrapper>
    </>
  );
};

export default WhyChooseUs;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bgImg});
  height: 1000px;
  width: auto;
`;

const CardGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 20px;
  transition: transform .2s;
  &:hover,
  &:focus {
    transform: scale(1.1);
`;
