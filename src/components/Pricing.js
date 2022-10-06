import { Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import styled from "styled-components";
import "@fontsource/roboto/500.css";
import CheckIcon from "@mui/icons-material/Check";
function App() {
  const data = [
    {
      title: "Starter",
      subtitle: "Best option for personal use  & for your next project.",
      price: 29,
      items: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
    },
    {
      title: "Company",
      subtitle: "Relevant for multiple users, extended & premium support.",
      price: 99,
      items: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 10 developers",
        "Premium support: 24 months",
        "Free updates: 24 months",
      ],
    },
    {
      title: "Enterprise",
      subtitle: "Best for large scale uses and extended redistribution rights.",
      price: 199,
      items: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 20+ developers",
        "Premium support: 36 months",
        "Free updates: 36 months",
      ],
    },
  ];
  return (
    <ParentGrid container mb={10} pb={10}>
      <Grid item xs={12}>
        <Stack spacing={3} my={7}>
          <Typography variant="h2" textAlign="center">
            Pricing Cards
          </Typography>
          <Typography variant="h5" textAlign="center">
            Best option for personal use & for your next project.
          </Typography>
        </Stack>
        <Row
          container
          gap={{ lg: 5, md: 3, sm: 2 }}
          columns={{ md: 7, lg: 10, sm: 6, xs: 3, xl: 12 }}
        >
          {data.map((val, index) => {
            return (
              <Cards item xs={2.8} px={7}>
                <Stack spacing={2} mt={3} mb={1}>
                  <Typography variant="h4" textAlign="center">
                    {val.title}
                  </Typography>
                  <Typography variant="h6" textAlign="center">
                    {val.subtitle}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      // alignItems: "end",
                    }}
                  >
                    <Typography variant="h3" px={2}>
                      ${val.price}
                    </Typography>
                    <Typography py={3}>/month</Typography>
                  </div>
                </Stack>
                <Stack spacing={2} mb={3}>
                  {val.items.map((item) => {
                    return (
                      <Service>
                        <CheckIcon style={{ color: "#5FB539" }} />
                        <Typography px={2}>{item}</Typography>
                      </Service>
                    );
                  })}
                </Stack>
                <Stack mb={3}>
                  <Button variant="contained" styled={{ borderRadius: "50px" }}>
                    Get started
                  </Button>
                </Stack>
              </Cards>
            );
          })}
        </Row>
      </Grid>
    </ParentGrid>
  );
}
export default App;
const Cards = styled(Grid)`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: .5s ease;
  &:hover {
    box-shadow: 0 15px 50px rgba(0, 0, 0, .3);
    transform-origin: right top;
    transform: perspective(1000px) rotateX(10deg);
    rotateY(-10deg) rotateZ(2deg);
    box-shadow: 0 15px 50px rgba(0, 0, 0, .3);
    transform-origin: center top;
    transform: perspective(1000px) rotateX(10deg);
    box-shadow: -15px 15px 50px rgba(0, 0, 0, .3);
    transform-origin: left top;
    transform: perspective(1000px) rotateX(10deg) rotateY(10deg) rotateZ(-2deg);
    box-shadow: 15px 5px 50px rgba(0, 0, 0, .3);
    transform-origin: left center;
    transform: perspective(1000px) rotateY(-10deg);
    box-shadow: -15px 5px 50px rgba(0, 0, 0, .3);
    transform-origin: right center;
    transform: perspective(1000px) rotateY(10deg);
  // box-shadow: 15px -15px 50px rgba(0, 0, 0, .3);
  // transform-origin: right bottom;
  // transform: perspective(1000px) rotateX(-10deg)
  // rotateY(-10deg) rotateZ(-2deg);
  // box-shadow: 0 -15px 50px rgba(0, 0, 0, .3);
  // transform-origin: center bottom;
  // transform: perspective(1000px) rotateX(-10deg);
  // box-shadow: -15px -15px 50px rgba(0, 0, 0, .3);
  // transform-origin: left bottom;
  // transform: perspective(1000px) rotateX(-10deg) rotateY(10deg) rotateZ(2deg);
  }
`;
const Row = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Service = styled.div`
  display: flex;
  align-items: center;
`;

const ParentGrid = styled(Grid)`
  // border: 1px solid;
  // border-radius: 10px;
  // box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
`;
