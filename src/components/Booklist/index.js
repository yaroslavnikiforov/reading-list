import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Booklist() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        <li style={{ background: theme.ui }}>Cashflow quadrant</li>

        <li style={{ background: theme.ui }}>The power of the moment now</li>

        <li style={{ background: theme.ui }}>Rich Dad, poor Dad</li>
      </ul>
    </div>
  );
}
