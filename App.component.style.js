import { StyleSheet } from "react-native";
import color from "./contains/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        // alignItems: "center",
        // justifyContent: "center",
    },
    body: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 18,
    },
    header: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#21a3d0",
    },

    items: {
        marginTop: 15,
    },

})
export default styles;