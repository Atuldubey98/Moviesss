import { useEffect, useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import { getCategories } from '../../api/imdb';
import { Category } from '../../types/Categories';
import CategoryItem from './CategoryItem';

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    (async () => {
      try {
        setStatus('loading');
        const {data} = await getCategories();
        setCategories(data.genres);
        setStatus('success');
      } catch (error) {
        setStatus('failure');
      }
    })();
  }, []);
  const renderItem: ListRenderItem<Category> = ({item}) => {
    return <CategoryItem item={item} key={item.id} />;
  };
  return (
    <View style={styles.categoryList}>
      <FlatList horizontal renderItem={renderItem} data={categories} />
    </View>
  );
}

const styles = StyleSheet.create({  
  categoryList: {
    paddingVertical: 5,
    borderTopWidth: 2,
    borderTopColor: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
});
