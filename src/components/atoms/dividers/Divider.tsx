import { View } from 'react-native';
import { Colors } from '../../../assets/colors/colors.enum';

type DividerProps = {};

const Divider = ({}: DividerProps) => {
  return (
    <View
      style={{ borderWidth: 0.2, borderColor: Colors.INPUT_STROKE_COLOR }}
    />
  );
};

export default Divider;
