import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors, { Colors } from '../constants/colors';

const Header = props => {
    return (
    <View style={styles.header}>
        <Text style={styles.headertitle}>{props.title}</Text>
    </View>);
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        paddingTop: 36,
    },
    headertitle: {
        color: 'black',
        fontSize: 18,

    },
});
export default Header;