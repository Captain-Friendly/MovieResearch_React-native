import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { PickerItem } from 'react-native/Libraries/Components/Picker/Picker';

const movieGenres = [
      "Thriller", "Anticipation", "Science-fiction",
      "Drama", "Lovestory", "Mystery",
      "Prison" ,"Crime", "Psychological",
      "Gangster", "Bio", "Sports",
      "Dystopie", "Horror", "Heist",
      "Comedy", "Neo-western", "Musical",
      "Christmas", "Fantasy", "Family",
      "Adventure", "Live-action", "Epic",
      "War", "Black", "Cyberpunk"
  ];

  //pour onEdit, onBackToResults, onSearch, onCancel, utiliser state, aide toi de labo4
  //onBackToResults

const SearchForm = ({title, staring, director, releaseDate, duration, genre, onCancel, onSearch, onBackToResults, onEdit}) => {
    return (
        <View>
            {/* on mets les titles,staring etc dans le value pour tout le temps afficher le state */}
            <View style={styles.flexContainer}>
                <Text >Advanced Search</Text>
                <Button style={styles.button} title={"BACK TO RESULTS"} onPress={onBackToResults}></Button>
            </View>

            <TextInput style={styles.textInput} placeholder="Titre" value={title} onChangeText={onEdit("title")}/>
            <TextInput style={styles.textInput} placeholder="Staring"  value={staring} onChangeText={onEdit("staring")}/>
            <TextInput style={styles.textInput} placeholder="Director" value={director} onChangeText={onEdit("director")}/>


            <View style={styles.flexContainer}>
                <Text>Genre</Text>
                <Picker  style={styles.picker} selectedValue={genre} onValueChange={(itemValue)=>onEdit("genre")(itemValue)}>
                 {movieGenres.map(g => <Picker.Item label={g} value={g} key={g}/>)}
                </Picker>
            </View>

            <TextInput style={styles.textInput} placeholder="Release Date" value={releaseDate} onChangeText={onEdit("realeaseDate")}/>

            
            <TextInput style={styles.textInput} placeholder="Duration" value={duration} onChangeText={onEdit("duration")}/>


            <View style={styles.buttonContainer}>
                <Button style={styles.button} title={"CANCEL"} onPress={onCancel}></Button>
                <Button style={styles.button} title={"SEARCH"} onPress={onSearch}></Button>
            </View>
            
        </View>
    );
}

export default SearchForm;

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#F3F3F3',
        // flex: 1,
        fontSize: 18,
        height: 45,
        margin: 5,
        // padding:10
        // paddingVertical:50
    },
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        alignItems: 'center',
    },
    picker: {
        height: 50, 
        width: 200,
        borderColor: 'black',
        borderWidth: 2
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
    },
    buttonContainer: {
        paddingTop: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: '45%'
    },
});
