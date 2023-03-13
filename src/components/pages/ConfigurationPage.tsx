import { StyleSheet, View } from 'react-native';
import React from 'react';
import CigaretteAmountConfiguration from '../organisms/CigaretteAmountConfiguration';
import { SafeAreaView } from 'react-native-safe-area-context';
import ClassicButton from '../atoms/buttons/ClassicButton';
import HeaderText from '../atoms/texts/HeaderText';
import StopDateConfiguration from '../organisms/StopDateConfiguration';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../assets/colors/colors.enum';
import { FontsEnum } from '../../assets/fonts/fonts.enum';

const ConfigurationPage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerStyle}>
        <HeaderText text={'Paramétrage'} />
      </View>
      <View style={styles.stopDateConfigurationStyle}>
        <StopDateConfiguration />
      </View>
      <View style={styles.cigaretteAmountConfigurationStyle}>
        <CigaretteAmountConfiguration />
      </View>
      <View style={styles.validateButtonStyle}>
        <ClassicButton
          mode={'elevated'}
          text={'Valider'}
          fontFamily={FontsEnum.BOLD}
          onPress={() => navigation.navigate('MetricsScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.VIEW_BACKGROUND_COLOR,
  },
  headerStyle: {
    marginTop: 40,
  },
  stopDateConfigurationStyle: {
    width: '80%',
    marginTop: 50,
    marginBottom: 50,
  },
  cigaretteAmountConfigurationStyle: {
    width: '80%',
  },
  validateButtonStyle: {
    width: '80%',
    marginTop: 110,
  },
});

export default ConfigurationPage;
