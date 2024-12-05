import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  PostDetails: { postId: string };
};

type PostDetailsRouteProp = RouteProp<RootStackParamList, 'PostDetails'>;

type Props = {
  route: PostDetailsRouteProp;
};

const PostDetailsScreen: React.FC<Props> = ({ route }) => {
  const { postId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post Details</Text>
      <Text style={styles.content}>Post ID: {postId}</Text>
    </View>
  );
};

export default PostDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    color: '#555',
  },
});
