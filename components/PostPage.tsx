import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

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

interface PostPageProps {
  selectedCategory: string | null;
  post: Post[];
}

const categoryColors: { [key: string]: string } = {
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

const PostPage: React.FC<PostPageProps> = ({ selectedCategory, post }) => {
  const [visiblePosts, setVisiblePosts] = useState<number>(4);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
  }, []);

  const filteredPosts = selectedCategory
    ? post.filter((p) => p.category === selectedCategory)
    : post;

  const handleLoadMore = () => {
    setVisiblePosts((prevVisible) =>
      Math.min(prevVisible + 3, filteredPosts.length)
    );
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#FD841F" style={styles.loader} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Discover Our Latest Articles</Text>
      <Text style={styles.subtitle}>
        Stay updated with the latest school news and activities
      </Text>
      <Text style={styles.paragraph}>
        Students, teachers, and staff making our school a place of learning and
        growth.
      </Text>

      {filteredPosts.length > 0 ? (
        <>
          
          <View style={styles.featuredTile}>
            <Image
              source={{ uri: filteredPosts[0].cover || 'https://via.placeholder.com/600x400' }}
              style={styles.featuredImage}
              resizeMode="cover"
            />
            <View style={styles.tileContent}>
              <Text style={[styles.tileCategory, { backgroundColor: categoryColors[filteredPosts[0].category] }]}>
                {filteredPosts[0].category}
              </Text>
              <Text style={styles.tileHeadline}>{filteredPosts[0].title}</Text>
            </View>
          </View>

          
          <View style={styles.smallTilesContainer}>
            {filteredPosts.slice(1, visiblePosts).map((p) => (
              <TouchableOpacity key={p._id} style={styles.tile}>
                <Image
                  source={{ uri: p.cover || 'https://via.placeholder.com/400x300' }}
                  style={styles.tileImage}
                  resizeMode="cover"
                />
                <View style={styles.tileContent}>
                  <Text
                    style={[
                      styles.tileCategory,
                      { backgroundColor: categoryColors[p.category] },
                    ]}
                  >
                    {p.category}
                  </Text>
                  <Text style={styles.tileHeadline}>{p.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

         
          {visiblePosts < filteredPosts.length && (
            <TouchableOpacity style={styles.loadMoreButton} onPress={handleLoadMore}>
              <Text style={styles.loadMoreText}>Load more articles</Text>
            </TouchableOpacity>
          )}
        </>
      ) : (
        <Text style={styles.noPosts}>No posts available.</Text>
      )}
    </ScrollView>
  );
};

export default PostPage;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
    color: '#666',
  },
  paragraph: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  featuredTile: {
    height: 400,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  tileContent: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  tileCategory: {
    fontSize: 14,
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  tileHeadline: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
  },
  smallTilesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  tile: {
    width: '48%',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  tileImage: {
    width: '100%',
    height: 150,
  },
  loadMoreButton: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#FD841F',
    borderRadius: 8,
    alignItems: 'center',
  },
  loadMoreText: {
    color: '#fff',
    fontSize: 16,
  },
  noPosts: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});



