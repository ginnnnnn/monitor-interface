import React from "react";
import { withRouter } from "react-router-dom";
import "./SecondPage.css";
import PrograssPie from "./PrograssPie";
import Section2Pie from "./Section2Pie";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import RealTime from "./Realtime";

const SecondPage = ({ history }) => {
  const handleOnClick = () => {
    history.push("/");
  };
  return (
    <div className="SecondPageContainer">
      <div className="SecondPagePrograssBar-section1">
        <PrograssPie
          t1="設備即時稼動率"
          t2="99.58%"
          t3="生產時數"
          t4="1"
          percent={99.58}
          handlePush={handleOnClick}
        />
        <PrograssPie
          t1="今日產量達成率(目標值:14000)"
          t2="1.16%"
          t3="目前產量"
          t4="162"
          percent={1.16}
          handlePush={handleOnClick}
        />
        <PrograssPie
          t1="巡檢NG率"
          t2="33.33%"
          t3="巡檢NG率"
          t4="1"
          percent={33.33}
          handlePush={handleOnClick}
        />
        <PrograssPie
          t1="目前巡檢率(目標值:500)"
          t2="0.6%"
          t3="目前巡檢率"
          t4="3"
          percent={0.6}
          handlePush={handleOnClick}
        />
      </div>
      <div className="SecondPagePrograssBar-section2">
        <div className="SecondPagePrograssBar-section2__part">
          <div
            onClick={handleOnClick}
            className="SecondPagePrograssBar-section2__part-title"
          >
            機台即時狀況時數分佈圖
          </div>
          <Section2Pie />
        </div>
        <div className="SecondPagePrograssBar-section2__part">
          <div
            onClick={handleOnClick}
            className="SecondPagePrograssBar-section2__part-title"
          >
            今日機台故障時數
          </div>

          <BarChart />
        </div>
        <div className="SecondPagePrograssBar-section2__part">
          <div
            onClick={handleOnClick}
            className="SecondPagePrograssBar-section2__part-title"
          >
            機台故障次數履歷
          </div>

          <AreaChart />
        </div>
      </div>
      <div className="SecondPagePrograssBar-realtime">
        <RealTime />
      </div>
    </div>
  );
};

export default withRouter(SecondPage);
