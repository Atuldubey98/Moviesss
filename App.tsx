import { NativeRouter, Route, Routes } from 'react-router-native';
import Header from './app/Header';
import MainScreen from './app/screens/main';
import MovieScreen from './app/screens/movie';

export default function App() {
  return (
    <>
      <Header />
      <NativeRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/:movieId" element={<MovieScreen />} />
        </Routes>
      </NativeRouter>
    </>
  );
}
