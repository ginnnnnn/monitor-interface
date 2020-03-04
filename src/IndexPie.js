import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";

const COLORS = ["#00BC49", "#F1BF17", "#FDF100", "#DE1A22"];

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
    const noSleepData = totalArray.filter(key => key !== "sleep").length;
    const data = [
      { name: "正常", value: normalData },
      { name: "補料", value: supplyData },
      { name: "暖機", value: warmingData },
      { name: "告警", value: warningData }
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
