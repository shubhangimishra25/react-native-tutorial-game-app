import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Button, Text, Alert, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import Card from "./Card";
import NumberContainer from "./NumberContainer";
import MainButton from "./MainButton";

const generateRandombetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randNumber == exclude) {
        return generateRandombetween(min, max, exclude);
    }
    else {
        return randNumber;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandombetween(1, 100, props.userChoice));

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props

    useEffect(() => {
        if (currentGuess === userChoice) {
            props.onGameOver(true)
        }
    }
        , [currentGuess, userChoice, onGameOver]
    );

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Dont liee', 'you know that this is wrong', [{ text: 'sorry', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess
        }
        if (direction === 'greater') {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandombetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
    };
    return (
        <View style={styles.screen}>
            <Text>Opponents Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name="md-remove" size={24} color="white" />
                </MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name="md-add" size={24} color="white" />

                </MainButton>

            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        alignItems: 'center',
        flex: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
        maxWidth: '80%',
        width: 300
    }
});

export default GameScreen;