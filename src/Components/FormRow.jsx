import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
function FormRow({ setValue }) {
  const [oldKey, setOldKey] = React.useState("");
  const [key, setKey] = React.useState("");
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [unit, setUnit] = React.useState(false);
  const [required, setRequired] = React.useState(false);
  const [nullValue, setNullValue] = React.useState("");

  function handleClick() {
    const _meta = {
      [key]: {
        name,
        required,
        unit,
      },
    };
    const properties = {
      [key]: {
        type,
        nullValue,
      },
    };
    setOldKey(key);
    setValue(
      {
        _meta,
        properties,
      },
      oldKey
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <TextField
        margin="normal"
        id="columnName"
        size="small"
        label="Column Name"
        name="columnName"
        value={name}
        variant="standard"
        onChange={(e) => {
          const inputValue = e.target.value;
          const inputValueModified = inputValue
            .toLowerCase()
            .split(" ")
            .join("_");
          setName(inputValue);
          setKey(inputValueModified);
        }}
      />
      <FormControl
        variant="standard"
        size="small"
        sx={{ minWidth: 120 }}
        margin="normal"
      >
        <InputLabel id="typeLabel">Type</InputLabel>
        <Select
          labelId="typeLabel"
          id="type"
          value={type}
          label="Type"
          onChange={(e) => {
            const inputValue = e.target.value;
            setType(inputValue);
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="text">Text</MenuItem>
          <MenuItem value="boolean">Boolean</MenuItem>
          <MenuItem value="keyword">Keyword</MenuItem>
        </Select>
      </FormControl>
      <TextField
        size="small"
        margin="normal"
        id="nullValue"
        value={nullValue}
        label="Null value"
        name="nullValue"
        variant="standard"
        onChange={(e) => {
          const inputValue = e.target.value;
          setNullValue(inputValue);
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            value={required}
            onChange={() => {
              setRequired(!required);
            }}
          />
        }
        label="Required"
      />
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            value={unit}
            onChange={() => {
              setUnit(!unit);
            }}
          />
        }
        label="Unit"
      />
      <Button
        variant="outlined"
        margin="normal"
        size="small"
        onClick={handleClick}
      >
        Save
      </Button>
    </Box>
  );
}

export default FormRow;
