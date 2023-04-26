import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import { useFonts } from 'expo-font';
import { fr, registerTranslation } from 'react-native-paper-dates';
import { ConfigurationProvider } from './src/context/ConfigurationContext';
import { Router } from './src/routes/Router';

registerTranslation('fr-FR', fr);

const App = () => {
  const [fontLoaded] = useFonts({
    'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-SemiBold': require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-ExtraBold': require('./src/assets/fonts/Montserrat-ExtraBold.ttf'),
  });
  if (!fontLoaded) {
    return null;
  }

  return (
    <PaperProvider>
      <ConfigurationProvider>
        <Router />
      </ConfigurationProvider>
    </PaperProvider>
  );
};

export default App;
