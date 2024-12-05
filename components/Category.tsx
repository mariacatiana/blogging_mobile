import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CategoryProps {
  tags: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string) => void;
  categoryColors: { [key: string]: string };
}

const Category: React.FC<CategoryProps> = ({
  tags,
  selectedCategory,
  onCategorySelect,
  categoryColors,
}) => {
  return (
    <View style={styles.tagsList}>
      {tags.map((tag) => (
        <TouchableOpacity
          key={tag}
          style={[
            styles.tag,
            selectedCategory === tag && {
              backgroundColor: categoryColors[tag],
              borderColor: categoryColors[tag],
            },
          ]}
          onPress={() => onCategorySelect(tag)}
        >
          <Text
            style={[
              styles.tagText,
              selectedCategory === tag && { color: 'white' },
            ]}
          >
            {tag}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  tagsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#A7A7A7',
    margin: 4,
  },
  tagText: {
    fontSize: 14,
    color: '#A7A7A7',
  },
});
