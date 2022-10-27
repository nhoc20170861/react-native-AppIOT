import { StyleSheet } from "react-native";
import color from "../../contains/color";
const styles = StyleSheet.create({
    addTask: {
        marginTop: 10,
        width: '100%',
        bottom: 30,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    input: {
        width: '84%',
        height: 44,
        backgroundColor: color.white,
        borderColor: "blue",
        borderRadius: 20,
        borderWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    iconWrapper: {
        width: 44,
        height: 44,
        backgroundColor: color.primary,
        borderRadius: 44,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: color.background,

    },
    icon: {
        fontSize: 24,
        color: '#fff',
    }
});

export default styles;