import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import { Dialog, Portal } from 'react-native-paper';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';
import {
  fontPixel,
  fontStyles,
  heightPixel,
} from '../../../utils/font-scale.utils';
import DialogButtons from '../../molecules/DialogButtons';
import { ColorsEnum } from '../../../assets/colors/colors.enum';

type MetricsDialogAddCigaretteProps = {
  showDialog: boolean;
  toggleDialog: () => void;
  onValidate: (value: number) => void;
  dialogTitle: string;
  sliderText: string;
  minimumSlider: number;
  maximumSlider: number;
  stepSlider: number;
  defaultValue: number;
};

const MetricsDialogAddCigarette = ({
  showDialog,
  toggleDialog,
  onValidate,
  sliderText,
  minimumSlider,
  maximumSlider,
  stepSlider,
  defaultValue,
}: MetricsDialogAddCigaretteProps) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <Portal>
      <Dialog
        visible={showDialog}
        onDismiss={toggleDialog}
        style={{ backgroundColor: ColorsEnum.WHITE }}
      >
        <Dialog.Content>
          <Text style={styles.description}>{sliderText}</Text>
          <Text style={styles.cigaretteAmount}>{value}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Slider
            containerStyle={{
              width: '100%',
            }}
            thumbTintColor={ColorsEnum.PRIMARY_20}
            trackStyle={{
              backgroundColor: ColorsEnum.PRIMARY_92,
            }}
            value={value}
            onValueChange={(updatedValue) => setValue(updatedValue[0])}
            minimumValue={minimumSlider}
            maximumValue={maximumSlider}
            step={stepSlider}
          />
        </Dialog.Actions>
        <Dialog.Actions>
          <DialogButtons
            onCancel={toggleDialog}
            onValidate={() => onValidate(value)}
          />
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  headerContainer: {},
  description: {
    textAlign: 'center',
    fontFamily: FontsEnum.MEDIUM,
    fontSize: fontStyles.body,
  },
  cigaretteAmount: {
    textAlign: 'center',
    fontFamily: FontsEnum.BOLD,
    fontSize: fontStyles.xTitle,
    marginTop: heightPixel(10),
    color: ColorsEnum.BLACK,
  },
  cancelButton: {},
});

export default MetricsDialogAddCigarette;
