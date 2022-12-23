import { Box, Typography } from "@mui/material";
import React from "react";
import {
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
  ComposedChart,
  Bar,
  Area,
  Legend,
} from "recharts";
const data = [
  { name: "A", uv: 400, pv: 2400, amt: 2200 },
  { name: "B", uv: 500, pv: 1900, amt: 1700 },
  { name: "C", uv: 530, pv: 2470, amt: 2320 },
  { name: "D", uv: 560, pv: 2180, amt: 1580 },
  { name: "E", uv: 380, pv: 2800, amt: 1300 },
  { name: "F", uv: 220, pv: 2340, amt: 2040 },
  { name: "G", uv: 190, pv: 1955, amt: 2355 },
  { name: "H", uv: 515, pv: 2620, amt: 2020 },
  { name: "I", uv: 370, pv: 980, amt: 980 },
  { name: "J", uv: 220, pv: 1800, amt: 1800 },
];

function MainContent(props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography component="h1" variant="h5">
        Welcome {props.login}!
      </Typography>
      <ResponsiveContainer height={300} width="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 0, bottom: 20, left: 0 }}
        >
          <Bar dataKey="uv" barSize={20} fill="#0a0afa" />
          <Area type="monotone" dataKey="pv" fill="#cacaca" stroke="#0084d8" />
          <Line type="monotone" dataKey="amt" stroke="#0ffa00" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <ReferenceLine x="I" stroke="red" label="Min pv" />
          <Legend verticalAlign="top" height={35} />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default MainContent;
