import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: (data: { username: string; password: string }) => void; // Nova propriedade
  onRegisterPress: () => void; // Nova propriedade
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onSubmit, onRegisterPress }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      onSubmit({ username, password }); // Chamada da função passada como prop
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={[styles.button, isLoading && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
        )}
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}
      <Text style={styles.switchText}>
        {isLogin ? (
          <>
            Don't have an account?{' '}
            <Text style={styles.link} onPress={onRegisterPress}>
              Sign up
            </Text>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <Text style={styles.link} onPress={onRegisterPress}>
              Login
            </Text>
          </>
        )}
      </Text>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  button: {
    padding: 10,
    backgroundColor: '#FD841F',
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  switchText: {
    marginTop: 15,
    textAlign: 'center',
  },
  link: {
    color: '#FD841F',
    textDecorationLine: 'underline',
  },
});








