import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    item: {
        flexDirection: "row",
        backgroundColor: "#fff",
        paddingVertical: 14,
        paddingHorizontal: 15,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },

    square: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: "#58D68D",
        justifyContent: "center",
        alignItems: "center",
    },

    number: {
        fontSize: 18,
        fontWeight: "700",
        color: "#fff",
    },

    content: {
        width: "75%",
        fontSize: 20,
    }

});

export default styles;