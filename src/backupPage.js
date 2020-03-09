import React from "react";
import LineBoxes from "./LineBox";
import WarningIcon from "@material-ui/icons/Warning";
import IndexPie from "./IndexPie";
import SubTab from "./SubTab";
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
const FirstPage = () => {
  const totalArray = Object.keys(database).reduce((acc, curr) => {
    acc = acc.concat(database[curr]);
    return acc;
  }, []);
  const normalData = totalArray.filter(key => key === "normal").length;
  const supplyData = totalArray.filter(key => key === "supply").length;
  const warmingData = totalArray.filter(key => key === "warming").length;
  const warningData = totalArray.filter(key => key === "warning").length;
  const totalData = totalArray.length;

  return (
    <React.Fragment>
      <div className="App-title">工業互聯網平台介面 </div>
      <div className="InterFace">
        <div className="Display">
          <div className="Display-section1">
            <div className="Section-title">工廠入口</div>
            <div className="Section-line">
              <div className="Section-line__title">A線</div>
              <LineBoxes title="A" databaseArr={database["A"]} />
            </div>
            <div className="Section-line">
              <div className="Section-line__title">B線</div>
              <LineBoxes title="B" databaseArr={database["B"]} />
            </div>
            <div className="Section-line">
              <div className="Section-line__title">C線</div>
              <LineBoxes title="C" databaseArr={database["C"]} />
            </div>
            <div className="Section-title">MODE 區</div>
            <div className="Section-line">
              <div className="Section-line__title">D線</div>
              <LineBoxes title="D" databaseArr={database["D"]} />
            </div>
            <div className="Section-line">
              <div className="Section-line__title">E線</div>
              <LineBoxes title="E" databaseArr={database["E"]} />
            </div>
          </div>
          <div className="Display-section2">
            <div className="Display-section2__margin"></div>
            <div className="Display-section2__warning">
              <div className="Display-section2__warning-pannel">
                {warningMsg.map(({ msg, date }, i) => {
                  return (
                    <div
                      key={msg + i}
                      className="warning-description-container"
                    >
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
            <div className="Display-section2__pie">
              <div className="Pie-container"></div>
              <IndexPie database={database} />
            </div>
          </div>
        </div>
        <div className="Conclution">
          <SubTab
            styleKey="normal"
            title="正常"
            ratio={`${normalData}/${totalData}`}
          />
          <SubTab
            styleKey="warming"
            title="暖機"
            ratio={`${warmingData}/${totalData}`}
          />
          <SubTab
            styleKey="supply"
            title="補料"
            ratio={`${supplyData}/${totalData}`}
          />
          <SubTab
            styleKey="warning"
            title="告警"
            ratio={`${warningData}/${totalData}`}
          />
          <SubTab
            styleKey="percentage"
            title="稼動率"
            ratio={((normalData / totalData) * 100).toFixed(0) + "%"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FirstPage;
