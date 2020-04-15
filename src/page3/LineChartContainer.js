import React from "react";
import LineChart from "./LineChart";

const LineChartContainer = ({
  running,
  ok,
  unit,
  ucl,
  dcl,
  sensorName,
  dataArr,
  w,
  status,
  size,
}) => {
  //[w,h]
  //height={(w / 5) * 3}
  let lineChartWidth;
  if (w === "4x4") {
    lineChartWidth = size[0] / 5 - 50;
  }
  if (w === "4x3") {
    lineChartWidth = size[0] / 4 - 50;
  }
  if (w === "3x3") {
    lineChartWidth = (size[1] - 3 * 70) / 3 / 0.6;
  }
  if (w === "2x2") {
    lineChartWidth = (size[1] - 2 * 70) / 2 / 0.6;
  }
  if (w === "1x1") {
    lineChartWidth = (size[1] - 1 * 70) / 0.6;
  }

  return (
    <div className={`Chart-part ${running ? "Running" : "Not-Running"}`}>
      <div className="Chart-part__part-title">
        {sensorName} {unit} 機況:{status}
      </div>
      <div
        className={`LineChart-Container ${
          ok
            ? "LineChart-Container-Running-ok"
            : running && !ok
            ? "LineChart-Container-Running-Not"
            : "LineChart-Container-Not-Running-Not"
        }`}
      >
        <LineChart ucl={ucl} dcl={dcl} w={lineChartWidth} dataArr={dataArr} />
        {/* <div className="Xaxis-unit">
          <p className="Xaxis-title">一天</p>
          <p className="Xaxis-title">now</p>
        </div> */}
      </div>
    </div>
  );
};

export default LineChartContainer;
