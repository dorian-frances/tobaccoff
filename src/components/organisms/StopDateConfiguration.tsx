import SectionText from '../atoms/texts/SectionText';
import { StyleSheet, View } from 'react-native';
import DatePickerButton from '../molecules/DatePickerButton';

type StopDateConfigurationProps = {};

const StopDateConfiguration = ({}: StopDateConfigurationProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionTextStyle}>
        <SectionText text={"J'ai arrêté depuis : "} />
      </View>
      <View style={styles.datePickerStyle}>
        <DatePickerButton infoText={'Sélectionnez une date'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  sectionTextStyle: {
    alignItems: 'center',
    marginBottom: 20,
  },
  datePickerStyle: {},
});

export default StopDateConfiguration;
