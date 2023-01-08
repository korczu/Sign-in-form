import { Box, Button } from "@mui/material";
import React from "react";
import FormRow from "./FormRow";

function Form({ mapping, setMapping }) {
  const [rowIndex, setRowIndex] = React.useState(0);
  const [rows, setRows] = React.useState([<FormRow key={rowIndex} />]);

  const children = rows.map((row) =>
    React.cloneElement(row, {
      setValue: (newValue, oldKey) => {
        if (oldKey !== "" && oldKey !== Object.keys(newValue)) {
          return setMapping((current) => {
            // Delete old entity and create new one if key value is overwritten
            const tmpMeta = current.mappings._meta;
            const tmpProperties = current.mappings.properties;
            delete tmpMeta[oldKey];
            delete tmpProperties[oldKey];
            return {
              mappings: {
                _meta: { ...tmpMeta, ...newValue._meta },
                properties: {
                  ...tmpProperties,
                  ...newValue.properties,
                },
              },
            };
          });
        }
        // Create new entity
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
