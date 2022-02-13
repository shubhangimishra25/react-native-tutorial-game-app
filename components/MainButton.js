import React from "react";
import { View, StyleSheet, TouchableOpacity ,Text} from "react-native";
import Colors from "../constants/colors";

const MainButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ ...styles.button, ...props.style }}>
                <Text style={{ ...styles.buttonText, ...props.style }}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius:25

    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize:18
    }
});
export default MainButton