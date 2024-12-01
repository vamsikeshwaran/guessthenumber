import { View, Text, Image, StyleSheet } from "react-native"
import Title from "../components/ui/Title"
import Colors from "../constants/colors"
import PrimaryButton from "../components/ui/PrimaryButton"

function GameOverScreen({ rounds, userNumber, onstartnewgame }) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER</Title>
            <View style={styles.imagecontainer}>
                <Image style={styles.image} source={require("../assets/success.png")} />
            </View>
            <Text style={styles.summaryText}>You needed <Text style={styles.highlight}>{rounds}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
            <PrimaryButton onPress={onstartnewgame}>Start new Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen
const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagecontainer: {
        width: deviceWidth > 380 ? 150 : 300,
        height: deviceWidth > 380 ? 150 : 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: "white",
        overflow: "hidden",
        margin: 36
    },
    image: {
        height: "100%",
        width: "100%"
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
})