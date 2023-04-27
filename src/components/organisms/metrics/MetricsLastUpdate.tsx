import React from 'react';
import TextInfo from '../../atoms/texts/TextInfo';
import moment from 'moment';
import 'moment/locale/fr';

type MetricsLastUpdateProps = {
  lastUpdateDate: Date;
};
const MetricsLastUpdate = ({ lastUpdateDate }: MetricsLastUpdateProps) => {
  moment.locale('fr');
  return (
    <TextInfo
      text={`Données mises à jour ${moment(lastUpdateDate).fromNow()}`}
      textAlign={'center'}
    />
  );
};

export default MetricsLastUpdate;
