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

function Chart({ data }) {
  return (
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
  );
}

export default Chart;
