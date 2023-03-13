import { Button } from 'react-native-paper';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';
import { Colors } from '../../../assets/colors/colors.enum';

type ButtonComponentProps = {
  text: string;
  fontFamily: string;
  mode: 'elevated' | 'outlined';
  onPress: any;
  buttonColor?: string;
};

const ClassicButton = ({
  text = 'Lorem Ipsum',
  fontFamily = FontsEnum.MEDIUM,
  mode = 'elevated',
  buttonColor = Colors.PRIMARY_COLOR_BUTTON,
  onPress = () => console.log('Button pressed !'),
}: ButtonComponentProps) => {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      labelStyle={{ fontFamily: fontFamily, color: 'black', fontSize: 20 }}
      loading={false}
      buttonColor={buttonColor}
      contentStyle={{ paddingTop: 5, height: 45 }}
    >
      {text}
    </Button>
  );
};

export default ClassicButton;
