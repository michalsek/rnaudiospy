import React, { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';

const Row: React.FC<PropsWithChildren> = ({ children }) => {
  return <View style={styles.row}>{children}</View>;
};

export default Row;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
});
