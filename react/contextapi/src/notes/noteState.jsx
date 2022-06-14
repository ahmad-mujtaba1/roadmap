import React from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const state = {
    name: "mujtaba",
    learning: "react",
  };
  return (
    <NoteContext.Provider value={state}>{props.childeren}</NoteContext.Provider>
  );
};
export default NoteState;
