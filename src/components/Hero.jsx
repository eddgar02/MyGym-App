import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div
      className="min-h-screen flex flex-col gap-10
    items-center justify-center text-center max-w-[700] 
    w-full mx-auto p4"
    >
      <div className="flex flex-col gap-4">
        <p>ALL IT TAKES IS</p>
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          CONSISTENCY
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I acknowledge that in order to reach my fitness goals I will need to be
        consistent. I need to be consistent in going to the gym and eating the
        right foods.{" "}
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      ></Button>
    </div>
  );
}
