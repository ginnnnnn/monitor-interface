import React, { useRef, useEffect, useState } from "react";
import LineChartContainer from "./LineChartContainer";
import SensorPagination from "./SensorsPagination";

const ChartDisplay = ({ w, sensorsWData, page, setPage }) => {
  const sizeRef = useRef(null);
  const [size, setSize] = useState([]);
  useEffect(() => {
    if (sizeRef) {
      setSize([sizeRef.current.offsetWidth, sizeRef.current.offsetHeight]);
    }
  }, []);
  let displayData = sensorsWData;
  let pages = 1;
  const sesonrsNum = displayData.length;
  let num = 16;
  if (w === "4x4") {
    num = 16;
  }
  if (w === "4x3") {
    num = 12;
  }
  if (w === "3x3") {
    num = 9;
  }
  if (w === "2x2") {
    num = 4;
  }
  if (w === "1x1") {
    num = 1;
  }
  pages = Math.ceil(sesonrsNum / num);
  const startIndex = num * (page - 1);
  displayData = sensorsWData.slice(startIndex, startIndex + num);
  return (
    <div className="ChartDisplay-Container" ref={sizeRef}>
      <div className="Lines-Container">
        {displayData.map(
          ({ running, ok, unit, ucl, dcl, key, data, status }) => (
            <LineChartContainer
              key={key}
              running={running}
              ok={ok}
              ucl={ucl}
              dcl={dcl}
              w={w}
              size={size}
              unit={unit}
              sensorName={key}
              dataArr={data}
              status={status}
            />
          )
        )}
      </div>
      <SensorPagination pages={pages} setPage={setPage} page={page} />
    </div>
  );
};

export default ChartDisplay;
