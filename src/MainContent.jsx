import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Rechart from "./Rechart";

const chartData = [
  { name: "A", uv: 400, pv: 2400, amt: 2200 },
  { name: "B", uv: 500, pv: 1900, amt: 1700 },
  { name: "C", uv: 530, pv: 2470, amt: 2320 },
  { name: "D", uv: 560, pv: 2180, amt: 1580 },
  { name: "E", uv: 380, pv: 2800, amt: 1300 },
  { name: "F", uv: 220, pv: 2340, amt: 2040 },
  { name: "G", uv: 190, pv: 1955, amt: 2355 },
  { name: "H", uv: 515, pv: 2620, amt: 2020 },
  { name: "I", uv: 370, pv: 980, amt: 980 },
  { name: "J", uv: 220, pv: 1800, amt: 1800 },
];

const filmsData = [
  "The Godfather",
  "Pulp Fiction",
  "Taxidermia ",
  "Naked Lunch",
  "There Will Be Blood",
  "Trainspotting ",
  "Delicatessen ",
  "Requiem for a Dream",
  "A Clockwork Orange",
];

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function MainContent(props) {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let active = true;

    if (inputValue === "") {
      setOptions([]);
      return;
    }
    (async () => {
      await sleep(800);

      if (active) {
        const results = filmsData.filter((film) =>
          film.toLowerCase().includes(inputValue.toLowerCase())
        );
        setOptions([...results]);
      }
    })();
    return () => {
      active = false;
      setOptions([]);
    };
  }, [inputValue]);

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
      <Rechart data={chartData} />
      <Autocomplete
        id="movie-autocomplete"
        options={options}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        inputValue={inputValue}
        onInputChange={(event, newValue) => setInputValue(newValue)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </Box>
  );
}

export default MainContent;
