import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const NavigationBar: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbarContainer}>
      

      {/* Ícone de Home */}
      <TouchableOpacity
        style={styles.navbarButton}
        onPress={() => navigation.navigate('Home' as never)}>
        <Icon name="home" size={24} color="#FD841F" />
      </TouchableOpacity>      

      {/* Ícone de Perfil */}
      <TouchableOpacity
        style={styles.navbarButton}
        onPress={() => navigation.navigate('Profile' as never)}>
        <Icon name="user" size={24} color="#FD841F" />
      </TouchableOpacity>

      {/* Ícone de Notificação */}
      <TouchableOpacity
        style={styles.navbarButton}
        onPress={() => console.log('Notifications clicked')}>
        <Icon name="bell" size={24} color="#FD841F" />
      </TouchableOpacity>

      {/* Ícone de Menu Hambúrguer */}
      <TouchableOpacity
        style={styles.navbarButton}
        onPress={() => console.log('Menu opened')}>
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



