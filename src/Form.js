import React from "react";
import { Input } from "./Input";

export const Form = function(props) {
  const { onSubmit } = props;
  return (
    <div className="Form">
      <form onSubmit={onSubmit}>
        <Input type="text" name="user" placeholder="zenius" />
        <Input type="email" name="email" placeholder="zenius2050@gmail.com" />
        <Input type="password" name="password" placeholder="password" />
        <button id="submit">Sign Up</button>
      </form>
    </div>
  );
};
