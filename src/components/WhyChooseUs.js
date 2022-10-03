import { Grid, Typography } from "@mui/material";
import React from "react";
import { Button, Card } from "react-bootstrap";
import styled from "styled-components";
import { choose } from "../assets/index";

const WhyChooseUs = () => {
  return (
    <Wrapper>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {choose.map((item, index) => (
          <CardGrid
            item
            xs={2}
            sm={4}
            md={4}
            key={index}
            style={{ flexDirection: "column" }}
          >
            <div>{item.image}</div>
            <Typography variant="h4">{item.title}</Typography>
          </CardGrid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default WhyChooseUs;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  height: 1000px;
  width: auto;
`;

const CardGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
