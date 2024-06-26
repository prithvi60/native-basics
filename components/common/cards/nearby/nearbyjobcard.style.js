import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
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
  // logoContainer: {
  //   width: 50,
  //   height: 50,
  //   backgroundColor: COLORS.white,
  //   borderRadius: SIZES.medium,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // logImage: {
  //   width: "70%",
  //   height: "70%",
  // },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,

  },
  jobName: {
    fontSize: SIZES.medium,
    color: "black",
    fontFamily : FONT.bold
  },
  jobType: {
    fontSize: SIZES.medium + 2,
    fontFamily : FONT.medium,
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
  jobLocation : {
    fontSize: SIZES.small + 2,
    fontFamily : FONT.medium,
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
  image:{
    width : 30,
    height: 30,
    borderRadius : 25,
    // resizeMode: "contain",
  }
});

export default styles;
