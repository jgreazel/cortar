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
  paddingY: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default styles;
