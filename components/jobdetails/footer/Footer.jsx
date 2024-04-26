import { View, Text, Pressable, Image, Linking } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./footer.style";
import { icons } from "../../../constants";

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.likeBtn}>
        <FontAwesome name="heart" style={styles.likeBtnImage} />
      </Pressable>

      <Pressable style={styles.applyBtn} onPress={() => Linking.openURL(url)}>
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </Pressable>
    </View>
  );
};

export default Footer;
