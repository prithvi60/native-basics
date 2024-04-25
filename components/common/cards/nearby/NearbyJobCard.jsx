import { View, Text, Pressable } from "react-native";

import styles from "./nearbyjobcard.style";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const NearbyJobCard = ({ title, companyType, location, handleNavigate }) => {
  return (
    <Pressable style={styles.container} onPress={handleNavigate}>
      {/* <Pressable style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles.logImage}
        />
      </Pressable> */}

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
          <Text style={{ padding: "3px", backgroundColor: "#FDFD23" }}>
            New
          </Text>
        </View>
        <View style={{}}>
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
