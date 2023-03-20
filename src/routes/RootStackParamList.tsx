import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  ConfigurationScreen: undefined;
  MetricsScreen: undefined;
};

export type ConfigurationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ConfigurationScreen'
>;

export type MetricsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MetricsScreen'
>;
