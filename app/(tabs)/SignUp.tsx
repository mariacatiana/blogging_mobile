import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthForm from '../../components/AuthForm';
import api from './api';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (data: { username: string; password: string }) => {
    setLoading(true);
    try {
      const response = await api.post('/auth/register', data); // Substituir pela rota correta
      console.log('Registration successful:', response.data);

      await AsyncStorage.setItem('authToken', response.data.token);
      
      navigation.navigate('Home');
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Registration Failed', 'Please check your details and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleNavigateToLogin = () => {
    console.log('Navigating to Login');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/background.png')} 
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>Create Your Account</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#FD841F" />
        ) : (
          <AuthForm
            isLogin={false}
            onSubmit={handleSignUp}
            onRegisterPress={handleNavigateToLogin}
          />
        )}
      </View>
    </View>
  );
};

export default SignUpScreen;

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


