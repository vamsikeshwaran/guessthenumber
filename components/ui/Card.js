import { View, StyleSheet, Dimensions } from "react-native"
import Colors from "../../constants/colors"
function Card({ children }) {
    return (
        <View style={styles.inputcontainer}>{children}</View>
    )
}

export default Card

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    inputcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth > 450 ? 18 : 36,
        padding: 16,
        backgroundColor: Colors.primary600,
        marginHorizontal: 24,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        marginTop: 10
    },
})