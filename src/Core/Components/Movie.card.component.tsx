import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { getImageUrl } from '../Utils/constants/api.constants';
import { useTheme } from '../Hooks/useTheme';

interface MovieCardProps {
  title: string;
  posterPath: string;
  onPress?: () => void;
  size: number;
  isFirst?: boolean;
  isLast?: boolean;
}

export const MovieCard: React.FC<MovieCardProps> = ({ title, posterPath, onPress, size, isFirst, isLast }) => {
    const {theme} = useTheme();
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          marginHorizontal: 8,
        },
        poster: {
          aspectRatio: 2 / 3,
          borderRadius: 20,
        },
        titleContainer: {
          padding: 10,
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          color: theme.colors.text,
        },
      });
    return (
    <TouchableOpacity onPress={onPress} style={[
        styles.container,
        {
            width: size,
        },
        isFirst && {
            marginLeft: 32,
          },
          isLast && {
            marginRight: 32,
          },
          
        ]}>
      <Image
        source={{ uri: getImageUrl(posterPath) }}
        style={styles.poster}
        resizeMode="cover"
        width = {size}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};


