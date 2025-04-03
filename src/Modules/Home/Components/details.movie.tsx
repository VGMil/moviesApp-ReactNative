import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFetch } from '../../../Core/Hooks/useFetch';
import { API_CONSTANTS, detailsApiUrl } from '../../../Core/Utils/constants/api.constants';
import { detailsMovies } from '../../../Core/Utils/types/movie.type';

interface MovieDetailsProps {
  movie:number;
}

export const MovieDetails: React.FC<MovieDetailsProps> = ({movie}) => {
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState<detailsMovies>();
    const { data: dataDetails, error: ErrorDetails } = useFetch<detailsMovies>(
        detailsApiUrl(movie),
        setLoading
    );
    
    React.useEffect(() => {
        if (dataDetails) {
            setDetails(dataDetails);
        }
        if (ErrorDetails) {
          console.error('Fetch error:', ErrorDetails);
          setLoading(false);
        }
      }, [ErrorDetails])
    
const renderStars = () => {
  const stars = [];
  const rating = details?.vote_average || 0;
  const fullStars = Math.floor(rating / 2);
  const hasHalfStar = (rating / 2) % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<Ionicons key={i} name="star" size={20} color="#FFD700" />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<Ionicons key={i} name="star-half" size={20} color="#FFD700" />);
    } else {
      stars.push(<Ionicons key={i} name="star-outline" size={20} color="#FFD700" />);
    }
  }
  return stars;
};

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <View style={styles.stars}>{renderStars()}</View>
        <Text style={styles.ratingText}>{Math.floor(details?.vote_average || 0)}/10</Text>
      </View>

      <View style={styles.synopsisContainer}>
        <Text style={styles.sectionTitle}>Synopsis</Text>
        <Text style={styles.synopsisText}>{details?.overview}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Ionicons name="eye-outline" size={20} color="#666" />
          <Text style={styles.infoText}>{details?.views} views</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="calendar-outline" size={20} color="#666" />
          <Text style={styles.infoText}>{details?.releaseDate}</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="time-outline" size={20} color="#666" />
          <Text style={styles.infoText}>{details?.duration}</Text>
        </View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  stars: {
    flexDirection: 'row',
    marginRight: 10,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  synopsisContainer: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  synopsisText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#666',
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genreTag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
  },
  genreText: {
    fontSize: 12,
    color: '#666',
  },
});
