import React, { useRef } from "react";
import { useTheme } from "../ThemeContext";
import { Text, View } from "react-native";
import ScreenRow from "./ScreenRow";

const Screen = ({ topNumber, bottomNumber, operation }) => {
  const { theme } = useTheme();
  const topNumberRef = useRef(null);
  const bottomNumberRef = useRef(null);

  function scrollToRight(ref) {
    if (ref.current) {
      ref.current.scrollToEnd({ animated: false });
    }
  }

  function scrollToLeft(ref) {
    if (ref.current) {
      ref.current.scrollTo({ x: 0, animated: false });
    }
  }

  function bottomRowLogic() {
    scrollToRight(bottomNumberRef);
    scrollToLeft(topNumberRef);
  }

  return (
    <View
      className={`w-full h-[90px] flex flex-row justify-end items-center gap-2 mb-4 rounded p-4 ${theme.screenBg}`}
    >
      <View className="w-8/10 flex justify-center p-2">
        <ScreenRow
          rowRef={topNumberRef}
          number={topNumber}
          bottomNumber={bottomNumber}
          behaviour={() => scrollToRight(topNumberRef)}
        />

        {bottomNumber && (
          <ScreenRow
            rowRef={bottomNumberRef}
            number={bottomNumber}
            bottomNumber={bottomNumber}
            behaviour={bottomRowLogic}
          />
        )}
      </View>

      <View className="w-2/10 flex">
        <Text
          className={`text-end ${theme.topText} ${
            !bottomNumber ? "text-4xl" : "text-2xl mb-3"
          }`}
        >
          {operation}
        </Text>
      </View>
    </View>
  );
};
export default Screen;
