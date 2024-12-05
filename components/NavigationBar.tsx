import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Notifications: undefined; 
};

const NavigationBar: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigation = (routeName: keyof RootStackParamList) => {
    try {
      console.log(`Navigating to ${routeName}`);
      navigation.navigate(routeName);
    } catch (error) {
      console.error(`Error navigating to ${routeName}:`, error);
    }
  };

  return (
    <View style={styles.navbarContainer}>
      {/* Ícone de Home */}
      <TouchableOpacity
        style={styles.navbarButton}
        onPress={() => handleNavigation('Home')}
      >
        <Icon name="home" size={24} color="#FD841F" />
      </TouchableOpacity>

      {/* Ícone de Perfil */}
      <TouchableOpacity
        style={styles.navbarButton}
        onPress={() => handleNavigation('Profile')}
      >
        <Icon name="user" size={24} color="#FD841F" />
      </TouchableOpacity>

      {/* Ícone de Notificação */}
      <TouchableOpacity
        style={styles.navbarButton}
        onPress={() => {
          console.log('Notifications clicked');
        }}
      >
        <Icon name="bell" size={24} color="#FD841F" />
      </TouchableOpacity>

      {/* Ícone de Menu Hambúrguer */}
      <TouchableOpacity
        style={styles.navbarButton}
        onPress={() => {
          console.log('Menu opened');
        }}
      >
        <Icon name="bars" size={24} color="#FD841F" />
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(6, 9, 25, 0.9)',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  navbarButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});






