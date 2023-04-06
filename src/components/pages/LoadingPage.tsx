import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator } from 'react-native-paper';

const LoadingPage = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator color={'#000'} animating={true} size="small" />
    </SafeAreaView>
  );
};

export default LoadingPage;
