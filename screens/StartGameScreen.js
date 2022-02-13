import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert, Dimensions } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import Colors from "../constants/colors";

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmNumber, setConfirmNumber] = useState(false);
    const [selectedNumbner, setSelectedNumber] = useState();


    const confirmNumberHandler = () => {
        if (isNaN(enteredValue) || enteredValue <= 0 || enteredValue > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        setSelectedNumber(parseInt(enteredValue));
        setConfirmNumber(true);
        setEnteredValue('');
        Keyboard.dismiss();
    }
    const numbervalidator = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));

    }
    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmNumber(false);
    }
    let confirmedOutput
    if (confirmNumber) {
        confirmedOutput =
            <Card style={styles.summaryContainer}>
                <Text>output number is {selectedNumbner}</Text>
                <NumberContainer>{selectedNumbner}</NumberContainer>
                <MainButton onPress={() => props.onStartGame(selectedNumbner)}>START GAME</MainButton>

            </Card>

    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.screen}>
                <Text style={styles.title} >Start a new game</Text>

                <Card style={styles.inputContainer}>
                    <Text title="Select a number"></Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCorrect={false}
                        autoCapitalize='none'
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={numbervalidator}
                        value={enteredValue} />
                    <View style={styles.buttonContainer}>
                        <View style={StyleSheet.button}>
                            <Button title="Reset" onPress={resetInputHandler} color={Colors.accent}></Button>
                        </View>
                        <View style={StyleSheet.button}>
                            <Button title="Confirm" onPress={confirmNumberHandler} color={Colors.primary}></Button>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 20,
        fontFamily: 'open-sans-bold'

    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        // width: 130
        width:Dimensions.get('window').width/3
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'

    }
});

export default StartGameScreen;