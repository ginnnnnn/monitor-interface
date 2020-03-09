import React from "react";
import { withRouter } from "react-router-dom";

const ProcessCard = ({ src, cn, en, green, yellow, red, history }) => {
  const handleOnClick = () => {
    history.push("/monitor/" + en);
  };
  return (
    <div className="process-container" onClick={handleOnClick}>
      <div className="process-imgcontainer">
        <img src={src} alt="process" />
      </div>
      <div className="process-info">
        <div className="process-info__name">
          <div className="process-container__name_cn">{cn}</div>
          <div className="process-container__name_en"> {en}</div>
        </div>
        <div className="process-info__lightContainer">
          <div className="process-info__light">
            <div className="process-info__light-green"></div>
            <div className="process-info__light-spec">{green}</div>
          </div>
          <div className="process-info__light">
            <div className="process-info__light-yellow"></div>
            <div className="process-info__light-spec">{yellow}</div>
          </div>
          <div className="process-info__light">
            <div className="process-info__light-red"></div>
            <div className="process-info__light-spec">{red}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProcessCard);
