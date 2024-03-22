import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./about.style";

const About = ({ job }) => {
  console.log(job.jobDesc);
  return (
    // <View style={styles.container}>
    //   <Text style={styles.headText}>About the job:</Text>

    //   <View style={styles.contentBox}>
    //     <Text style={styles.contextText}>{info}</Text>
    //   </View>
    // </View>
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
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
              gap: "10px",
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
              gap: "10px",
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
              style={{ display: "flex", flexDirection:"row", alignItems: "center", gap: "5px" }}
            >
              <FontAwesome name="circle" style={{fontSize: "8px"}} />
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
