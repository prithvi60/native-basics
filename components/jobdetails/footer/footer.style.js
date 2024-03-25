import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  likeBtn: {
    width: 55,
    height: 55,
    // borderWidth: 1,
    // borderColor: "#00FF83",
    // borderRadius: SIZES.medium,
    backgroundColor: "#00FF83",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
  },
  likeBtnImage: {
    // width: "40%",
    // height: "40%",
    fontSize: 20,
    color:"#DC143C",
    tintColor: "#FFFFFF",
  },
  applyBtn: {
    flex: 1,
    backgroundColor: "#00FF83",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.medium,
    borderRadius: SIZES.medium,
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    // color: "",
    fontFamily: FONT.bold,
  },
});

export default styles;
