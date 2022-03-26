import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Field = ({name, value}) => {
    return (
    <View style={styles.field}>
        <Text style={styles.fieldName}>{name}</Text>
        <Text>{value}</Text>
    </View>);
}
const Movie = ({title, genre, releaseYear, staring, duration}) => {
    return (
    <View>
        <Text style={styles.title}>{title}</Text>
        <Field name={"Genres"} value={genre.join(', ')}/>
        {/* convertir la list en string, et va les separer par une virgule et un espace */}
        <Field name={"Release year"} value={releaseYear}/>
        <Field name={"Duration"} value={duration}/>
        <Field name={"Staring"} value={staring.join(', ')}/>
    </View>);
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: "center",
        padding: 15,
        marginTop: 10,
        backgroundColor: "#FFD700"
    },
    fieldName: {
        fontWeight: "bold"
    },
    field: {
        width: '100%',
        height: 40,
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5
    },

})

export default Movie;
