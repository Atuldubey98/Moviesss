import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Vote({vote_average}: {vote_average?: number}) {
  return (
    <View style={styles.vote}>
      <Icon name="heart" color={'red'} size={16}/>
      <Text>{vote_average}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  vote: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 2,
  },
});
