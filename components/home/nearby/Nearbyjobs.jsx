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
      img
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

  if (loading)
    return (
      // <View style={styles.container}>
      <Text style={styles.loadingText}>Loading...</Text>
      // </View>
    );
  if (error) return `Error : ${error.message}`;

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
            src={job.img}
            key={job.id}
            // handleNavigate={""}
            handleNavigate={() =>
              // router.push(`/job-details/${job.title.replace(/\s/g, "-")}`)
              router.push(`/job-details/${job.id}`)
            }
          />
        ))}
      </View>
    </View>
  );
};

export default Nearbyjobs;
