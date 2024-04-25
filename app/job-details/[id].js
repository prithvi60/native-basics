import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
// import useFetch from "../../hook/useFetch";
import {
  ScreenHeaderBtn2,
  ScreenHeaderBtnBack,
} from "../../components/common/header/ScreenHeaderBtn";
import About from "../../components/jobdetails/about/About";
import { LatestJob } from "../../constants/data";

// const tabs = ["About", "Qualifications", "Responsibilities"];
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://nativegraphqlapi-production.up.railway.app/",
  cache: new InMemoryCache(),
});

const JobDetails = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();

  // useEffect(() => {
  //   specificJob.filter((job) =>
  //     job.title === params.id.replace(/-/g, " ")
  //       ? setSpecificJob(job)
  //       : "Something Went Wrong"
  //   );
  // }, []);

  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtnBack
                // iconName={"<"}
                handlePress={() => router.push("/home")}
              />
            ),
            // headerRight: () => <ScreenHeaderBtn2 iconName={"bars"} />,
            headerTitle: "",
          }}
        />

        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* {specificJob.length == 0 ? (
              <Text>No Data Found</Text>
            ) : ( */}
            <About
              // job={specificJob}
              // specificJob={specificJob}
              // setSpecificJob={setSpecificJob}
              id={params.id}
            />
            {/* )} */}
            {/* <Text>hELLO</Text> */}
          </ScrollView>
          <JobFooter url={"https://careers.google.com/jobs/"} />
        </>
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default JobDetails;
