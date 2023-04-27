import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Dialog, Portal, TextInput as TextInputRNP } from 'react-native-paper';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';
import { ColorsEnum } from '../../../assets/colors/colors.enum';
import { fontStyles, heightPixel } from '../../../utils/font-scale.utils';
import DialogButtons from '../../molecules/DialogButtons';

type MetricsDialogAddVapeExpenseProps = {
  description: string;
  toggleDialog: () => void;
  onValidate: (value: string) => void;
  showDialog: boolean;
};

const MetricsDialogAddVapeExpense = ({
  description,
  toggleDialog,
  onValidate,
  showDialog,
}: MetricsDialogAddVapeExpenseProps) => {
  const [text, setText] = useState('');

  const replaceDotWithComa = (text: string) => {
    return text.replace(/\./g, ',');
  };

  return (
    <Portal>
      <Dialog
        visible={showDialog}
        onDismiss={toggleDialog}
        style={{ backgroundColor: ColorsEnum.WHITE }}
      >
        <Text style={styles.description}>{description}</Text>
        <Dialog.Content style={styles.headerContainer}>
          <TextInputRNP
            style={styles.textInput}
            value={text}
            onChangeText={(text) => setText(replaceDotWithComa(text))}
            keyboardType={'numeric'}
            outlineStyle={{
              backgroundColor: 'transparent',
              borderColor: 'transparent',
            }}
            contentStyle={{
              height: heightPixel(100),
            }}
            underlineColor={'transparent'}
            caretHidden={false}
            mode={'outlined'}
            autoFocus={true}
          />
          <Text style={styles.currencyText}>€</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <DialogButtons
            onCancel={() => {
              toggleDialog();
              setText('');
            }}
            onValidate={() => {
              setText('');
              onValidate(text);
            }}
          />
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  description: {
    textAlign: 'center',
    fontFamily: FontsEnum.MEDIUM,
    fontSize: fontStyles.body,
  },
  textInput: {
    fontSize: fontStyles.xxxTitle,
    fontWeight: 'bold',
  },
  currencyText: {
    fontSize: fontStyles.xTitle,
    fontFamily: FontsEnum.BOLD,
    marginTop: heightPixel(20),
    color: ColorsEnum.BLACK,
  },
});

export default MetricsDialogAddVapeExpense;
