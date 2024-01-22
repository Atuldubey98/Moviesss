import {SafeAreaView} from 'react-native';
import Header from './app/Header';
import {NativeRouter, Route, Routes} from 'react-router-native';
import MainScreen from './app/screens/main';
import MovieScreen from './app/screens/movie';

export default function App() {
  return (
    <SafeAreaView>
      <Header />
      <NativeRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/:movieId" element={<MovieScreen />} />
        </Routes>
      </NativeRouter>
    </SafeAreaView>
  );
}
