import { Box, Button } from "@mui/material";
import React from "react";
import FormRow from "./FormRow";

function Form({ setMapping }) {
  const [currentRow, setCurrentRow] = React.useState(0);
  const [meta, setMeta] = React.useState([{}]);
  const [properties, setProperties] = React.useState([{}]);
  const [rows, setRows] = React.useState([
    <FormRow
      key={currentRow}
      setValue={(newValue) => {
        const tmp1 = meta;
        tmp1[currentRow] = newValue._meta;
        setMeta(tmp1);
        const tmp2 = properties;
        tmp2[currentRow] = newValue.properties;
        setProperties(tmp2);

        setMapping({
          mappings: {
            _meta: [...tmp1],
            properties: [...tmp2],
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
          setCurrentRow(currentRow + 1);
          setRows([
            ...rows,
            <FormRow
              key={currentRow + 1}
              setValue={(newValue) => {
                const tmp1 = meta;
                tmp1[currentRow + 1] = newValue._meta;
                setMeta(tmp1);
                const tmp2 = properties;
                tmp2[currentRow + 1] = newValue.properties;
                setProperties(tmp2);

                setMapping({
                  mappings: {
                    _meta: [...tmp1],
                    properties: [...tmp2],
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
