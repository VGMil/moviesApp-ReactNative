import { Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../Core/Hooks/useTheme';
import { Loader } from '../../Core/Components/loaders/Loader.component';
import { useState, useCallback } from 'react';
import { useFetch } from '../../Core/Hooks/useFetch';
import { basicApiUrl, API_CONSTANTS } from '../../Core/Utils/constants/api.constants';
import { SearchInput } from './Components/search.input.component';
import { MaterialIcons } from '@expo/vector-icons';
import { MovieCard } from '../../Core/Components/Movie.card.component';

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
  const [isLoading, setIsLoading] = useState(true);
  const {width, height} = Dimensions.get('window');

  const handleLoading = (state: boolean): boolean => {
    setTimeout(() => {
      setIsLoading(state);
    }, 5000);
    return state;
  };

  const { data, error } = useFetch<MovieResponse>(
    basicApiUrl(API_CONSTANTS.TMDB_URL.NOW_PLAYING),
    handleLoading
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
    flatListContent: {
      gap: 32,
    }
  });
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

      {isLoading && data == null? <Loader /> :
      
        <View>
          <Text style={styles.CategoryHeader}>Now Playing</Text>
          <FlatList
            data={data?.results}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
            snapToInterval={width - 31}
            snapToAlignment="start"
            decelerationRate={0}
            renderItem={({ index, item }) => (
              <MovieCard
                key={item.id}
                title={item.title}
                posterPath={item.backdrop_path}
                size={width  - 64}
                isFirst={index === 0}
                isLast={index === (data?.results?.length ?? 0) - 1}
              />
            )}
            style={styles.moviesContainer}
          />
        </View>


      }
    </ScrollView>
  );
}