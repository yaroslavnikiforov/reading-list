import React, { Component } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

class Booklist extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
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
}

export default Booklist;
