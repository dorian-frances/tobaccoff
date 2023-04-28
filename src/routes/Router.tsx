import React from 'react';
import { useConfiguration } from '../hooks/UseConfiguration';
import MetricsPage from '../components/pages/MetricsPage';
import ConfigurationPage from '../components/pages/ConfigurationPage';
import { NavigationContainer } from '@react-navigation/native';
import LoadingPage from '../components/pages/LoadingPage';
import { Tab } from '../stack/TabNavigation';
import HistoryPage from '../components/pages/HistoryPage';
import { ColorsEnum } from '../assets/colors/colors.enum';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { heightPixel } from '../utils/font-scale.utils';

export const Router = () => {
  const { configurationData, loading } = useConfiguration();

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{
          backgroundColor: ColorsEnum.WHITE,
          borderTopWidth: 1,
          borderTopColor: ColorsEnum.NEUTRAL_85,
        }}
        activeColor={ColorsEnum.BLACK}
        inactiveColor={ColorsEnum.NEUTRAL_75}
        shifting={!!configurationData}
        sceneAnimationEnabled={true}
        sceneAnimationType={'shifting'}
      >
        {configurationData ? (
          <Tab.Group>
            <Tab.Screen
              name={'MetricsScreen'}
              component={MetricsPage}
              options={{
                tabBarLabel: 'Accueil',
                tabBarColor: ColorsEnum.PRIMARY_95,
                tabBarIcon: ({ color }) => (
                  <Icon name={'home'} size={heightPixel(25)} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name={'HistoryScreen'}
              component={HistoryPage}
              options={{
                tabBarLabel: 'Historique',
                tabBarIcon: ({ color }) => (
                  <Icon name={'history'} size={heightPixel(25)} color={color} />
                ),
              }}
            />
          </Tab.Group>
        ) : (
          <Tab.Group>
            <Tab.Screen
              name={'ConfigurationScreen'}
              component={ConfigurationPage}
              options={{
                tabBarLabel: 'Configuration',
                tabBarIcon: ({ color }) => (
                  <Icon
                    name={'cog-outline'}
                    size={heightPixel(25)}
                    color={color}
                  />
                ),
              }}
            />
          </Tab.Group>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
