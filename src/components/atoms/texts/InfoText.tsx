import { Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

type InfoTextProps = {
  text: string;
};

const InfoText = ({ text = 'Lorem Ipsum' }: InfoTextProps) => {
  return <Text style={styles.textStyle}>{text}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
  },
});

export default InfoText;
