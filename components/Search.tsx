import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Post {
  _id: string;
  title: string;
  category: string;
  date: string;
  cover?: string | null;
  content: string;
  author: {
    username: string;
    avatar?: string | null;
  };
  createdAt: string;
}

interface SearchProps {
  onSearch: (results: Post[]) => void;
  onCategorySelect: (category: string | null) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch, onCategorySelect }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (text: string) => {
    setSearchTerm(text);

    const mockResults: Post[] = [
      {
        _id: '1',
        title: 'Post about React Native',
        category: 'Learning',
        date: '2024-11-01',
        cover: undefined, 
        content: 'This is a mock post about React Native.',
        author: { username: 'John Doe', avatar: undefined }, 
        createdAt: '2024-11-01T12:00:00Z',
      },
    ];

    onSearch(mockResults);
  };

  return (
    <View style={styles.searchBar}>
      <Ionicons name="search-outline" size={24} color="rgba(255, 255, 255, 0.8)" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="rgba(255, 255, 255, 0.8)"
        value={searchTerm}
        onChangeText={handleSearchChange}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FD841F',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 50,
    width: '100%',
    maxWidth: 600,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
});



