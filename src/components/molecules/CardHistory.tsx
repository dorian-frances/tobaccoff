import { View, ViewStyle } from 'react-native';
import { Card } from 'react-native-paper';
import React from 'react';
import { FontsEnum } from '../../assets/fonts/fonts.enum';

type CardHistoryProps = {
  style: ViewStyle;
  title: string;
  subtitle: string;
  left: () => React.ReactNode | undefined;
  mode?: 'elevated' | 'outlined';
};

const CardHistory = ({
  style,
  title,
  subtitle,
  left,
  mode = 'elevated',
}: CardHistoryProps) => {
  return (
    <Card mode={mode} style={style}>
      <Card.Title
        title={title}
        subtitle={subtitle}
        left={left}
        titleStyle={{ fontFamily: FontsEnum.MEDIUM }}
        subtitleStyle={{ fontFamily: FontsEnum.MEDIUM }}
      />
    </Card>
  );
};

export default CardHistory;
