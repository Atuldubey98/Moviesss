import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getMovies} from '../../api/imdb';
import {Movie} from '../../types/Movies';
import MovieItem from './MovieItem';

export default function MovieList({url}: {url: string}) {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const loading = status === 'loading';
  useEffect(() => {
    (async () => {
      try {
        setStatus('loading');
        const {data} = await getMovies(url);
        setMovies(data.results);
        setStatus('success');
      } catch (error) {
        setStatus('error');
      }
    })();
  }, []);
  const renderItem: ListRenderItem<Movie> = ({item}) => {
    return <MovieItem movie={item} key={item.id} />;
  };
  return (
    <View>
      {loading ? (
        <View style={styles.loadingIndicatorCenter}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <SafeAreaView>
          <FlatList
            ListFooterComponent={<Text>hello</Text>}
            renderItem={renderItem}
            data={movies}
            keyExtractor={movie => movie.id.toString()}
          />
        </SafeAreaView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loadingIndicatorCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
});
