import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useTheme } from '../../Core/Hooks/useTheme';
import { Theme } from '../../Core/Utils/constants/theme.constants';
import { SearchInput } from './Components/search.input.component';
import { MainList } from './Components/MainList.flatList.component';
import { useFetch } from '../../Core/Hooks/useFetch';
import { API_CONSTANTS, basicApiUrl } from '../../Core/Utils/constants/api.constants';
import { Movie, MovieResponse } from '../../Core/Utils/types/movie.type';
import { Loader } from '../../Core/Components/loaders/Loader.component';
import { MovieCard } from '../../Core/Components/Movie.card.component';


interface HomeScreenProps {
  // Add any props here if needed
}
const {width, height} = Dimensions.get('window');
const ITEM_SIZE = width*0.7;


export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }: any) => {
  const [loading, setLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);


  const { data:dataNowPlaying, error:ErrorNowPlaying} = useFetch<MovieResponse>(
    basicApiUrl(API_CONSTANTS.TMDB_URL.NOW_PLAYING),
    setLoading
  );

  React.useEffect(()=>{
    if(dataNowPlaying){
      setNowPlaying(dataNowPlaying.results);
    }
    if (ErrorNowPlaying) {
      console.error('Fetch error:', ErrorNowPlaying);
      setLoading(false);
    }
  },[dataNowPlaying])


  if(loading){
    return <Loader></Loader>
  }else{
    return <HomeTemplate 
    navigation={navigation}
    nowPlaying={nowPlaying}
    error={ErrorNowPlaying as Error}
    />;
  }
};

const HomeTemplate = ({navigation, nowPlaying, error}:{navigation:any, nowPlaying:Movie[], error?:Error}) => {
  const {theme} = useTheme();
  if(error){
    return <Text>Error: {error.message}</Text>
  }
  if(nowPlaying.length === 0){
    return <Text>No data available</Text>
  }
  return (
    <ScrollView style={styles(theme).container}>
      <View style={styles(theme).headerContainer}>
        <SearchInput onSearch={()=>'hola'}></SearchInput>
      </View>
      <View style={styles(theme).backdropContainer}>
        <Text style={{color: theme.colors.text}}>BackDrop Componet</Text>
      </View>
      <View style={styles(theme).nowPlayingContainer}>
        <MainList 
          data={nowPlaying}
          itemSize={ITEM_SIZE}
          dimensions={{width, height}}
          renderItem={({item}) =>
            <MovieCard 
              key={item.id}
              title={item.title}
              posterPath={item.backdrop_path}
              onPress={() => navigation.navigate('MovieDetail', {id: item.id})}
              size={ITEM_SIZE}
            />
          }
        />
      </View>

      <View style={styles(theme).restContainer}>
        <Text style={{color: theme.colors.text}}>NowPlaying Componet</Text>
      </View>
      <View style={styles(theme).restContainer}>
        <Text style={{color: theme.colors.text}}>NowPlaying Componet</Text>
      </View>
      <View style={styles(theme).restContainer}>
        <Text style={{color: theme.colors.text}}>NowPlaying Componet</Text>
      </View>
    </ScrollView>
  );
}


const styles = (theme:Theme)=>{
  return(
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    headerContainer: {
      alignItems: 'center',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
    backdropContainer:{
      flex: 1,
      marginTop: 60,
      height: 70,
      borderColor: 'red',
      borderWidth: 1,
    },
    nowPlayingContainer:{
      flex: 1,
      height: height*0.4,
    },
    restContainer:{
      flex: 1,
      height: 300,
      borderColor: 'red',
      borderWidth: 1
    }
}))
}
