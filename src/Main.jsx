import { View } from "react-native";
import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import CalcHeader from "./components/CalcHeader";
import Screen from "./components/Screen";
import ButtonsPad from "./components/ButtonsPad";
import { StatusBar } from "expo-status-bar";

export default function Main() {
  const [operation, setOperation] = useState(null);
  const [topNumber, setTopNumber] = useState("0");
  const [bottomNumber, setBottomNumber] = useState("");
  const { theme, selectedOption } = useTheme();

  function writeNumber(button) {
    const number = button.toString();

    if (!operation) {
      topNumber === "0"
        ? setTopNumber(number)
        : setTopNumber(topNumber + number);
      return;
    }

    if (operation) {
      bottomNumber === "0"
        ? setBottomNumber(number)
        : setBottomNumber(bottomNumber + number);
    }
  }

  function handleDecimal() {
    if (!operation) {
      if (topNumber.includes(".")) {
        return;
      }
      setTopNumber(topNumber + ".");
      return;
    }

    if (operation) {
      if (bottomNumber.includes(".")) {
        return;
      }
      setBottomNumber(bottomNumber + ".");
    }
  }

  function selectOperation(button) {
    if (operation) {
      calculate();
      setOperation(button);
      return;
    }
    setOperation(button);
  }

  function deleteNumber() {
    if (operation) {
      bottomNumber.length === 1
        ? setBottomNumber("0")
        : setBottomNumber(bottomNumber.slice(0, -1));
      return;
    }

    if (!operation) {
      topNumber.length === 1
        ? setTopNumber("0")
        : setTopNumber(topNumber.slice(0, -1));
    }
  }

  function reset() {
    setOperation("");
    setBottomNumber("");
    setTopNumber("0");
  }

  function calculate() {
    if (!bottomNumber) {
      return;
    }

    const number1 = Number(topNumber);
    const number2 = Number(bottomNumber);
    let mathOperation = "";

    switch (operation) {
      case "+":
        mathOperation = number1 + number2;
        break;
      case "-":
        mathOperation = number1 - number2;
        break;
      case "x":
        mathOperation = number1 * number2;
        break;
      case "/":
        mathOperation = number1 / number2;
        break;
    }

    setTopNumber(mathOperation.toString());
    setBottomNumber("");
    setOperation("");
  }

  function handleButton(button) {
    if (typeof button === "number") {
      writeNumber(button);
      return;
    }

    if (button === ".") {
      handleDecimal(button);
      return;
    }

    if (button === "+" || button === "-" || button === "x" || button === "/") {
      selectOperation(button);
      return;
    }

    if (button === "RESET") {
      reset();
      return;
    }

    if (button === "DEL") {
      deleteNumber();
      return;
    }

    if (button === "=") {
      calculate();
      return;
    }
  }

  return (
    <View
      style={{ flex: 1 }}
      className={`${theme.mainBg} flex justify-center items-center`}
    >
      <StatusBar style={selectedOption === 2 ? "dark" : "light"} />
      <View className="flex justify-center items-center w-[85%]">
        <CalcHeader />
        <Screen
          topNumber={topNumber}
          bottomNumber={bottomNumber}
          operation={operation}
        />
        <ButtonsPad handleButton={handleButton} />
      </View>
    </View>
  );
}
