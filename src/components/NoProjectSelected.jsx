import React from "react";
import img from "../assets/no-projects.png";
import Button from "./Button";


export default function NoProjectSelected({onStartAddProject}) {
  return (
    <div className=" mt-16 text-center w-2/3  ">
      <img
        src={img}
        alt="An empty task"
        className=" w-16 h-16 mx-auto object-contain "
      />
      <h1 className=" text-xl font-bold text-stone-500 my-4  ">
        No Project Selected
      </h1>
      <p className=" text-stone-400 mb-4 ">
        Select a project or get stared with a new one.
      </p>
      <p className=" mt-8 ">
        <Button onClick={onStartAddProject} >
          Creat New Project
        </Button>
      </p>
    </div>
  );
}
