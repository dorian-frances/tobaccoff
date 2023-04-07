import React from 'react';
import InfoText, { InfoTextProps } from '../atoms/texts/InfoText';

type MetricsHeaderProps = {
  infoTextProps: InfoTextProps;
};

const MetricsHeader = ({ infoTextProps }: MetricsHeaderProps) => {
  return <InfoText {...infoTextProps} />;
};

export default MetricsHeader;
