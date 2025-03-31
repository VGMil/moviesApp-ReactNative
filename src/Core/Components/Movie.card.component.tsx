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

export const MovieCard = React.memo(({ title, posterPath, onPress, size }: MovieCardProps) => {
    const {theme} = useTheme();
    const styles = StyleSheet.create({
        container:{
          width: size,
        },
        poster: {
          aspectRatio: 2 / 3,
          borderRadius: 20,
          resizeMode: 'cover',
          width: size,
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
    <TouchableOpacity onPress={onPress} style={styles.container}>
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
});


