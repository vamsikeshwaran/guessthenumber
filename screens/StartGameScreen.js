import { TextInput, Button, View, StyleSheet, Alert, Text, useWindowDimensions } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react"
import GameScreen from "./GameScreen";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";



function StartGameScreen({ onpickednumber }) {
    const [enteredNumber, setenteredNumber] = useState('')
    function numberInputHandler(enternumber) {
        setenteredNumber(enternumber)
    }
    function resetInputHandler() {
        setenteredNumber('')
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Error", "Number has to be a number between 1 and 99", [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        onpickednumber(chosenNumber);
    }
    const { height, width } = useWindowDimensions
    return (
        <View style={styles.container}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a number</InstructionText>
                <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autocorrect={false} value={enteredNumber} onChangeText={numberInputHandler} />
                <View style={styles.buttoncontainer}>
                    <View style={styles.buttoninnercontainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttoninnercontainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

// const deviceWidth = Dimensions.get('window').height

export default StartGameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: deviceWidth < 400 ? 30 : 100,
        alignItems: 'center'
    },
    instruction: {
        color: Colors.yellow,
        fontSize: 24
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.yellow,
        borderBottomWidth: 2,
        color: Colors.yellow,
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center'
    },
    buttoncontainer: {
        flexDirection: 'row',
    },
    buttoninnercontainer: {
        flex: 1
    }

})