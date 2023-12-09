import React from "react";
import { useTheme } from "../ThemeContext";
import { Pressable, Text, View } from "react-native";

export default function CalcHeader() {
  const { theme, changeTheme, options, selectedOption } = useTheme();

  return (
    <View
      className={`mb-5 w-full flex flex-row justify-between items-center gap-4 ${theme.topText}`}
    >
      <Text className={`text-2xl font-bold ${theme.topText}`}>calc</Text>

      <View className="flex flex-row justify-center items-end gap-5 mb-3">
        <Text className={`mt-auto font-bold text-xs ${theme.topText}`}>
          THEME
        </Text>

        <View className="flex gap-1 justify-between items-center w-[60px]">
          <View className="flex flex-row justify-evenly gap-2.8 ">
            {options.map((opt) => (
              <Text key={opt} className={`mx-[7px] font-bold ${theme.topText}`}>
                {opt + 1}
              </Text>
            ))}
          </View>

          <View
            className={`${theme.keyPadBg} flex flex-row justify-between p-1 rounded-full w-full`}
          >
            {options.map((opt) => (
              <Pressable
                key={opt}
                onPressIn={() => changeTheme(opt)}
                hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
                className={`${
                  selectedOption === opt && theme.equalToggleBtnColor
                } rounded-full w-3 h-3`}
              ></Pressable>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
