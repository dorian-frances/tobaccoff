import { CigaretteType, Configuration } from '../model/configuration.model';
import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type ConfigurationContextData = {
  configurationData: Configuration | null;
  loading: boolean;
  removeConfiguration(): Promise<void>;
  saveConfiguration(
    stopDate: Date,
    cigaretteType: CigaretteType,
    cigaretteAmount: string
  ): Promise<void>;
};

export const ConfigurationContext = createContext<ConfigurationContextData>(
  {} as ConfigurationContextData
);

type ConfigurationProviderProps = {
  children: React.ReactNode;
};

export const ConfigurationProvider: React.FC<ConfigurationProviderProps> = ({
  children,
}) => {
  const [configurationData, setConfigurationData] =
    useState<Configuration | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConfiguration();
  }, []);

  const fetchConfiguration = async (): Promise<void> => {
    try {
      const configurationDataSerialized = await AsyncStorage.getItem(
        '@configuration'
      );
      if (configurationDataSerialized) {
        const _configurationData = JSON.parse(
          configurationDataSerialized
        ) as Configuration;
        setConfigurationData(_configurationData);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const saveConfiguration = async (
    stopDate: Date,
    cigaretteType: CigaretteType,
    cigaretteAmount: string
  ) => {
    try {
      stopDate.setUTCHours(0, 0, 0);
      const newConfiguration: Configuration = new Configuration(
        stopDate.toISOString(),
        cigaretteType,
        cigaretteAmount
      );

      await AsyncStorage.setItem(
        '@configuration',
        JSON.stringify(newConfiguration)
      );
      setConfigurationData(newConfiguration);
    } catch (error) {
      console.log(
        `Error while saving @configuration with stopDate ${stopDate}, cigaretteType ${cigaretteType} and cigaretteAmount ${cigaretteAmount}`
      );
    }
  };

  const removeConfiguration = async () => {
    await AsyncStorage.clear();
    setConfigurationData(null);
  };

  return (
    <ConfigurationContext.Provider
      value={{
        configurationData,
        loading,
        removeConfiguration,
        saveConfiguration,
      }}
    >
      {children}
    </ConfigurationContext.Provider>
  );
};
