import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "M4",
    即時: 590,
    Pareta: 800,
    amt: 1400
  },
  {
    name: "M3",
    即時: 868,
    Pareta: 967,
    amt: 1506
  },
  {
    name: "M5",
    即時: 1397,
    Pareta: 1098,
    amt: 989
  },
  {
    name: "M6",
    即時: 1480,
    Pareta: 1200,
    amt: 1228
  },
  {
    name: "M7",
    即時: 1520,
    Pareta: 1108,
    amt: 1100
  },
  {
    name: "M1",
    即時: 1400,
    Pareta: 680,
    amt: 1700
  },
  {
    name: "M2",
    即時: 1400,
    Pareta: 680,
    amt: 1700
  }
];

export default class Example extends PureComponent {
  render() {
    return (
      <ComposedChart
        width={450}
        height={250}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 0,
          left: 0
        }}
      >
        <XAxis dataKey="name" padding={{ left: 20, right: 20 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="Pareta" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="即時" stroke="#ff7300" />
      </ComposedChart>
    );
  }
}
