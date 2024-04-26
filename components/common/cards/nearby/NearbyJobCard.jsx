import { View, Text, Pressable, Image } from "react-native";

import styles from "./nearbyjobcard.style";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import imgData from "../../../../assets/images/kemal.jpg";

const NearbyJobCard = ({
  title,
  companyType,
  location,
  handleNavigate,
  src,
}) => {
  return (
    <Pressable style={styles.container} onPress={handleNavigate}>
      <View style={styles.textContainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginBottom: "20px",
          }}
        >
          <Text style={styles.jobName} numberOfLines={1}>
            {title}
          </Text>
          {/* <Text style={{ padding: "3px", backgroundColor: "#FDFD23" }}>
            New
          </Text> */}
          <Image
            source={{ uri: src }}
            style={styles.image}
          />
        </View>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <FontAwesome name="building" style={{ fontSize: "20px" }} />
            <Text style={styles.jobType}>{companyType}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <FontAwesome name="compass" style={{ fontSize: "20px" }} />
            <Text style={styles.jobLocation}>{location}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default NearbyJobCard;
