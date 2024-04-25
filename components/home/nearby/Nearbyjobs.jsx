import React, { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, Pressable, ActivityIndicator } from "react-native";

import styles from "./nearbyjobs.style";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
// import useFetch from "../../../hook/useFetch";
import { LatestJob } from "../../../constants/data";
import { useQuery, gql } from "@apollo/client";

const GetAllNearByJobs = gql`
  query GetAllJobs {
    getAllJobs {
      title
      location
      companyType
      id
    }
  }
`;

const Nearbyjobs = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const { loading, error } = useQuery(GetAllNearByJobs, {
    onCompleted: (queryData) => {
      setJobs(queryData.getAllJobs);
    },
  });
  // console.log(jobs);
  if (loading) return null;
  if (error) return `Error : ${error}`;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <Pressable>
          <Text style={styles.headerBtn}>Show all</Text>
        </Pressable>
      </View>

      <View style={styles.cardsContainer}>
        {jobs.map((job) => (
          <NearbyJobCard
            title={job.title}
            location={job.location}
            companyType={job.companyType}
            key={job.id}
            // handleNavigate={""}
            handleNavigate={() =>
              // router.push(`/job-details/${job.title.replace(/\s/g, "-")}`)
              router.push(`/job-details/${job.id}`)
            }
          />
        ))}
      </View>

      {/* <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View> */}
    </View>
  );
};

export default Nearbyjobs;
