import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import Header from '../../components/Header';
import Search from '@/components/Search';
import Category from '@/components/Category';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Profile: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: Props) {
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

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />

        {/* Barra de Pesquisa */}
        <View style={styles.searchContainer}>
          <Search
            onCategorySelect={(category: string | null) =>
              console.log('Category:', category)
            }
            onSearch={(results: string[]) =>
              console.log('Search results:', results)
            }
          />
        </View>
      </View>

      {/* Categorias */}
      <View style={styles.categoryContainer}>
        <Category
          tags={tags}
          selectedCategory={selectedCategory}
          onCategorySelect={(category) => setSelectedCategory(category)}
          categoryColors={categoryColors}
        />
      </View>

      {/* Conteúdo Principal */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Aqui você pode adicionar outros elementos ou componentes */}
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
    top: '30%',
    left: 20,
    right: 20,
    zIndex: 10,
    alignItems: 'center',
  },
  categoryContainer: {
    
    
    zIndex: 5,
  },
  content: {
    paddingTop: 16,
    paddingBottom: 16,
  },
});









