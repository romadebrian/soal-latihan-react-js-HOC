import { Text, View } from "react-native";
import React, { Component } from "react";

export class Button extends Component {
  render() {
    return (
      <div>
        <h1>x + 1</h1>
        <p>hasil: {nomor}</p>
        <button onClick={handlerNomor}>tambah</button>
      </div>
    );
  }
}

export default Button;
