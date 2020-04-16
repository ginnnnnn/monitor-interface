import React, { useState } from "react";
import { DateTimePicker } from "@material-ui/pickers";

function BasicDateTimePicker({
  setPage,
  handleClose,
  timegap,
  setTimegap,
  DataBind,
}) {
  const [selectedDateStart, handleDateStartChange] = useState(timegap[0]);
  const [selectedDateEnd, handleDateEndChange] = useState(timegap[1]);

  //   console.log(arr);

  const submitChange = () => {
    setPage(1);
    setTimegap([selectedDateStart, selectedDateEnd]);
    handleClose();
  };
  const cancelChange = () => {
    handleClose();
  };

  const arr = DataBind["SPRAY1"]["arr"];
  const arrlast = arr.length - 1;
  return (
    <div className="TimeGapSetting-Container">
      <h3>選擇資料時間間隔</h3>
      <div className="TimeGapSetting">
        <DateTimePicker
          label="開始時間"
          inputVariant="outlined"
          value={selectedDateStart}
          onChange={handleDateStartChange}
          maxDate={selectedDateEnd}
          minDate={new Date(arr[0]["name"])}
        />
        <DateTimePicker
          label="結束時間"
          inputVariant="outlined"
          value={selectedDateEnd}
          onChange={handleDateEndChange}
          maxDate={new Date(arr[arrlast]["name"])}
          minDate={selectedDateStart}
        />
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
}

export default BasicDateTimePicker;
