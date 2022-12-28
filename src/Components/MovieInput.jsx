import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";

function MovieInput({ value, setValue, getOptions, options }) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const isLoading = options?.length === 0 && open;
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
        onChange={(event, newValue) => setValue(newValue)}
        onInputChange={(event, newValue) => {
          setInputValue(newValue);
          getOptions(newValue);
        }}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </>
  );
}

export default MovieInput;
