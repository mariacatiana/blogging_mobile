import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchProps {
  onSearch: (results: string[]) => void; 
  onCategorySelect: (category: string | null) => void; 
}

const Search: React.FC<SearchProps> = ({ onSearch, onCategorySelect }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (text: string) => {
    setSearchTerm(text);
    onSearch([text]); 
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


