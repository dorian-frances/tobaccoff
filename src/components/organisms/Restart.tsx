import { View } from 'react-native';
import CircleButton from '../atoms/buttons/CircleButton';
import SectionText from '../atoms/texts/SectionText';

type RestartProps = {};

const Restart = ({}: RestartProps) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <View>
        <CircleButton />
      </View>
      <View style={{ marginTop: 10 }}>
        <SectionText text={'Redémarrer le compteur'} fontSize={12} />
      </View>
    </View>
  );
};

export default Restart;
