import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import styled from "styled-components";
import Pricing from "../components/Pricing";
import WhyChooseUs from "../components/WhyChooseUs";
const Services = () => {
  return (
    <Wrap>
      <Stack my={12}>
        <Title variant="h2" textAlign="center" style={{ fontWeight: "bold" }}>
          Services
        </Title>
      </Stack>
      <div
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <Pricing />
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <WhyChooseUs />
      </div>
    </Wrap>
  );
};

export default Services;

const Title = styled(Typography)`
  display: inline-block;
  color: #000;
  text-decoration: none;
  &::after {
    border-bottom: 2px solid;
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
    width: 100%;
  }
`;

const Wrap = styled.div`
  padding-bottom: 2rem;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
`;
