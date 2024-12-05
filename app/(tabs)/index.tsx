import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import Header from '../../components/Header';
import Search from '@/components/Search';
import Category from '@/components/Category';
import PostPage from '@/components/PostPage';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Profile: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList, 'Home'>;
};

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

export default function HomeScreen() {
  const categoryColors = {
    News: '#4A148C',
    Community: '#8B0000',
    Learning: '#34495E',
    Culture: '#A52A2A',
    Sports: '#216953',
    'Student Spotlights': '#AE650C',
    'Career and Future': '#C2185B',
    'Technology and Innovation': '#1C78D2',
    'Health and Well-being': '#58830A',
  };

  const tags = Object.keys(categoryColors);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<Post[]>([]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
        <View style={styles.searchContainer}>
          <Search
            onCategorySelect={(category: string | null) => setSelectedCategory(category)}
            onSearch={(results: Post[]) => setSearchResults(results)}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.categoryContainer}>
          <Category
            tags={tags}
            selectedCategory={selectedCategory}
            onCategorySelect={(category) => setSelectedCategory(category)}
            categoryColors={categoryColors}
          />
        </View>

        <PostPage selectedCategory={selectedCategory} post={searchResults} />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  headerContainer: {
    position: 'relative',
  },
  searchContainer: {
    position: 'absolute',
    top: '80%',
    left: 20,
    right: 20,
    zIndex: 10,
    alignItems: 'center',
  },
  categoryContainer: {    
    paddingHorizontal: 2,
  },
  
  content: { 
    marginTop: 28,   
    paddingBottom: 16,
  },
});













