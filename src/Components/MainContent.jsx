import { Box, Typography } from "@mui/material";
import React from "react";
import Chart from "./Chart";
import { chartData } from "../data";
import MovieInput from "./MovieInput";

function MainContent(props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography component="h1" variant="h5">
        Welcome {props.login}!
      </Typography>
      <Chart data={chartData} />
      <MovieInput />
    </Box>
  );
}

export default MainContent;
