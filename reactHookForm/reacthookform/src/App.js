import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import React from "react";

function App() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="container">
      <form
        className="container1"
        onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
      >
        <input {...register("email")} placeholder="email" />

        <input {...register("name")} placeholder="name" />
        <p>{data}</p>
        <input type="submit" />
      </form>
      <div>
        <p>{}</p>
      </div>
    </div>
  );
}
export default App;
