import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
};

const Header: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLoginPress = () => {
    console.log('Navigating to Login');
    navigation.navigate('Login');
  };

  const handleSignUpPress = () => {
    console.log('Navigating to SignUp');
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.bannerContainer}>
        <Image
          source={require('@/assets/images/background.png')}
          style={styles.bannerImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome to Our Blog!</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.loginButton]}
              onPress={handleLoginPress}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.signUpButton]}
              onPress={handleSignUpPress}
            >
              <Text style={[styles.buttonText, styles.signUpText]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  bannerContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FD841F',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'transparent',
  },
  signUpButton: {
    backgroundColor: '#FD841F',
  },
  buttonText: {
    fontSize: 14,
    color: '#FD841F',
  },
  signUpText: {
    color: 'white',
  },
});






