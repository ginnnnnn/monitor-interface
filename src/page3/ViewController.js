import React, { useState } from "react";
import SizeSelector from "./SizeSelector";
import Modal from "./modal";
import DataSetting from "./DataSetting";
import StatusSetting from "./StatusSetting";
import Switcher from "../util/Switcher";
import MyDropdown from "../util/Mydropdown";
import TimeGapSetting from "./TimeGapSetting";

const ViewController = ({
  w,
  setW,
  setSensors,
  sensors,
  running,
  setRunning,
  setPage,
  autoDisplay,
  setAutoDisplay,
  autoSecond,
  setAutoSecond,
  errorFirst,
  setErrorFirst,
  timegap,
  setTimegap,
  DataBind,
}) => {
  const [open, setOpen] = useState(false);
  const [child, setChild] = useState("status");

  const handleOpen = (key) => {
    setAutoDisplay(false);
    setChild(key);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSecondOnChange = (e) => {
    setAutoSecond(+e.target.value);
  };
  return (
    <div className="ViewController-Container">
      <h3>顯示設定</h3>
      <div className="SizeSelector-Container">
        <SizeSelector w={w} setW={setW} setPage={setPage} />
        <div className="AutoDisplay-Container">
          <div className="AutoDisplay">自動輪播</div>
          <input
            className="AutoDisplay-Input"
            onChange={handleSecondOnChange}
            type="number"
            min={3}
            max={60}
            value={autoSecond}
          />
          <div className="AutoDisplay">秒</div>
        </div>
        <Switcher
          disabled={sensors ? false : true}
          check={autoDisplay}
          setCheck={setAutoDisplay}
        />
        <div className="AutoDisplay-Container">
          <div className="AutoDisplay">異常優先</div>
        </div>
        <Switcher check={errorFirst} setCheck={setErrorFirst} />
      </div>
      <h3>資料設定</h3>
      <MyDropdown />
      <div>
        <div className="setting-btn" onClick={() => handleOpen("time")}>
          時間設定
        </div>
      </div>
      <div>
        <div className="setting-btn" onClick={() => handleOpen("status")}>
          狀態設定
        </div>
      </div>
      <div>
        <div className="setting-btn" onClick={() => handleOpen("sensor")}>
          sensor設定
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        {child === "status" ? (
          <StatusSetting
            handleClose={handleClose}
            running={running}
            setRunning={setRunning}
          />
        ) : child === "sensor" ? (
          <DataSetting
            setSensors={setSensors}
            sensors={sensors}
            handleClose={handleClose}
            setPage={setPage}
          />
        ) : (
          <TimeGapSetting
            timegap={timegap}
            setTimegap={setTimegap}
            handleClose={handleClose}
            setPage={setPage}
            DataBind={DataBind}
          />
        )}
      </Modal>
    </div>
  );
};

export default ViewController;
