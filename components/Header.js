import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{ props.title }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#171717",
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title:{
        color: "#FFD700",
        fontSize: 30,
        fontWeight: '900',
    }
});

export default Header;