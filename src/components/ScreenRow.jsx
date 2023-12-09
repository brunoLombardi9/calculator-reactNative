import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "../ThemeContext";

const ScreenRow = ({ rowRef, number, bottomNumber, behaviour }) => {
  const { theme } = useTheme();
  return (
    <View className="w-full flex items-end">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ref={rowRef}
        onContentSizeChange={behaviour}
      >
        <Text
          className={`${!bottomNumber ? "text-4xl" : "text-2xl"} ${
            theme.topText
          } font-bold `}
        >
          {number}
        </Text>
      </ScrollView>
    </View>
  );
};

export default ScreenRow;
