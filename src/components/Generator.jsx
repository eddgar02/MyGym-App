import React from "react";
import SectionWrapper from "./SectionWrapper";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div>
      <div>
        <p>{index}</p>
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default function Generator() {
  return (
    <div className="min-h-screen ">
      <SectionWrapper
        header={"generate your workout"}
        title={["It's ", "Time", "!"]}
      >
        <Header
          index={"01"}
          title={"Pick your battle"}
          description={"Select your workout to endure"}
        />
      </SectionWrapper>
    </div>
  );
}
