import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, Image } from 'react-native';
import { useTheme } from '../../Core/Hooks/useTheme';
import { Theme } from '../../Core/Utils/constants/theme.constants';

import { useFetch } from '../../Core/Hooks/useFetch';
import { API_CONSTANTS, basicApiUrl, getImageUrl } from '../../Core/Utils/constants/api.constants';
import { Movie, MovieResponse } from '../../Core/Utils/types/movie.type';
import { Loader } from '../../Core/Components/loaders/Loader.component';
import { MovieDetails } from './Components/details.movie';


interface HomeScreenProps {
  // Add any props here if needed
}
const { width, height } = Dimensions.get('window');

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }: any) => {
  const [loading, setLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);


  const { data: dataNowPlaying, error: ErrorNowPlaying } = useFetch<MovieResponse>(
    basicApiUrl(API_CONSTANTS.TMDB_URL.NOW_PLAYING),
    setLoading
  );

  React.useEffect(() => {
    if (dataNowPlaying) {
      setNowPlaying(dataNowPlaying.results);
    }
    if (ErrorNowPlaying) {
      console.error('Fetch error:', ErrorNowPlaying);
      setLoading(false);
    }
  }, [dataNowPlaying])


  if (loading) {
    return <Loader></Loader>
  } else {
    return <HomeTemplate
      navigation={navigation}
      nowPlaying={nowPlaying}
      error={ErrorNowPlaying as Error}
    />;
  }
};

const HomeTemplate = ({ navigation, nowPlaying, error }: { navigation: any, nowPlaying: Movie[], error?: Error }) => {
  const { theme } = useTheme();
  if (error) {
    return <Text>Error: {error.message}</Text>
  }
  if (nowPlaying.length === 0) {
    return <Text>No data available</Text>
  }
  return (
    <View style={styles(theme).nowPlayingContainer}>
      <Animated.FlatList
        data={nowPlaying}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={width}
        snapToAlignment="center"
        decelerationRate={0}
        renderItem={({ item, index }) => (
          <View style={styles(theme).container}>
            <Image
              source={{ uri: getImageUrl(item.poster_path) }}
              resizeMode="cover"
              style={[
                styles(theme).poster,
                StyleSheet.absoluteFillObject,
              ]}
            />
            <MovieDetails movie={item.id}></MovieDetails>
              
            
    
    
          </View>

        )}
      />
    </View>
  );
}

const styles = (theme: Theme) => {
  return (
    StyleSheet.create({
      nowPlayingContainer: {
        flex: 1,
      },
      container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        width,
        height,
        position: 'relative',
      },
      poster: {
        opacity: 0.5,
        aspectRatio: 16 / 9,
      },

    }))
}
