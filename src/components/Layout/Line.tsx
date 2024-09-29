import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Color } from '../../styles';

const LineVertical: React.FC = () => <View style={styles.vertical} />;

const LineHorizontal: React.FC = () => <View style={styles.horizontal} />;

export default {
  Vertical: LineVertical,
  Horizontal: LineHorizontal,
};

const styles = StyleSheet.create({
  vertical: {
    width: 1,
    height: '100%',
    backgroundColor: Color.border,
  },
  horizontal: {
    height: 1,
    width: '100%',
    backgroundColor: Color.border,
  },
});
