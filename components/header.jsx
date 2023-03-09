
import {Text, View, StyleSheet} from "react-native"

export default function Header (){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>To DO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: "crimson",
    },
    title: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        fontWeight: "bold",

    }
})