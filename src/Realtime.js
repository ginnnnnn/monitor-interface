import React from "react";
import "./RealTime.css";

const data = [
  {
    C1: "東典",
    C2: "M1",
    C3: "1BTD2040-07-10",
    C4: "斷訊",
    C5: 23,
    C6: "1.15%",
    C7: "1.000",
    C8: "0.100",
    C9: "99.58%",
    C10: "門窗未關"
  },
  {
    C1: "東典",
    C2: "M2",
    C3: "",
    C4: "異常",
    C5: 23,
    C6: "1.15%",
    C7: "1.000",
    C8: "0.100",
    C9: "99.58%",
    C10: ""
  },
  {
    C1: "東典",
    C2: "M3",
    C3: "1BTD2040-07-10",
    C4: "暖機",
    C5: 23,
    C6: "1.15%",
    C7: "1.000",
    C8: "0.100",
    C9: "99.58%",
    C10: ""
  },
  {
    C1: "東典",
    C2: "M4",
    C3: "1BTD2040-07-10",
    C4: "補料",
    C5: 23,
    C6: "1.15%",
    C7: "1.000",
    C8: "0.100",
    C9: "99.58%",
    C10: ""
  },
  {
    C1: "東典",
    C2: "M5",
    C3: "1BTD2040-07-10",
    C4: "正常",
    C5: 23,
    C6: "1.15%",
    C7: "1.000",
    C8: "0.100",
    C9: "99.58%",
    C10: ""
  },
  {
    C1: "東典",
    C2: "M6",
    C3: "1BTD2040-07-10",
    C4: "正常",
    C5: 23,
    C6: "1.15%",
    C7: "1.000",
    C8: "0.100",
    C9: "99.58%",
    C10: ""
  },
  {
    C1: "東典",
    C2: "M7",
    C3: "1BTD2040-07-10",
    C4: "正常",
    C5: 23,
    C6: "1.15%",
    C7: "1.000",
    C8: "0.100",
    C9: "99.58%",
    C10: ""
  },
  {
    C1: "東典",
    C2: "M8",
    C3: "1BTD2040-07-10",
    C4: "正常",
    C5: 23,
    C6: "1.15%",
    C7: "1.000",
    C8: "0.100",
    C9: "99.58%",
    C10: ""
  },
  {
    C1: "東典",
    C2: "M9",
    C3: "1BTD2040-07-10",
    C4: "正常",
    C5: 23,
    C6: "1.15%",
    C7: "1.000",
    C8: "0.100",
    C9: "99.58%",
    C10: ""
  }
];

const RealTime = () => {
  return (
    <div className="Realtime-container">
      <div className="Realtime-title">各機台即時資訊</div>
      <div className="Realtime-content">
        <div className="Realtime-content__titleList">
          <div className="Realtime-content__title1">廠別</div>
          <div className="Realtime-content__title2">機台別</div>
          <div className="Realtime-content__title3">料號</div>
          <div className="Realtime-content__title4">狀態</div>
          <div className="Realtime-content__title5">產量</div>
          <div className="Realtime-content__title6">產量達成率</div>
          <div className="Realtime-content__title7">生產時間</div>
          <div className="Realtime-content__title8">非生產時間</div>
          <div className="Realtime-content__title9">稼動率</div>
          <div className="Realtime-content__title10">警報資訊</div>
        </div>
        {data.map(({ C1, C2, C3, C4, C5, C6, C7, C8, C9, C10 }) => (
          <div className="Realtime-content__contentList">
            <div className="Realtime-content__1">{C1}</div>
            <div className="Realtime-content__2">{C2}</div>
            <div className="Realtime-content__3">{C3}</div>
            <div className="Realtime-content__4">{C4}</div>
            <div className="Realtime-content__5">{C5}</div>
            <div className="Realtime-content__6">{C6}</div>
            <div className="Realtime-content__7">{C7}</div>
            <div className="Realtime-content__8">{C8}</div>
            <div className="Realtime-content__9">{C9}</div>
            <div className="Realtime-content__10">{C10}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealTime;
