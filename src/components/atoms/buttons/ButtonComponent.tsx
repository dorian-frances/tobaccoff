import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

type ButtonComponentProps = {
  text: string;
  mode: 'elevated' | 'outlined';
  buttonColor?: string;
  onPress: any;
};

const ButtonComponent = ({
  text = 'Lorem Ipsum',
  mode = 'elevated',
  buttonColor = '#E8DEF8',
  onPress = () => console.log('Button pressed !'),
}: ButtonComponentProps) => {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      labelStyle={styles.labelStyle}
      loading={false}
      buttonColor={buttonColor}
      contentStyle={{ paddingTop: 5, height: 45 }}
    >
      {text}
    </Button>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: 'Montserrat-Bold',
    color: 'black',
    fontSize: 20,
  },
});

export default ButtonComponent;
