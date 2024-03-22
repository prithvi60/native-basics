import { Text, Pressable, View } from "react-native";

import styles from "./screenheader.style";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FONT } from "../../../constants";

// const ScreenHeaderBtn = ({ iconUrl,handlePress }) => {
//   return (
//     <Pressable style={styles.btnContainer} onPress={handlePress}>
//       <Image
//         source={iconUrl}
//         resizeMode='cover'
//         style={styles.btnImg}
//       />
//     </Pressable>
//   );
// };

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

export const ScreenHeaderBtnBack = ({ iconName, handlePress }) => {
  return (
    <Pressable style={styles.btnContainer} onPress={handlePress}>
      {/* <FontAwesome name={}  /> */}
      <Text style={styles.btnImg}>{iconName}</Text>
    </Pressable>
  );
};
