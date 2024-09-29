import React, { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';

import { Spacing } from '../../styles';

const Box: React.FC<PropsWithChildren> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Box;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.lg,
  },
});
