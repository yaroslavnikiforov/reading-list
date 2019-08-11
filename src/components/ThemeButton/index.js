import React from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function ThemeButton() {
  return (
    <ThemeContext.Consumer>
      {context => {
        return <button onClick={context.toggleTheme}>Toggle the theme</button>;
      }}
    </ThemeContext.Consumer>
  );
}
