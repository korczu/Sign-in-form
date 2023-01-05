import { Box, Button } from "@mui/material";
import React from "react";
import FormRow from "./FormRow";

function Form({ setMapping }) {
  const [rowIndex, setRowIndex] = React.useState(0);
  const [meta, setMeta] = React.useState([{}]);
  const [properties, setProperties] = React.useState([{}]);
  const [rows, setRows] = React.useState([
    <FormRow
      key={rowIndex}
      setValue={(newValue) => {
        const tmpMeta = meta;
        tmpMeta[rowIndex] = newValue._meta;
        setMeta(tmpMeta);
        const tmpProperties = properties;
        tmpProperties[rowIndex] = newValue.properties;
        setProperties(tmpProperties);

        setMapping({
          mappings: {
            _meta: [...tmpMeta],
            properties: [...tmpProperties],
          },
        });
      }}
    />,
  ]);

  return (
    <Box
      margin="normal"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box>{[...rows]}</Box>
      <Button
        variant="contained"
        margin="normal"
        size="small"
        onClick={() => {
          setRowIndex(rowIndex + 1);
          setRows([
            ...rows,
            <FormRow
              key={rowIndex + 1}
              setValue={(newValue) => {
                const tmpMeta = meta;
                tmpMeta[rowIndex + 1] = newValue._meta;
                setMeta(tmpMeta);
                const tmpProperties = properties;
                tmpProperties[rowIndex + 1] = newValue.properties;
                setProperties(tmpProperties);

                setMapping({
                  mappings: {
                    _meta: [...tmpMeta],
                    properties: [...tmpProperties],
                  },
                });
              }}
            />,
          ]);
        }}
      >
        New Row
      </Button>
    </Box>
  );
}

export default Form;
