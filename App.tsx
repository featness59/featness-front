import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import React from 'react';
import { theme }  from './components/App.style'

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PaperProvider theme={theme}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </PaperProvider>
    );
  };
};

export default App;