import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function Form({ value }) {
  const defaultValue = {
    mappings: {
      _meta: {},
      properties: {},
    },
  };
  const [mapping, setMapping] = React.useState(value || defaultValue);
  const [id, setID] = React.useState("");
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [unit, setUnit] = React.useState(false);
  const [required, setRequired] = React.useState(false);
  const [nullValue, setNullValue] = React.useState("");

  function handleClick() {
    const meta = {
      ...mapping.mappings._meta,
      [id]: {
        name,
        required,
        unit,
      },
    };
    const properties = {
      ...mapping.mappings.properties,
      [id]: {
        type,
        nullValue,
      },
    };
    setMapping({
      ...mapping,
      mappings: {
        _meta: { ...meta },
        properties: { ...properties },
      },
    });
  }
  return (
    <Box>
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
            setID(inputValueModified);
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
          variant="contained"
          margin="normal"
          size="small"
          onClick={handleClick}
        >
          Add
        </Button>
      </Box>
      <Typography component="pre" variant="body1">
        {JSON.stringify(mapping, null, "\t")}
      </Typography>
    </Box>
  );
}

export default Form;
