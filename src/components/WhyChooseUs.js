import { Grid } from "@mui/material";
import React from "react";
const Array = [
  {
    title: "Online Store",
    image: "",
  },
];
const WhyChooseUs = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {Array.map((item, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <img src={item.image} />
        </Grid>
      ))}
    </Grid>
  );
};

export default WhyChooseUs;
