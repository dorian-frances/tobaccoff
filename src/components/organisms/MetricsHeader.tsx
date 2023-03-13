import { StyleSheet } from 'react-native';
import InfoText from '../atoms/texts/InfoText';

type MetricsHeaderProps = {
  text: string;
};

const MetricsHeader = ({ ...props }: MetricsHeaderProps) => {
  return <InfoText text={props.text} />;
};

const styles = StyleSheet.create({});

export default MetricsHeader;
