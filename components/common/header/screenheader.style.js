import { StyleSheet } from "react-native";
import { FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    // flex: 1,
    flexDirection : "row",
    alignItems: "center",
    paddingLeft: "30px",
    gap : 15
    // paddingRight: "30px",
  },
  btnContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  btnImg: {
    fontSize: "28px",
    fontFamily: FONT.bold,
    marginTop: 3,
    paddingLeft : 4
  },
});

export default styles;
