import { StyleSheet, Text } from "react-native"
import Colors from "../../constants/colors"

function InstructionText({ children }) {
    return (<Text style={styles.instruction}>{children}</Text>)
}
export default InstructionText

const styles = StyleSheet.create({
    instruction: {
        fontFamily: 'open-sans',
        color: Colors.yellow,
        fontSize: 24,
        marginBottom: 12
    },
})