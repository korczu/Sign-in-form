import { Box, debounce, Typography } from "@mui/material";
import React, { useState } from "react";
import Chart from "./Chart";
import { chartData } from "../data";
import MovieInput from "./MovieInput";
import { filmsData } from "../data";

function MainContent({ username }) {
  const [value, setValue] = useState(null);
  const [options, setOptions] = useState([]);
  const getOptions = (input) => {
    let timer;
    const deleyedSearch = debounce(
      () => {
        const results = filmsData.filter((film) =>
          value
            ? film.toLowerCase().includes(input.toLowerCase()) && film !== value
            : film.toLowerCase().includes(input.toLowerCase())
        );
        if (input) {
          setOptions(value ? [...results, value] : results);
        } else {
          setOptions([]);
        }
      },
      1000,
      timer
    );
    deleyedSearch();
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography component="h1" variant="h5">
        Welcome {username}!
      </Typography>
      <Chart data={chartData} />
      <Typography component="p" variant="body1">
        value:{value}
      </Typography>
      <MovieInput
        value={value}
        setValue={setValue}
        getOptions={getOptions}
        options={options}
      />
    </Box>
  );
}

export default MainContent;
