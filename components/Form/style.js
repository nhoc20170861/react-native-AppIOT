import { StyleSheet } from "react-native";
import color from "../../contains/color";
const styles = StyleSheet.create({
    addTask: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    input: {
        width: '80%',
        height: 44,
        backgroundColor: color.white,
        borderColor: "blue",
        borderRadius: 20,
        borderWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    iconWrapper: {
        width: 46,
        height: 46,
        backgroundColor: color.primary,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: '#eff7f8',

    },
    icon: {
        fontSize: 24,
        color: '#fff',
    }
});

export default styles;