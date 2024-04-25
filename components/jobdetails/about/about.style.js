import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES,SHADOWS } from "../../../constants";

const styles = StyleSheet.create({

  loadingText:{
    flex: 1,
    width: "100%",
    justifyContent: "center",
    fontSize: 16
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
    rowGap: 25
  },
  jobName: {
    fontSize: SIZES.medium,
    color: "black",
    fontFamily: FONT.bold,
   
  },
  jobType: {
    fontSize: SIZES.medium + 2,
    fontFamily: FONT.medium,
    color: COLORS.gray,
    // marginTop: 3,
    textTransform: "capitalize",
  },
  jobLocation: {
    fontSize: SIZES.small + 2,
    fontFamily: FONT.medium,
    color: COLORS.gray,
    // marginTop: 3,
    textTransform: "capitalize",
  },
  list : {
    fontFamily: FONT.medium,
    fontSize : 14,
    marginStart:12,
    marginTop: 10
  }
  // container: {
  //   marginTop: SIZES.large,
  //   backgroundColor: "#FFF",
  //   borderRadius: SIZES.medium,
  //   padding: SIZES.medium,
  // },
  // headText: {
  //   fontSize: SIZES.large,
  //   color: COLORS.primary,
  //   fontFamily: FONT.bold,
  // },
  // contentBox: {
  //   marginVertical: SIZES.small,
  // },
  // contextText: {
  //   fontSize: SIZES.medium - 2,
  //   color: COLORS.gray,
  //   fontFamily: FONT.regular,
  //   marginVertical: SIZES.small / 1.25,
  // },
});

export default styles;
