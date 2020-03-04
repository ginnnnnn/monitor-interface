import React from "react";

const SubTab = ({ styleKey, title, ratio }) => {
  return (
    <div className={`Conclution-div`}>
      <div className={`Conclution-block Conclution-div__${styleKey}`}>
        {ratio}
      </div>
      {title}
    </div>
  );
};

export default SubTab;
