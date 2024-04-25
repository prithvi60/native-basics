import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  box: {
    marginTop: "20px",
    // display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    paddingLeft:"35px",
    paddingRight:"35px"
  },
  container: {
    width: "95%",
    marginTop: "10px",
    marginBottom: "10px",
  },
  welcomeMessage: {
    fontFamily: FONT.medium,
    fontSize: 20,
    color: "#4D4D4D",
    marginTop: 6,
    textAlign:"center"
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 58,
    width: "100%",
    position : "relative"
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    // marginRight: SIZES.small,
    display :"flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
    width: "100%"
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "85%",
    height: "100%",
    paddingHorizontal: SIZES.medium
  },
  searchBtn: {
    width: 40,
    height: "100%",
    backgroundColor: "#FDFD23",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: "black",
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    // borderWidth: 1,
    backgroundColor: activeJobType === item ? COLORS.primary : COLORS.tertiary,
    // color :activeJobType === item ? "white" : COLORS.gray2
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    // color: activeJobType === item ? "white" : COLORS.gray2,
    color : "white"
  }),
});

export default styles;
