import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

export type StackParamList = {
  HomeScreen: undefined;
  ConfigurationScreen: undefined;
  MetricsScreen: undefined;
};

export type ConfigurationScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  'ConfigurationScreen'
>;

export type MetricsScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  'MetricsScreen'
>;

export const Stack = createNativeStackNavigator<StackParamList>();
