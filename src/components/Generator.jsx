import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p
          className="text-3xl sm:text-4xl md:text-5xl 
        font-semibold text-slate-400"
        >
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

export default function Generator(props) {
  const {
    muscles,
    setMuscles,
    poison,
    setPoison,
    goal,
    setGoal,
    updateWorkout,
  } = props;
  const [showModal, setShowModal] = useState(false);

  //let showModal = false;

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }

    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="min-h-screen ">
      <SectionWrapper
        id={"generate"}
        header={"generate your workout"}
        title={["It's ", "Time", "!"]}
      >
        <Header
          index={"01"}
          title={"Pick your battle"}
          description={"Select the workout you want to endure."}
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Object.keys(WORKOUTS).map((type, typeIndex) => {
            return (
              <button
                onClick={() => {
                  setMuscles([]);
                  setPoison(type);
                }}
                className={
                  "bg-slate-150 border border-green-400 duration-200 px-4 hover:border-green-600 mys duration-200 py-3 rounded-lg" +
                  (type === poison ? " border-green-600" : " border-green-400")
                }
                key={typeIndex}
              >
                <p className="capitalize">{type.replaceAll("_", " ")}</p>
              </button>
            );
          })}
        </div>
        <Header
          index={"02"}
          title={"What Muscles?"}
          description={"Select the muscles you want to work on."}
        />
        <div className="bg-slate-150 py-3 border border-solid border-green-400 rounded-lg flex flex-col">
          <button
            onClick={toggleModal}
            className="relative p-3 flex items-center justify-center"
          >
            <p className="capitalize text-xl">
              {muscles.length == 0 ? "Select muscle groups" : muscles.join(" ")}
            </p>
            <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
          </button>
          {showModal && (
            <div className="flex flex-col px-3 pb-3">
              {(poison === "individual"
                ? WORKOUTS[poison]
                : Object.keys(WORKOUTS[poison])
              ).map((muscleGroup, muscleGroupIndex) => {
                return (
                  <button
                    onClick={() => {
                      updateMuscles(muscleGroup);
                    }}
                    key={muscleGroupIndex}
                    className={
                      "hover:text-green-400 duration-200 " +
                      (muscles.includes(muscleGroup) ? " text-green-400" : " ")
                    }
                  >
                    <p className="uppercase">
                      {muscleGroup.replaceAll("_", " ")}
                    </p>
                  </button>
                );
              })}
            </div>
          )}
        </div>
        <Header
          index={"03"}
          title={"Choose focus"}
          description={"Select your ultimate objective."}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
            return (
              <button
                onClick={() => {
                  setGoal(scheme);
                }}
                className={
                  "bg-slate-150 border border-green-400 duration-200 px-4 hover:border-green-600 mys duration-200 py-3 rounded-lg" +
                  (scheme === goal ? " border-green-600" : " border-green-400")
                }
                key={schemeIndex}
              >
                <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
              </button>
            );
          })}
        </div>
        <Button func={updateWorkout} text={"Get Workout"}></Button>
      </SectionWrapper>
    </div>
  );
}
