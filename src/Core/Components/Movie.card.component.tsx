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

export const MovieCard = React.memo((props: MovieCardProps) => {
    const {theme} = useTheme();
    const styles = StyleSheet.create({
        container:{
          width: props.size,
        },
        poster: {
          aspectRatio: 4 / 3,
          borderRadius: 20,
          resizeMode: 'cover',
          width: props.size,
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
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Image
        source={{ uri: getImageUrl(props.posterPath) }}
        style={styles.poster}
        resizeMode="cover"
        width = {props.size}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}, (prev, next) => 
  prev.title === next.title && 
  prev.posterPath === next.posterPath &&
  prev.size === next.size
);


