import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import { useFonts } from 'expo-font';
import { fr, registerTranslation } from 'react-native-paper-dates';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfigurationPage from './src/components/pages/ConfigurationPage';
import { NavigationContainer } from '@react-navigation/native';
import MetricsPage from './src/components/pages/MetricsPage';
import { RootStackParamList } from './src/routes/RootStackParamList';

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

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MetricsScreen"
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
};

export default App;
