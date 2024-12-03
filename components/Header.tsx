import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerContainer}>     
      <View style={styles.bannerContainer}>
        <Image
          source={require('@/assets/images/background.png')}
          style={styles.bannerImage}
        />
        <View style={styles.overlay}>         
        </View>
      </View>
    </View>
  );
}

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
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


