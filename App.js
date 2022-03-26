import { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Button } from 'react-native';
import SearchForm from './components/SearchForm';
import Header from './components/Header'
import Movie from './components/Movie'

//regarder la solution de labo4
const App = () => {
  const initialState = {
    form: {
        title:"",
        staring: "",
        director: "",
        genre: "",
        releaseDate: "",
        duration: ""
    },
    movies: [],
    view: "search"
  }


  const [state, setState] = useState(initialState)

  const onSearch = () => {
        setState({...state, view: "load"})
        const url = "https://movies-420kbc-lg.herokuapp.com/";

        const params = Object.keys(state.form)
          .filter((k => state.form[k]))
          .map(field => `${field}=${state.form[field]}`)
          .join("&") //"title=&director=Ridley"

        fetch(`${url}?${params}`)
            .then(resp => resp.json())
            .then(movies => {
                setState({...state, movies, view: "results"})
                
        })
  }


  const onCancel = ()=>{
    setState(initialState);
  }
  
  const onBackToResults = ()=>{
    setState({...state, view:"results"});
  }

  const onBackToSearch = () =>{
    setState({...state, view:"search"});
  }

  // on edit retourne une fonction avec le paramettre value
  const onEdit = (field) => (value) => {
    const newForm = state.form;
    newForm[field] = value;

    const newState = {...state, form:{...state.form, [`${field}`]: value}}
    setState(newState)
  }

  let mainView = null;
  if(state.view === "search" ){
    mainView =  <SearchForm {...state.form} onCancel={onCancel} onSearch={onSearch} onEdit={onEdit} onBackToResults={onBackToResults}/>
  }
  if(state.view === "load"){
    mainView = <ActivityIndicator size="large" color="#00ff00"/>
  }
  if(state.view === "results"){
    mainView = <ScrollView>
      <Button title="Back to search" onPress={onBackToSearch}/>
         {state.movies.length == 0 && <Text>Aucun résultats </Text>}
         {/* si y il a pas de resultat on affiche aucun resultat */}
         {state.movies.map((m)=> <Movie {...m} />)}
     </ScrollView>
  }
  return <View>
        <Header title="Lionel Movie Database"/>
        {mainView}
    </View>
}
export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    alignItems: 'center',
  },
  button: {
    width: '45%'
  },
});