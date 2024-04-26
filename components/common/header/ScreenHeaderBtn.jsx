import { Text, Pressable, View } from "react-native";

import styles from "./screenheader.style";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FONT } from "../../../constants";

const ScreenHeaderBtn = ({ iconName, handlePress, title }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: "20px", fontFamily: FONT.bold }}>{title}</Text>
      <Pressable style={styles.btnContainer} onPress={handlePress}>
        <FontAwesome name={iconName} style={styles.btnImg} />
      </Pressable>
    </View>
  );
};

export default ScreenHeaderBtn;

export const ScreenHeaderBtn2 = ({ iconName, handlePress }) => {
  return (
    <Pressable style={styles.btnContainer} onPress={handlePress}>
      <FontAwesome name={iconName} style={styles.btnImg} />
    </Pressable>
  );
};

export const ScreenHeaderBtnBack = ({ handlePress }) => {
  return (
    <Pressable style={styles.btnContainer} onPress={handlePress}>
      <FontAwesome name={"arrow-left"} size={20}  />
      {/* <Text style={styles.btnImg}>{iconName}</Text> */}
    </Pressable>
  );
};
