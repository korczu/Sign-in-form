import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { filmsData } from "./data";
import { useEffect } from "react";

function debounce(fnc, ms, timer) {
  if (typeof fnc !== "function")
    throw new Error(`fnc is ${typeof fnc}, it must be function!`);
  clearTimeout(timer);
  timer = setTimeout(fnc, ms);
}

function MovieInput() {
  const [options, setOptions] = useState(filmsData);
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const isLoading = open && options.length === 0;
  console.log(options, inputValue, value);

  const filmsFilter = React.useCallback(() => {
    const results = filmsData.filter((film) =>
      value
        ? film.toLowerCase().includes(inputValue.toLowerCase()) &&
          film !== value
        : film.toLowerCase().includes(inputValue.toLowerCase())
    );
    setOptions(value ? [...results, value] : results);
  }, [inputValue, value]);

  useEffect(() => {
    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return;
    }
    let timer;
    debounce(filmsFilter, 500, timer);
  }, [inputValue, filmsFilter, value]);

  return (
    <>
      <Autocomplete
        id="movie-autocomplete"
        open={open}
        loading={isLoading}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        options={options}
        value={value}
        inputValue={inputValue}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onInputChange={(event, newValue) => {
          setInputValue(newValue);
        }}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </>
  );
}

export default MovieInput;
