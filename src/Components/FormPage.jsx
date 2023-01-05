import React from "react";
import { Typography } from "@mui/material";
import Form from "./Form";

function FormPage() {
  const defaultValue = {
    mappings: {
      _meta: {},
      properties: {},
    },
  };
  const [mapping, setMapping] = React.useState(defaultValue);

  return (
    <>
      <Form mapping={mapping} setMapping={setMapping}></Form>
      <Typography component="pre" variant="body1">
        {JSON.stringify(mapping, null, "\t")}
      </Typography>
    </>
  );
}

export default FormPage;
