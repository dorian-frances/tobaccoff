import {
  configureFonts,
  Provider as PaperProvider,
  useTheme,
} from 'react-native-paper';
import React, { createContext, useContext, useEffect, useState } from 'react';
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

  const baseFonts = {
    fontFamily: 'Montserrat-Medium',
  } as const;

  const baseVariants = configureFonts({ config: baseFonts });

  const customVariants = {
    bold: {
      ...baseVariants.bodyMedium,
      fontFamily: 'Montserrat-Bold',
    },
  } as const;

  const fonts = configureFonts({
    config: {
      ...baseFonts,
      ...customVariants,
    },
  });

  const theme = useTheme();

  if (!fontLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={{ ...theme, fonts }}>
      <ConfigurationProvider>
        <Router />
      </ConfigurationProvider>
    </PaperProvider>
  );
};

export default App;
