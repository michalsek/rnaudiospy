import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { exampleKickWeb } from './utils/exampleData';
import { Layout, Toolbar } from './components';
import FreqTimeChart from './FreqTimeChart';
import Spectogram from './Spectogram';
import { Color } from './styles';

const AppContent: React.FC = () => (
  <View style={styles.container}>
    <Toolbar />
    <View style={styles.content}>
      <Layout.Row>
        <Layout.Box />
        <Layout.Line.Vertical />
        <Layout.Box>
          <FreqTimeChart data={exampleKickWeb} />
        </Layout.Box>
      </Layout.Row>
      <Layout.Line.Horizontal />
      <Layout.Row>
        <Layout.Box>
          <Spectogram data={exampleKickWeb} />
        </Layout.Box>
        <Layout.Line.Vertical />
        <Layout.Box />
      </Layout.Row>
    </View>
  </View>
);

const App: React.FC = () => (
  <SafeAreaProvider>
    <GestureHandlerRootView style={styles.container}>
      <AppContent />
    </GestureHandlerRootView>
  </SafeAreaProvider>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.bgDark,
  },
  content: {
    flex: 1,
  },
});
