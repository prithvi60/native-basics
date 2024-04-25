import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./welcome.style";
import { COLORS, icons, SIZES } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <LinearGradient
      colors={["#00FF83", "#FFFFFF"]}
      // start={{ x: 0, y: 0.7 }}
      start={{ x: 0, y: 0.5 }}
      // end={{ x: 0, y: 0.2 }}
      // style={{}}
    >
      <View style={styles.box}>
        <View style={styles.container}>
          {/* <Text style={styles.userName}>Hello Adrian</Text> */}
          <Text style={styles.welcomeMessage}>
            JobTree is the #1 destination to find and list incredible remote
            jobs.
          </Text>
        </View>

        {/* <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
              placeholder="What are you looking for?"
            />
          </View>
          <Pressable style={styles.searchBtn} onPress={handleClick}>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={styles.searchBtnImage}
            />
          </Pressable>
        </View> */}

        <View
          style={{
            display: "flex",
            flexDirection:"row",
            alignItems: "center",
            backgroundColor: COLORS.white,
            paddingTop: "5px",
            paddingBottom: "5px",
            borderRadius: 10,
            height: 50,
            width: "100%",
          }}
        >
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Search job"
          />
          <Pressable style={styles.searchBtn} onPress={handleClick}>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={styles.searchBtnImage}
            />
          </Pressable>
        </View>

        <View style={styles.tabsContainer}>
          <FlatList
            data={jobTypes}
            renderItem={({ item }) => (
              <Pressable
                style={styles.tab(activeJobType, item)}
                onPress={() => {
                  setActiveJobType(item);
                  router.push(`/search/${item}`);
                }}
              >
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </Pressable>
            )}
            keyExtractor={(item) => item}
            contentContainerStyle={{ columnGap: SIZES.small }}
            horizontal
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
