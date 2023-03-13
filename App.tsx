import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import { useFonts } from 'expo-font';
import { fr, registerTranslation } from 'react-native-paper-dates';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfigurationPage from './src/components/pages/ConfigurationPage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Colors } from './src/assets/colors/colors.enum';
import { NavigationContainer } from '@react-navigation/native';
import MetricsPage from './src/components/pages/MetricsPage';

registerTranslation('fr-FR', fr);

export default function App() {
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

  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ConfigurationScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="ConfigurationScreen"
            component={ConfigurationPage}
          />
          <Stack.Screen name="MetricsScreen" component={MetricsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
