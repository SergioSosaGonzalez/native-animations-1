import React from 'react';
import { View, StyleSheet, Image } from 'react-native';


const MockCard = (props) => {
    const { image: source } = props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} {...{ source }} />
      </View>
    );  
}

const styles = StyleSheet.create({
  container: {
  },
  image: {
    borderRadius: 5,
    height: 200,
    width: null,
    resizeMode: 'cover',
    margin: 8,
  },
});

export default MockCard;