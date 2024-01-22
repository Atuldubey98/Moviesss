import {Text, View} from 'react-native';
import CategoryList from './CategoryList';
import SearchQuery from './SearchQuery';
import MovieList from './MovieList';

export default function MainScreen() {
  return (
    <View>
      <CategoryList />
      <SearchQuery />
      <MovieList url="/trending/all/week?language=en-US" />
    </View>
  );
}
