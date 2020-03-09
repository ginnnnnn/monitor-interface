import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#ffff00", "#EEEEEE", "#FF725C", "#777777"];

const data = [
  { name: "斷訊", value: 0.02 },
  { name: "異常", value: 0.03 },
  { name: "待料", value: 0.05 },
  { name: "生產", value: 1.0 }
];
const customLabel = ({ midAngle, x, y, name, value, ...props }) => {
  let isLeft;
  if (midAngle > 90 && midAngle < 270) {
    isLeft = true;
  } else {
    isLeft = false;
  }
  return (
    <text x={isLeft ? x - 90 : x + 10} y={y + 5} fill="white">
      {name}: {value} (Hr)
    </text>
  );
};

export default class Example extends PureComponent {
  render() {
    return (
      <PieChart width={500} height={300}>
        <Pie
          data={data}
          dataKey="value"
          cx={250}
          cy={150}
          outerRadius={80}
          fill="#82ca9d"
          label={customLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
