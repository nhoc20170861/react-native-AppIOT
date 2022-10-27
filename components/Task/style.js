import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({

    item: {
        flexDirection: "row",
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15,
    },

    square: {
        width: 40,
        height: 40,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    even: {
        backgroundColor: color.blue,
    },
    odd: {
        backgroundColor: color.green,
    },

    number: {
        fontSize: 18,
        fontWeight: "700",
        color: color.white,
    },

    content: {
        width: "75%",
        fontSize: 20,
    }

});

export default styles;