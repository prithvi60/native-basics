import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./about.style";
import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";

// query for specific job
const GetJob = gql`
  query GetSpecificJob($id: ID!) {
    getJob(ID: $id) {
      title
      location
      jobDesc
      img
      companyType
    }
  }
`;

const About = ({ id }) => {
  // console.log("id", id);
  // const [job, setJob] = useState();
  const { loading, error, data } = useQuery(GetJob, {
    variables: {
      id,
    },
    // onCompleted: (queryData) => {
    //   setJob(queryData.getJob);
    //   console.log("data fetched", queryData.getJob);
    // },
  });

  if (loading)
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>;
      </View>
    );
  if (error) return `Error : ${error.message}`;

  const job = data.getJob;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap:10,
            // marginBottom: "20px",
          }}
        >
          <Text style={styles.jobName} numberOfLines={1}>
            {job.title}
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
              marginBottom: 7,
            }}
          >
            <FontAwesome name="building" style={{ fontSize: "12px" }} />
            <Text style={styles.jobType}>{job.companyType}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <FontAwesome name="compass" style={{ fontSize: "15px" }} />
            <Text style={styles.jobLocation}>{job.location}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.jobName}>Job Description</Text>
          {job.jobDesc.map((list, id) => (
            <View
              key={id}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <FontAwesome name="circle" style={{ fontSize: "8px" }} />
              <Text key={id} style={styles.list}>
                {list}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default About;
