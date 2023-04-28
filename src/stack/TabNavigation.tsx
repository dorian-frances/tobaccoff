import React from 'react';
import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabNavigationProp,
} from '@react-navigation/material-bottom-tabs';

export type TabParamList = {
  ConfigurationScreen: undefined;
  MetricsScreen: undefined;
  HistoryScreen: undefined;
};

export type ConfigurationScreenTabNavigationProp =
  MaterialBottomTabNavigationProp<TabParamList, 'ConfigurationScreen'>;

export type MetricsScreenTabNavigationProp = MaterialBottomTabNavigationProp<
  TabParamList,
  'MetricsScreen'
>;

export type HistoryScreenTabNavigationProp = MaterialBottomTabNavigationProp<
  TabParamList,
  'HistoryScreen'
>;

export const Tab = createMaterialBottomTabNavigator<TabParamList>();
