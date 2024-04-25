import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS } from "../constants";
import { Nearbyjobs, ScreenHeaderBtn, Welcome } from "../components";
// import { ScreenHeaderBtn2 } from "../components/common/header/ScreenHeaderBtn";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://nativegraphqlapi-production.up.railway.app/",
  cache: new InMemoryCache(),
});
const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        {/* <LinearGradient
        colors={["#00FF83", "#FFFFFF"]}
        start={{ x: 0.7, y: 0 }}
        // start={{ x: 0, y: 0 }}
        // end={{ x: 0, y: 0.5 }}
        // style={styles.button}
      > */}
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.linearGradient },
            headerShadowVisible: false,
            // contentStyle:{padding : "0px 10px"},

            headerLeft: () => (
              <ScreenHeaderBtn iconName={"tree"} title={"JobTree"} />
            ),
            // headerRight: () => <ScreenHeaderBtn2 iconName={"bars"} />,
            headerTitle: "",
          }}
        />
        {/* <View
        style={{
          backgroundColor: COLORS.linearGradient,
          padding: "5px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ScreenHeaderBtn iconName={"tree"} title={"JobTree"} />
        <ScreenHeaderBtn2 iconName={"bars"} />,
      </View> */}
        {/* </LinearGradient> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
            }}
          >
            <Welcome
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleClick={() => {
                if (searchTerm) {
                  router.push(`/search/${searchTerm}`);
                }
              }}
            />

            {/* <Popularjobs /> */}
            <Nearbyjobs />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default Home;
