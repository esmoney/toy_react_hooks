import * as React from "react";

Greetings.defaultProps = {
  mark: "!",
};

interface IGreetingsProps {
  name: string;
  mark: string;
}

export default function Greetings(props: IGreetingsProps) {
  return (
    <div>
      Hello, {props.name}, {props.mark}
    </div>
  );
}
