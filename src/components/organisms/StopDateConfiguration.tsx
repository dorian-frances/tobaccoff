import SectionText from '../atoms/texts/SectionText';
import { StyleSheet, View } from 'react-native';
import DatePickerButton from '../molecules/DatePickerButton';

type StopDateConfigurationProps = {
  setStopDate: (stopDate: Date) => void;
};

const StopDateConfiguration = ({ setStopDate }: StopDateConfigurationProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionTextStyle}>
        <SectionText text={"J'ai arrêté depuis : "} fontSize={22} />
      </View>
      <View style={styles.datePickerStyle}>
        <DatePickerButton
          infoText={'Sélectionnez une date'}
          setStopDate={(stopDate: Date) => setStopDate(stopDate)}
        />
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
