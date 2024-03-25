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
import useFetch from "../../hook/useFetch";
import {
  ScreenHeaderBtn2,
  ScreenHeaderBtnBack,
} from "../../components/common/header/ScreenHeaderBtn";
import About from "../../components/jobdetails/about/About";
import { LatestJob } from "../../constants/data";

// const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();
  const [data, setData] = useState("");
  // console.log(params.id.replace(/-/g, " "));

  useEffect(() => {
    LatestJob.filter((job) =>
      job.title === params.id.replace(/-/g, " ")
        ? setData(job)
        : "Something Went Wrong"
    );
  }, []);
  // console.log(data);

  // const { data, isLoading, error, refetch } = useFetch("job-details", {
  //   job_id: params.id,
  // });

  // const [activeTab, setActiveTab] = useState(tabs[0]);
  // const [refreshing, setRefreshing] = useState(false);

  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);
  //   refetch()
  //   setRefreshing(false)
  // }, []);

  // const displayTabContent = () => {
  //   switch (activeTab) {
  //     case "Qualifications":
  //       return (
  //         <Specifics
  //           title='Qualifications'
  //           points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
  //         />
  //       );

  //     case "About":
  //       return (
  //         <JobAbout info={data[0].job_description ?? "No data provided"} />
  //       );

  //     case "Responsibilities":
  //       return (
  //         <Specifics
  //           title='Responsibilities'
  //           points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
  //         />
  //       );

  //     default:
  //       return null;
  //   }
  // };

  return (
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
        {/* <ScrollView showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data available</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
              />

              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.length == 0 ? <Text>No Data Found</Text> : <About job={data} />}
          {/* <Text>hELLO</Text> */}
        </ScrollView>
        <JobFooter url={"https://careers.google.com/jobs/"} />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
