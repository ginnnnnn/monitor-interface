import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload, l } = this.props;
    if (payload.index === 0) {
      return (
        <g transform={`translate(${x},${y})`}>
          <text x={10} y={0} dy={16} textAnchor="end" fill="#666">
            一天
          </text>
        </g>
      );
    }
    if (payload.index === l) {
      return (
        <g transform={`translate(${x},${y})`}>
          <text x={10} y={0} dy={16} textAnchor="end" fill="#666">
            now
          </text>
        </g>
      );
    } else {
      return null;
    }
  }
}

export default class Example extends PureComponent {
  render() {
    const ucl = this.props.ucl;
    const dcl = this.props.dcl;
    const w = +this.props.w;
    const data = this.props.dataArr;
    const l = data.length;
    const domainTop = ucl + (ucl - dcl) * 0.5;
    const domainBottom = dcl - (ucl - dcl) * 0.5;
    return (
      <LineChart
        className="LineChart"
        width={w}
        height={(w / 5) * 3}
        data={data}
        margin={{
          top: 5,
          right: 50,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          interval="preserveStartEnd"
          tickLine={false}
          tick={<CustomizedAxisTick l={l - 1} />}
        />
        <YAxis type="number" domain={[domainBottom, domainTop]} />
        <Tooltip />
        <ReferenceLine y={ucl} label={`上限(${ucl})`} stroke="red" />
        <ReferenceLine y={dcl} label={`下限(${dcl})`} stroke="red" />
        <Line dot={false} type="monotone" dataKey="value" stroke="purple" />
      </LineChart>
    );
  }
}
