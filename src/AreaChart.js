import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "10/21",
    M1: 4000,
    M2: 2400,
    M3: 2400,
    M4: 3200,
    M5: 1900,
    M6: 3300,
    M7: 2280
  },
  {
    name: "10/20",
    M1: 3000,
    M2: 1398,
    M3: 2210,
    M4: 1200,
    M5: 4100,
    M6: 5300,
    M7: 2810
  },
  {
    name: "10/19",
    M1: 2000,
    M2: 9800,
    M3: 2290,
    M4: 3230,
    M5: 1100,
    M6: 6300,
    M7: 4880
  },
  {
    name: "10/18",
    M1: 2780,
    M2: 3908,
    M3: 2000,
    M4: 1200,
    M5: 3100,
    M6: 2330,
    M7: 2180
  },
  {
    name: "10/17",
    M1: 1890,
    M2: 4800,
    M3: 2181,
    M4: 2300,
    M5: 3300,
    M6: 1800,
    M7: 1080
  },
  {
    name: "10/16",
    M1: 2390,
    M2: 3800,
    M3: 2500,
    M4: 3330,
    M5: 2150,
    M6: 2300,
    M7: 3880
  },
  {
    name: "10/15",
    M1: 3490,
    M2: 4300,
    M3: 2100,
    M4: 2560,
    M5: 3010,
    M6: 2380,
    M7: 2880
  }
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/c1rLyqj1/";

  render() {
    return (
      <AreaChart
        width={450}
        height={250}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 20, right: 20 }} />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="M1"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="M2"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="M3"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
        <Area
          type="monotone"
          dataKey="M4"
          stackId="1"
          stroke="#FF725C"
          fill="#FF725C"
        />
        <Area
          type="monotone"
          dataKey="M5"
          stackId="1"
          stroke="#5E2CA5"
          fill="#5E2CA5"
        />
        <Area
          type="monotone"
          dataKey="M6"
          stackId="1"
          stroke="#FF80CC"
          fill="#FF80CC"
        />
        <Area
          type="monotone"
          dataKey="M7"
          stackId="1"
          stroke="#96CCFF"
          fill="#96CCFF"
        />
        <Legend />
      </AreaChart>
    );
  }
}
