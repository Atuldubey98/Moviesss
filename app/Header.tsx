import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>Moviesss</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {},
  heading: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});
