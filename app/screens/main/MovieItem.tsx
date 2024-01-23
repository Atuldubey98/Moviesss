import {Image, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../../types/Movies';
import Vote from './Vote';
export default function MovieItem({movie}: {movie: Movie}) {
  const uri = `https://image.tmdb.org/t/p/original/${
    movie.backdrop_path || movie.poster_path
  }`;
  
  return (
    <View style={styles.movieItem}>
      <Image
        height={300}
        source={{
          uri,
        }}
      />
      <View style={styles.movieAttributes}>
        <View style={styles.movieDetails}>
          <Vote vote_average={movie.vote_average} />
          <Text>{movie.release_date}</Text>
        </View>
        <View>
          <Text style={styles.name} key={movie.id}>
            {movie.name || movie.title}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  movieItem: {
    position: 'relative',
    borderBlockColor: 'lightgray',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    marginVertical: 2,
  },
  name: {
    color: 'black',
    fontWeight: '600',
    fontSize: 18,
  },
  movieAttributes: {
    padding: 4,
    display: 'flex',
    gap: 4,
    backgroundColor: '#f3f8ff',
  },
  movieDetails: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
