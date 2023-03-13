import { StyleSheet, View } from 'react-native';
import ClassicButton from '../atoms/buttons/ClassicButton';
import { FontsEnum } from '../../assets/fonts/fonts.enum';
import { Colors } from '../../assets/colors/colors.enum';

const FailButtons = ({}) => {
  return (
    <View>
      <View style={styles.vapotButtonStyle}>
        <ClassicButton
          text={'Je vapote'}
          fontFamily={FontsEnum.MEDIUM}
          mode={'elevated'}
          onPress={() => console.log("'Je vapote' button clicked")}
        />
      </View>
      <View style={styles.crackButtonStyle}>
        <ClassicButton
          text={"J'ai craqué"}
          fontFamily={FontsEnum.MEDIUM}
          mode={'elevated'}
          onPress={() => console.log("'J'ai craqué' button clicked")}
          buttonColor={Colors.SECONDARY_COLOR_BUTTON}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vapotButtonStyle: {},
  crackButtonStyle: {
    marginTop: 30,
  },
});

export default FailButtons;
