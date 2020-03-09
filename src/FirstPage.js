import React from "react";
import "./FirstPage.css";
import ProcessCard from "./ProcessCard";
import pn1 from "./assest/process/pn1.png";
import pr1 from "./assest/process/pr1.png";
import exp from "./assest/process/exp.png";
import dv1 from "./assest/process/dv1.png";
import et3 from "./assest/process/et3.png";
import st2 from "./assest/process/st2.png";
import api from "./assest/process/api.png";
import snt from "./assest/process/snt.png";
import sr1 from "./assest/process/sr1.png";
import pn3 from "./assest/process/pn3.png";
import sl1 from "./assest/process/sl1.png";
import bf1 from "./assest/process/bf1.png";
import os3 from "./assest/process/os3.png";
import avi from "./assest/process/avi.png";
import pk1 from "./assest/process/pk1.png";
import rfp from "./assest/process/rfp.png";

const processArr = [
  { src: pn1, cn: "一沖", en: "PN1", green: 10, yellow: 1, red: 2 },
  { src: pr1, cn: "光阻塗佈", en: "PR1", green: 7, yellow: 2, red: 0 },
  { src: exp, cn: "曝光", en: "EXP", green: 8, yellow: 1, red: 0 },
  { src: dv1, cn: "顯影", en: "DV1", green: 12, yellow: 3, red: 1 },
  { src: et3, cn: "蝕刻", en: "ET3", green: 6, yellow: 1, red: 1 },
  { src: st2, cn: "除膠", en: "ST2", green: 10, yellow: 5, red: 2 },
  { src: api, cn: "自動光學檢驗", en: "API", green: 7, yellow: 2, red: 1 },
  { src: snt, cn: "鍍錫", en: "SNT", green: 5, yellow: 0, red: 4 },
  { src: sr1, cn: "炬悍印刷", en: "SR1", green: 2, yellow: 3, red: 1 },
  { src: pn3, cn: "三沖", en: "PN3", green: 5, yellow: 1, red: 3 },
  { src: sl1, cn: "切割", en: "SL1", green: 12, yellow: 1, red: 2 },
  { src: bf1, cn: "撕背膠", en: "BF1", green: 8, yellow: 2, red: 1 },
  { src: os3, cn: "短斷路測試", en: "OS3", green: 7, yellow: 2, red: 1 },
  { src: avi, cn: "外觀光學檢驗", en: "AVI", green: 12, yellow: 0, red: 1 },
  { src: pk1, cn: "包裝", en: "PK1", green: 11, yellow: 2, red: 2 },
  { src: rfp, cn: "水洗", en: "RFP", green: 3, yellow: 1, red: 1 }
];

const FirstPage = () => {
  return (
    <React.Fragment>
      <div className="App-title">工業互聯網平台介面 </div>
      <div className="InterFace">
        {processArr.map(({ src, cn, en, green, yellow, red }, i) => (
          <ProcessCard
            key={cn}
            src={src}
            cn={cn}
            en={en}
            green={green}
            yellow={yellow}
            red={red}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default FirstPage;
