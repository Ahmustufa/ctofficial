import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import styled from "styled-components";
import Home from "../pages/Home";
const Loader = () => {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setData(<Home />);
      setDone(true);
    }, 300);
  }, []);

  return (
    <>
      {!done ? (
        <Parent style={{ margin: "0px", padding: "0px" }}>
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Parent>
      ) : (
        <Home />
      )}
    </>
  );
};

export default Loader;

const Parent = styled.div`
//   margin: 0px !important;
//   padding: 0px !important;
//   box-sizing: border-box !important;
  background-color: black;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
