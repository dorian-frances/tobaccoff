import React from 'react';
import { useConfiguration } from '../hooks/UseConfiguration';
import { Stack } from '../stack/NativeStack';
import MetricsPage from '../components/pages/MetricsPage';
import ConfigurationPage from '../components/pages/ConfigurationPage';
import { NavigationContainer } from '@react-navigation/native';

export const Router = () => {
  const { configurationData, loading } = useConfiguration();

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {configurationData ? (
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'MetricsScreen'} component={MetricsPage} />
          </Stack.Group>
        ) : (
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name={'ConfigurationScreen'}
              component={ConfigurationPage}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
