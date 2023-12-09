import React from "react";
import { numberButtons } from "../constants";
import { useTheme } from "../ThemeContext";
import { View } from "react-native";
import Button from "./Button";

const ButtonsPad = ({ handleButton }) => {
  const { theme } = useTheme();

  return (
    <View
      className={`w-full m-auto flex flex-row gap-1 flex-wrap justify-center items-center p-3 rounded ${theme.keyPadBg}`}
    >
      {numberButtons.map((button) => {
        let bgColor = "";
        let fontColor = "";
        let shadowColor = "";
        let hover = "";
        if (button === "RESET" || button === "DEL") {
          bgColor = theme.resetDelBtnColor;
          fontColor = theme.resetDelBtnText;
          shadowColor = theme.resetDelBtnShadow;
          hover = theme.resetDelBtnHover;
        } else if (button === "=") {
          bgColor = theme.equalToggleBtnColor;
          fontColor = theme.equalToggleBtnText;
          shadowColor = theme.equalToggleBtnShadow;
          hover = theme.equalToggleBtnHover;
        } else {
          bgColor = theme.normalBtnColor;
          fontColor = theme.normalBtnText;
          shadowColor = theme.normalBtnShadow;
          hover = theme.normalBtnHover;
        }

        return (
          <Button
            key={button}
            button={button}
            fontColor={fontColor}
            bgColor={bgColor}
            shadowColor={shadowColor}
            hover={hover}
            handleButton={handleButton}
          />
        );
      })}
    </View>
  );
};

export default ButtonsPad;
