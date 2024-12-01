import { View, Text, StyleSheet, Alert, FlatList } from "react-native"
import { useState, useEffect } from "react";
import Title from "../components/ui/Title"
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from "../components/game/GuessLogItem";


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}



let minBoundary = 1
let maxBoundary = 100

function GameScreen({ choosennumber, ongameover, round }) {
    const initialguess = generateRandomBetween(1, 100, choosennumber)
    const [currentguess, setcurrentguess] = useState(initialguess)
    const [guessrounds, setguessrounds] = useState([initialguess])
    useEffect(() => {
        if (currentguess === choosennumber) {
            ongameover();
            let count = guessrounds.length
            round(count - 1)
        }
    }, [currentguess, choosennumber, ongameover])
    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    }, [])
    function onGuessHandler(direction) {
        if ((direction === "lower" && currentguess < choosennumber) || (direction === "greater" && currentguess > choosennumber)) {
            Alert.alert("Don't lie", "You know that this is wrong....", [{ text: 'Sorry', style: 'cancel' }]);
            return;
        }
        if (direction === "lower") {
            maxBoundary = currentguess;
        } else {
            minBoundary = currentguess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentguess)

        setcurrentguess(newRndNumber)
        setguessrounds(currentlist => [...currentlist, newRndNumber])
    }
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentguess}</NumberContainer>
            <Card>
                <InstructionText>Higher or Lower</InstructionText>
                <View style={styles.buttoncontainer}>
                    <View style={styles.buttoninnercontainer}>
                        <PrimaryButton onPress={onGuessHandler.bind(this, 'lower')}>
                            <AntDesign name="plus" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttoninnercontainer}>
                        <PrimaryButton onPress={onGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <FlatList data={guessrounds} renderItem={(itemData) =>
                <GuessLogItem roundnumber={(itemData.index) + 1} guess={itemData.item} />
            } keyExtractor={(item) => item} />
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
        alignItems: 'center'
    },
    buttoncontainer: {
        flexDirection: 'row'
    },
    buttoninnercontainer: {
        flex: 1
    }
})