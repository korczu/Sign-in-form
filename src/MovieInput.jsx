import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { filmsData } from "./data";
import { useEffect } from "react";

function debounce(fnc, ms, timer) {
  clearTimeout(timer);
  timer = setTimeout(fnc, ms);
}

function MovieInput() {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const isLoading = open && options.length === 0;

  const filmsFilter = React.useCallback(() => {
    const results = filmsData.filter((film) =>
      film.toLowerCase().includes(inputValue.toLowerCase())
    );

    setOptions([...results]);
  }, [inputValue]);

  useEffect(() => {
    if (inputValue === "") {
      setOptions([]);
      return;
    }
    let timer;
    debounce(filmsFilter, 500, timer);
  }, [inputValue, filmsFilter]);

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
        onChange={(event, newValue) => setValue(newValue)}
        inputValue={inputValue}
        onInputChange={(event, newValue) => setInputValue(newValue)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </>
  );
}

export default MovieInput;
