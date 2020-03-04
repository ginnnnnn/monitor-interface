import React from "react";
import { withRouter } from "react-router-dom";
import yellow from "./assest/boxes/yellow.png";
import lightgreen from "./assest/boxes/lightgreen.png";
import red from "./assest/boxes/red.png";
import grey from "./assest/boxes/grey.png";
import green from "./assest/boxes/green.png";
import cross from "./assest/boxes/cross.png";

const LineBoxes = ({ title, databaseArr, history }) => {
  const handleOnClick = () => {
    history.push("/overview");
  };
  return (
    <React.Fragment>
      {databaseArr.map((status, i) => {
        const description = ("0" + (i + 1)).slice(-2);
        if (status === "normal") {
          return (
            <div
              onClick={handleOnClick}
              key={status + i}
              className="Section-line__Container"
            >
              <img alt="boxes" className="Section-line__img" src={green} />
              <div className="Section-line__description">
                {title}
                {description}
              </div>
            </div>
          );
        }
        if (status === "warning") {
          return (
            <div
              onClick={handleOnClick}
              key={status + i}
              className="Section-line__Container"
            >
              <img alt="boxes" className="Section-line__img" src={red} />
              <div className="Section-line__description">
                {title}
                {description}
              </div>
            </div>
          );
        }
        if (status === "supply") {
          return (
            <div
              onClick={handleOnClick}
              key={status + i}
              className="Section-line__Container"
            >
              <img alt="boxes" className="Section-line__img" src={lightgreen} />
              <div className="Section-line__description">
                {title}
                {description}
              </div>
            </div>
          );
        }
        if (status === "warming") {
          return (
            <div
              onClick={handleOnClick}
              key={status + i}
              className="Section-line__Container"
            >
              <img alt="boxes" className="Section-line__img" src={yellow} />
              <div className="Section-line__description">
                {title}
                {description}
              </div>
            </div>
          );
        }
        if (status === "sleep") {
          return (
            <div
              onClick={handleOnClick}
              key={status + i}
              className="Section-line__Container"
            >
              <img alt="boxes" className="Section-line__img" src={cross} />
              <div className="Section-line__description"></div>
            </div>
          );
        }
        return (
          <div
            onClick={handleOnClick}
            key={status + i}
            className="Section-line__Container"
          >
            <img alt="boxes" className="Section-line__img" src={grey} />
            <div className="Section-line__description">
              {title}
              {description}
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default withRouter(LineBoxes);
