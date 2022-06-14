import React, { useContext } from "react";
import noteContext from "../notes/noteContext";
const About = () => {
  const a = useContext(noteContext);

  return <h1>this is about{a.name}</h1>;
};
export default About;
