import { View, Text, Pressable, StyleSheet, Button } from "react-native"
import Colors from "../../constants/colors"


function PrimaryButton({ children, onPress }) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.ripple}>
            <View style={styles.container}>
                <Text style={styles.buttontext}>{children}</Text>
            </View>
        </Pressable>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary500,
        borderRadius: 28,
        paddingHorizontal: 16,
        paddingVertical: 8,
        margin: 4
    },
    buttontext: {
        color: 'white',
        textAlign: 'center'
    },
    ripple: {
        opacity: 0.75
    }
})