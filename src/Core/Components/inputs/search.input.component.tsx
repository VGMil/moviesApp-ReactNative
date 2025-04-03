import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useTheme } from '../../Hooks/useTheme';


interface SearchInputProps {
  onSearch: (text: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <View style={[styles.searchContainer, { backgroundColor: theme.colors.background }]}>
        <MaterialIcons
          name="search"
          size={24}
          color={theme.colors.primary}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Buscar Peliculas..."
          style={[styles.input, { color: theme.colors.text }]}
          onChangeText={onSearch}
          placeholderTextColor={theme.colors.text}
          onPressIn={() => console.log('tap')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '80%',
  },
  searchContainer: {
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
});
