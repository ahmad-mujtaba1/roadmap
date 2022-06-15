import React, { useContext } from "react";
import { UserContext } from "../notes/UserContext";
export const Home = () => {
  const { value, setValue } = useContext(UserContext);
  return (
    <div>
      <h1>this is home</h1>
      <div>{value}</div>
      <button className="changeButton" onClick={() => setValue("hey!!")}>
        changeText
      </button>
    </div>
  );
};
