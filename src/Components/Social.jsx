import React from "react";
import github from "../images/Social icon.svg";
import slack from "../images/slack.svg"

const Social = () => {
  return (
    <div className="App social__icons">
      <a href="https:slack.com/jaseric">
        <img src={slack} alt="slack" />
      </a>
      <a href="https:github.com/jacksonohallo">
        <img src={github} alt="github" />
      </a>
    </div>
  );
};

export default Social;