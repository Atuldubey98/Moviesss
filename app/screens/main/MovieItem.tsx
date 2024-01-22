import {StyleSheet, Text, View} from 'react-native';
import {Movie} from '../../types/Categories';

export default function MovieItem({movie}: {movie: Movie}) {
  return (
    <View style={styles.movieItem}>
      <Text key={movie.id}>{movie.name || movie.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  movieItem: {},
});
