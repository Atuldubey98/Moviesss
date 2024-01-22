import {StyleSheet, Text, View} from 'react-native';
import {Category} from '../../types/Categories';

export default function CategoryItem({item}: {item: Category}) {
  return (
    <View style={styles.categoryItem} key={item.id}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    color: 'black',
    fontSize : 18
  },
  categoryItem: {
    marginHorizontal: 4,
  },
});
