import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: "#F0F1F2",
  },
  centerContainer: {
    alignItems: "center",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  blueText: {
    color: "#3182CE",
  },
  image: {
    height: 400,
    width: "100%",
    borderRadius: 8,
  },
  cardImage: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  card: {
    width: "90%",
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowRadius: 2,
    shadowColor: "#000",
    padding: 8,
  },
  chip: {
    margin: 5,
    backgroundColor: "#fff",
  },
  selectedBorder: {
    borderColor: "#3182CE",
    borderWidth: 2,
  },
  floatBottom: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
  },
  filterButton: {
    // height: 24,
    // width: 24,
    borderRadius: 50
  },
  floatRight: {
    position: "absolute",
    bottom: 30,
    right: 30,
    alignSelf: "center",
  },
  floatMiddle: {
    position: "absolute",
    bottom: "50%",
    alignSelf: "center",
  },
  paddingLeft: {
    paddingLeft: 5,
  },
  padding: {
    padding: 10,
  },
  noPadding: {
    padding: 0,
  },
  paddingTRL: {
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  paddingY: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default styles;
