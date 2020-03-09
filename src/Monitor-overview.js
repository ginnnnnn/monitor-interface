import React from "react";
import LineBox from "./LineBox";
import WarningIcon from "@material-ui/icons/Warning";
import IndexPie from "./IndexPie";
import { withRouter } from "react-router-dom";

const warningMsg = [
  { msg: "A05 12004(D4)刀補位待補", date: "2019-08-07- 10:06:15" },
  { msg: "A06 12005(D5)刀補位待補", date: "2019-09-07- 10:06:15" },
  { msg: "C05 12006(C4)刀補位待補", date: "2019-08-07- 10:06:15" }
];

const database = {
  A: [
    "normal",
    "warming",
    "supply",
    "warning",
    "normal",
    "normal",
    "sleep",
    "normal",
    "normal",
    "normal"
  ],
  B: [
    "normal",
    "normal",
    "normal",
    "normal",
    "sleep",
    "warming",
    "warming",
    "supply",
    "normal",
    "normal"
  ],
  C: [
    "supply",
    "warning",
    "normal",
    "normal",
    "normal",
    "warming",
    "normal",
    "normal",
    "sleep",
    "normal"
  ],
  D: [
    "normal",
    "normal",
    "sleep",
    "normal",
    "warming",
    "normal",
    "supply",
    "warning",
    "normal",
    "normal"
  ],
  E: [
    "normal",
    "normal",
    "warning",
    "supply",
    "supply",
    "warning",
    "normal",
    "normal",
    "sleep",
    "normal"
  ]
};

const MonitorOverview = ({ pid, history }) => {
  // const totalArray = Object.keys(database).reduce((acc, curr) => {
  //     acc = acc.concat(database[curr]);
  //     return acc;
  //   }, []);
  //   const normalData = totalArray.filter(key => key === "normal").length;
  //   const supplyData = totalArray.filter(key => key === "supply").length;
  //   const warmingData = totalArray.filter(key => key === "warming").length;
  //   const warningData = totalArray.filter(key => key === "warning").length;
  //   const totalData = totalArray.length;
  const handleOnClick = () => {
    history.push("/");
  };
  return (
    <React.Fragment>
      <div className="SecondPagePrograssBar-overview__monitor">
        <div
          onClick={handleOnClick}
          className="SecondPagePrograssBar-overview__title"
        >
          {pid}機台即時監控
        </div>
        <div className="SecondPagePrograssBar-overview__monitor-pie">
          <IndexPie database={database["A"]} />
        </div>

        <div className="SecondPagePrograssBar-overview__monitor-lineboxes">
          <LineBox title="A" databaseArr={database["A"]} />
        </div>
      </div>
      <div className="SecondPagePrograssBar-overview__warning">
        <div
          onClick={handleOnClick}
          className="SecondPagePrograssBar-overview__title"
        >
          {pid}機台注意訊息
        </div>
        <div className="Display-section2__warning">
          <div className="Display-section2__warning-pannel">
            {warningMsg.map(({ msg, date }, i) => {
              return (
                <div key={msg + i} className="warning-description-container">
                  <WarningIcon color="error" />
                  <div className="warning-description">
                    <div>{msg}</div>
                    <div>{date}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(MonitorOverview);
