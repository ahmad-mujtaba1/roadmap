import React from "react";
import { useContext } from "react";
import { UserContext } from "../notes/UserContext";

export const About = () => {
  const { value, setValue } = useContext(UserContext);
  return (
    <div>
      <h1>this is about</h1>
      <div>{value}</div>
    </div>
  );
};
