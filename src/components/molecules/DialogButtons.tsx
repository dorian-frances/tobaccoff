import ButtonDialog from '../atoms/buttons/DialogButton';
import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { widthPixel } from '../../utils/font-scale.utils';
import { ColorsEnum } from '../../assets/colors/colors.enum';

type DialogButtonsProps = {
  onCancel: () => void;
  onValidate: () => void;
  isWarning?: boolean;
};

const DialogButtons = ({
  onCancel,
  onValidate,
  isWarning,
}: DialogButtonsProps) => {
  return (
    <View style={styles.container}>
      <ButtonDialog
        onPress={onValidate}
        text={'OK'}
        backgroundColor={ColorsEnum.PRIMARY_20}
        textColor={ColorsEnum.WHITE}
        isWarning={isWarning}
      />
      <ButtonDialog
        onPress={onCancel}
        text={'Cancel'}
        borderColor={ColorsEnum.PRIMARY_20}
        backgroundColor={ColorsEnum.WHITE}
        textColor={ColorsEnum.PRIMARY_20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignContent: 'flex-end',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: widthPixel(150),
  },
});

export default DialogButtons;
