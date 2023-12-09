import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";

const Button = ({
  button,
  fontColor,
  bgColor,
  shadowColor,
  hover,
  handleButton,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <View
      key={button}
      className={`${
        button === "RESET" || button === "=" ? "w-[45%]" : "w-[20%]"
      } m-[2.5%] `}
    >
      <Pressable
        className={`rounded z-20 relative flex items-center justify-center h-[60px] ${
          isHovered ? hover : bgColor
        }`}
        onPressIn={() => {
          setIsHovered(true), handleButton(button);
        }}
        onPressOut={() => setIsHovered(false)}
      >
        <Text
          className={`text-center font-bold ${
            button === "RESET" || button === "DEL" ? "text-2xl" : "text-3xl"
          } ${fontColor}`}
        >
          {button}
        </Text>
      </Pressable>
      <View
        className={`${shadowColor} pb-[7px] z-10 rounded-b relative bottom-[4px]`}
      />
    </View>
  );
};

export default Button;
