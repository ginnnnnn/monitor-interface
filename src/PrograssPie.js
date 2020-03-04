import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const COLORS = ["#ffff00", "#111111"];

export default class Example extends PureComponent {
  render() {
    const { t1, t2, t3, t4, percent } = this.props;
    const data = [
      { name: "Group A", value: percent },
      { name: "Group D", value: 100 - percent }
    ];
    return (
      <div className="PrograssPie-Container">
        <div onClick={this.props.handlePush} className="PrograssPie-title">
          {t1}
        </div>
        <div className="PrograssPie-innerTitle">
          <div className="PrograssPie-innerTitle__part1">{t2}</div>
          <div className="PrograssPie-innerTitle__part2">{t3}</div>
          <div className="PrograssPie-innerTitle__part3">{t4}</div>
        </div>

        <PieChart width={360} height={180} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={180}
            cy={100}
            startAngle={210}
            endAngle={-30}
            innerRadius={70}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
            stroke="#2d3b4b"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    );
  }
}
