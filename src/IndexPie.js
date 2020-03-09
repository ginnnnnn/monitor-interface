import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#00BC49", "#F1BF17", "#FDF100", "#DE1A22"];
const customLabel = ({ total, midAngle, x, y, name, value, ...props }) => {
  let isLeft;
  if (midAngle > 90 && midAngle < 270) {
    isLeft = true;
  } else {
    isLeft = false;
  }
  return (
    <text x={isLeft ? x - 90 : x + 10} y={y + 5} fill="white">
      {name}: {value} /{total}
    </text>
  );
};
export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/c9pL8k61/";

  render() {
    const database = this.props.database;

    const totalArray = Object.keys(database).reduce((acc, curr) => {
      acc = acc.concat(database[curr]);
      return acc;
    }, []);
    const normalData = totalArray.filter(key => key === "normal").length;
    const supplyData = totalArray.filter(key => key === "supply").length;
    const warmingData = totalArray.filter(key => key === "warming").length;
    const warningData = totalArray.filter(key => key === "warning").length;
    // const noSleepData = totalArray.filter(key => key !== "sleep").length;
    const total = totalArray.length;

    const data = [
      { name: "正常", value: normalData, total: total },
      { name: "補料", value: supplyData, total: total },
      { name: "暖機", value: warmingData, total: total },
      { name: "告警", value: warningData, total: total }
    ];
    return (
      <PieChart width={400} height={230}>
        <Pie
          data={data}
          cx={200}
          cy={115}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={customLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    );
  }
}
