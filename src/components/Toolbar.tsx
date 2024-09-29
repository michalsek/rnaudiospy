import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Color } from '../styles';

const Toolbar: React.FC = () => {
  const insets = useSafeAreaInsets();

  return <View style={[styles.container, { marginTop: insets.top }]} />;
};

export default Toolbar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Color.bgLight,
  },
});
