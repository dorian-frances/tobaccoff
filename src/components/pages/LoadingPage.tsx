import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator } from 'react-native-paper';
import { ColorsEnum } from '../../assets/colors/colors.enum';

const LoadingPage = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator
        color={ColorsEnum.PRIMARY_COLOR_BUTTON}
        animating={true}
        size="small"
      />
    </SafeAreaView>
  );
};

export default LoadingPage;
