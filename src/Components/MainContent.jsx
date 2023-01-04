import { Box, debounce, Typography } from "@mui/material";
import React, { useState } from "react";
import Chart from "./Chart";
import { chartData } from "../data";
import MovieInput from "./MovieInput";
import { filmsData } from "../data";
import Form from "./Form";
import SignIn from "./SignIn";

function MainContent({ currentPage, setUser }) {
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

  if (currentPage === "Autocomplete") {
    return (
      <Box
        margin="normal"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
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

  if (currentPage === "Form") {
    return (
      <Box
        margin="normal"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Form />;
      </Box>
    );
  }

  if (currentPage === "Chart") {
    return (
      <Box
        margin="normal"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Chart data={chartData} />;
      </Box>
    );
  }

  return (
    <Box
      margin="normal"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    ></Box>
  );
}

export default MainContent;
