import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import { CURSOR_WIDTH } from './Model';

const { width } = Dimensions.get('window');

 const Cursor = () => {
    return (
      <View style={styles.container}>
        <View style={styles.cursor} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cursor: {
    top: 30,
    width: CURSOR_WIDTH,
    height: 5,
    backgroundColor: 'white',
  },
});

export default Cursor;