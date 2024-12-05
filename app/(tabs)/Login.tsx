import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthForm from '../../components/AuthForm';
import api from './api';

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
};

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (data: { username: string; password: string }) => {
    setLoading(true);
    try {
      const response = await api.post('/auth/login', data);
      console.log('Login successful:', response.data);

      await AsyncStorage.setItem('authToken', response.data.token);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Login Failed', 'Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleNavigateToRegister = () => {
    console.log('Navigating to SignUp');
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/background.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome Back!</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#FD841F" />
        ) : (
          <AuthForm
            isLogin={true}
            onSubmit={handleLogin}
            onRegisterPress={handleNavigateToRegister}
          />
        )}
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    maxWidth: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
});





