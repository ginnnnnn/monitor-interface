import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import ViewController from "./ViewController";
import ChartDisplay from "./ChartDisplay";
import dataArr from "../assest/dataArr.json";

import "./page-3.css";

const Page3Container = ({ match }) => {
  const [w, setW] = useState("3x3");
  const [sensors, setSensors] = useState(null);
  const [running, setRunning] = useState([]);
  const [sensorsWData, setSensorsWData] = useState([]);
  const [page, setPage] = useState(1);
  const [fetchData, setFetchData] = useState(dataArr);
  const [autoDisplay, setAutoDisplay] = useState(false);
  const [autoSecond, setAutoSecond] = useState(1);
  const [errorFirst, setErrorFirst] = useState(true);
  useEffect(() => {
    setW("3x3");
    setSensors(null);
    setRunning([]);
    setSensorsWData([]);
    setPage(1);
    setAutoDisplay(false);
    setAutoSecond(1);
    setErrorFirst(true);
  }, [match]);
  useEffect(() => {
    let clearTimeout;
    if (autoDisplay) {
      clearTimeout = setInterval(() => {
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
        const sesonrsNum = sensorsWData.length;
        const pages = Math.ceil(sesonrsNum / num);
        setPage((pre) => {
          if (pre + 1 > pages) {
            return 1;
          }
          return pre + 1;
        });
      }, autoSecond * 1000);
    }
    return () => {
      clearInterval(clearTimeout);
    };
  }, [autoDisplay, autoSecond, sensorsWData.length, w]);

  useEffect(() => {
    if (sensors) {
      // const re = dataArr["dataArr"].reduce((acc, curr) => {
      //   if (curr["TIMETAG"].slice(-2) === "00") {
      //     acc.push(curr);
      //   }
      //   return acc;
      // }, []);
      const sensorsData = fetchData["dataArr"];
      const sensorKeys = Object.keys(sensors);
      const sensorsChecked = sensorKeys.filter(
        (key) => sensors[key]["isChecked"]
      );

      let sensorsWithData = sensorsChecked.map((key) => {
        let data = [];
        let valueArr = [];
        sensorsData.forEach((element) => {
          data.push({
            name: element["TIMETAG"],
            value: +element[key],
          });
          valueArr.push(+element[key]);
        });
        const maxValue = Math.max(...valueArr);
        const minValue = Math.min(...valueArr);
        let ok = true;
        const ucl = +sensors[key]["ucl"];
        const dcl = +sensors[key]["dcl"];

        if (maxValue > ucl) {
          ok = false;
        }
        if (minValue < dcl) {
          ok = false;
        }
        const status = sensors[key]["status"];
        const isRunning = running.indexOf(status) === -1 ? false : true;
        return {
          key: key,
          data: data,
          ucl: ucl,
          dcl: dcl,
          unit: sensors[key]["unit"],
          running: isRunning,
          status: status,
          ok: ok,
        };
      });
      if (errorFirst) {
        sensorsWithData = sensorsWithData.sort((a, b) => (a.ok ? 1 : -1));
      }
      setSensorsWData(sensorsWithData);
    }
  }, [errorFirst, fetchData, running, sensors]);
  return (
    <div className="PageContainer">
      <ViewController
        w={w}
        setW={setW}
        sensors={sensors}
        setSensors={setSensors}
        running={running}
        setRunning={setRunning}
        setPage={setPage}
        autoDisplay={autoDisplay}
        setAutoDisplay={setAutoDisplay}
        autoSecond={autoSecond}
        setAutoSecond={setAutoSecond}
        errorFirst={errorFirst}
        setErrorFirst={setErrorFirst}
      />
      {sensors ? (
        <ChartDisplay
          w={w}
          sensorsWData={sensorsWData}
          setPage={setPage}
          page={page}
        />
      ) : (
        <div className="No-sensor">
          <h2>尚未設定sensors,請先設定sensors</h2>
        </div>
      )}
    </div>
  );
};

export default withRouter(Page3Container);
