import { StyleSheet } from "react-native";

export default StyleSheet.create({
  appView: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    margin: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 4,
  },
  listItem: {
    backgroundColor: "#f0f0f0",
    padding: 14,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  listItemText: {
    fontSize: 18,
  },
  listItemSub: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#444",
    marginTop: 12,
    marginHorizontal: 16,
  },
  detailValue: {
    fontSize: 16,
    marginHorizontal: 16,
    marginTop: 2,
    color: "#111",
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginVertical: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  searchInput: {
    fontSize: 16,
    height: 44,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    paddingHorizontal: 12,
    margin: 12,
  },
  aboutText: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 8,
    color: "#333",
  },
});
