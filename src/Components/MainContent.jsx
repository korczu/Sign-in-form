import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Chart from "./Chart";
import { chartData } from "../data";
import MovieInput from "./MovieInput";

function MainContent(props) {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");

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
      <Typography component="p" variant="body1">
        value:{value}
      </Typography>
      <Typography component="p" variant="body1">
        inputValue:{inputValue}
      </Typography>
      <MovieInput
        value={value}
        setValue={setValue}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </Box>
  );
}

export default MainContent;
