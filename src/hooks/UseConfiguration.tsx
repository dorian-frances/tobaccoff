import {
  ConfigurationContext,
  ConfigurationContextData,
} from '../context/ConfigurationContext';
import { useContext } from 'react';

export function useConfiguration(): ConfigurationContextData {
  const context = useContext(ConfigurationContext);

  if (!context) {
    throw new Error(
      'useConfiguration must be used within an ConfigurationProvider'
    );
  }

  return context;
}
