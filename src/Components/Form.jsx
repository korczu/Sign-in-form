import { Box, Button } from "@mui/material";
import React from "react";
import FormRow from "./FormRow";

function Form({ mapping, setMapping }) {
  const [rowIndex, setRowIndex] = React.useState(0);
  const [rows, setRows] = React.useState([<FormRow key={rowIndex} />]);

  const children = rows.map((row) =>
    React.cloneElement(row, {
      setValue: (newValue) => {
        setMapping({
          mappings: {
            _meta: { ...mapping.mappings._meta, ...newValue._meta },
            properties: {
              ...mapping.mappings.properties,
              ...newValue.properties,
            },
          },
        });
      },
    })
  );
  return (
    <Box
      margin="normal"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box>{children}</Box>
      <Button
        variant="contained"
        margin="normal"
        size="small"
        onClick={() => {
          setRowIndex(rowIndex + 1);
          setRows([...rows, <FormRow key={rowIndex + 1} />]);
        }}
      >
        New Row
      </Button>
    </Box>
  );
}

export default Form;
