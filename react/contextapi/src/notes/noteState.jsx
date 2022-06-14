import React from "react";

import NoteContext from "./noteContext";
const NoteState = (props) => {
  const state = {
    name: "mujtaba",
    learning: "react",
  };
  return (
    <NoteContext.provider value={state}>{props.childeren}</NoteContext.provider>
  );
};
export default NoteState;
