import { View } from 'react-native';
import { ColorsEnum } from '../../../assets/colors/colors.enum';

type DividerProps = {};

const Divider = ({}: DividerProps) => {
  return (
    <View
      style={{ borderWidth: 0.2, borderColor: ColorsEnum.INPUT_STROKE_COLOR }}
    />
  );
};

export default Divider;
