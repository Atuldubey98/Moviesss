import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem, Text, View} from 'react-native';
import {getMovies} from '../../api/imdb';
import {Movie} from '../../types/Categories';
import MovieItem from './MovieItem';

export default function MovieList({url}: {url: string}) {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

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
      <FlatList renderItem={renderItem} data={movies} />
    </View>
  );
}
