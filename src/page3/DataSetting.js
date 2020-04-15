import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";

const dataSet = {
  SPRAY1: { isChecked: true, ucl: 5, dcl: 1, status: "ENG", unit: "Kg/cm2" },
  SPRAY2: { isChecked: true, ucl: 5, dcl: 1, status: "ENG", unit: "Kg/cm2" },
  SPRAY3: { isChecked: true, ucl: 5, dcl: 1, status: "ENG", unit: "Kg/cm2" },
  SPRAY4: { isChecked: true, ucl: 5, dcl: 1, status: "CHZ", unit: "Kg/cm2" },
  SPRAY5: { isChecked: true, ucl: 5, dcl: 1, status: "CHZ", unit: "Kg/cm2" },
  SPRAY6: { isChecked: true, ucl: 5, dcl: 1, status: "CHZ", unit: "Kg/cm2" },
  SPRAY7: { isChecked: true, ucl: 5, dcl: 1, status: "RPM", unit: "Kg/cm2" },
  SPRAY8: { isChecked: true, ucl: 5, dcl: 1, status: "RPM", unit: "Kg/cm2" },
  SPRAY9: { isChecked: true, ucl: 5, dcl: 1, status: "RPM", unit: "Kg/cm2" },
  SPRAY10: { isChecked: true, ucl: 5, dcl: 1, status: "OFF", unit: "Kg/cm2" },
  SPRAY11: { isChecked: true, ucl: 5, dcl: 1, status: "OFF", unit: "Kg/cm2" },
  SPRAY12: { isChecked: true, ucl: 5, dcl: 1, status: "OFF", unit: "Kg/cm2" },
  SPRAY13: { isChecked: true, ucl: 5, dcl: 1, status: "MBD", unit: "Kg/cm2" },
  SPRAY14: { isChecked: true, ucl: 5, dcl: 1, status: "MBD", unit: "Kg/cm2" },
  SPRAY15: { isChecked: true, ucl: 5, dcl: 1, status: "MBD", unit: "Kg/cm2" },
  SPRAY16: { isChecked: true, ucl: 5, dcl: 1, status: "SET", unit: "Kg/cm2" },
  SPRAY17: { isChecked: true, ucl: 5, dcl: 1, status: "SET", unit: "Kg/cm2" },
  SPRAY18: { isChecked: true, ucl: 5, dcl: 1, status: "SET", unit: "Kg/cm2" },
  SPRAY19: { isChecked: true, ucl: 5, dcl: 1, status: "VAIT", unit: "Kg/cm2" },
  SPRAY20: { isChecked: true, ucl: 5, dcl: 1, status: "VAIT", unit: "Kg/cm2" },
  SPRAY21: { isChecked: true, ucl: 5, dcl: 1, status: "VAIT", unit: "Kg/cm2" },
  SPRAY22: { isChecked: true, ucl: 5, dcl: 1, status: "INS", unit: "Kg/cm2" },
  SPRAY23: { isChecked: true, ucl: 5, dcl: 1, status: "INS", unit: "Kg/cm2" },
  SPRAY24: { isChecked: true, ucl: 5, dcl: 1, status: "INS", unit: "Kg/cm2" },
  SPRAY25: { isChecked: true, ucl: 5, dcl: 1, status: "IDL", unit: "Kg/cm2" },
  SPRAY26: { isChecked: true, ucl: 5, dcl: 1, status: "IDL", unit: "Kg/cm2" },
  SPRAY27: { isChecked: true, ucl: 5, dcl: 1, status: "IDL", unit: "Kg/cm2" },
  SPRAY28: { isChecked: true, ucl: 5, dcl: 1, status: "CHK", unit: "Kg/cm2" },
  SPRAY29: { isChecked: true, ucl: 5, dcl: 1, status: "CHK", unit: "Kg/cm2" },
  SPRAY30: { isChecked: true, ucl: 5, dcl: 1, status: "CHK", unit: "Kg/cm2" },
  SPRAY31: { isChecked: true, ucl: 5, dcl: 1, status: "IDLE", unit: "Kg/cm2" },
  SPRAY32: { isChecked: true, ucl: 5, dcl: 1, status: "IDLE", unit: "Kg/cm2" },
  SPRAY33: { isChecked: true, ucl: 5, dcl: 1, status: "IDLE", unit: "Kg/cm2" },
  SPRAY34: { isChecked: true, ucl: 5, dcl: 1, status: "RUN", unit: "Kg/cm2" },
  SPRAY35: { isChecked: true, ucl: 5, dcl: 1, status: "RUN", unit: "Kg/cm2" },
  SPRAY36: { isChecked: true, ucl: 5, dcl: 1, status: "RUN", unit: "Kg/cm2" },
  ET_FLOW: { isChecked: true, ucl: 90, dcl: 30, status: "RUN", unit: "L/min" },
  ET_TEMP: { isChecked: true, ucl: 36, dcl: 34, status: "RUN", unit: "°" },
  dosing_ION: { isChecked: true, ucl: 455, dcl: 445, status: "RUN", unit: "" },
  dosing_SG: {
    isChecked: true,
    ucl: 1.19,
    dcl: 0.99,
    status: "IDL",
    unit: "",
  },
  dosing_ORP: {
    isChecked: true,
    ucl: 1000,
    dcl: 450,
    status: "CHK",
    unit: "",
  },
  dosing_TEMP: {
    isChecked: true,
    ucl: 36,
    dcl: 34,
    status: "IDLE",
    unit: "°",
  },
  HCl: { isChecked: true, ucl: 400, dcl: 50, status: "RUN", unit: "" },
};

const DataSetting = ({ sensors, setSensors, handleClose, setPage, match }) => {
  let initialState = sensors ? sensors : dataSet;
  const [localSensors, setLocalSensors] = useState(initialState);
  // const newSensors = dataA["Sensors"].reduce((acc, curr) => {
  //   acc[curr["Name"]]["ucl"] = +curr["USL"];
  //   acc[curr["Name"]]["dcl"] = +curr["LSL"];
  //   return acc;
  // }, localSensors);
  // console.log(newSensors);
  const sensorsinArr = Object.keys(localSensors);
  const handleCheckBoxChange = (e, key) => {
    const inputValue = e.target.checked;
    setLocalSensors((preState) => {
      const toUpdated = { ...preState[key] };
      toUpdated["isChecked"] = inputValue;
      return { ...preState, [key]: toUpdated };
    });
  };

  const handleUclChange = (e, key) => {
    const inputValue = e.target.value;

    setLocalSensors((preState) => {
      const toUpdated = { ...preState[key] };
      toUpdated["ucl"] = inputValue;
      return { ...preState, [key]: toUpdated };
    });
  };
  const handleDclChange = (e, key) => {
    const inputValue = e.target.value;

    setLocalSensors((preState) => {
      const toUpdated = { ...preState[key] };
      toUpdated["dcl"] = inputValue;
      return { ...preState, [key]: toUpdated };
    });
  };
  const submitChange = () => {
    setPage(1);
    setSensors(localSensors);
    handleClose();
  };
  const cancelChange = () => {
    handleClose();
  };
  return (
    <div className="DataSetting-Container">
      <div className="setting-1-container">
        <div className="setting-1-dropdown">
          <div className="setting-1-dropdown-1">設定頁面</div>
          <div className="setting-1-dropdown-2">
            機台:{match.params.pid}-{match.params.mid}
          </div>
        </div>
        <div className="setting-1-title">
          <div>全選(打勾)</div>
          <div>項目名稱</div>
          <div>規格上限</div>
          <div>規格下限</div>
          <div>單位</div>
          <div>生產狀態</div>
        </div>
        {sensorsinArr.map((key) => (
          <div className="setting-1-content" key={key}>
            <div>
              <Checkbox
                size="small"
                checked={localSensors[key]["isChecked"]}
                onChange={(e) => handleCheckBoxChange(e, key)}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </div>
            <div>{key}</div>
            <div>
              <input
                value={localSensors[key]["ucl"]}
                onChange={(e) => handleUclChange(e, key)}
                className="setting-Input"
                type="number"
              />
            </div>
            <div>
              <input
                value={localSensors[key]["dcl"]}
                onChange={(e) => handleDclChange(e, key)}
                className="setting-Input"
                type="number"
              />
            </div>
            <div>{localSensors[key]["unit"]}</div>
            <div>{localSensors[key]["status"]}</div>
          </div>
        ))}
      </div>
      <div className="btn-collection">
        <button onClick={submitChange} className="btn-collection-btn1">
          確定
        </button>
        <button onClick={cancelChange} className="btn-collection-btn2">
          取消
        </button>
      </div>
    </div>
  );
};

export default withRouter(DataSetting);
