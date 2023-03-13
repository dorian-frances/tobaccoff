import { StyleSheet } from 'react-native';
import InfoText from '../atoms/texts/InfoText';

type MetricsHeaderProps = {};

const MetricsHeader = ({}: MetricsHeaderProps) => {
  return <InfoText text={'Depuis le 24 septembre 2021'} />;
};

const styles = StyleSheet.create({});

export default MetricsHeader;
