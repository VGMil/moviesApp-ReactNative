import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../Core/Hooks/useTheme';
import { Loader } from '../../Core/Components/loaders/Loader.component';
import React, { useState } from 'react';
import { useFetch } from '../../Core/Hooks/useFetch';
import { basicApiUrl, API_CONSTANTS } from '../../Core/Utils/constants/api.constants';
import { SearchInput } from './Components/search.input.component';
import { MaterialIcons } from '@expo/vector-icons';
import { MovieCard } from '../../Core/Components/Movie.card.component';
import { MainList } from './Components/MainList.flatList.component';

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
}

interface MovieResponse {
  results: Movie[];
}

export const HomeScreen = ({ navigation }: any) => {
  const { theme } = useTheme();
  const { width, height } = Dimensions.get('window');
  const ITEM_SIZE = width*0.7;

  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

  const { data:dataNowPlaying, error:ErrorNowPlaying} = useFetch<MovieResponse>(
    basicApiUrl(API_CONSTANTS.TMDB_URL.NOW_PLAYING),
    setIsLoading
  );
  React.useEffect(() => {
    if (dataNowPlaying) {
      setNowPlaying(dataNowPlaying.results);
    }
    if (ErrorNowPlaying) {
      console.error('Fetch error:', ErrorNowPlaying);
      setIsLoading(false);
    }
  }, [dataNowPlaying]);


  const { data, error } = useFetch<MovieResponse>(
    basicApiUrl(API_CONSTANTS.TMDB_URL.POPULAR),
    setIsLoading,
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme?.colors.background,
    },
    scrollViewContent: {
      alignItems: 'center',
    },
    headerContainer: {
      flex: 1,
      paddingRight: 16,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    CategoryHeader: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginLeft: 16,
    },
    moviesContainer: {
      marginTop: 20,
    },
  });
  if (ErrorNowPlaying) {
    return <Text>Error: {ErrorNowPlaying.toString()}</Text>;
  } 
  console.log('isLoading', isLoading);
  if (!isLoading && nowPlaying.length === 0) {
    return <Text>No movies available</Text>;
  }
  if (isLoading) {
    console.log('isLoading', isLoading);
    return <Loader />;
  }else  {
  return (
      <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.headerContainer}>
          <SearchInput onSearch={() => 'hola'} />
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <MaterialIcons
              name="settings"
              size={24}
              color={theme?.colors.primary}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.CategoryHeader}>Now Playing</Text>
          <MainList
            itemSize={ITEM_SIZE}
            data={nowPlaying} 
            keyExtractor={(_,index) => index.toString()}
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
      </ScrollView>
    );
  }
  }
